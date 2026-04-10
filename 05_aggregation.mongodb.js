// 📌 Database Selection
// Topic: Switch Database
// Use: Select or create "ecommerce" database
use("ecommerce");


// 📌 Aggregation Pipeline
// Topic: Aggregation Framework
// Use: Perform advanced operations like grouping, calculations
db.sales.aggregate([

  // 📌 Grouping Data
  // Topic: $group Stage
  // Use: Group documents based on category
  {
    $group: {

      // Group key
      // Use: Create groups based on category (Fruit, Vegetable)
      _id: "$category",

      // 📌 Calculate Total Sales
      // Topic: $sum + $multiply
      // Use: totalSales = sum(price * quantity)
      totalSales: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }

    }
  }

]);