const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/error-handler')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use('/api/contacts', require('./routes/contact-routes'));
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`)
});
