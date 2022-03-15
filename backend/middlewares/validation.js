const { validationResult, check } = require("express-validator")

// check register data

exports.registerCheck = () => [
    check("fullName", "name is required").not().isEmpty(),
    check("email", "this field must be a valid mail").isEmail(),
    check("password", "password should contain at least 6 chars").isLength({ min: 6 })
]
//check login data
exports.loginCheck = () => [
    check("email", "this field must be a valid mail").isEmail(),
    check("password", "password should contain at least 6 chars").isLength({ min: 6 })
]
// check post data
exports.postCheck =()=> [
    check ("creator", "destination is required").not().isEmpty(),
    check ("details", "this duration is required").notEmpty()
]
// check comment data
exports.commentCheck=()=>[
    check ("content", "content is required").not().isEmpty()
]
// check profil data
/*exports.profilCheck =()=>[
    check("name","name is required").not().isEmpty(),
    check("image","image is required").not().isEmpty(),
    check ("phoneNumber","phoneNumber is required").not().isEmpty()
]*/

//check login data
exports.loginCheck = () => [
    check("email", "this field must be a valid mail").isEmail(),
    check("password", "password should contain at least 6 chars").isLength({ min: 6 })
]

exports.validation = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() })
    }
    next()
}