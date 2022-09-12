const { app } = require("./app");

//utils

const { db } = require("./util/database");

const startServer = async () => {
  try {
    await db.authenticate();

    //iniciamos los modelos de relacion
    // initModels();

    await db.sync();

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
      console.log(`Express is running on Port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
