import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldComponent =({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) =>{
    return (<div className="form-group">
        <input 
            type = {type}
            className = {classnames('form-control form-control-lg', {'is-invalid':error})}
                        
            placeholder = {placeholder}
            name = {name}
            value ={value}
            onChange = {onChange}
            
       />
        {error && <div className = "invalid-feedback">{error}</div>}
           
        {info && <small className="form-text text-muted">{info} </small>}
        </div>)
}

TextFieldComponent.propTypes = {
    name:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    value:PropTypes.string.isRequired,
    error:PropTypes.string,
    info:PropTypes.string,
    type:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    disabled:PropTypes.string
  
}
TextFieldComponent.defaultProps = {
    type:'text'
}
export default TextFieldComponent;