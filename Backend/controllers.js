
const supabase = require('../config/supabase');



////////////////////// SIGN UP //////////////////////
const signUp = async (req ,res)=>{  // This is my signup controller
    const {username , email , password , whatsapp_number} = req.body;
    if(! username || !email || !password || !whatsapp_number) return res.status(401).json({message:"The user entered wrong data"})

    const {data:authUser, error:authError} = await supabase.auth.signUp({
        email,
    password,
options:{
    data:{username : username}

}})

if(authError) return res.status(401).json({message :"Error occured while signup" , authError})

const {data:userProfile , error:userProfileError} = supabase.from('user_profiles').insert({
    username:username,
    email:email,
    whatsapp_number:whatsapp_number,
    user_id:authUser.user.id,
    status:"inactive",
    plan:"none"
})

if(userProfileError) {
    const {data:userDeleted} = await supabase.admin.deleteUser(authUser.user.id)
    return res.status(401).json({message:"The error has while creating the user data" })
    
}

return res.status(200).json({message:"The user has been registered " , userProfile})
    

}
////////////////////////////////////////////////////


///////////////////////Login////////////////////
const login = async (req , res)=>{ // Completed My login Controller
    const {email , password} = req.body;
    if(!email || !password) return res.status(401).json({message:"The email or password is not founded"})

    const {data:userLogin , error:userLoginError}  =  await supabase.auth.signInWithPassword({email , password})
    if(userLoginError) return res.status(401).json({message:"Error has been occured while logingin"})
  const {data:profile} =await  supabase
.from("user_profiles")
.select("*")
.eq("user_id" , userLogin.user.id)
.single()

    return res.status(200).json({message:"The user has been logedin", data: {
        session: userLogin.session,
        user: userLogin.user,
        profile: profile
      } })

}
////////////////////////////////////////////////

/////////////Free Trail //////////////////////////
const freeTraisl = async(req , res)=>{ // Completed the free tail controller 
    const user = req.user.id;
    if(!user) return res.status(401).json({message:"The user has been not founded"})
    const trialDays = 7;
    const trailEndTime= new Date(Date.now() + trialDays * 24 * 60 * 60 * 1000);
    const {data:userData , error:userError} = await supabase.from("user_profiles").update({
        status:"active",
        plan:"freeTrail",
        startTrailTime: new Date().toISOString(),
        endTrailTime: trailEndTime.toISOString()
    })
    .eq("user_id" , user.id)
    .single( )

    if(userError) return res.status(401).json({message:"The user has been not founed " , userError})

    // Here n8n will take over the control await until and pass the response

    return res.status(200).json({message:"the user free trail is activated"})

}
/////////////////////////////////////////////////////







// Logout Controller
const signout = async (req, res) => {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      return res.status(400).json({ message: "Logout failed", error: error.message });
    }

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Helper function for n8n integration
const sendToN8n = async (data) => {
  try {
    const response = await fetch(process.env.N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.N8N_API_KEY}`
      },
      body: JSON.stringify(data)
    });
    
    return await response.json();
  } catch (error) {
    console.error('Error sending to n8n:', error);
    return null;
  }
};




const freeTrial = async (req, res) => {
  const userId = req.user.id;
  const days = 7;

  const end = new Date(Date.now() + days * 86400000);

  const { error } = await supabase
    .from("user_profiles")
    .update({
      status: "active",
      plan: "freeTrial",
      trial_start_time: new Date().toISOString(),
      trial_end_time: end.toISOString()
    })
    .eq("user_id", userId);

  if (error)
    return res.status(400).json({ error: error.message });

  res.json({ message: "Free trial activated" });
};
const getUserProfile = async (req, res) => {
  const { data, error } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("user_id", req.user.id)
    .single();

  if (error)
    return res.status(400).json({ error: error.message });

  const daysLeft = data.trial_end_time
    ? Math.max(0,
        Math.ceil(
          (new Date(data.trial_end_time) - new Date()) / 86400000
        ))
    : 0;

  res.json({
    ...data,
    days_left: daysLeft,
    is_active: data.status === "active" && daysLeft > 0
  });
};
const createProject = async (req, res) => {
  try {
    const { name } = req.body;

    const { data, error } = await supabase
      .from('projects')
      .insert({
        user_id: req.user.id,
        name
      })
      .select()
      .single();

    if (error) {
      return res.status(400).json({ message: "Project not created" });
    }

    res.status(201).json(data);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
const getProjects = async (req, res) => {
  const { data } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', req.user.id);

  res.json(data);
};
const createTask = async (req, res) => {
  try {
    const { title, project_id, deadline } = req.body;

    const { data, error } = await supabase
      .from('tasks')
      .insert({
        user_id: req.user.id,
        project_id,
        title,
        deadline
      })
      .select()
      .single();

    if (error) {
      return res.status(400).json({ message: "Task not created" });
    }

    res.status(201).json(data);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
const markTaskDone = async (req, res) => {
  const { taskId } = req.params;

  const { error } = await supabase
    .from('tasks')
    .update({ status: 'done' })
    .eq('id', taskId)
    .eq('user_id', req.user.id);

  if (error) {
    return res.status(400).json({ message: "Task update failed" });
  }

  res.json({ message: "Task marked as done" });
};
const createPayment = async (req, res) => {
  try {
    const { client_name, amount, due_date, project_id } = req.body;

    const { data, error } = await supabase
      .from('payments')
      .insert({
        user_id: req.user.id,
        project_id,
        client_name,
        amount,
        due_date
      })
      .select()
      .single();

    if (error) {
      return res.status(400).json({ message: "Payment not created" });
    }

    res.status(201).json(data);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
const markPaymentPaid = async (req, res) => {
  const { paymentId } = req.params;

  const { error } = await supabase
    .from('payments')
    .update({ status: 'paid' })
    .eq('id', paymentId)
    .eq('user_id', req.user.id);

  if (error) {
    return res.status(400).json({ message: "Payment update failed" });
  }

  res.json({ message: "Payment marked as paid" });
};
const createReminder = async (req, res) => {
  const { related_type, related_id, remind_at } = req.body;

  const { data, error } = await supabase
    .from('reminders')
    .insert({
      user_id: req.user.id,
      related_type,
      related_id,
      remind_at
    })
    .select()
    .single();

  if (error) {
    return res.status(400).json({ message: "Reminder not created" });
  }

  res.status(201).json(data);
};
const saveMessage = async (req, res) => {
  const { content, role, intent } = req.body;

  const { error } = await supabase
    .from('messages')
    .insert({
      user_id: req.user.id,
      content,
      role,
      intent
    });

  if (error) {
    return res.status(400).json({ message: "Message not saved" });
  }

  res.json({ message: "Message saved" });
};
const createConfirmation = async (req, res) => {
  const { intent, payload } = req.body;

  const { data, error } = await supabase
    .from('confirmations')
    .insert({
      user_id: req.user.id,
      intent,
      payload
    })
    .select()
    .single();

  if (error) {
    return res.status(400).json({ message: "Confirmation failed" });
  }

  res.json({
    message: "Waiting for confirmation",
    confirmation_id: data.id
  });
};
const confirmAction = async (req, res) => {
  const { confirmationId, confirm } = req.body;

  if (!confirm) {
    await supabase
      .from('confirmations')
      .delete()
      .eq('id', confirmationId)
      .eq('user_id', req.user.id);

    return res.json({ message: "Action cancelled" });
  }

  await supabase
    .from('confirmations')
    .update({ is_confirmed: true })
    .eq('id', confirmationId)
    .eq('user_id', req.user.id);

  res.json({ message: "Action confirmed" });
};


module.exports = {
  signUp,
  login,
  signout,
  freeTrail,
  saveMessages,
  saveHistory,
  getUserProfile,
};





