import AccordionItem from "./AccordionItem";
import { useState } from "react";

const data = [
    {
        title:"Accorion 1",
        description:"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
        title:"Accorion 2",
        description:"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
        title:"Accorion 3",
        description:"This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    }
]
const Accordion = () => {
    const [openIndex, setIsOpenIndex] = useState(0);
    const handleClick = (index) =>{
        return setIsOpenIndex(index)
    }
    return(
        <div className="w-[50%] m-auto">
            {data.map((accordion, index)=>{
                return (<AccordionItem key={index} title={accordion.title} 
                    body={accordion.description} 
                    isOpen={index==openIndex} 
                    setIsOpen={()=>{index==openIndex ? setIsOpenIndex(null) : handleClick(index)}}
                    />)
            })}
            
        </div>
    )
}
export default Accordion;