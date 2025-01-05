import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdOutlineAssignment } from 'react-icons/md';
import { LiaDownloadSolid } from "react-icons/lia";
import CourseIcon from "../../assets/lessons/courseIcon.svg";
import DurationIcon from "../../assets/lessons/durationIcon.svg";
import IntermediateIcon from "../../assets/lessons/intermediateIcon.svg";
import AssignmentIcon from "../../assets/lessons/assignmentIcon.svg";
import StarIcon from "../../assets/lessons/starIcon.svg";
import Profile from "../../assets/lessons/profile.svg";
import Profile2 from "../../assets/lessons/profile2.svg";
import face from "../../assets/lessons/face.svg";
import rocket from "../../assets/lessons/rocket.svg";
import smirk from "../../assets/lessons/smirking.svg";
import message from "../../assets/lessons/message.svg";
import PaymentCheckout from "../../Payment/PaymentCheckout";
import Solflare from "@solflare-wallet/sdk";



const Payment = () => {
  const [activeTab, setActiveTab] = useState("payment");
    // Course Details
    const [activeSection, setActiveSection] = useState(null);
    // Function to toggle accordion sections in the course details
    const toggleSection = (index) => {
        setActiveSection(index === activeSection ? null : index);
      
    };
     const [walletAdd, setWalletAdd] = useState("");
    
      const wallet = new Solflare();
    
    const connectWallet = async () => {
      await wallet.connect();
    };

  return (
    <div>
      <PaymentCheckout />
    </div>
  );
};

export default Payment;
