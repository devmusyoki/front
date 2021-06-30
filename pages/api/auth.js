import { extractUser } from 'lib/api-helpers'
import nc from 'next-connect'
import { all, passport } from 'middlewares'


const handler = nc()

handler.use(all)

handler.post(passport.authenticate('local'), (req, res) => {
    res.json({ user: extractUser(req.user) })
})

handler.delete((req, res) => {
    req.logOut()
    res.statusCode(204).end()
})

export default handler
