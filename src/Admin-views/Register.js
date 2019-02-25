import React, { Component } from 'react';

class Register extends Component {
	render() {
		return (
			<div class=" register-bg sufee-login d-flex align-content-center flex-wrap">
				<div class="container">
					<div class="register-content">
						<div class="login-logo mt-5">
							<a href="index.html">
								<img class="align-content" width="60%" src={require('./images/bacancy-technology.png')} alt="" />
							</a>
						</div>
						<div class="login-form">

							<form>
								<div class="form-row">
									<div class="col-md-6 mb-3">
										<label for="validationServer01" class="text-dark">First name</label>
										<input type="text" class="form-control is-valid" id="validationServer01"
											placeholder="First Name" required />
										<div class="valid-feedback font-weight-bold">
											Looks good!
                                </div>
										<div class="invalid-feedback font-weight-bold">
											Please enter first name.
                                </div>
									</div>
									<div class="col-md-6 mb-3">
										<label for="validationServer02" class="text-dark">Last name</label>
										<input type="text" class="form-control is-invalid" id="validationServer02"
											placeholder="Last Name" required />
										<div class="valid-feedback font-weight-bold">
											Looks good!
                                </div>
										<div class="invalid-feedback font-weight-bold">
											Please enter last name.
                                </div>
									</div>
								</div>
								<div class="form-row">
									<div class="col-md-12 mb-4">
										<label for="validationServerUsername" class="text-dark">Email id</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text" id="inputGroupPrepend3">
												<i class="fa fa-envelope"></i></span>
											</div>
											<input type="text" class="form-control rounded-right"
												id="validationServerUsername" placeholder="Email Address"
												aria-describedby="inputGroupPrepend3" required />
											<div class="valid-feedback font-weight-bold">
												Looks good!
                                    </div>
											<div class="invalid-feedback font-weight-bold">
												Please enter email address.
                                    </div>
										</div>
									</div>
								</div>
								<div class="form-row">
									<div class="col-md-12 mb-4">
										<label class=" form-control-label text-dark">Contact number</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text" id="inputGroupPrepend3"><i
													class="fa fa-phone"></i></span>
											</div>
											<input type="text" class="form-control" placeholder="Phone Number" required />
										</div>
										<small class="form-text text-dark">ex. (+91) 1234567890</small>
										<div class="valid-feedback font-weight-bold">
											Looks good!
                                </div>
										<div class="invalid-feedback font-weight-bold">
											Please enter phone number.
                                </div>
									</div>
								</div>
								<div class="form-row">
									<div class="col-md-12 mb-4">
										<label class=" form-control-label text-dark" >Password</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text" id="inputGroupPrepend3"><i
													class="fa fa-key"></i></span>
											</div>
											<input type="text" class="form-control" placeholder="Password" required />
										</div>
										<small class="form-text text-dark">* Alphnumeric charcter , length (8-12)</small>
										<div class="valid-feedback font-weight-bold">
											Looks good!
                                </div>
										<div class="invalid-feedback font-weight-bold">
											Please proper password.
                                </div>
									</div>
								</div>
								<div class="form-row">
									<div class="col-md-12 mb-4">
										<label class=" form-control-label text-dark">Confirm Password</label>
										<div class="input-group">
											<div class="input-group-prepend">
												<span class="input-group-text" id="inputGroupPrepend3"><i
													class="fa fa-key"></i></span>
											</div>
											<input type="text" class="form-control is-valid" placeholder="Confirm Password" required />
										</div>
										<div class="valid-feedback font-weight-bold">
											Looks good!
                                    </div>
										<div class="invalid-feedback font-weight-bold">
											Please proper password.
                                    </div>
									</div>
								</div>
								<div class="form-group mb-4">
									<div class="form-check">
										<input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3"
											required />
										<label class="form-check-label text-dark" for="invalidCheck3">
											Agree to terms and conditions
                                </label>
										<div class="invalid-feedback font-weight-bold">
											* You must agree before submitting.
                                </div>
									</div>
								</div>
								<button class="btn btn-primary" type="submit">Register</button>
								<div class="register-link m-t-15 text-center">
									<p class="text-dark">Already have account ? <a href="page-login.html"> Sign in</a></p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;

