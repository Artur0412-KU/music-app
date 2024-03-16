const { formSchema } = require("@music-app/common");

const validateForm = (req, res, next) => {
    const formData = req.body;
    formSchema.validate(formData)
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
