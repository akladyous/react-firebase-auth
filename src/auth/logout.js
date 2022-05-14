import { auth } from '../firebase-config.js'
import { signOut } from "firebase/auth";

export const logout = async () =>{
    try {
        await signOut(auth);
        // set state to true
        return {
            status: true
        }
    } catch (error) {
        console.log("error code :", error.code);
        console.log("error message :", error.message);
        // set state to false
        return {
            status: false,
            message: error
        };
    }
};