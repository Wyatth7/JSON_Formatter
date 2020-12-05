import React, { Component } from "react";
import copy from "copy-to-clipboard";
import "../../styles/css/styles.css";

import Button from "../../components/UI/Button/Button";
import Auxiliary from "../../hoc/Auxiliary";

class Output extends Component {
  state = {
    clear: this.props.isInput,
    noText: `Your JSON will be here when you send it!`,
    error: "There was an error within your JSON data.",
  };

  // copies text inside of displayPara to the users clipboard.
  // alerts user text has been copied
  copyToClipboardHandler = () => {
    copy(this.props.formatted);
    alert("Copied to clipboard");
  };

  // Calls the clear method passed via props
  onClearHandler = () => {
    this.props.clear();
  };

  render() {
    // If there is an error in the user's data, an error message
    // will be displayed. If there is no error, the user's formatted
    // string will be shown.
    // let displayText = null;
    // this.props.error
    //   ? (displayText = this.state.error)
    //   : (displayText = this.props.formatted);

    return (
      <div className="Output padding">
        <div className="OutputTextBox">
          <p>Formatted data</p>
          <textarea value={this.props.formatted} readOnly></textarea>
        </div>
        <div className="buttons">
          <button
            className="btn buttons--copy"
            onClick={this.copyToClipboardHandler}
          >
            Copy
          </button>
          <button className="btn buttons--clear" onClick={this.onClearHandler}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Output;
