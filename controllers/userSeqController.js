const { findAll } = require("../service/userServiceSeq");

const getUsersSeq = async (req, res) => {
    const data = await User.findAll();
    res.send(data);
};

module.exports = { getUsersSeq };