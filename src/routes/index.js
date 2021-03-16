const { Router } = require("express");

const router = Router();

const { getUsers, createUser, getUsersById, updateUser, deleteUsers} = require("../controllers/index.controller");
var cors = require('cors')

router.get("/users", cors(), getUsers);
router.get("/users/:id", cors(), getUsersById);
router.post("/users", cors(), createUser);
router.put("/users/:id", cors(), updateUser);
router.delete("/users/:id", cors(), deleteUsers);

module.exports = router;
