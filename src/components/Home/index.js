// import Sample from "../SampleC/Sample";

import Page from "../Page";
import UserDashboard from "../UserDashboard";
import UserTickets from "../UserTickets";

const Home = () => {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      {/* <Sample /> */}
      {/* <Page /> */}
      {/* <UserTickets /> */}
      <UserDashboard />
    </div>
  );
};

export default Home;

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// export const Home = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// // export default Home;
