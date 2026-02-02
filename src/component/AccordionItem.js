import { useState } from "react";

const AccordionItem = ({title, body, isOpen, setIsOpen}) => {
    const handleClick = () => {
        return setIsOpen(!isOpen);
    }
    return(
        <div className="my-2 border border-black">
            <div className="font-bold p-2 bg-slate-200 flex justify-between cursor-pointer" onClick={handleClick}>
                <span>{title}</span>
                <span>{isOpen ? "⬇" : "⬆"}</span>
            </div>
           {isOpen && <div className = {isOpen ? "accordion open p-2" : "accordion p-2"} >{body}</div>} 
        </div>
    )
}
export default AccordionItem;