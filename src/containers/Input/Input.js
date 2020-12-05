import React, { Component } from "react";

import "../../styles/css/styles.css";

class Input extends Component {
  state = {
    inputFieldValue: "",
  };

  // executes when input is changed.
  // sends InputField value to Converter.js.
  onChangeHandler = (event) => {
    this.setState({ inputFieldValue: event.target.value });
    // this.props.change(event.target.value);
  };

  // excecuted when send it btn is pressed and clears the input field.
  // sets inputFieldValue to an empty string, which updates the inputs value to
  // nothing.
  onSendItHandler = (e) => {
    e.preventDefault();
    this.props.change(this.state.inputFieldValue);
    if (this.props.error) {
      this.props.changeError();
    }
  };

  // executes when clear btn is pressed.
  // updated Converter.js's state as well as calls onClearHander in Converter.js
  onClearHandler = () => {
    this.props.clear();
    // this.props.clear();
  };

  render() {
    return (
      <div className="Input equalHW padding" id="Input">
        <form onSubmit={this.onSendItHandler}>
          <p>JSON data</p>
          <textarea
            onChange={this.onChangeHandler}
            placeholder="{ }"
            name="jsonDataInput"
          ></textarea>
          <button onClick={this.onSendItHandler} className="btn">
            Send it
          </button>
        </form>
      </div>
    );
  }
}

export default Input;

// this goes on send it btn clicked property
// clicked={this.props.submited}
