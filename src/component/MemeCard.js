const MemeCard = ({data}) =>{
    const {url, title, author} = data;
    return(
        <div style={{ width: "350px", border:"1px solid #000", margin:"10px"}} >
            <img src={url} width="300" height="200" alt="Meme" />
            <h6>{title}</h6>
            <p>{author}</p>
        </div>
    )
}
export default MemeCard;