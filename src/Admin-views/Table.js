import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">

          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Data Table</strong>
              </div>
              <div className="card-body">
                <table id="bootstrap-data-table" className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Position</th>
                      <th>Position</th>
                      <th>Position</th>
                      <th>Position</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td><a href=''><span className="badge badge-pill badge-success">Active</span></a></td>
                      <td>
                        <a href=''><i className="fa fa-lg fa-eye pr-3" aria-hidden="true"></i></a>
                        <a href=''><i className="fa fa-lg fa-pencil-square-o pr-3" aria-hidden="true"></i></a>
                        <a href=''><i className="fa fa-lg fa-trash pr-3" aria-hidden="true"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td><a href=''><span className="badge badge-pill badge-success">Active</span></a></td>
                      <td>
                        <a href=''><i className="fa fa-lg fa-eye pr-3" aria-hidden="true"></i></a>
                        <a href=''><i className="fa fa-lg fa-pencil-square-o pr-3" aria-hidden="true"></i></a>
                        <a href=''><i className="fa fa-lg fa-trash pr-3" aria-hidden="true"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td><a href=''><span className="badge badge-pill badge-success">Active</span></a></td>
                      <td>
                        <a href=''><i className="fa fa-lg fa-eye pr-3" aria-hidden="true"></i></a>
                        <a href=''><i className="fa fa-lg fa-pencil-square-o pr-3" aria-hidden="true"></i></a>
                        <a href=''><i className="fa fa-lg fa-trash pr-3" aria-hidden="true"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td><a href=''><span className="badge badge-pill badge-danger">Deactive</span></a></td>
                      <td>
                        <a href=''><i className="fa fa-lg fa-eye pr-3" aria-hidden="true"></i></a>
                        <a href=''><i className="fa fa-lg fa-pencil-square-o pr-3" aria-hidden="true"></i></a>
                        <a href=''><i className="fa fa-lg fa-trash  pr-3" aria-hidden="true"></i></a>
                      </td>
                    </tr>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td>Edinburgh</td>
                      <td><a href=''><span className="badge badge-pill badge-success">Active</span></a></td>
                      <td>
                        <a href=''><i className="fa fa-lg fa-eye pr-3" aria-hidden="true"></i></a>
                        <a href=''><i className="fa fa-lg fa-pencil-square-o pr-3" aria-hidden="true"></i></a>
                        <a href=''><i className="fa fa-lg fa-trash pr-3" aria-hidden="true"></i></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default Table;

