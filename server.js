const express = require('express');
const dotenv = require('dotenv').config();

const app = express()

const PORT = process.env.PORT || 5000

app.use('/api/contacts', require('./routes/contact-routes'));
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
})
