import React, { Component } from 'react';

import '../../styles/css/styles.css';

import InputField from '../../components/UI/InputField/InputField';
import Button from '../../components/UI/Button/Button';

class Input extends Component {
    state = {
        inputFieldValue: '',
    }

    // executes when input is changed.
    // sends InputField value to Converter.js.
    onChangeHandler = event => {
        this.setState({inputFieldValue: event.target.value});
        // this.props.change(event.target.value);
    }

    // excecuted when send it btn is pressed and clears the input field.
    // sets inputFieldValue to an empty string which updates the inputs value to
    // nothing.
    onSendItHandler = () => {
        this.props.change(this.state.inputFieldValue);
        this.setState({inputFieldValue: ''});
        if (this.props.error) {
            this.props.changeError();
        }
    }

    // executes when clear btn is pressed.
    // updated Converter.js's state as well as calls onClearHander in Converter.js 
    onClearHandler = () => {
        this.props.clear();
        // this.props.clear();
    }

    render() {
        return (
            <div className="InputWrapper">
                <div className="Input">
                    <h1>Enter a JSON string below</h1>
                    <div className="Form">
                        <InputField value={this.state.inputFieldValue} changed={this.onChangeHandler}/>
                        <div>
                            <Button addedStyle={this.props.btnStyle} clicked={this.onSendItHandler}>Send it</Button>
                            {/* <Button addedStyle={btnStyle} clicked={this.onClearHandler}>Clear</Button>  */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;

// this goes on send it btn clicked property
// clicked={this.props.submited}