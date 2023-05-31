export default function InputField ({
    type, name, value, handleChange, 
    labelText, placeholder, submitted, 
    validated, validationFailedText
}){
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
            <div className='errors'>
                {submitted &&
                <> {value ? 
                    !validated && <p>{validationFailedText}</p> : 
                    <p>Поле пустое. Заполните пожалуйста</p>}
                </>}
            </div>
        </>
    );
}
