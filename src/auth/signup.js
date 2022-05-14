import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config.js"

export const signup = async (email, password) => {
    console.log("email: " + email + " password: " + password)
    try {
        const credentials = await  createUserWithEmailAndPassword(auth, email, password);
        console.log("credentials : " , credentials);
        return {
            status: true,
            message: 'User Successfully signed up',
            lastSignInTime: credentials.user.metadata.lastSignInTime,
            user: credentials.user
        };
    } catch (error) {
        console.log("error code :", error.code);
        console.log("error message :", error.message);
        return { 
            status: false, 
            message: 'User Failure'
        }
    }
};