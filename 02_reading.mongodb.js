// 📌 Database Selection
// Topic: Switch Database
// Use: Select or create a database named "ecommerce"
use("ecommerce");


// 📌 Filtering by Field Value
// Topic: Basic Query (Equality Match)
// Use: Find products where name = "Wireless Mouse"
db.products.find({ name: "Wireless Mouse" });


// 📌 Filtering by Category
// Topic: Field-based Filtering
// Use: Get all products in Electronics category
db.products.find({ category: "Electronics" });


// 📌 Less Than Condition
// Topic: Comparison Operator ($lt)
// Use: Find products with price less than 1000
db.products.find({ price: { $lt: 1000 } });


// 📌 Greater Than Condition
// Topic: Comparison Operator ($gt)
// Use: Find products with price greater than 1000
db.products.find({ price: { $gt: 1000 } });


// 📌 OR Condition
// Topic: Logical Operator ($or)
// Use: Products in Electronics OR stock less than 50
db.products.find({
  $or: [
    { category: "Electronics" },
    { stock: { $lt: 50 } }
  ]
});


// 📌 Projection (Select Specific Fields)
// Topic: Projection
// Use: Show only name and price, hide _id
db.products.find({}, { name: 1, price: 1, _id: 0 });


// 📌 Pagination (Skip + Limit)
// Topic: Pagination
// Use: Skip 0 (start from beginning), show only 10 results
db.products.find().skip(0).limit(10);