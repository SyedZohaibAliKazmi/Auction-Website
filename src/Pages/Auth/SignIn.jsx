import { useNavigate } from 'react-router-dom'
import './SignIn.css'
import { GoogleAuthProvider } from 'firebase/auth'
import { auth,db  } from '../../utils/firebase'
import { signInWithPopup } from 'firebase/auth'
import {  doc, setDoc } from 'firebase/firestore'
import { message } from 'antd'

function SignIn() {

    const navigate = useNavigate()

const handleSignIn = ()=>{

  const provider = new  GoogleAuthProvider()
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly")
  signInWithPopup(auth,provider)
  .then((result)=>{
   const credential = GoogleAuthProvider.credentialFromResult(result)
   const user = result.user
   console.log("result",result);
   // Reference from Firebase DB my Project
   const ref = doc(db,"users",user.uid)
   setDoc(ref,{
    email: user.email,
    photoUrl: user.photoURL,
    uid: user.uid,
    displayname: user.displayName || "Anonymous"
   }).then(()=>{
    console.log("user",user);
    
    message.success("Successfully Login")
   })
   
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage);
    
    var err = message.error(errorMessage);

    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    
  })
}

    return(
        
            <div className="main-signin">
                
                <button onClick={handleSignIn}>Login With Google</button>
            </div>
        
    )
    
}

export default SignIn