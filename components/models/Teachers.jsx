"use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { teacherRoute, payNowRoute } from "../../utils/Apiroutes"; // Ensure you have proper routes

// const TeacherPage = () => {
//   const [teachers, setTeachers] = useState([]);

//   useEffect(() => {
//     axios
//       .get(teacherRoute)
//       .then((response) => setTeachers(response.data))
//       .catch((error) => console.error("Error fetching teacher data:", error));
//   }, []);

//   const handlePayNow = (teacher) => {
//     // Step 1: Send request to backend to create Razorpay order
//     axios
//       .post(`${payNowRoute}/order`, {
//         amount: teacher.chargePerHour * 100, // Amount in paise (Razorpay expects amount in smallest currency unit)
        
//       })
//       .then((response) => {
//         // Step 2: Get order details from the backend
//         const { order_id, amount, key_id } = response.data;

//         // Step 3: Configure Razorpay payment options
//         const options = {
//           key:"rzp_test_v9oiMGmiqaQcAN", // API key from Razorpay
//           amount: amount, // Amount in paise
//           currency: "INR",
//           order_id: order_id, // Order ID from Razorpay
//           handler: function (response) {
//             // Step 4: Handle successful payment
//             alert("Payment successful!");
//             console.log("Payment details:", response);
//             // Optionally, you can send the payment details to your backend for verification
//           },
//           prefill: {
//             name: name, // Prefill user's name
//             email: "user@example.com", // Prefill user's email (you can get this dynamically)
//             contact: "9000000000", // Prefill user's contact (you can get this dynamically)
//           },
//           theme: {
//             color: "#3399cc", // Razorpay modal theme color
//           },
//         };

//         // Step 5: Open Razorpay payment modal
//         const rzp1 = new window.Razorpay(options);
//         rzp1.open();
//       })
//       .catch((error) => console.error("Error creating order:", error));
//   };

//   return (
//     <div className="min-h-screen bg-zinc-900 text-white p-8">
//       <h1 className="text-3xl font-bold mb-8 text-center">Available Teachers for Deaf and Mute People</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {teachers.map((teacher) => (
//           <Card key={teacher._id} className="w-full max-w-sm">
//             <CardHeader className="flex flex-row items-center gap-4 pb-2">
//               <Avatar className="h-16 w-16 rounded-full overflow-hidden">
//                 <AvatarImage src={teacher.photo} alt={teacher.photo} className="object-cover w-full h-full" />
//                 <AvatarFallback>{teacher.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
//               </Avatar>

//               <div className="flex flex-col">
//                 <h2 className="text-2xl font-bold">{teacher.name}</h2>
//                 <p className="text-sm text-muted-foreground">{teacher.subject || "Teacher"}</p>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-muted-foreground mb-4">
//                 {teacher.description || "Experienced teacher specializing in accessible education."}
//               </p>
//               <div className="mb-4">
//                 <p className="text-lg font-semibold">₹{teacher.chargePerHour} / hour</p>
//               </div>
//               <div>
//                 <p className="text-sm font-semibold">Qualifications:</p>
//                 <ul className="list-disc list-inside text-sm">
//                   {teacher.qualifications.map((qual, index) => (
//                     <li key={index}>{qual}</li>
//                   ))}
//                 </ul>
//               </div>
//             </CardContent>
//             <CardFooter className="flex flex-col gap-2">
//               <Button className="w-full">Book a Session</Button>
//               <Button className="w-full" onClick={() => handlePayNow(teacher)}>
//                 Pay Now
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeacherPage;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { teacherRoute, payNowRoute } from "../../utils/Apiroutes";

const TeacherPage = () => {
  const [teachers, setTeachers] = useState([]);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up script when component unmounts
    };
  }, []);

  useEffect(() => {
    axios
      .get(teacherRoute)
      .then((response) => setTeachers(response.data))
      .catch((error) => console.error("Error fetching teacher data:", error));
  }, []);

  const handlePayNow = (teacher) => {
    axios
      .post(`${payNowRoute}/order`, {
        amount: teacher.chargePerHour * 100, // Amount in paise
        currency: "INR", // Razorpay expects the amount in subunits
      })
      .then((response) => {
        const { order_id, amount, key_id } = response.data;

        // Ensure Razorpay script is loaded before using it
        if (window.Razorpay) {
          const options = {
            key: "rzp_test_v9oiMGmiqaQcAN",
            amount: amount,
            currency: "INR",
            order_id: order_id,
            handler: function (response) {
              alert("Payment successful!");
            },
            prefill: {
              email: "webdevmatrix@example.com",
              contact: "8567345632", // Static contact, change if dynamic
            },
            theme: {
              color: "#3399cc",
            },
          };

          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        } else {
          console.error("Razorpay script not loaded");
        }
      })
      .catch((error) => console.error("Error creating order:", error));
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Teachers for Deaf and Mute People</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <Card key={teacher._id} className="w-full max-w-sm">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Avatar className="h-16 w-16 rounded-full overflow-hidden">
                <AvatarImage src={teacher.photo} alt={teacher.photo} className="object-cover w-full h-full" />
                <AvatarFallback>{teacher.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                <h2 className="text-2xl font-bold">{teacher.name}</h2>
                <p className="text-sm text-muted-foreground">{teacher.subject || "Teacher"}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {teacher.description || "Experienced teacher specializing in accessible education."}
              </p>
              <div className="mb-4">
                <p className="text-lg font-semibold">₹{teacher.chargePerHour} / hour</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Qualifications:</p>
                <ul className="list-disc list-inside text-sm">
                  {teacher.qualifications.map((qual, index) => (
                    <li key={index}>{qual}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">Book a Session</Button>
              <Button className="w-full" onClick={() => handlePayNow(teacher)}>
                Pay Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherPage;
