
import { NavLink} from 'react-router-dom'
const Navbar =()=>{
    return(
     <>
     <nav>
        <ul>
       <li><NavLink to="/">Home</NavLink></li>  
       <li><NavLink to="/menu" >Menu</NavLink></li>
       <li><NavLink to="/jokes">Jokes </NavLink>  </li> 
       </ul>
     </nav>
     </>
    )
}
export default Navbar;