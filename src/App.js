import React, { Component } from 'react';
import Sidebar from './Admin-views/Sidebar';
import Header from './Admin-views/Header';
import Footer from './Admin-views/Footer';
import SubHeader from './Admin-views/SubHeader';
import Table from './Admin-views/Table';
import CollegeForm from './Admin-views/CollegeForm';
import Register from './Admin-views/Register';
import RoleForm from './Admin-views/RoleForm';
import McqCategoryForm from './Admin-views/McqCategoryForm';
import McqSubCategoryForm from './Admin-views/McqSubCategoryForm';
import PhaseForm from './Admin-views/PhaseForm';
import Login from './Admin-views/Login';
import McqSetForm from './Admin-views/McqSetForm';
import BasicQuestionForm from './Admin-views/BasicQuestionForm';
import ProblemCategoryForm from './Admin-views/ProblemCategoryForm';
import ProblemSubCategory from './Admin-views/ProblemSubCategoryForm';
import ProblemSetForm from './Admin-views/ProblemSetForm';
import ScheduleExamForm from './Admin-views/ScheduleExamForm';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div id="right-panel" className="right-panel">
          <Header />
          <SubHeader />
          <div className="content">
            <CollegeForm />
            <PhaseForm />
            <RoleForm />
            <McqCategoryForm />
            <McqSubCategoryForm /> 
            <BasicQuestionForm />
            <ProblemCategoryForm /> 
            <ProblemSubCategory /> 
            <ProblemSetForm />
            <ScheduleExamForm />
             <McqSetForm/>
            <Table />
          </div>
          <div className="clearfix"></div>
          <Footer />
        </div>
        {/* <Register /> */}
        {/* <Login /> */}

      </div>
    );
  }
}

export default App;
