const userModel = require("../models/userModel");


const createUser = async (req, res) => {
    try {
        let reqBody = req.body;
        const data = await userModel.create(reqBody);
        return res.status(201).json({
            status: "success",
            msg: "User created successfully",
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            msg: "Something went wrong",
            error: error
        })
    }
};

const allUsers = async (req, res) => {
    try {
        const users = await userModel.find({}).sort({ createdAt: -1 });
        return res.status(200).json({
            status: "success",
            msg: "All users fetched successfully",
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            msg: "Something went wrong",
            error: error
        });
    }
};

const singleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await userModel.findById(id);
        return res.status(200).json({
            status: "success",
            msg: "User fetched successfully",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            msg: "Something went wrong",
            error: error
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await userModel.findByIdAndDelete(id);
        return res.status(200).json({
            status: "success",
            msg: "User deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            msg: "Something went wrong",
            error: error
        });
    }
};


module.exports = { createUser, allUsers, singleUser,deleteUser }