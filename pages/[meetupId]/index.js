import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const meetupId = props => {
   return (
      <Fragment>
         <MeetupDetail
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
            title='First Meetup'
            address='Some Street 5, Some City'
            description='This is a first meetup' />
      </Fragment>
   );
};

export default meetupId;

// GET THE PATH AKA URL
export async function getStaticPaths() {
   return {
      fallback: false,
      paths: [
         {
            params: {
               meetupId: "m1",
            },
         },
         {
            params: {
               meetupId: "m2",
            },
         },
      ],
   };
}
// GET THE PROPS FROM THE PATH
export async function getStaticProps(context) {
   const meetupId = context.params.meetupId;

   return {
      props: {
         meetupId: {
            id: meetupId,
            // title: "Gift",
            // address: "Denemark",
            // image: "http://www.fubiz.net/wp-content/uploads/2020/12/strangernights.jpg",
            // description: "lopes kfsaf kdsalöfad löjöl asdaööljjj k",
         },
      },
      revalidate: 100,
   };
}
