// import MongoStore from "connect-mongo";
// import session from "express-session";

// export default function sessionMiddleware(req, res, next) {
//     const mongoStore = new MongoStore({
//         client: req.dbClient,
//         stringify: false
//     })

//     return session({
//         secret: process.env.SESSION_SECRET,
//         resave: false,
//         saveUninitialized: false,
//         store: mongoStore
//     })(req, res, next)
// }