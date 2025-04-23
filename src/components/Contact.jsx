import { useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { contact } from "../data";
import naukri from '../assets/naukri-icon.png'
export default function Contact() {
  const [user_name, SetUser_name] = useState("");
  const [user_email, SetUser_email] = useState("");
  const [user_msg, SetUser_msg] = useState("");

  const [message, setMessage] = useState('');
  const [showmsg, setShowmsg] = useState(true);

  const handleClick = (e) => {
    SetUser_email("");
    SetUser_name("");
    SetUser_msg("");
    setMessage("message sent successfully");
    setShowmsg(true);
    setTimeout(() => {
      setShowmsg(false);
    }, 2000);

    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/AKfycby4EFd4oQx1LU-BP4cRbe7LL4k8uTAYWiPOeqxAerTpJFHTG_2Qmq3-RFrX71BspsCf4w/exec", {
      method: "POST",
      body: formData,
    });
    e.preventDefault();
  };
  return (
    <div id = "contact"
    className="bg-gray-100 py-12 px-6  ">
      <div className="max-w-4xl mx-auto">

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9 }}
          className="text-center">

          <h2 className="text-center text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-center mb-6">Also see my profiles in...</p>


        </motion.div>




        {/* Social Profiles */}
        <div className="flex justify-center gap-6 mb-8">
        
          <a href="https://leetcode.com/u/uday080/" target="_blank" rel="noopener noreferrer"
            className="text-4xl text-gray-600 hover:text-gray-800 text-center">
            <SiLeetcode />
            <p className="mt-2 text-sm text-gray-950">Leet Code</p>
          </a>

          <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer"
            className="text-4xl text-gray-600 hover:text-gray-800 text-center">
            <img src={naukri} alt="" className="w-9"/>
            <p className="mt-2 text-sm text-gray-950">Naukri</p>
          </a>


        </div>

        <div 
        // className="grid md:grid-cols-2 gap-8"  
        className="flex justify-center"
        >
          {/* Contact Info */}
          <motion.div

            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}

            transition={{ duration: 0.5 }}

          >
            <h3 className="text-xl font-semibold mb-4">Contact me</h3>
            <p className="mb-2">📧 {contact.email}</p>
            <p className="mb-2">📞 {contact.mobile}</p>
            <p>{contact.town}</p>
            <p>{contact.city}</p>
            <p>{contact.state} - {contact.zip}, {contact.country} </p>
          </motion.div> 
          {/* <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}

            transition={{ duration: 0.5 }}>
            <form onSubmit={(e) => handleClick(e)}>
              <input type="text" placeholder="Enter your name"
                className="input"
                value={user_name}
                onChange={(e) => SetUser_name(e.target.value)}

                required
              />
              <input type="email" placeholder="Enter your email"
                className="mt-4 input"
                value={user_email}
                onChange={(e) => SetUser_email(e.target.value)}
                required

              />
              <textarea placeholder="Enter message"
                className="mt-4 input"
                value={user_msg}
                onChange={(e) => SetUser_msg(e.target.value)}
                required></textarea>
              <button className="button-apply">
                Send Message
              </button>
            </form>
          </motion.div> */}

          {showmsg && <p className="msg-bottom">{message}</p>}
        </div>
      </div>
    </div>
  );
}
