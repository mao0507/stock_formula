const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" ? "/git_message/" : "/git_message",
  transpileDependencies: ["vuetify"],
});
