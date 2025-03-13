/* - chatGBT 
25/2/2025 => I have the old operation i used to use in the past with connecting express to mongoDB, I think there is better way to handle this right?

Yes! Your current approach has a few issues that can be improved:  

1. **Reconnecting for every request** – Every time `dbConnection` is called, it creates a new connection and closes it after execution. This is inefficient.  
2. **Better Error Handling** – You're not handling errors properly in `.catch()`.  
3. **Using `MongoClient.connect()`** – Modern MongoDB drivers support `MongoClient` as a singleton, which is the recommended way.  

### **Improved Approach**
Here’s a better way to handle the MongoDB connection in **Express**:  
*/

const { MongoClient } = require('mongodb');

const _uri = "mongodb://localhost:27017"; // or your cloud connection string
const dbName = "nodejs_project";

let client;
let db;

const connectDB = async () => {
    if (!client) {
        client = new MongoClient(_uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db(dbName);
        console.log("===> Connected to MongoDB");
    }
    return db;
};

// Usage Example
(async () => {
    try {
        const database = await connectDB();
        const usersCollection = database.collection("users");
        const user = await usersCollection.findOne();
        console.log(user);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
})();

module.exports = connectDB;

/*
### **Why is this better?**
✅ **Singleton Connection** – The `client` is only created once and reused across requests.  
✅ **Better Error Handling** – Now errors are logged properly instead of being ignored.  
✅ **Asynchronous Connection Handling** – Using `await` ensures the connection is established before queries are executed.  
✅ **Cleaner API** – `connectDB()` returns the database instance, making it easier to use inside route handlers.  

### **How to Use in Express Routes**
If you're using **Express**, your route handlers can look like this:

```javascript
const express = require("express");
const connectDB = require("./db"); // Import the connection function

const app = express();

app.get("/users", async (req, res) => {
    try {
        const db = await connectDB();
        const users = await db.collection("users").find().toArray();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

This ensures that MongoDB is connected once, and every request reuses the existing connection. 🚀
 */