const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/stock_formula/"
      : "/stock_formula",
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    gitDescribe: {
      variableName: "GIT_DESCRIBE",
    },
  },
});
