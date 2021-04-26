exports.create = (req, res) => {
    const user = req.body;
    res.json(user);
};
const { UserSchema } = require('./user.schema')
const { userModel } = require("../models")
exports.create = async (req, res) => {
    const user = req.body;
    const { error } = UserSchema.validate(user);
    if (error) {
        return res.status(400).json(error)
    }
    try {
        const createUser = await userModel.create(user);
        res.status(201).json(createUser)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: 'server error'
        })
    }
}