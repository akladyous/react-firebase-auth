import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js"

export default function UsersLogout() {
    const navigate = useNavigate();
    const { logout, user } = useAuth();

    const handleSignOut = async (e) =>{
        e.preventDefault();
        await logout();
        navigate('/')
    };

    return (
        <div className="container my-3">
            <div className="row justify-content-md-center">
                <div className="col col-lg-5 col-md-5 col-sm-5">
                    <div className="card">
                        <div className="card-header text-center">
                            Logout Page
                        </div>
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <img
                                    src={require("../assets/images/avatar.jpeg")}
                                    className="card-img-top mx-auto"
                                    alt="avatar"
                                    style={{ width: "25%", height: "25%" }}
                                />
                            </div>
                            <div className="mb-2">
                                <p
                                    disabled
                                    className="text-center border-0 form-control"
                                    aria-describedby="response"
                                >
                                    {user ? user.email : 'user not logged in'}
                                </p>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col col-auto">
                                    <button
                                        disabled={!user}
                                        className="btn btn-light"
                                        onClick={handleSignOut}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
