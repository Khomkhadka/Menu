import React from "react";
import { useSelector,useDispatch } from "react-redux";
const About = ()=>{
    const count= useSelector((state)=>state.value);
    
    return(<>

 <h1>this is About</h1>
 <h3>The total click on Home/product is {count}</h3>
 </>
    )
}
export default About