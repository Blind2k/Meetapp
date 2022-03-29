import { MongoClient } from "mongodb";
const uri = "mongodb+srv://Zuriel:iLprbzpf42e8VJJ7@cluster0.7loqa.mongodb.net/meetups?retryWrites=true&w=majority";

// /api/new-meetup
// POST /api/new-meetup

async function handler(request, res) {
   if (request.method === "POST") {
      const data = request.body;
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
