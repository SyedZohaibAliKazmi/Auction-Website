import { useNavigate } from 'react-router-dom'
import './SignIn.css'
import { GoogleAuthProvider } from 'firebase/auth'
import { auth,db  } from '../../utils/firebase'
import { signInWithPopup } from 'firebase/auth'
import {  doc, setDoc } from 'firebase/firestore'
import { message } from 'antd'
import Loading from '../../Components/Loading/Loading'
import { useLoading } from '../../Context/Loading-Context/LoadingContext'; // Adjust path as needed

function SignIn() {
    const { loading, setLoading } = useLoading();
    const navigate = useNavigate()

const handleSignIn = async ()=>{
setLoading(true);
  const provider = await new  GoogleAuthProvider()
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly")
  signInWithPopup(auth,provider)
  .then((result)=>{
   const credential =  GoogleAuthProvider.credentialFromResult(result)
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
    setLoading(false)

    
   })
   
  })
  .catch (async(error)  =>  {
    // Handle Errors here.
    const errorCode = error.code;
     const errorMessage =  error.message;

    console.log(errorMessage);
    
    await message.error(errorMessage);

    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    setLoading(false)
  })
}

    return(
        
            <div className="main-signin">
                  {loading && <Loading/>}
                <button onClick={handleSignIn}>Login With Google</button>
            </div>
        
    )
    
}

export default SignIn