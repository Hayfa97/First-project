const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport=require("passport")
const user=require("../models/user")

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.secret;
passport.initialize()
passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    user.findOne({_id: jwt_payload._id }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    }).select("-password");
}));


module.exports=isAuth=()=>passport.authenticate('jwt',{session:false}) 