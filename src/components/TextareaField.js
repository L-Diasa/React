import { hasLimitedCharacters } from "../utils";

export default function TextareaField({ 
    rows, name, value, handleChange,
    labelText, placeholder, submitted
}) {
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
            {    
                hasLimitedCharacters(value) ? 
                <p className='char-count'>{value.length}/600</p> :
                <p className={`char-count-error ${submitted ? 'submitted' : ''}`}>
                    Превышен лимит символов в поле
                </p>
            }
            <div className='errors'>
                {submitted && !value && <p>Поле пустое. Заполните пожалуйста</p> }
            </div>
        </>
    );
}
