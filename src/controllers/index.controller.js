const { response } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  host: "127.0.0.1",
  user: "postgres",
  password: "admin123",
  database: "usuario",
});

const getUsers = async (req, res) => {
  const response = await pool.query("SELECT * FROM users");
  res.status(200).json(response.rows);
};

const getUsersById = async (req, res) => {
  res.send("User ID"+ req.params.id);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  await pool.query("INSERT INTO users(name, email) VALUES ($1, $2)", [
    name,
    email,
  ]);
  console.log(response);
  res.json({
    message: "Used added Succesfully",
    Body: {
      user: { name, email },
    },
  });
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
};
