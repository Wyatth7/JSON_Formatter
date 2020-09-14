import React from 'react';
import '../../../styles/css/styles.css';

const Button = (props) => (
    <button 
        style={props.addedStyle}
        disabled={props.disabledButton ? props.disabledButton : false} 
        type={props.type} className="Button" 
        onClick={props.clicked}>{props.children}</button>
);

export default Button;