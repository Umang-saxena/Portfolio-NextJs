import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // Upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "image",
        });
        // file has been uploaded successfully
        console.log("File is uploaded on cloudinary", response);
        return response;
    }
    catch (error) {
        fs.unlinkSync(localFilePath); // delete the locally saved temporary file
        return null;
    }
}
export { uploadOnCloudinary };