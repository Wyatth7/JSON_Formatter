// dummy JSON
// [{"name": "wyatt","name": "Andrew","name": "dylan"}]

import React, { Component } from "react";
import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faBars } from "@fortawesome/free-solid-svg-icons";

import Input from "../Input/Input";
import Output from "../Output/Output";
import ToolBox from "./../../components/MoreToolsSection/ToolBox/ToolBox";

import {
  formatString,
  validateString,
} from "../../scripts/toJSONFormat/toJSON";

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showVerticalNav: false,
      responsiveClass: "responsive",
      input: "",
      formattedString: "",
      submited: false,
      isInput: false,
      isCleared: false,
      error: false,
    };
    this.windowOffset = 0;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input) {
      if (this.state.input !== "") {
        this.submitHandler();
      }
    }
  }

  // When the modal is opened, set this.windowOffset to current y position, and disable scrolling.
  openNavModal = () => {
    this.setState({ showVerticalNav: true }, () => {
      this.windowOffset = window.scrollY;
      document.body.setAttribute(
        "style",
        `position: fixed; top: -${this.windowOffset}px; left: 0; right:0;`
      );
    });
  };

  // When modal is closed, use this.windowOffset to return the user to their stopped position.
  closeNavModal = () => {
    this.setState({ showVerticalNav: false }, () => {
      document.body.setAttribute("style", "");
      window.scrollTo(0, this.windowOffset);
    });
  };

  // Closes nav modal and scrolls the user to the location of the link they clicked.
  closeNavModalAndScroll = () => {
    this.setState({ showVerticalNav: false }, () => {
      document.body.setAttribute("style", "");
    });
  };

  // Scrolls to about section when modal link is clicked
  scrollToAboutHandler = () => {
    this.closeNavModalAndScroll();
    scroller.scrollTo("scrollToAbout", {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuint",
      containerID: "aboutContainer",
      offset: 0,
    });
  };

  // Scrolls to More Tools section when modal link is clicked
  scrollToToolsHandler = () => {
    this.closeNavModalAndScroll();
    scroller.scrollTo("scrollToTools", {
      duration: 1500,
      delay: 0,
      smooth: "eastInOutQuint",
      containerID: "toolsContainer",
      offset: 0,
    });
  };

  // executes when input value changes
  onInputChangeHandler = (value) => {
    this.setState({ isInput: true, input: value });
  };

  // executes when the clear btn is pressed.
  // updates state to remove error message from Output.js and changes submit state to false
  onClearHandler = () => {
    this.setState({ formattedString: "", input: "", isInput: false });
  };

  // executes when send it btn is clicked.
  // calls validateString function and formatString to check for correct JSON syntax as well
  // as implement prettier.
  submitHandler = () => {
    this.setState({ submited: true });

    const isValid = validateString(this.state.input);
    if (isValid === false) {
      this.setState({
        error: true,
        formattedString: "There was an error in your JSON Data",
      });
      return;
    }

    const format = formatString(this.state.input);
    this.setState({ formattedString: format });
  };

  onChangeErrorStateHandler = (string) => {
    // const validate = validateString(string);

    this.setState({ error: false });
  };

  render() {
    let responsiveClass = null;
    this.state.showVerticalNav
      ? (responsiveClass = this.state.responsiveClass)
      : (responsiveClass = null);

    let displayNavMobile = null;
    this.state.showVerticalNav
      ? (displayNavMobile = (
          <div className="mobile-nav">
            <Link
              onClick={this.scrollToAboutHandler}
              className={`links--about ${responsiveClass}`}
              to="scrollToAbout"
            >
              About
            </Link>
            <Link
              onClick={this.scrollToAboutHandler}
              className={`links--tools ${responsiveClass}`}
              to="moreTools"
            >
              More Tools
            </Link>
            <button onClick={this.closeNavModal} className="links--close">
              Close
            </button>
          </div>
        ))
      : (displayNavMobile = null);

    return (
      <div id="converterID" className="Converter">
        <div className="Nav">
          <div
            className="Nav--logo"
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <FontAwesomeIcon icon={faAlignLeft} size="3x" />
            <h1>JSON Formatter</h1>
          </div>
          <div className="Nav--links">
            <Link className={`links--about`} to="about">
              About
            </Link>
            <Link className={`links--tools`} to="moreTools">
              More Tools
            </Link>
            <div onClick={this.openNavModal} className="links--burger">
              <FontAwesomeIcon icon={faBars} size="3x" />
            </div>
          </div>
        </div>
        {displayNavMobile}
        <div className="Converter--content" id="mainContent">
          <Input
            btnStyle={{ marginLeft: "1rem" }}
            // newValue={this.state.input}
            submited={this.submitHandler}
            change={this.onInputChangeHandler}
            clear={this.onClearHandler}
            error={this.state.error}
            changeError={this.onChangeErrorStateHandler}
          />
          {this.state.formattedString === "" ? null : (
            <Output
              clear={this.onClearHandler}
              error={this.state.error}
              isInput={this.state.isInput}
              formatted={this.state.formattedString}
            />
          )}
          <Element id="aboutContainer" name="scrollToAbout">
            <div className="padding">
              <div className="about-section" id="about">
                <h1>About</h1>
                <div className="line-break"></div>
                <p>
                  JSON Validator and Formatter was created to ease the process
                  of formatting long, time-wasting strings of JSON data.
                </p>
              </div>
            </div>
          </Element>
          <Element id="toolsContainer" name="scrollToTools">
            <div className="tools-section padding" id="moreTools">
              <div className="padding">
                <h1>More Tools</h1>
                <div className="line-break"></div>
                <h3>Was your problem solved?</h3>
                <p>
                  If you answered yes, check out our other time saving, problem
                  solving tools.
                </p>
              </div>
              <div className="tool-links">
                <ToolBox
                  icon="money"
                  title="Curringo"
                  text="Convert over 30 global currencies."
                />
                <ToolBox
                  icon="image"
                  title="File Stop"
                  text="Upload, edit, and download your favorite pictures."
                />
              </div>
            </div>
          </Element>
        </div>
      </div>
    );
  }
}

export default Converter;
