import express from "express";
import { multerUtil } from "../utils/fileUpload.js";


const uploadRouter = express.Router();

const {upload} = multerUtil();

uploadRouter.post('/upload', upload.single('image'), (req, res ) => {
    res.json({file: req.file, message: "Profile picture changed succesfully"});
});

export default uploadRouter