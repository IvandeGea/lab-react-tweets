import React from "react";
import ProfileImage from "./ProfileImage";
import User from "./User"
import Timestamp from "./Timestamp"
import Message from "./Message"
import Actions from "./Actions"



// FINAL VERSION

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">

        <div className="top">
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />
        <Actions />

      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}
// function Tweet(props) {

//   let { user, timestamp, message } = props.tweet
//   return (
//     <div className="tweet">


//       <ProfileImage image={user.image} />

//       <div className="body">
//         <div className="top">
//           <User datosUser={user} />

//           <Timestamp timestamp={timestamp} />
//         </div>

//         <Message message={message} />

//         <Actions />

//       </div>




//     </div>
//   );
// }

export default Tweet;
