import React, { useState } from "react";
import  search  from "../../asserts/icons/search.svg";
import "./Message.scss";

import voice from '../../asserts/icons/voice.png'
import marian from "../../asserts/images/marina.png";
import smile from '../../asserts/icons/smile1.png'
import send from '../../asserts/icons/send1.png'
import attach from '../../asserts/icons/attach.png'
import U from '../../asserts/icons/cross.png'
import B from '../../asserts/icons/bold.png'
import I from '../../asserts/icons/itlia.png'
import undo from '../../asserts/icons/undo.png'
import star from '../../asserts/icons/star.png'
import redo from '../../asserts/icons/redo.png'
import text from '../../asserts/icons/text.png'
import dots from '../../asserts/icons/dots.png'
import vector from '../../asserts/icons/vector.png'
import downloadArrow from '../../asserts/icons/downloadArrow.png'
import EmailTemplate from "../../components/EmailTemplates/EmailTemplate";
import arrows from '../../asserts/icons/arrows.png'
import './EmailCompose/compose.css';
import download from '../../asserts/icons/download.png'
import MessageCard from "../../components/MessageCard/MessageCard";





const customStyles = {
  content: {
    minWidth: 'auto',
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

  },
};

const Message = () => {

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  const [modalIsOpen3, setIsOpen3] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function openModal2() {
    setIsOpen2(true);

  }
  function openModal3() {
    setIsOpen3(true);

  }


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#white';
  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  function closeModal3() {
    setIsOpen3(false);
  }


  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }



  const handleBatch = () => {
    const dropdown = document.querySelector(".email-batch-action");

    dropdown.classList.toggle("email-batch-visible");
  };

  const [showTemplate, setShowTemplate] = useState(false)


  return (
    <div className = "dashboard-container">
    <div className="email-container">

      <div className="email-left">

        {showTemplate ? (
          <>
            <div style={{ display: "flex", justifyContent: "start", marginBottom: "2rem" }}>

              <img src={downloadArrow} onClick={() => setShowTemplate(false)} style={{ marginRight: "3rem" }}></img><h1>Email Template</h1>
            </div>
          </>
        ) :
          <div className="side-heading">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1>Chats</h1>
            
              <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", cursor: "pointer" }}>


              
                {/* <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <div className="headingEmail bg-primary"><h1 style={{ color: 'white' }}>Email Candidates</h1></div>
                  <div className="closebtn bg-primary"><CancelIcon onClick={closeModal} style={{ fontSize: '45px', marginTop: '16px', color: 'white', marginLeft: '25px' }} /></div>
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>

                  <form className="formofEmailCandidates">
                    <div class="form-group ">
                      <label style={{ fontWeight: 'light', }} for="exampleInputEmail1">Choose Requirement</label>

                      <p style={{ fontWeight: 'light', paddingRight: '30px', marginTop: '20px' }}>Senior Analyst <i style={{ fontWeight: 'bold', paddingLeft: '15px', color: 'dodgerblue' }} class="fas fa-check-circle"></i> </p>
                    </div>
                    <h4 style={{ marginTop: '30px' }}>Subject</h4>
                    <div style={{ marginTop: '24px' }} className="subjectCheckBox d-flex">

                      <div className="senior">
                        <p style={{ marginRight: '30px' }}>JT-00520 | Senior Analyst</p>
                      </div>



                      <div className="senior d-flex">
                        <input style={{ position: 'relative', marginRight: '5px', height: '20px', width: '20px' }} type="checkbox" name="" id="" />
                        <p style={{ marginRight: '35px' }}>Include Company Details</p>
                      </div>
                      <div className="senior d-flex">
                        <input style={{ position: 'relative', marginRight: '5px', height: '20px', width: '20px' }} type="checkbox" name="" id="" />
                        <p style={{ marginRight: '35px' }}>Include Company Logo</p>
                      </div>
                      <div className="senior d-flex">
                        <input style={{ position: 'relative', marginRight: '5px', height: '20px', width: '20px' }} type="checkbox" name="" id="" />
                        <p style={{ marginRight: '35px' }}>Include Salary Range</p>
                      </div>
                      <div className="senior d-flex">
                        <input style={{ position: 'relative', marginRight: '5px', height: '20px', width: '20px' }} type="checkbox" name="" id="" />
                        <p style={{ marginRight: '35px' }}>Include Location</p>
                      </div>



                    </div>
                    <div className="mailContent">
                      <textarea className="textareaMail" name="" id="" cols="30" rows="9"></textarea>
                    </div>



                    <div className="mailbtn">
                      <div className="savetemplate d-flex">
                        <input type="checkbox" name="" id="" style={{ marginRight: '7px', marginTop: '0px', height: '20px', width: '20px' }} />
                        <p style={{ marginRight: '8px' }}>Save This as New Template</p>
                      </div>

                      <button style={{ fontWeight: 'bolder', fontSize: '13px', marginRight: '17px', width: '100px' }} className="btn    cancelmail" onClick={(e) => { e.preventDefault(); closeModal() }}>Cancle</button>
                      <button style={{ fontWeight: 'bolder', fontSize: '13px', marginRight: '17px', width: '100px' }} className="btn  text-primary  previewmail" onClick={(e) => { e.preventDefault(); openModal2() }}>Preview</button>
                      <button style={{ fontWeight: 'bolder', fontSize: '13px', marginRight: '50px', width: '100px' }} className="sendmail" type="submit" class="btn btn-primary">
                        <i class="fas fa-paper-plane" style={{ paddingRight: '8px' }}></i>SEND</button>

                    </div>

                    <Modal
                      isOpen={modalIsOpen2}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal2}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <div className="headingPreviewEmail bg-primary"><h1 style={{ color: 'white' }}>Mail Preview</h1></div>
                      <div className="closebtnPreview bg-primary"><CancelIcon onClick={closeModal2} style={{ fontSize: '45px', marginTop: '16px', color: 'white', marginLeft: '25px' }} /></div>
                      <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>



                      <form className="formPreview">

                        <h4>Subject</h4>
                        <div className="senior" style={{ marginTop: '30px' }}>
                          <p style={{ marginBottom: '30px' }}>#JT-00520 | Senior Analyst</p>
                        </div>
                        <textarea className="textareaCheckPreview" name="" id="" cols="30" rows="10">
                          Ll, accusantium blanditiis asperiores.
                          rem eveniet fugiat blanditiis. Consequuntur blanditiis, mollitia optio dolorem ipsam laborum aut possimus velit similique fugiat eaque accusantium repellat, porro debitis cum, voluptas ipsa asperiores. Laudantium officia esse, odit deleniti, dolores ea maxime non facere, laboriosam eum vel fuga?
                        </textarea>

                        <div className="mailbtn">


                          <button style={{ fontWeight: 'bolder', fontSize: '13px', marginRight: '17px', width: '100px' }} className="btn    cancelmail" onClick={(e) => { e.preventDefault(); closeModal2() }}>Cancle</button>

                          <button onClick={(e) => { e.preventDefault(); openModal3() }} style={{ fontWeight: 'bolder', fontSize: '13px', marginRight: '50px', width: '100px' }} className="sendmail" type="submit" class="btn btn-primary">
                            <i class="fas fa-paper-plane" style={{ paddingRight: '8px' }}></i>SEND</button>

                        </div>

                        <Modal

                          isOpen={modalIsOpen3}
                          onAfterOpen={afterOpenModal}
                          onRequestClose={closeModal3}
                          style={customStyles}
                          contentLabel="Example Modal"
                        >

                          <div className="headingEmailSent bg-primary"><h1 style={{ color: 'white' }}>Email Candidates</h1></div>
                          <div className="closebtnPreviewSent bg-primary"><CancelIcon onClick={() => { closeModal2(); closeModal3() }} style={{ fontSize: '45px', marginTop: '16px', color: 'white', marginLeft: '5px' }} /></div>

                          <h3 className="msgSuccess">Mail Successfully Sent!</h3>





                        </Modal>



                      </form>

                    </Modal>


                  </form>

                </Modal> */}





                <span className='email-batch-action-rel'>
                  <img src={dots} onClick={handleBatch} height="25rem"></img>

                  <>
                    <ul className='email-batch-action'>
                      <div className='email-batch-action-square'>&nbsp;</div>
                      <li onClick={() => { handleBatch(); setShowTemplate(true) }}>Email Templates</li>
                    </ul>
                  </>
                </span>



              </div>

            </div>
          </div>
        }








        <div className="email-search-box">
         <img src = {search} alt = ""/>
          <input type="text" placeholder="Search here" />
        </div>

        <div className="email-left-info-box">
          <MessageCard/>
          <MessageCard/>
          <MessageCard/>
          <MessageCard/>
          <MessageCard/>
          <MessageCard/>
          <MessageCard/>
        </div>
      </div>


      <div className="email-right">
        {showTemplate ? (
          <EmailTemplate></EmailTemplate>
        ) :
          <>

            <div style={{display:'flex'}} className="email-right-topbar">
              
            
           <div className="staranddots">
             <div className="star">

               <img src={star} alt="" style = {{width : "40px"}}/>
             </div>
             <div className="dots">
               <img src={dots} alt="" style = {{width : "30px"}}/>
             </div>
           </div>
            </div>
            <div className="email-right-topbar-info">
              <div className="email-right-topbar-info-content">
                <div className="image">
                  <img src={marian} alt="placeholder" />
                 
                </div>

                <h1>
                 Marina Paul {" "}
                
                </h1>
              </div>

             
            </div>

            <div className="email-right-middle">
              <div className="email-right-middle-overflow">
              
              </div>
            </div>
            <div style={{marginTop:'10rem'}} className="email-right-bottom">
              <div className="textbox">
                <input type="text" placeholder="Start Typing Here.."></input>

              </div>
              <div className="email-right-bottom-editorOption" >
                <div className="buttons1">
                  <button className="btn btn-w btn-inactive reply"><img src={send}></img>Reply</button>
                  <img src={smile} ></img>
                  <img src={attach} height="20px"></img>
                  <img src = {voice} ></img>
                </div>
                <div className="buttons2">
                  <img src={undo} height="30px"></img>
                  <img src={redo} height="30px"></img>
                  <img src={text} height="30px"></img>
                  <img src={B} height="30px"></img>
                  <img src={I} height="30px"></img>
                  <img src={U} height="30px"></img>

                </div>
              </div>
            </div>
          </>
        }


      </div>







      </div>
    </div>
  );
};

export default Message;
