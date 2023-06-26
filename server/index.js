const express = require('express');
const mysql = require('mysql')
const app = express();
const port = 3001;
const cors = require('cors')
const uploadRoutes = require("./routes/uploadRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(uploadRoutes);
app.use('/images', express.static(__dirname +'/images'))

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"Renginiai"
});

app.post('/register', (req, res) => {

    const Username = req.body.Username
    const Password = req.body.Password


    db.query(
        "INSERT INTO Users (Username, Password) VALUES (?,?)",
        [Username, Password],
        (err, result) => {
            console.log(err);
        }
    );
});

app.post('/login', (req, res) => {

    const Username = req.body.Username
    const Password = req.body.Password


    db.query(
        "SELECT * FROM Users WHERE Username = ? AND Password = ?",
        [Username, Password],
        (err, result) => {
            if(err) {
                res.send({err: err})
            }

                if(result.length > 0) {
                    res.send(result)
                }
        }
    );
});

app.get('/getUsers', (req, res) => {
    db.query(
        "SELECT * FROM Users WHERE username = 'test'",
        (err, result) => {
            if(err) {
                res.send(err)
            } else {
                console.log(result)
                res.send(result)
            }
        }
    )
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});