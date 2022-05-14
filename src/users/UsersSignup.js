import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

export default function UsersSignup() {
    // const navigate = useNavigate();
    const { error, signup } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        passwordConfirmation: "",
        message: "",
    });

    const handleFormData = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleForm = async (e) => {
        e.preventDefault();
        if ((formData.password === formData.passwordConfirmation) && formData.email !== '') {
            const userAccount = await signup(formData.email, formData.password);
            if (userAccount) {
                setFormData( (prevState) => ({...prevState, 'message': 'Account successfully created'}))
            } else {
                setFormData( (prevState) => ({...prevState, 'message': error}))
            }
        }
    };

    return (
        <div className="container my-3">
            <div className="row justify-content-md-center">
                <div className="col col-lg-5 col-md-5 col-sm-5">
                    <div className="card">
                        <div className="card-header text-center">
                            SignUp Page
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
                            <form onSubmit={handleForm}>
                                <div className="mb-2">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder=""
                                        value={formData.email}
                                        onChange={handleFormData}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder=""
                                        value={formData.password}
                                        onChange={handleFormData}
                                    />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="passwordConfirmation">
                                        Password Confirmation
                                    </label>
                                    <input
                                        type="password"
                                        name="passwordConfirmation"
                                        className="form-control"
                                        placeholder=""
                                        value={formData.passwordConfirmation}
                                        onChange={handleFormData}
                                    />
                                </div>

                                <div className="mb-2">
                                    <p
                                        disabled
                                        className="text-center border-0 form-control"
                                        aria-describedby="response"
                                    >
                                        {formData.message}
                                    </p>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col col-auto">
                                        <button
                                            // disabled={user}
                                            type="submit"
                                            className="btn btn-light"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
