const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db/Connection');
const port = process.env.PORT || 4041;

const userRoutes = require('./routes/userRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const fetchUser = require('./routes/userRoutes');
const fetchProperty = require('./routes/propertyRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.use('/save', propertyRoutes);
app.use('/fetch', fetchUser);
app.use('/property', fetchProperty);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
