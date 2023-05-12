const purify = require("purify-css");
const htmlFiles = ["*.html"];
const cssFiles = ["src/*.css"];
const opts = {
  output: "index_files/hba.css",
};
purify(htmlFiles, cssFiles, opts, function (res) {
  log(res);
});
