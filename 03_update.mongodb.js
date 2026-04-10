// 📌 Database Selection
// Topic: Switch Database
// Use: Select or create "ecommerce" database
use("ecommerce");


// 📌 Update Single Document
// Topic: updateOne + $set
// Use: Find product with name "Wireless Mouse" and update its price
// Only ONE document will be updated
// db.products.updateOne(
//   { name: "Wireless Mouse" },
//   { $set: { price: 4343 } }
// );


// 📌 Update Multiple Documents
// Topic: updateMany + $set
// Use: Set price = 1000 for ALL Electronics products
// db.products.updateMany(
//   { category: "Electronics" },
//   { $set: { price: 1000 } }
// );


// 📌 Add Value to Array (Single Document)
// Topic: updateOne + $push
// Use: Add "monitor" to tags array of ONE matching document
// db.products.updateOne(
//   { category: "Electronics" },
//   { $push: { tags: "monitor" } }
// );


// 📌 Add Value to Array (Multiple Documents)
// Topic: updateMany + $push
// Use: Add "monitor" to tags array for ALL Electronics products
// db.products.updateMany(
//   { category: "Electronics" },
//   { $push: { tags: "monitor" } }
// );