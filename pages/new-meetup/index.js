// our-domain.com/new-meetup
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
   const router = useRouter();

   async function addMeetupHandler(enteredMeetupData) {
      try {
         const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
               "Content-Type": "application/json",
            },
         });

         const data = await response.json();

         console.log(data);

         router.push("/");
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <Fragment>
         <Head>
            <title>Add new meetapp</title>
            <meta name="Meetapp" content="Connect, meet, and get together in one place" />
         </Head>
         <NewMeetupForm onAddMeetup={addMeetupHandler} />;
      </Fragment>
   );
}

export default NewMeetupPage;
