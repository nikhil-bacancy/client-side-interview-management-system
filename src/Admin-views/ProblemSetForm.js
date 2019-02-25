import React, { Component } from 'react';

class ProblemSetForm extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Problem Set</strong>
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
                    <div className="col col-md-2">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-signal"></i></span>
                        </div>
                        <input type="number" id="difficultyLevel" name="difficultyLevel" placeholder="Difficulty Level" className="form-control" min="1" max="10"/>
                      </div>
                    </div>
                    <div className="col col-md-2">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-list-ol"></i></span>
                        </div>
                        <input type="text" id="totalProblems" name="totalProblems" placeholder="Total Problems" className="form-control"/>
                      </div>
                    </div>
                    <div className="col col-md-2">
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
                    <div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-clock-o"></i></span>
                        </div>
                        <input type="text" id="testDuration" name="testDuration" placeholder="Test Duration" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProblemSetForm;

