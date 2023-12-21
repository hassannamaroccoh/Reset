import "../Styles/Reset.css";
import {FiEye} from "react-icons/fi"
const Reset = () => {
    return ( 
        <>
         <aside>
        <h2>Reset your password</h2>
       
        <div className="input">
        <label for="New password" ></label>
        <input type="text" id="text" placeholder="Email address"/>
        <div className="icon">

        <FiEye size={40}/>
        </div>

        <label for="Comferm password"></label>
        <input type="text" id="text" placeholder="comferm password"/>
        {/* <div className="icon"> */}
    
        {/* <FiEye size={40}/>     */}
        {/* </div> */}

        
        
         <div className="one">
         <p>Already have an account ? login</p><button className="btn">Continue</button>

         </div>
         </div>
         </aside>
        
    
    
    
       

        
          
     
       
        </>
     );
}
 
export default Reset;