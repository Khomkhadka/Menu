import { NavLink} from 'react-router-dom'
const Navbar =()=>{
    return(
     <>
     <nav>
        <ul>
       <li><NavLink to="/">Product</NavLink></li>  
       <li><NavLink to="/about" >Menu</NavLink></li>
       </ul>
     </nav>
     </>
    )
}
export default Navbar;