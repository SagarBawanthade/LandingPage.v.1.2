import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = 5000;
dotenv.config();

//MONGO DB CONNECTING
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully")
    }).catch((error) => {
        console.log(error)
    });


//Contact form Schema
const contactSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    companyName: { type: String, required: true },
    companyDomain: { type: String, required: true }
});

const Contact = new mongoose.model("Contact", contactSchema);


// Middleware
app.use(bodyParser.json());
app.use(cors());

// API to handle form submission
app.post('/submitcontactform', async (req, res) => {
    const { username, email, phone, companyName, companyDomain } = req.body;

    try {
        const newContact = new Contact({ username, email, phone, companyName, companyDomain });
        await newContact.save();

        res.status(200).json({ success: true, message: 'Successfully Submitted Contact details' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error Submiting Contact details' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
