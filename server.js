import express from 'express';
import path from 'path';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = process.env.PORT;
app.use(express.json());

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306,
    waitForConnections: true,
});

app.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        
        await pool.query('INSERT INTO users (email, password_hash, name) VALUES (?, ?, ?)', [email, hashedPassword, name]);

        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        const users = rows;
        if (!Array.isArray(users) || users.length === 0) {
        return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = users[0];
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({
        message: 'Login successful',
        user: { id: user.id, email: user.email, name: user.name },
        });
        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});