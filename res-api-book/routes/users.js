import express from 'express';
import { getUsers, getJwt } from '/models/users.js';
const router = express.Router();

router.get('/', (req, res) => {
    getUsers((err, users) => {
        if (err) {
            throw err;
        }
        res.json(users);
    });
});

router.post('/login', (req, res) => {
    const data = req.body;
    getJwt(data, (err, user) => {
        if (err) {
            throw err;
        }
        if (user) {
            res.json(user);
        } else {
            res.status(400).send('Authentication error');
        }
    });
});



export default router;
