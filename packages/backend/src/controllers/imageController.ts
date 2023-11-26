import Image from '../models/imageInterfaces';

export function convertToBase64(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}

export async function saveImageToDB(
  filename: string, contentType: string, size: number, base64: string) {
  try {
    const newId = await getLatestID();
    const newImage = new Image({
      _id: newId + 1,
      filename: filename,
      contentType: contentType,
      size: size,
      uploadDate: new Date(),
      base64: base64
    });
    await newImage.save();
  } catch (e) {
    console.error(e);
    return e;
  }
  return 'success';
}

function getLatestID(): Promise<number | null> {
  return new Promise((resolve, reject) => {
    Image.findOne()
      .sort({ _id: -1 })
      .exec()
      .then(res => {
        if (res) {
          resolve(res._id);
        } else {
          resolve(null);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}
