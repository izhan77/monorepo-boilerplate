import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());


app.get('/api/health', (req, res) => {
    res.status(201).send({
        status: 'success',
        message: 'Your Org API is running',
        timestamp: new Date().toISOString()
    })
});

export default app;