// import passport from "passport"
// import bcrypt from 'bcryptjs'
// import { Strategy as LocalStrategy } from 'passport-local'

// passport.deserializeUser((req, id, done) => {
//     findUserById(req.db, id).then((user) => done(null, user), (error) => done(error))
// })

// passport.serializeUser((user, done) => {
//     done(null, user._id);
// })

// passport.use(
//     new LocalStrategy(
//         { usernameField: 'email', passReqToCallback: true},
//         async (req, email, password, done) => {
//             const user = await findUserByEmail(req.db, email)
//             if (user && (await bcrypt.compare(password, user.password))) done(null, user)
//             else done(null, false, {message: 'Email or password is incorrect'})
//         }
//     )
// )

// export default passport