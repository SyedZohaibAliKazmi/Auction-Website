import { useContext } from "react"
import { AuthContext } from "../../../Context/AuthContext/AuthContext"

import { auth } from "../../../utils/firebase"
import "./Profile.css"
import { signOut } from "firebase/auth"


function Profile() {
 const {user}= useContext(AuthContext)
 console.log("user",user)


 async function handleSignOut() {
  await  signOut(auth)
    
 }


    return(
        <div className="profile-main">
            <div className="profile-container">
                {user?.isLogin ? (

                <div className="img-container">
                <img src={user.photoUrl}  alt="" className="user-image"/>
                {user?.isLogin && <span className="online-status"></span>}
                </div>
                ):(<div></div>)}
                <h3>{user.displayname}</h3>
                <h4>{user.email}</h4>

                <button onClick={handleSignOut}>Log Out</button>

            </div>
        </div>
    )
    
}

export default Profile