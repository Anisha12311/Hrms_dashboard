import React from 'react'
import './AddMoreField.scss'
import close from '../../asserts/icons/close.png'
export default function AddMoreField() {
    return (
        <div className = "Addmore_Field">
                 <div className = "OfferLetter_box">
                <div className = "letter_contain">
                    <div className = "letter_offer">Reliving Letter</div>
                    <img src = {close} alt = ""/>
                   
                    </div>
                    <div className = "Field_container">
                        <div className = "Field_main">Main Field</div>
                        <input placeholder = "Name of Main Field" />
                        <div className = "Field_main">Sub Field</div>
                        <input placeholder = "Write Sub Field" />
                        <div className = "Check_contain">
                        <input  type="checkbox"/>
                        <div className = "Field_mark">Mark it as mandatory</div>
                        
                        </div>
                        <div className = "bottom_btns">
                        <div className = "cancel_btns">Cancel</div>
                        <div className = "add_btns">Add</div>
                        </div>
                    </div>
                   
            </div>
        </div>
    )
}
