import { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

function Body() {
    useEffect(()=>{
        fetchMeme();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    const [meme, setMeme] = useState([]);
    //need this state multiple times need to show shimmmer so to handle that we need this state as well. if fetching show shimmer after fetch hide
    const [showShimmer, setShowShimmer] = useState(false);

    const handleScroll = () =>{
        //ScrollY - How much I have scrolled 
        //innerHeight - Height of the window visible section 
        //document.body.scrollHeight - height of the entire viewport , total height of web page 
        if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
            //If this condition is true means we reached the bottom of page then it wil call meme again & append to the previous one
            fetchMeme();
        }
    }
    const fetchMeme = async() =>{
        try{
            setShowShimmer(true);
            const data = await fetch("https://meme-api.com/gimme/20");
            const json = await data.json();
            setShowShimmer(false);
            //when fetch new meme by inifinite scroll will append in the same array
            setMeme((memes)=>[...memes, ...json.memes]);
         } catch{
            console.log("Error in fetching")
         }
        
    }
    
    return(
        <>
        <div style={{ display: "flex", flexFlow:"wrap"}} >
            {meme.map((meme, idx)=> (
                    <MemeCard key={idx} data={meme}/>
            ))}
            {showShimmer && <Shimmer/>}
        </div>
        </>
    );
}
export default Body;