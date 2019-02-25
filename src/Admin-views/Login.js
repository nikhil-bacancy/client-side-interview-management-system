import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<div className="login-bg sufee-login d-flex align-content-center flex-wrap">
				<div className="container">
					<div className="login-content">
						<div className="login-logo">
							<a href="index.html">
								<img className="align-content" src={require('./images/logo-main-white.png')} alt="" />
							</a>
						</div>
						<div className="login-form">
							<form>
								<div className="form-group">
									<label>Email address</label>
									<input type="email" className="form-control" placeholder="Email" />
								</div>
								<div className="form-group">
									<label>Password</label>
									<input type="password" className="form-control" placeholder="Password" />
								</div>
								<div className="checkbox">
									<label>
										<input type="checkbox" /> Remember Me
                            </label>

								</div>
								<button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>

								<div className="register-link m-t-15 text-center">
									<p>Don't have account ? <a href="#"> Sign Up Here</a></p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;

