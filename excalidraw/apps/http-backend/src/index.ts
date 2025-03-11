import express from 'express';

const app = express();

app.use(express.json());

app.post('/signup', async(req,res) => {
    const {username, password} = req.body;

    const data = User.create({
        username: username,
        password: password
    })

} )

app.listen(3001);
