import { getAuth } from "firebase/auth";
// import { auth} from "../firebase-config.js"

export const getCurrentUser = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return null;
    return {};
};
