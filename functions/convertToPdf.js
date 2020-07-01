let convertapi = require("convertapi")(process.env.CONVERT_API_SECRET);
let params = {
  Url: "https://cvrolandbranten.netlify.app/",
  Filename: "CV-Roland-Branten",
  ConversionDelay: "2",
  PageRange: "1",
  ViewportWidth: "2000",
  ViewportHeight: "1000",
  PageHeight: "300",
  PageWidth: "550",
  MarginTop: "0",
  MarginRight: "0",
  MarginBottom: "0",
  MarginLeft: "0",
};
let conversionTimeout = 180;

exports.handler = function (event, context, callback) {
  convertapi
    .convert("pdf", params, "web", conversionTimeout)
    .then(function (result) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(result.response),
      });
    })
    .catch((error) => {
      console.log("error", error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
