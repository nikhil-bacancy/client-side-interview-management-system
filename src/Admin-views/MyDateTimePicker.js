import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class MyDateTimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      placeholderText : this.props.placeholderText
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(date) {
    date.preventDefault()
    this.setState({
      startDate: date
    });
    this.props.getData(this.state.startDate);
  }
  
  render() {
    return (
      <DatePicker
        className="form-control"
        placeholderText= {this.state.placeholderText}
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={new Date()}
        
        showDisabledMonthNavigation 
      />
    );
  }
}

export default MyDateTimePicker;