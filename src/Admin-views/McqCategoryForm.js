import React, { Component } from 'react';

class McqCategoryForm extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">MCQs Category</strong>
              </div>
              <div className="card-body">
                <form action="#" method="post" className="form-horizontal">
                  <div className="row form-group">
                    <div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-th-list"></i></span>
                      </div>
                        <input type="text" id="mcqCategory" name="mcqCategory" placeholder="Mcq Category" className="form-control" />
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default McqCategoryForm;

