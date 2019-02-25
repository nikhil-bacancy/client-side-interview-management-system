import React, { Component } from 'react';
import Select from 'react-select';

class CollegeForm extends Component {
	render() {
		return (
			<div className="animated fadeIn">
				<div className="row">
					<div className="col-md-12" id="accordionExample">
						<div className="card">
							<div className="card-header" id="heading">

								{/* <strong className="card-title">College / Course</strong> */}

								<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
									Add College
        				</button>|


								<button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseCourse" aria-expanded="false" aria-controls="collapseCourse">
									Add Course
        				</button>

							</div>
							<div className="card-body collapse hide" id="collapseOne" aria-labelledby="heading" data-parent="#accordionExample">
								<form action="#" method="post" className="form-horizontal">
									<div className="row form-group">
										<div className="col col-md-3">
											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text"><i className="fa fa-graduation-cap"></i></span>
												</div>
												<input type="text" id="collegeName" name="collegeName" placeholder="College Name" className="form-control" />
											</div>
										</div>
										<div className="col col-md-3">
											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text"><i className="fa fa-envelope"></i></span>
												</div>
												<input type="text" id="username" name="emailId" placeholder="Email Id" className="form-control" />
											</div>
										</div>
										<div className="col col-md-3">
											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text"><i className="fa fa-map-marker"></i></span>
												</div>
												<input type="text" id="stateName" name="stateName" placeholder="State Name" className="form-control" />
											</div>
										</div>
										<div className="col col-md-3">
											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text"><i className="fa fa-road"></i></span>
												</div>
												<input type="text" id="cityName" name="cityName" placeholder="City Name" className="form-control" />
											</div>
										</div>
									</div>
									<div className="row form-group">
										<div className="col col-md-3">
											<Select
												options={[{ value: 'chocolate', label: 'Chocolate' },
												{ value: 'strawberry', label: 'Strawberry' },
												{ value: 'vanilla', label: 'Vanilla' }]}
												isMulti
												name="course"
												placeholder="Select Course..."
												className="basic-multi-select"
												classNamePrefix="select" />
										</div>
										<div className="col col-md-3">
											<div className="input-group mb-3">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<input type="checkbox" aria-label="Checkbox for following text input" />
													</div>
												</div>
												<label className="form-control" >Is Active?</label>
											</div>
										</div>
										<div className="col col-md-3">
											<div className="input-group">
												<button type="button" className="btn btn-success">Add</button>
											</div>
										</div>
									</div>
								</form>
							</div>


							{/* Course Section */}
							<div className="card-body collapse hide" id="collapseCourse" aria-labelledby="heading" data-parent="#accordionExample">

								<form action="#" method="post" className="form-horizontal">

									<div className="row form-group">
										<div className="col col-md-3">
											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text"><i className="fa fa-book"></i></span>
												</div>
												<input type="text" id="courseName" name="courseName" placeholder="Course Name" className="form-control" />
											</div>
										</div>
										<div className="col col-md-3">
											<div className="input-group mb-3">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<input type="checkbox" aria-label="Checkbox for following text input" />
													</div>
												</div>
												<label className="form-control" >Is Active?</label>
											</div>
										</div>
										<div className="col col-md-3">
											<div className="input-group">
												<button type="button" className="btn btn-success">Add</button>
											</div>
										</div>
									</div>

								</form>

							</div>
							{/* End Course Section */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CollegeForm;

