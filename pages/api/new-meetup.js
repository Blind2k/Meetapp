import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup
const insertMongoDBLinkHere = "";

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
