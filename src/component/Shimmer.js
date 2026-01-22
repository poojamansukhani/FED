const Shimmer = () => {
    return Array(10)
    .fill(0)
    .map((n , i) => (
      <div key={i} style={{ width: "350px", border:"1px solid #000", margin:"10px"}} >
            <div width="300" height="200"  style={{backgroundColor:"#f5f5f5", width:"340px", height:"330px"}}></div>
        </div>
    ));
}
export default Shimmer;