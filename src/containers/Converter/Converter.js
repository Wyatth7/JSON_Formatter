// dummy JSON
// [{"name": "wyatt","name": "Andrew","name": "dylan"}]

import React, { Component } from "react";

import '../../styles/css/styles.css';

import Input from "../Input/Input";
import Output from "../Output/Output";
import { formatString, validateString } from '../../scripts/toJSONFormat/toJSON';


class Converter extends Component {
  state = {
    input: "",
    formattedString: "",
    submited: false,
    isInput: false,
    isCleared: false,
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      if (this.state.input !== '') {
        this.submitHandler();
      }
    }
  }


  // executes when input value changes
  onInputChangeHandler = (value) => {
    console.log(value);
    this.setState({isInput: true, input: value})
  };

  // executes when the clear btn is pressed.
  // updates state to remove error message from Output.js and changes submit state to false
  onClearHandler = () => {
    this.setState({ formattedString: '', input: '', isInput: false })
  }

  // executes when send it btn is clicked.
  // calls validateString function and formatString to check for correct JSON syntax as well
  // as implement prettier.
  submitHandler = () => {
    this.setState({submited: true});

    const isValid = validateString(this.state.input);
    if (isValid === false) {
        this.setState({error: true})
        return;
    }

    const format = formatString(this.state.input);
    this.setState({ formattedString: format })
  }

  onChangeErrorStateHandler = string => {
    // const validate = validateString(string);


    this.setState({error: false});
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.input === nextState.input) {
  //     return false;
  //   }
  // }

  render() {
    return (
      <div className="Converter">
        <Input 
          btnStyle={{marginLeft: '1rem'}}
          // newValue={this.state.input} 
          submited={this.submitHandler} 
          change={this.onInputChangeHandler} 
          clear={this.onClearHandler} 
          error={this.state.error}
          changeError={this.onChangeErrorStateHandler}
          />
        <Output 
          clear={this.onClearHandler}
          error={this.state.error} 
          isInput={this.state.isInput}
          formatted={this.state.formattedString} />
      </div>
    );
  }
}

export default Converter;
