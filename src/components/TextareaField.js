import React from 'react';

export default class TextareaField extends React.Component {
    render() {
        const { 
            rows, name, value, handleChange,
            labelText, placeholder 
        } = this.props;

        return (
            <>
            <label htmlFor={name}>{labelText}</label>
            <textarea 
                id={name}
                rows={rows}
                name={name}
                value={value} 
                placeholder={placeholder}
                onChange={handleChange}
            />
            </>
        );
    }
}
