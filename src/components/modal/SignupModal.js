import './Modal.css'

const SignupModal = () => {
    return (
        <div className="modal" id="SignupModal" tabIndex="-1" aria-labelledby="SignupModalLabel"
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
                                <h5 className="modal-title fw-bold">Sign Up</h5>
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
                                        &nbsp;Continue with Facebook
                                    </strong>

                                </button>
                            </div>
                            <h6 className='d-flex justify-content-center'><b>OR</b></h6>
                        </div>
                    </div>

                    <div className="modal-body mx-3">
                        <form className="needs-validation">
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

                            <div className="d-grid gap-2 mb-3">
                                <button type="submit" className="btn btn-primary rounded-0 fs-4 login-btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#SignupModal"
                                        data-bs-whatever="Freelancer"><strong>Join Freelancer</strong>
                                </button>
                            </div>
                            <div>
                                <p className="fs-6 fw-light lh-sm text-start">
                                    By registering you confirm that you accept the&nbsp;
                                    <a href="#TermsAndConditions">
                                        Terms and Conditions&nbsp;
                                    </a>
                                    and

                                    <a href="#PrivacyPolicy">
                                        &nbsp;Privacy Policy
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer mx-4 d-flex justify-content-center">
                        <p>Already have an account?&nbsp;
                            <a href="#LogIn" data-bs-target="#LoginModal"
                               data-bs-toggle="modal">
                                Log In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupModal;