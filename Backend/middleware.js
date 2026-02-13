const supabase = require('../config/supabase'); // Your Supabase config



const checkUser = async (req, res, next) => {
  try {
    // Get user from Supabase session
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      return res.status(401).json({ message: "No session found" });
    }
    
    // Get user profile from database
    const { data: userProfile, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();
    
    if (error || !userProfile) {
      return res.status(401).json({ message: "User profile not found" });
    }
    
    // Check if user is active and trial not expired
    if (userProfile.status !== 'active') {
      return res.status(401).json({ message: "User is not active" });
    }
    
    if (userProfile.trial_end_time && new Date(userProfile.trial_end_time) < new Date()) {
      // Update status to expired
      await supabase
        .from('user_profiles')
        .update({ status: 'expired' })
        .eq('id', session.user.id);
      
      return res.status(401).json({ message: "Trial has expired" });
    }
    
    // Attach user to request object
    req.user = {
      ...session.user,
      profile: userProfile
    };
    
    next();
  } catch (error) {
    console.error('Middleware error:', error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
// middleware/authMiddleware.js
const supabase = require('../config/supabase');

const verifyToken = async (req, res, next) => {
  try {
    // 1. Get token from Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "No token provided" });
    }
    
    const token = authHeader.split(' ')[1];
    
    // 2. Verify token with Supabase
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      return res.status(401).json({ message: "Invalid token" });
    }
    
    // 3. Get user profile from database
    const { data: userProfile } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    
    // 4. Attach user to request object
    req.user = {
      ...user,
      profile: userProfile || {}
    };
    
    next(); // Pass to next middleware/controller
  } catch (error) {
    console.error('Auth middleware error:', error);
    return res.status(500).json({ message: "Authentication failed" });
  }
};