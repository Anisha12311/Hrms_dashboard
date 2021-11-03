let ENV = "production";

let URL;

if (ENV === "development") {
  URL = "http://localhost:3000";
} else if (ENV === "production") {
  URL = "https://api.jobsterritory.com";
}


module.exports = {
  URL,
  ENV,

};
