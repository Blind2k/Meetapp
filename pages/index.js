import React, { Fragment } from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";


const HomePage = props => {
   return (
      <Fragment>
         <Head>
            <title>Meetup with meetapp</title>
            <meta name="Meetapp" content="Connect, meet, and get together in one place" />
         </Head>
         <MeetupList meetups={props.meetups} />
      </Fragment>
   );
};

export async function getStaticProps() {
   try {
      const client = await MongoClient.connect("mongodb+srv://Zuriel:NgxSFumgpjuV5rb2@cluster0.7loqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
      const initialDatabase = client.db();
   
      const meetupsCollection = initialDatabase.collection("meetups");
   
      const meetups = await meetupsCollection
         .find() //GET EVERYTHING
         .toArray(); //TURN TO ARRAY
   
      client.close();
      return {
         props: {
            meetups: meetups.map(meetup => ({
               id: meetup._id.toString(),
               title: meetup.title,
               image: meetup.image,
               description: meetup.description,
            })),
         },
         revalidate: 10,
      };
      
   } catch (error) {
      console.log(error); 
   }

}

export default HomePage;
