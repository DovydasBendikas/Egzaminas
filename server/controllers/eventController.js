const DB_upload = require("../models/eventModel");

exports.upload = async (req, res) => {
    const { name, category, time, location } = req.body;
    let image_path;
    image_path = req.files.images[0].path;
    await DB_upload.upload([name, category, time, location, image_path]);
    res.status(200).json({ message: "Success!" });
  };

exports.getUsers = async (req, res) => {
    let getUsers = await DB_upload.getUsers();
    res.status(200).json({ getUsers });
}

exports.getEvents = async (req, res) => {
  let getEvents = await DB_upload.getEvents();
  res.status(200).json({ getEvents })
}