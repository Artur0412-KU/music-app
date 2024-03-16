const Yup = require('yup')

const formSchema = Yup.object({
    username: Yup.string().required("Username required")
    .min(4, "Username too short!")
    .max(50, 'Username too long!'),

    password: Yup.string().required("Password required")
    .min(4, "Password too short!")
    .max(50, 'Password too long!')
})


module.exports = {formSchema}