const viewRoutes = require("./viewRoutes")
const createRoutes = require("./createRoutes")
const updateRoute = require("./updateRoute")
const deleteRoute = require("./deleteRoute")
const routes = [
    viewRoutes,
    createRoutes,
    updateRoute,
    deleteRoute
]
module.exports = routes