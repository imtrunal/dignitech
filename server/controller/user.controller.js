const Authmodel = require('../model/user.model');

exports.registerdata = async (req, res) => {
    const Password = req.body.Password
    const Email = req.body.Email
    const checkmail = await Authmodel.findOne({where:{Email:Email}})
    try {
        if (checkmail == null) {
            if (Password.length == 6) {
                const data = new Authmodel({
                    Username: req.body.Username,
                    Email: req.body.Email,
                    Password: req.body.Password,
                    Phone: req.body.Phone,
                })
    
                const result = await data.save()
    
                res.status(201).json({
                    message: "USERDATA REGISTER SUCCESSFULL",
                    status: 201,
                    data: result
                })
            } else {
                res.status(406).json({
                    message: "Enter password length six",
                    status: 406
                })
            }
        } else {
            res.status(406).json({
                message:"Email Is Already Exited",
                status:406
            })
        }
     


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}

exports.Login = async (req, res) => {

    const Email = req.body.Email
    const Password = req.body.Password

    const checkmail = await Authmodel.findOne({ where: { Email: Email } })

    try {

        if (checkmail) {
            if (Password == checkmail.Password) {
                const data = new Authmodel({
                    Email: req.body.Email,
                    Password: req.body.Password
                })

                res.status(200).json({
                    message: "Login Successfull",
                    status: 200
                })
            } else {
                res.status(403).json({
                    message: "Passwored Is Not Match",
                    status: 403
                })
            }
        } else {
            res.status(403).json({
                message: "Email Is Not Exited",
                status: 403
            })
        }


    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}


exports.viewdata = async (req, res) => {
    const id = req.params.id
    const checkid = await Authmodel.findOne({ where: { id: id } })
    try {
        if (checkid) {
            const data = await Authmodel.findOne({ where: { id: id } })

            res.status(200).json({
                message: "USERDATA VIEW SUCCESSFULL",
                status: 200,
                data: data
            })
        } else {
            res.status(406).json({
                message: "USER ID NOT FOUND",
                status: 406
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "SOMETHING WENT WRONG",
            status: 500
        })
    }
}


exports.viewdatall = async (req, res) => {
    try {
        const data = await Authmodel.findAll()

        res.status(200).json({
            message: "USERDATA VIEW SUCCESSFULL",
            status: 200,
            data: data
        })

    } catch (error) {
        res.status(500).json({
            message: "SOMETHING WENT WRONG",
            status: 500
        })
    }
}

exports.deletedata = async (req, res) => {
    let id = req.params.id
    const checkid = await Authmodel.findOne({ where: { id: id } })
    try {
        if (checkid) {
            const data = await Authmodel.destroy({ where: {id} })

            res.status(200).json({
                message: "USERDATA DELETE SUCCESSFULL",
                status: 200
            })
        } else {
            res.status(406).json({
                message: "UsER ID NOT FOUND",
                status: 406
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "SOMETHING WENT WRONG",
            status: 500
        })
    }
}