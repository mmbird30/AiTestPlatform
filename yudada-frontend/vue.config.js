const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    define: {
      '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': 'true',
    },
  },
});
