import React from 'react';
import '../../../styles/css/styles.css';

const InputField = (props) => {
    return (
        <input className="InputField" value={props.value} onChange={props.changed} placeholder="Enter JSON string" />
    );
}

export default InputField;