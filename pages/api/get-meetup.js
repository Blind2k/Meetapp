import { MongoClient } from "mongodb";

// /api/get-meetup
// POST /api/get-meetup
const uri = "mongodb+srv://Zuriel:NgxSFumgpjuV5rb2@cluster0.7loqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function handler(req, res) {
   if (req.method === "POST") {
      const data = req.body;
      console.log(data);
      const client = await MongoClient.connect(uri);

      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.find({}, { _id: 1 }).toArray();

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetups gethered!" });
   }
}

export default handler;
