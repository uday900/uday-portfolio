import { useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { contact } from "../data";
import naukri from '../assets/naukri-icon.png'

export default function Contact() {

  return (
    <div id="contact" className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Main Grid Container: 
          - On mobile (default), it will stack the two sections.
          - On medium screens (md) and up, it uses a 2-column grid.
          - We also add 'items-start' to align the content to the top.
        */}
        <div className="grid gap-8 md:grid-cols-2 md:items-start">

          {/* === LEFT COLUMN: Get in Touch (Social Profiles) === */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left" // Align text left on desktop
          >
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6">Also see my profiles in...</p>

            {/* Social Profiles */}
            <div className="flex justify-center md:justify-start gap-6 mb-8">
              <a href="https://leetcode.com/u/uday080/" target="_blank" rel="noopener noreferrer"
                className="text-4xl text-gray-600 hover:text-gray-800 text-center">
                <SiLeetcode />
                <p className="mt-2 text-sm text-gray-950">Leet Code</p>
              </a>

              <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank" rel="noopener noreferrer"
                className="text-4xl text-gray-600 hover:text-gray-800 text-center">
                <img src={naukri} alt="Naukri Icon" className="w-9 mx-auto"/> {/* Added mx-auto for centering */}
                <p className="mt-2 text-sm text-gray-950">Naukri</p>
              </a>
            </div>
          </motion.div>


          {/* === RIGHT COLUMN: Contact me (Details) === */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }} // Changed initial animation to come from the right
            transition={{ duration: 0.5 }}
            className="text-center md:text-left" // Align text left on desktop
          >
            <h3 className="text-2xl font-bold mb-4">Contact me</h3> {/* Made font size match "Get in Touch" */}
            <p className="mb-2">📧 {contact.email}</p>
            <p className="mb-2">📞 {contact.mobile}</p>
            <p>{contact.town}</p>
            <p>{contact.city}</p>
            <p>{contact.state} - {contact.zip}, {contact.country} </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}