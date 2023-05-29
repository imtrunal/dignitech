const express = require('express');
const app = express();
const cors = require('cors');
const sequelize = require('./database/connecting');
const port = process.env.PORT || 8000
const user = require('./model/user.model')
require('dotenv').config();
sequelize.sync()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    const id = req.body.id
    user.findAll()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            console.log(err);
        })

});

app.post("/register", (req, res) => {
    // const Email = req.body.Email
    // const checkmail = user.findOne({Email:Email}) 
    // if (checkmail == null) {
        const data = new user({
            Username: req.body.Username,
            Email: req.body.Email,
            Password: req.body.Password,
            Phone: req.body.Phone
        })
    
        const save = data.save()
        res.json(data);
    // } else {
    //     res.json({message:"email is already exists."})
    // }
   
})

app.delete( "/delete/:id",(req, res) => {
    const id  = req.params.id
    user.destroy({where:{id:id}})
    res.json("delete")
})

// router

const Authrouter = require('./routes/user.routes')
app.use('/Auth', Authrouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
