const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const client = new MongoClient(process.env.CONNECTIONSTRING);

async function startDb(){
    try {
        await client.connect();
        module.exports = client.db();
        const app = require('./app');
        app.listen(process.env.PORT,()=>{
            console.log("Listening on Port: ", process.env.PORT, client.db);
        });
    } catch (error) {
        console.log("DB Connection failed");
    }

};

startDb();
