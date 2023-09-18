import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';


const PORT=5000;
const app=express();

app.use(cors());
const corsOptions={
    origin:"*"
}

const requestEndpoint="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

app.get('/getData/:data', cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: 'GET'
    }
    const response = await fetch( `${requestEndpoint}${req.params.data}`, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});