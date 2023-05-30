import React from 'react';

export default class TextareaField extends React.Component {
    render() {
        const { 
            rows, name, value, handleChange,labelText, 
            placeholder, submitted, hasLimitedCharacters
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
                 <p>{value.length}/600</p>
                 {submitted && 
                 <>
                  {!value ? <p>Поле пустое. Заполните пожалуйста</p> :
                   <>{hasLimitedCharacters && <p>Превышен лимит символов в поле</p>}</>
                  }
                 </> 
                  }
            </>
        );
    }
}
