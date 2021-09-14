const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@material-ui/styled-engine":
            "./node_modules/@material-ui/styled-engine-sc",
        },
      },
    },
  ],
};
