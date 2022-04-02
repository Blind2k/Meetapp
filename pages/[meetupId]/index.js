import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

const meetupId = props => {
   return (
      <Fragment>
         <Head>
            <title>Meetup with meetapp</title>
            <meta name={props.meetupId.title} content={props.meetupId.description} />
         </Head>
         <MeetupDetail image={props.meetupId.image} title={props.meetupId.title} address={props.meetupId.address} description={props.meetupId.description} />
      </Fragment>
   );
};

export default meetupId;

// GET THE PATH AKA URL
export async function getStaticPaths() {
   const uri = "mongodb+srv://Zuriel:NgxSFumgpjuV5rb2@cluster0.7loqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
   const client = await MongoClient.connect(uri);
   const database = client.db();
   const colectionDatabase = database.collection("meetups");
   const meetups = await colectionDatabase.find({}, { _id: 1 }).toArray();

   client.close();
   return {
      fallback: "blocking", //AKA true. will not give 404
      paths: meetups.map(meetup => ({
         params: { meetupId: meetup._id.toString() },
      })),

      // [
      //    {
      //       params: {
      //          meetupId: "m1",
      //       },
      //    },
      //    {
      //       params: {
      //          meetupId: "m2",
      //       },
      //    },
      // ],
   };
}
// GET THE PROPS FROM THE PATH
export async function getStaticProps(context) {
   const meetupId = context.params.meetupId;
   const uri = "mongodb+srv://Zuriel:NgxSFumgpjuV5rb2@cluster0.7loqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
   const client = await MongoClient.connect(uri);
   const database = client.db();
   const colectionDatabase = database.collection("meetups");
   const selectedMeetups = await colectionDatabase.findOne({ _id: ObjectId(meetupId) });

   return {
      props: {
         meetupId: {
            id: selectedMeetups._id.toString(),
            title: selectedMeetups.title,
            image: selectedMeetups.image,
            description: selectedMeetups.description,
         },
      },
      revalidate: 100,
   };
}
