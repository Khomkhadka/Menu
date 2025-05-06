import React from "react";
import { useSelector,useDispatch } from "react-redux";
const About = ()=>{
    const count= useSelector((state)=>state.value);
    
    return(<>

 <h1>This is About</h1>
 <h3>Your total amount in bank is $ {count}</h3>
 </>
    )
}
export default About