const con = require("./db");

exports.upload = async (params) => {
  const upload = await con.query(
    "INSERT INTO events(name, category, time, location, image) VALUES (?, ?, ?, ?, ?)",
    params
  );
  return upload;
};

exports.getUsers = async() => {
    const getUsers = await con.query(
        "SELECT * FROM users"
    );
    return getUsers
}

exports.getEvents = async() => {
  const getEvents = await con.query(
    "SELECT * FROM events"
  );
  return getEvents
}