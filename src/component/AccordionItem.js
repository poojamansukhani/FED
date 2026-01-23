import { useState } from "react";

const AccordionItem = ({title, body}) => {
    const [open, setIsOpen] = useState(false);
    const handleClick = () => {
        return setIsOpen(!open);
    }
    return(
        <div className="my-2 border border-black">
            <div className="font-bold p-2 bg-slate-200 flex justify-between" onClick={handleClick}>
                <span>{title}</span>
                <span>{open ? "⬇" : "⬆"}</span>
            </div>
           {open && <div className="p-2">{body}</div>} 
        </div>
    )
}
export default AccordionItem;