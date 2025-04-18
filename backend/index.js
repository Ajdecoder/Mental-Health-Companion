const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./models/dbConnect');
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/auth', authRoutes); // <- NEW LINE

app.get('/', (req, res) => {
    res.send('Hello from the backend!')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})