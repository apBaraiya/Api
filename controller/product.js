const Product = require("../models/product");

const getAllproduct = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};
    if (company) {
        queryObject.company = company;
    }
    if (featured) {
        queryObject.featured = featured;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    // shorting data for ex:- http://localhost:5000/api/product?sort=-name (? - this sign after sort data insert)
    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix)
    }

    // select data for ex:- http://localhost:5000/api/product?select=name (? - this sign after sort data insert)
    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix)
    }

    // add pagination 
    // let page = Number(req.query.page) || 1;
    // let limit = Number(req.query.limit) || 3;
    // let skip = (page - 1) * limit;
    // apiData = apiData.skip(skip).limit(limit);

    const myData = await apiData;
    res.status(200).json({ myData });
}

const getAllproductTesting = async (req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({ myData, nbHits: myData.length }); // nbHits is total api data count
}

module.exports = { getAllproduct, getAllproductTesting }

//------- Note -------
//*** req.query ***
/* The req.query property allows you to access the query parameters from 
the URL of an incoming HTTP request. Query parameters are key-value pairs
included in the URL after the “?” symbol, and they are separated by “&” symbols. */