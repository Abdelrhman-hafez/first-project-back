const mongoose = require('mongoose');
require('dotenv').config();

const connDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://abdohafez:197447915@cluster0.mhfqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    } catch (error) {
        console.error(error);
    }
}

module.exports = { connDB };