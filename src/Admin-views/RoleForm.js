import React, { Component } from 'react';
import Select from 'react-select';

class RoleForm extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Role</strong>
              </div>
              <div className="card-body">
                <form action="#" method="post" className="form-horizontal">
                  <div className="row form-group">
                    <div className="col col-md-3">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fa fa-user"></i></span>
                        </div>
                        <input type="text" id="role" name="role" placeholder="Role" className="form-control" />
                      </div>
                    </div>
                    <div className="col col-md-3">
											<Select
												options={[{ value: 'readonly', label: 'Read Only' },
												{ value: 'readwrite', label: 'Read-Write' }]}
												name="accessRights"
												placeholder="Select Access Rights..."
												className="basic-multi-select"
												classNamePrefix="select" />
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

export default RoleForm;

