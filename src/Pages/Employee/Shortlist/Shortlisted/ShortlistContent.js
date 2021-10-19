import React,{useState} from 'react'
import  './ShortlistContent.scss'
import Pau from '../../../../asserts/images/Pau.png'
import kalpana from '../../../../asserts/images/Kalpana.png'
import Rishika from '../../../../asserts/images/Rishika.png'
import Rajani from '../../../../asserts/images/Rajani.png'
import Abhinav from '../../../../asserts/images/Abhinav.png'
import InfoReport from '../../../../components/CandidateDetails/InfoReport'
import Candidatedetails from '../../../../components/CandidateDetails/Candidatedetails'




export default function Shortlisted() {

  const [details, setDetails] = useState()
    return (
        <div>
            <div className = "onboard_dash">
            <div className = "onboard_head">Marketing</div>
           
                <div className = "onboard_box">
                    <div className = "Offer_text">Offer Letter Accepted</div>
                  <img src = {Pau} alt = "" />
                  <div className = "contain_head">Shivansh Pau</div>
                  <div className = "contain_associate">Marketing Associate</div>
                </div>

                <div className = "onboard_box1">
                <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {kalpana} alt = "" />
                 
                  <div className = "contain_head" onClick={()=>setDetails(true)}>Kalpana Bakshi</div>
         
                  <div className = "contain_associate">Marketing Head</div>
                </div>

                <div className = "onboard_box2">
                     <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {Rishika} alt = "" />
                  <div className = "contain_head">Rishika Jayaraman</div>
                  <div className = "contain_associate">Marketing Intern</div>
                </div>

                <div className = "onboard_box3">
                <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {Rajani} alt = "" />
                  <div className = "contain_head">Rajani Mistry</div>
                  <div className = "contain_associate">Product Marketing Executive</div>
                </div>

                <div className = "onboard_box4">
                <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {Abhinav} alt = "" />
                  <div className = "contain_head">Abhinav Sekhon</div>
                  <div className = "contain_associate">Product Marketing Executive</div>
                </div>
                
        </div>
             

        <div className = "onboard_dash">
            <div className = "onboard_head1">Design </div>
           
                <div className = "onboard_box_team">
                <div className = "Offer_text">Offer Letter Accepted</div>
                  <img src = {Pau} alt = "" />
                  <div className = "contain_head">Shivansh Pau</div>
                  <div className = "contain_associate">Marketing Associate</div>
                </div>

                <div className = "onboard_box1_team">
                <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {kalpana} alt = "" />
                  <div className = "contain_head"  >Kalpana Bakshi</div>
                  <div className = "contain_associate">Marketing Head</div>
                </div>

                <div className = "onboard_box2_team">
                <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {Rishika} alt = "" />
                  <div className = "contain_head">Rishika Jayaraman</div>
                  <div className = "contain_associate">Marketing Intern</div>
                </div>

                <div className = "onboard_box3_team">
                <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {Rajani} alt = "" />
                  <div className = "contain_head">Rajani Mistry</div>
                  <div className = "contain_associate">Product Marketing Executive</div>
                </div>

                <div className = "onboard_box4_team">
                <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {Abhinav} alt = "" />
                  <div className = "contain_head">Abhinav Sekhon</div>
                  <div className = "contain_associate">Product Marketing Executive</div>
                </div>
                   
</div>
<div className = "onboard_dash">
                <div className = "onboard_head1_sooraj">Design</div>
          
                <div className = "onboard_box_team1">
                <div className = "Offer_text">Offer Letter Accepted</div>
              
                  <img src = {Pau} alt = "" />
                  <div className = "contain_head">Shivansh Pau</div>
                  <div className = "contain_associate">Markdting Associate</div>
                </div>

                <div className = "onboard_box1_team2">
                <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {kalpana} alt = "" />
                  <div className = "contain_head"  >Kalpana Bakshi</div>
                  <div className = "contain_associate">Marketing Head</div>
                </div>

                <div className = "onboard_box2_team3">
                <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {Rishika} alt = "" />
                  <div className = "contain_head">Rishika Jayaraman</div>
                  <div className = "contain_associate">Marketing Intern</div>
                </div>

                <div className = "onboard_box3_team4">
                <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {Rajani} alt = "" />
                  <div className = "contain_head">Rajani Mistry</div>
                  <div className = "contain_associate">Product Marketing Exective </div>
                </div>

                <div className = "onboard_box4_team5">
                <div className = "Offer_text1">Offer Letter Pending</div>
                  <img src = {Abhinav} alt = "" />
                  <div className = "contain_head">Abhinav Sekhon</div>
                  <div className = "contain_associate">Product Marketing Exective</div>
                </div>

                </div>
                {details&&(
      <InfoReport setDetails = {setDetails}></InfoReport>
    )} 
        </div>
         

    )
   
}

