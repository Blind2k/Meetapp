import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup
const uri = "mongodb+srv://Zuriel:NgxSFumgpjuV5rb2@cluster0.7loqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function handler(req, res) {
   if (req.method === "POST") {
      const data = req.body;
      console.log(data);
      const client = await MongoClient.connect(uri);

      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted!" });
   }
}

export default handler;
