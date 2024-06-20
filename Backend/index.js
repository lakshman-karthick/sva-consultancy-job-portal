import express from 'express';
import cors from 'cors';
import list from './api/route.js';
import multer from 'multer';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Append the file extension
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        const filetypes = /pdf/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: PDF files only!');
        }
    }
});

// Make the uploads directory accessible
app.use('/uploads', express.static('uploads'));

app.use("/api/v1/svajobportal", list(upload));

app.get("*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
});

export default app;
