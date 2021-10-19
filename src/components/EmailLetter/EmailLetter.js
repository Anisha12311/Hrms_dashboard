import React from 'react'
import './EmailLetter.scss'
import downarrow from '../../asserts/icons/downarrow.png'
import { Link } from 'react-router';
import text from '../../asserts/icons/text.png'
import line from '../../asserts/icons/line.png'
import smile from '../../asserts/icons/smile.png'
import bold from '../../asserts/icons/bold.png'
import cross from '../../asserts/icons/cross.png'
import file from '../../asserts/icons/file.png'
import itlia from '../../asserts/icons/itlia.png'
import send from '../../asserts/icons/send.png'
export default function EmailLetter() {
    return (
        <div className = "OfferLetter_popup">
            <div className = "OfferLetter_box">
                <div className = "letter_contain">
                    <div className = "letter_offer">Reliving Letter</div>
                    </div>
                    <div className = "choose_requirement"> Choose Requirement</div>
                          <div className = "Reliving_letter">Reliving
                          <img src = {downarrow} alt = ""/>
                    </div>
                    <div className = "choose_requirement"> To</div>
                          <div className = "Reliving_letter1">
                         kalpana568@gmail.com
                    </div>
                    <div className = "choose_requirement"> CC</div>
                          <div className = "Reliving_letter2">
                          hr2@jobsmarketai.com
                    </div>
                    <div className = "choose_requirement">Subject</div>
                          <div className = "Reliving_letter3">
                          Exit Form
                    </div>
                    <div className = "choose_requirement">Mail Content</div>
                      
                    <div className = "text_email1">
                     
                     <img src = {text} alt = ""/>
                     <img src = {line} alt = ""/>
                     <img src = {bold} alt = ""/>
                     <img src = {itlia} alt = ""/>
                     <img src = {cross} alt = ""/>
                     <img src = {smile} alt = ""/>
                     <img src = {file} alt = ""/>
       

                      
     <div className = "text_line_letter"></div>
     <div className = "text_contain"> Dear Kalpana, <br/> We are happy to  have board and looking 
     forward to working with you. <br/>Request you to follow the link & e-sign copy of your offer letter for
     futher proceedings.</div>
     <a href= "" className = "link_contain"> https://docsgoogle.com/offerletter </a>


                    </div>
                    <div className = "create_bts" style = {{marginLeft : "500px"}}>
                    <div className = "Add_bts1">Cancel</div>
                <div className = "Add_bts2">Preview</div>
                <div className = "Add_bts3" style = {{width : "250px",paddingLeft : "70px"}}>
                <img src = {send} alt = ""  style = {{width : "30px", height : "30px", marginLeft : "-20px"}}/>
                SEND
                </div>
                </div>
         </div></div>
    )
}

