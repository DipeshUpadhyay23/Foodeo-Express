const mongoose = require('mongoose');

// Replace the password and other sensitive details as needed
const mongoURI = "mongodb+srv://upadhyaydipesh5:%23dips%40123@foodeoexpress.lsxni.mongodb.net/Foodeoexpress?retryWrites=true&w=majority"
    ;

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true // This is recommended to avoid deprecation warnings
        });
        console.log("Connected to MongoDB Atlas");
        const fetched_data = await mongoose.connection.db.collection("food-items");
        fetched_data.find({}).toArray(async function (err, data) {
            const foodCategory = await mongoose.connection.db.collection("food-category");
            foodCategory.find({}).toArray(function (err, catData) {
                if (err) console.log(err);
                else {
                    global.food_items = data;
                    global.foodCategory=catData;
                };

            })

        })
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas:", err);
    }
}

module.exports = mongoDB;
