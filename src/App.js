import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';
import TextareaField from './components/TextareaField';
import InfoField from './components/InfoField';
import { startsWithCap, formatNumber, isFullNumber, 
      isValidDate, isValidSite, hasLimitedCharacters } from "./utils";

function App () {
  const [formInfo, setFormInfo] = useState( {
    name: '',
    surname: '', 
    birthDate: '',
    number: '',
    site: '',
    about: '', 
    technologyStack: '',
    projectDescription: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [invalidFields, setInvalidFields] = useState({})
  
  function handleChange(event) {
    const { name, value } = event.target
    setFormInfo(prevState => ({
      ...prevState, 
      [name]: value, 
    }))
    setSubmitted(false)
  }

  function handleNumberChange(event) {
    const { value } = event.target
    setFormInfo(prevState => ({
      ...prevState, 
      number: formatNumber(value),
    }))
    setSubmitted(false)
  }

  function handleTextareaChange(event) {
    const { name, value } = event.target
    handleChange(event)
    if(!hasLimitedCharacters(value)) {
      setFieldInvalid(name)
    }
  }

  function handleSubmit() {
    setFormInfo(prevState => ({
      ...Object.keys(prevState).reduce((trimmedState, key) => {
        trimmedState[key] = prevState[key].trim()
        return trimmedState
      }, {}),
    }))
    setSubmitted(true)
    setInvalidFields({})

    if(!startsWithCap(formInfo.name)) 
      setFieldInvalid("name")
    
    if(!startsWithCap(formInfo.surname)) 
      setFieldInvalid("surname")
    
    if(!isFullNumber(formInfo.number)) 
      setFieldInvalid("number")
    
    if(!isValidDate(formInfo.birthDate) ) 
      setFieldInvalid("birthDate")
    
    if(!isValidSite(formInfo.site)) 
      setFieldInvalid("site")
    
    if(!formInfo.about || 
      !hasLimitedCharacters(formInfo.about)) 
      setFieldInvalid("about")
    
    if(!formInfo.technologyStack || 
      !hasLimitedCharacters(formInfo.technologyStack)) 
      setFieldInvalid("technologyStack")

    if(!formInfo.projectDescription || 
      !hasLimitedCharacters(formInfo.projectDescription)) 
      setFieldInvalid("projectDescription")
  }

  function setFieldInvalid(fieldName){
    setInvalidFields(prev => ({
    invalidFields, 
      [fieldName]: true
    }))
  }

  function handleCancel() {
    setFormInfo(prevState => 
      Object.keys(prevState).reduce((acc, key) => {
      acc[key] = ''
      return acc
    }, {}))
  }

  return ( 
    <div className="app">
      {(submitted && Object.keys(invalidFields).length === 0
      ) ? 
      <>
      <header>анкета</header>
      <main className="main-content">
        <h3>{formInfo.name} {formInfo.surname}</h3>
        <InfoField title="Дата рождения" content={formInfo.birthDate}/>
        <InfoField title="Телефон" content={formInfo.number}/>
        <InfoField title="Сайт" content={formInfo.site}/>
        <InfoField title="О себе" content={formInfo.about}/>
        <InfoField title="Стек технологий" content={formInfo.technologyStack}/>
        <InfoField title="Описание последнего проекта" content={formInfo.projectDescription}/>
      </main>
      </> :
      <> 
      <header>Создание анкеты</header>
      <form className="main-content" onSubmit={e => e.preventDefault()}>
        <InputField  
          type="text" 
          name="name" 
          handleChange={handleChange}
          labelText="Имя"
          placeholder="Введите имя" 
          value={formInfo.name}  
          submitted={submitted}
          validated={!invalidFields["name"]}
          validationFailedText={"Первый символ должен быть заглавной буквой"}
        />
        <InputField  
          type="text" 
          name="surname" 
          handleChange={handleChange} 
          labelText="Фамилия"
          placeholder="Введите фамилию" 
          value={formInfo.surname} 
          submitted={submitted}
          validated={!invalidFields["surname"]}
          validationFailedText={"Первый символ должен быть заглавной буквой"}
        />
        <InputField  
          type="date" 
          name="birthDate" 
          handleChange={handleChange}
          labelText="Дата рождения" 
          placeholder="Введите дату рождения" 
          value={formInfo.birthDate} 
          submitted={submitted}
          validated={!invalidFields["birthDate"]}
          validationFailedText={"Введите действительную дату"}
        />
        <InputField  
          type="text" 
          name="number" 
          handleChange={handleNumberChange}
          labelText="Телефон"
          placeholder="Введите номер телефона" 
          value={formInfo.number} 
          submitted={submitted}
          validated={!invalidFields["number"]}
          validationFailedText={"Введите полный номер"}
        />
        <InputField  
          type="text" 
          name="site" 
          handleChange={handleChange}
          labelText="Сайт"
          placeholder="Введите адрес сайта"
          value={formInfo.site}  
          submitted={submitted}
          validated={!invalidFields["site"]}
          validationFailedText={"Должен начинаться с https://"}
        />
        <TextareaField
          rows="7" 
          name="about" 
          handleChange={handleTextareaChange}
          labelText="О себе"
          placeholder="Расскажите о себе" 
          value={formInfo.about} 
          submitted={submitted}
        />
        <TextareaField
          rows="7" 
          name="technologyStack"
          handleChange={handleTextareaChange} 
          labelText="Стек технологий"
          placeholder="Введите стек технологий" 
          value={formInfo.technologyStack} 
          submitted={submitted}
        />
        <TextareaField
          rows="7" 
          name="projectDescription" 
          handleChange={handleTextareaChange}
          labelText="Описание последнего проекта"
          placeholder="Введите описание последнего проекта" 
          value={formInfo.projectDescription} 
          submitted={submitted}
        />
        <div className='buttons-div'>
          <Button 
            text="Отмена" 
            handleClick={handleCancel}  
          />
          <Button 
            text="Сохранить" 
            handleClick={handleSubmit}  
          />
        </div>
      </form>
      </>}
    </div>
  );
}

export default App;
