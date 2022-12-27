const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/open_a_position/"
      : "/open_a_position",
  transpileDependencies: ["vuetify"],
});
