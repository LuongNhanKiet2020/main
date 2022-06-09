const routes = require("./route");
function route(app){
    app.use("/", routes);
}
module.exports = route;