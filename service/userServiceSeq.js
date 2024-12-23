const db = require("../utils/sequelize");
const Config = require("../models/userModelSeq")(db.sequelize, db.Sequelize);

exports.findAll = async () => {
  return await db.sequelize.query("SELECT * FROM `user`", {
    type: db.sequelize.QueryTypes.SELECT,
    model: User,
    mapToModel: true,
    raw: true,
  });
};