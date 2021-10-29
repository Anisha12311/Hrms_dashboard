let ENV = "production";

let URL;

if (ENV === "development") {
  URL = "http://localhost:3000";
} else if (ENV === "production") {
  URL = "https://job-market-node.codedeployment.tk";
}


module.exports = {
  URL,
  ENV,

};
