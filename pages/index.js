import MeetupList from "../components/meetups/MeetupList";

let DUMMY_ARRAY = [
   {
      id: "m1",
      title: "Gift",
      address: "Denemark",
      image: "http://www.fubiz.net/wp-content/uploads/2020/12/strangernights.jpg",
      description: "lopes kfsaf kdsalöfad löjöl asdaööljjj k"
   },
   {
      id: "m2",
      title: "Dev",
      address: "Israel",
      image: "http://www.fubiz.net/wp-content/uploads/2020/12/strangernights2.jpg",
      description: "lopes kfsaf kdsalöfad löjöl asdaööljjj k"
   },
   {
      id: "m3",
      title: "Shmalzyer",
      address: "There",
      image: "http://www.fubiz.net/wp-content/uploads/2020/12/strangernights3.jpg",
      description: "lopes kfsaf kdsalöfad löjöl asdaööljjj k"
   },
]

const HomePage = (props) => {
   return(
      <div>            
         <MeetupList meetups={props.meetups} />
      </div>
   )
};


export async function getStaticProps(){
   return {
      props: {
         meetups: DUMMY_ARRAY,
      },
      revalidate: 10,
   }
}

export default HomePage;