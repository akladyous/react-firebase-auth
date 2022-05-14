import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config.js"

export const login = async (email, password) =>{
    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log("credentials : ", credentials);
        return {
            status: true,
            message: "User Successfully signed in",
            lastSignInTime: credentials.user.metadata.lastSignInTime,
            user: credentials.user,
        };
    } catch(error){
        console.log("error code :", error.code);
        console.log("error message :", error.message);
        return {
            status: false,
            message: new Error(error.code),
        };
    }
};