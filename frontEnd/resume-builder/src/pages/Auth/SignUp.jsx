import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/inputs/Input";
import { validateEmail } from "../../utils/helper";
import ProfilPhotoSelector from "../../components/inputs/ProfilPhotoSelector";

const SignUp = ({ setCurrentPage }) => {
    const [profilePic, setProfilePic] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // Handle sign up function
    const handleSignUp = async (e) => {
        e.preventDefault();
        if(!fullName) {
            setError("Please enter your full name");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }
        if (!password) {
            setError("Please enter your password");
            return;
        }
        setError("");
        //sign up api call
        try {

        } catch (error) {

        }
    }
    return (
        <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center items-center bg-white">
            <h3 className="text-lg font-semibold text-black">Create an Account</h3>
            <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today by entering your details below.</p>
            <form onSubmit={handleSignUp}>
                <ProfilPhotoSelector image={profilePic} setImage={setProfilePic}/>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                    <Input
                        value={fullName}
                        onChange={({ target }) => setFullName(target.value)}
                        label="full Name"
                        placeholder="John"
                        type="text" />
                    <Input
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        label="email"
                        placeholder="john@gmail.com"
                        type="text" />
                    <Input
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        label="password"
                        placeholder="password"
                    type="password"/>

                </div>
                {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
                <button className="btn-primary" type="submit">SIGN UP</button>
                <p className="text-[13px] text-slate-800 mt-3">Already an account?{" "} <button className="font-medium text-primary underline cursor-pointer" onClick={()=>setCurrentPage("login")}>Log in</button>
                </p>
            </form>

        </div>
    )
}
export default SignUp 