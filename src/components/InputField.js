import React from 'react';

export default class InputField extends React.Component {
    render() {
        const { 
            type, name, value, handleChange, 
            labelText, placeholder 
        } = this.props;

        return (
            <>
            <label htmlFor={name}>{labelText}</label>
                <input 
                    id={name}
                    type={type} 
                    name={name}
                    value={value} 
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </>
        );
    }
}
