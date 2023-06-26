import React, {useState, useEffect} from "react";
import Header from './header';

export default function Home(eventData) {
    const[data, setData] = useState(eventData)
    console.log(eventData)


    // return (
    //     <div>
    //       <Header />
    //     {data.eventData[0].map((data, key) => (
    //       <div className="text-center">
    //         <br />
    //         <img
    //           variant="top"
    //           className="px-5"
    //           src={"http://localhost:3001/" + data.image}
    //           width="400"
    //           height="200"
    //         />
    //         <br />
    //         <h4>Pavadinimas : {data.name}</h4>
    //         <h4>Vieta : {data.location}</h4>
    //         <h4>Laikas : {data.time}</h4>
    //         <h4>Balsai : {data.votes}</h4>
    //       </div>
    //     ))}
    //   </div>
    //   )
}