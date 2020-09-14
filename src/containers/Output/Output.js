import React, { Component } from "react";
import copy from "copy-to-clipboard";
import "../../styles/css/styles.css";


import Button from "../../components/UI/Button/Button";
import Auxiliary from '../../hoc/Auxiliary';

class Output extends Component {
  state = {
    clear: this.props.isInput,
    noText: `Your JSON will be here when you send it!`,
    couldNotParse: 'There was something wrong with your input.\n Please try again. :('
  };

  // copies text inside of displayPara to the users clipboard.
  // alerts user text has been copied 
  copyToClipboardHandler = () => {
    copy(this.props.formatted);
    alert("Copied to clipboard");
  };



  onClearHandler = () => {
    this.props.clear();
    // this.props.clear();
  }

  render() {

    let displayPara;

    if (this.props.isInput) {
      displayPara = <pre className="formatted">{this.props.formatted}</pre>
    } else if (!this.props.isInput) {
      displayPara = <p className="unFormatted">{this.state.noText}</p>
    }

    // let displayPara =
    //   this.props.input !== "" ? (
    //     <pre className="formatted">{this.props.formatted}</pre>
    //   ) : (
    //     <p className="unFormatted">{this.state.unFormatted}</p>
    //   );

    const btnStyle = {margin: ' 1rem auto 0 auto', width: '25%'};

    let displayCopyBtn =
      this.props.formatted !== '' ? (
        <Auxiliary>
          <Button
          addedStyle={btnStyle}
          disabledButton={this.props.error}
          clicked={this.copyToClipboardHandler}
        >
          Copy JSON
          </Button>
          <Button addedStyle={btnStyle} clicked={this.onClearHandler}>Clear</Button> 
        </Auxiliary>
        
      ) : null;

    return (
      <div className="Output">
        <div className="OutputTextBox">
            {this.props.error 
            ? (
                // <Auxiliary>
                    <p className="unFormatted">{this.state.couldNotParse}</p>
                // </Auxiliary>
                ) : displayPara }

        </div>
        {displayCopyBtn}
      </div>
    );
  }
}

export default Output;