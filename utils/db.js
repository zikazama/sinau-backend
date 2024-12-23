module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Password",
    DB: "test_orm",
    dialect: "mysql",
    pool: {
        max: 3,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};