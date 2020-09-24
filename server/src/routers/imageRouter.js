const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

const sharp = require("sharp");
const imagePath = path.join(__dirname, "../../public/img");

const {
  downloadGoogleStorageFile,
} = require("./../utils/googleStorageFunctions");

router.get("/images/:width/:height/:photo", async (req, res) => {
  const photo = req.params.photo;
  let width = parseFloat(req.params.width);
  if (width > 4096) width = 4096;

  let height = parseFloat(req.params.height);
  if (height > 3112) height = 3112;

  if (width === 0) {
    width = null;
  }
  if (height === 0) {
    height = null;
  }

  try {
    if (fs.existsSync(`${imagePath}/${photo}`)) {
      let image = "";

      image = await sharp(`${imagePath}/${photo}`)
        .resize({ width, height })
        .png({ quality: 70 })
        .toBuffer();
      res.set("Content-Type", "image/png");
      res.send(image);
    } else {
      await downloadGoogleStorageFile(photo);
      let image = "";

      image = await sharp(`${imagePath}/${photo}`)
        .resize({ width, height })
        .png({ quality: 70 })
        .toBuffer();
      res.set("Content-Type", "image/png");
      res.send(image);
    }
  } catch (error) {
    console.log(error);
    const image = await sharp(`${imagePath}/placeholder.png`)
      .resize({ width, height })
      .jpeg({ quality: 60 })
      .toBuffer();
    res.set("Content-Type", "image/png");
    res.send(image);
  }
});

export default router;
