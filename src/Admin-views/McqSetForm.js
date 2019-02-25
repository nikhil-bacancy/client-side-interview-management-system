import React, { Component } from 'react';

class McqSetForm extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">MCQs Set</strong>
              </div>
              <div className="card-body">
                <form action="#" method="post" className="form-horizontal">
                  <div className="row form-group">
                    <div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-ellipsis-v "></i></span>
                        </div>
                        <input type="text" id="setName" name="setName" placeholder="Set Name" className="form-control" />
                      </div>
                    </div>
                    <div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-signal"></i></span>
                        </div>
                        <input type="number" id="difficultyLevel" name="difficultyLevel" placeholder="Difficulty Level" className="form-control" min="1" max="10"/>
                      </div>
                    </div>
                    <div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-list-ol"></i></span>
                        </div>
                        <input type="text" id="totalQuestions" name="totalQuestions" placeholder="Total Questions" className="form-control"/>
                      </div>
                    </div>
                    <div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-calculator"></i></span>
                        </div>
                        <input type="text" id="totalMarks" name="totalMarks" placeholder="Total Marks" className="form-control"/>
                      </div>
                    </div>
                    {/* <div className="col col-md-3">
                      <Select
                        options={[{ value: 'readonly', label: 'Read Only' },
                        { value: 'readwrite', label: 'Read-Write' }]}
                        name="colors"
                        placeholder="Select Access Rights..."
                        className="basic-multi-select"
                        classNamePrefix="select" />
                    </div> */}
                    
                  </div>
                  <div className="row form-group">
                  <div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-clock-o"></i></span>
                        </div>
                        <input type="text" id="totalTime" name="totalTime" placeholder="Total Time" className="form-control" />
                      </div>
                    </div>
                  <div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-thermometer-full"></i></span>
                        </div>
                        <input type="number" id="high" name="high" placeholder="High" className="form-control" min="1" max="10"/>
                      </div>
                    </div>
                    <div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-thermometer-half"></i></span>
                        </div>
                        <input type="number" id="medium" name="medium" placeholder="Medium" className="form-control" min="1" max="10"/>
                      </div>
                    </div>
                    <div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-thermometer-empty"></i></span>
                        </div>
                        <input type="number" id="low" name="low" placeholder="Low" className="form-control" min="1" max="10"/>
                      </div>
                    </div>
                    </div>
                    <div className="row form-group">
                    <div className="col col-md-3">
                      <div className="input-group">
                        <button type="button" className="btn btn-success">Add</button>
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

export default McqSetForm;

