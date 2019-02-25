import React, { Component } from 'react';
import Select from 'react-select';
import DateTimePicker from './MyDateTimePicker'

class ScheduleExamForm extends Component {
		constructor(props){
			super(props)
			this.state = {
				d1 : null,
				d2 : null
			}
		}

	render() {
		return (
			<div className="animated fadeIn">
				<div className="row">
					<div className="col-md-12">
						<div className="card">
							<div className="card-header">
								<strong className="card-title">Schedule Exam</strong>
							</div>
							<div className="card-body">
								<form action="#" method="post" className="form-horizontal">
									<div className="row form-group">
										<div className="col col-md-3">
											<Select
												options={[{ value: 'readonly', label: 'Read Only' },
												{ value: 'readwrite', label: 'Read-Write' }]}
												name="college"
												placeholder="Select College..."
												className="basic-multi-select"
												classNamePrefix="select" />
										</div>
										<div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                        </div>
												<DateTimePicker  id="examDate" name="examDate" placeholderText="Click to select Exam Date" />
												{/* <input type="text" id="examDate" name="examDate" placeholder="Exam Date" className="form-control" /> */}
                      </div>
                    </div>
                 
									<div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-calendar"></i></span>
                        </div>
												<DateTimePicker id="interviewDate" name="interviewDate" placeholderText="Click to select Interview Date" />
                        {/* <input type="text" id="interviewDate" name="interviewDate" placeholder="Interview Date" className="form-control" /> */}
                      </div>
                    </div>
                 
										<div className="col col-md-3">
											<div className="input-group">
												<button type="button" className="btn btn-success" >Add</button>
											</div>
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
}

export default ScheduleExamForm;

