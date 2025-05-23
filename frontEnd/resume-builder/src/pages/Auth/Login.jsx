import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { validateEmail } from "../../utils/helper";
const Login = ({setCurrentPage}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // Handle login function
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }
        if(!password) {
            setError("Please enter your password");
            return;
        }
        setError("");
        //login api call
        try {
            
        } catch (error) {
           
         }
        // 
     }
    return (
        <div className=" w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center items-center bg-white ">
            <h3 className="text-lg font-semibold text-black"> Welcome Back</h3>
            <p className="text-xs text-slate-700 mt-[5px] mb-6"> Please enter your details to log in </p>
            <form onSubmit={handleLogin} className="">
                <Input value={email} onChange={({ target }) => setEmail(target.value)} label="Email Adresse" type="text" placeholder="Email" />
                <Input value={password} onChange={({target})=>setPassword(target.value)} label="Password" type="password" placeholder="Password" />
              
                {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
                <button type="submit" className="btn-primary">LOGIN</button>
                <p className="text-[13px] text-slate-800 mt-3">Don't have an account ?{" "} 
                    <button type="button" className="font-medium text-primary underline cursor-pointer" onClick={()=>setCurrentPage("signup")}>Sign Up</button>
                 </p>
            </form>
        </div>
    )
}
export default Login 