const sensitiveFields = ['email', 'emailVerified', 'password']
export function extractUser(user) {
    if (!user) return nill
    const obj = {}
    Object.keys(user).forEach((key) => {
        if (!sensitiveFields.includes(key)) obj[key] = user[key]
    })
    return obj
}