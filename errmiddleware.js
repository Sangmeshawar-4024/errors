const express = require('express');

const app = express();

const port = 3002;

app.get('/', (req, res) => {
    throw new Error('Something went wrong!');
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json('Something broke!');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})