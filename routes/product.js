const express = require("express");
const router = express.Router();

const { getAllproduct, getAllproductTesting } = require("../controller/product")

    router.route("/").get(getAllproduct); // getAllproduct is function (create function)
router.route("/testing").get(getAllproductTesting); // getAllproductTesting is function (create function)

module.exports = router;