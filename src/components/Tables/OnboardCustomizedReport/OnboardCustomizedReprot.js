import React, {useState} from 'react'

import './OnboardCustomizedReprot.scss'
import CloseIcon from '@material-ui/icons/Close';
import arrow1  from '../../../asserts/icons/arrow1.png'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import GenerateReport from './GenerateReport/GenerateReport';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
   
    marginRight: theme.spacing(1),
    width: 350,
    marginTop: "500px",
    marginLeft : "450px",
    fontWeight : 500
  },
  containerTo: {
    display: 'flex',
    flexWrap: 'wrap',
  
  },
  textFieldTo: {
    
    marginRight: theme.spacing(1),
    width: 350,
    marginTop: "-23px",
    marginLeft : "1250px",
    fontWeight : 500
  },

}));
export default function OnboardCustomizedReprot() {
  const [hello , setHello] = useState("Choose User")
  const classes = useStyles();
  const [customAdd, setCustomAdd] = useState(false);

    return (
        <div>
            <form  className = "custom_report">
            <div className = "custom_contain">
                <h3 >Added: </h3>
               <div className = "custom_all">
                   <h3>All</h3>
                   <CloseIcon className = "custom_icon"/>

                </div>
                <div className = "custom_date">
                    <h3>1 Jun, 21 - 1 Jul, 21</h3>
                    <CloseIcon className = "custom_icondate"/>
                </div>

            </div>
            <div className = "custom_detail">
            <div className = " custom_choose">
              <h2>Choose User</h2>
              <div className = "custom_input_box" placeholder = "Chosse User" onClick = {()=>{
                const batchArrow = document.querySelector(".custom_arrow_subject");
                batchArrow.classList.toggle("custom_rotate");
                const dropdown = document.querySelector(".custom_arrow_action");
                dropdown.classList.toggle("custom_visible_subject");
              }}> 
                  <div style={{paddingLeft:"2rem",paddingTop:"2rem",fontSize : "18px"}}>{hello}</div>
              <div style={{marginTop:"0.5rem",marginRight:"1rem"}}>
              <span className="custom_list">
                  <>
             
                    <ul className="custom_arrow_action">
                      <div className="custom_arrow_square">&nbsp;</div>
                  <option value={hello} onClick={()=>setHello("All ")}>All </option>
                  <option value={hello} onClick={()=>setHello("sanwaar@jobsterritory.com")}>sanwaar@jobsterritory.com </option>
                  <option value={hello} onClick={()=>setHello("bhanvesh@jobsterritory.com")}>bhanvesh@jobsterritory.com </option>
                  <option value={hello} onClick={()=>setHello("jignesh@jobsterritory.com")}>jignesh@jobsterritory.com </option>
                  <option value={hello} onClick={()=>setHello("hansabehn@jobsterritory.com")}>hansabehn@jobsterritory.com </option>
                    </ul>
                  </>
                </span>

                


                <img src = {arrow1} alt = "" style = {{width : "30px"}}className = "custom_arrow_subject"/>
      
            </div>
            </div>

     </div>
     </div>

     <div className = "custom_detail_date">
            <div className = " custom_choose_date">
              <h2>Date(Form)</h2>
              <div className={classes.container} noValidate>
      <TextField
        id="date"
        style={{fontSize: "300px"}}
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
              </div>
             
              <div className = "custom_choose_dateto">
                <h2>Date(To)</h2>
                <div className={classes.containerTo} noValidate>
      <TextField
        id="date"
        style={{fontSize: "300px"}}
        type="date"
        defaultValue="2017-05-24"
        className={classes.textFieldTo}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
              </div>
              <div>
                <div className = "btn-generate" onClick = {()=>setCustomAdd(true)}>Generate Report</div>
           {customAdd&&(
             <GenerateReport setCustomAdd = {setCustomAdd}></GenerateReport>
           )}
              </div>
                     
              </div>
            
            </form>
        </div>
    )
}



