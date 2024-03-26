const Yup = require("yup")

const formSchema = Yup.object({
    username: Yup.string()
        .required("Username required")
        .min(4, "Username too short!")
        .max(50, 'Username too long!'),
    password: Yup.string()
        .required("Password required")
        .min(4, "Password too short!")
        .max(50, 'Password too long!'),
    phoneNumber: Yup.string()
        .required('Phone number required'),
    email: Yup.string()
        .required('Email required')
})

const validateForm = (req, res, next) => {
    const formData = req.body;
    formSchema.
    validate(formData)
        .then(valid => {
            if (valid) {
                console.log('OK!');
                res.status(200).send('OK');
                next(); // Call next middleware if validation is successful
            } else {
                // If validation fails, catch block will handle it
                throw new Error('Validation failed');
            }
        })
        .catch(err => {
            console.log(err.errors);
            res.status(422).send(err.errors);
        });
};

module.exports = validateForm;
