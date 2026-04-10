// 📌 Database Selection
// Topic: Switch Database
// Use: Select or create "ecommerce" database
use("ecommerce");


// 📌 Delete Single Document
// Topic: deleteOne
// Use: Delete ONE document where name = "Alice"
// Only the first matching document will be removed
// db.contacts.deleteOne({ name: "Alice" });


// 📌 Delete Multiple Documents
// Topic: deleteMany
// Use: Delete ALL orders where status = "Delivered"
db.orders.deleteMany({ status: "Delivered" });