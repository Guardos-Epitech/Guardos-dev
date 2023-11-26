import Image from "../models/imageInterfaces";

export function convertToBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

export async function saveImageToDB() {
  try {
    const newImage = new Image({
      _id: 2,
      filename: 'test',
      contentType: 'test',
      size: 1,
      uploadDate: new Date(),
      base64: 'test',
    });
    await newImage.save();
  } catch (e) {
    console.error(e);
    return e;
  }
  return 'success';
}
