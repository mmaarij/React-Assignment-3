import './Modal.css'

const LoginModal = () => {
    return (
        <div className="modal" id="LoginModal" tabIndex="-1" aria-labelledby="LoginModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header mx-4 mb-4">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-end p-2">
                                <button type="button" className="btn-close rounded-0" data-bs-dismiss="modal"
                                        aria-label="Close"/>
                            </div>
                            <div className="col-12 mt-2 mb-4 d-flex justify-content-center">
                                <img src="/assets/img/flLogo.svg" width="196"
                                     height="68"
                                     alt="Freelancer Logo"/>
                            </div>
                            <div className="col-12 mb-4 d-flex justify-content-center">
                                <h5 className="modal-title fw-bold">Welcome Back</h5>
                            </div>
                            <div className="col-12 mb-4 d-grid gap-2">
                                <button type="button" className="fb-button btn btn-primary fs-5 rounded-0"
                                        data-bs-toggle="modal"
                                        data-bs-target="#Modal"
                                        data-bs-whatever="Facebook">
                                    <img src="/assets/img/FBLogo.png"
                                         width="25"
                                         height="25"
                                         alt="Facebook Logo" className="mb-1"/>
                                    <strong>
                                        &nbsp;Login with Facebook
                                    </strong>
                                </button>
                            </div>
                            <h6 className='d-flex justify-content-center'><b>OR</b></h6>
                        </div>
                    </div>

                    <div className="modal-body mx-3">
                        <form class="needs-validation">
                            <div className="mb-3">
                                <input type="email" className="form-control rounded-0" id="Email"
                                       placeholder="Email or Username" required/>

                                <div className="invalid-feedback">
                                    Please enter your username or email address.
                                </div>
                            </div>

                            <div className="mb-4">
                                <input type="password" className="form-control rounded-0" id="Password"
                                       placeholder="Password" required/>
                            </div>
                            <div className="container mb-4">
                                <div className="row">
                                    <div className="form-check col-6 d-flex justify-content-lg-start">
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            <input className="form-check-input rounded-0" type="checkbox" value="true"
                                                   id="flexCheckDefault"/>
                                            Remember Me
                                        </label>
                                    </div>

                                    <div className="col-6 d-flex justify-content-end">
                                        <a href="#ForgotPassword"> Forgot Password?</a>
                                    </div>

                                </div>

                            </div>
                            <div className="d-grid gap-2 mb-5">
                                <button type="submit" className="btn btn-primary rounded-0 fs-4 login-btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#LoginModal"
                                        data-bs-whatever="Freelancer">

                                    <strong>
                                        Log In
                                    </strong>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer mx-4 d-flex justify-content-center">
                        <p>Don't have an account?&nbsp;
                            <a href="#SignUp" data-bs-target="#SignupModal"
                               data-bs-toggle="modal">
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;