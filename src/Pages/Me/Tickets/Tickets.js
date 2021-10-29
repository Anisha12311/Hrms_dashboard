import React, { useState } from "react";
import './Tickets.scss'
import RaiseTicket from "./RaiseTicket/RaiseTicket";
import ViewOld from "./ViewOld/ViewOld";


export default function Tickets() {
  const [navClicked, setNavClicked] = useState("RaiseTicket");

  return (
    <div>
      <div className="navOptions_tit">
        <div
          className={`option ${
            navClicked === "RaiseTicket" ? "option-active" : ""
          }`}
          onClick={() => setNavClicked("RaiseTicket")}
        >
          <h3>Raise Ticket</h3>
        </div>
        <div
          className={`option ${
            navClicked === "ViewOld" ? "option-active" : ""
          }`}
          onClick={() => setNavClicked("ViewOld")}
        >
          <h3>View Old</h3>
        </div>
      </div>

      {navClicked === "RaiseTicket" && (
        // <FeedbackFormTable
        //   setOpenFeedbackForm={setOpenFeedbackForm}
        // ></FeedbackFormTable>
       <RaiseTicket></RaiseTicket>
      )}



      {navClicked === "ViewOld" && (
        // <FeedbackResponseTable
        //   setOpenResponseForm={setOpenResponseForm}
        // ></FeedbackResponseTable>
       <ViewOld></ViewOld>
      )}


    </div>
  );
}
