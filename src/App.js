import React from 'react';
import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';
import TextareaField from './components/TextareaField';
import InfoField from './components/InfoField';
import { startsWithCap, formatNumber, isFullNumber, 
      isValidDate, isValidSite, hasLimitedCharacters } from "./utils";
class App extends React.Component {
  state = {
    name: '',
    surname: '', 
    birthDate: '',
    number: '',
    site: '',
    about: '', 
    technologyStack: '',
    projectDescription: '',
    invalidFields: {},
    submitted: false
  }
  
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState(prevState => ({
      ...prevState, 
      [name]: value, 
      submitted: false
    }))
  }

  handleNumberChange = (event) => {
    const { value } = event.target
    this.setState(prevState => ({
      ...prevState, 
      number: formatNumber(value),
      submitted: false
    }))
  }

  handleTextareaChange = (event) => {
    const { name, value } = event.target
    this.handleChange(event)
    if(!hasLimitedCharacters(value)) {
      this.setFieldInvalid(name)
    }
  }

  handleSubmit = () => {
    this.setState(prevState => ({
      ...Object.keys(prevState).reduce((trimmedState, key) => {
        trimmedState[key] = typeof prevState[key] === 'string' ? 
        prevState[key].trim() : prevState[key]
        return trimmedState
      }, {}),
      submitted: true
    }))

    this.setState(prevState => ({
      ...prevState, 
      invalidFields: {}
    }))

    if(!startsWithCap(this.state.name)) 
      this.setFieldInvalid("name")
    
    if(!startsWithCap(this.state.surname)) 
      this.setFieldInvalid("surname")
    
    if(!isFullNumber(this.state.number)) 
      this.setFieldInvalid("number")
    
    if(!isValidDate(this.state.birthDate) ) 
      this.setFieldInvalid("birthDate")
    
    if(!isValidSite(this.state.site)) 
      this.setFieldInvalid("site")
    
    if(!this.state.about || 
      !hasLimitedCharacters(this.state.about)) 
      this.setFieldInvalid("about")
    
    if(!this.state.technologyStack || 
      !hasLimitedCharacters(this.state.technologyStack)) 
      this.setFieldInvalid("technologyStack")

    if(!this.state.projectDescription || 
      !hasLimitedCharacters(this.state.projectDescription)) 
      this.setFieldInvalid("projectDescription")
  }

  setFieldInvalid = (fieldName) => {
    this.setState(prevState => ({
      ...prevState, 
      invalidFields: {
        ...prevState.invalidFields, 
        [fieldName]: true
      }
    }))
  }

  handleCancel = () => {
    this.setState(prevState => 
      Object.keys(prevState).reduce((acc, key) => {
      acc[key] = ''
      return acc
    }, {}))
  }

  render() {
    return ( 
      <div className="app">
        {(this.state.submitted && Object.keys(this.state.invalidFields).length === 0
        ) ? 
        <>
        <header>анкета</header>
        <main className="main-content">
          <h3>{this.state.name} {this.state.surname}</h3>
          <InfoField title="Дата рождения" content={this.state.birthDate}/>
          <InfoField title="Телефон" content={this.state.number}/>
          <InfoField title="Сайт" content={this.state.site}/>
          <InfoField title="О себе" content={this.state.about}/>
          <InfoField title="Стек технологий" content={this.state.technologyStack}/>
          <InfoField title="Описание последнего проекта" content={this.state.projectDescription}/>
        </main>
        </> :
        <> 
        <header>Создание анкеты</header>
        <form className="main-content" onSubmit={e => e.preventDefault()}>
          <InputField  
            type="text" 
            name="name" 
            handleChange={this.handleChange}
            labelText="Имя"
            placeholder="Введите имя" 
            value={this.state.name}  
            submitted={this.state.submitted}
            validated={!this.state.invalidFields["name"]}
            validationFailedText={"Первый символ должен быть заглавной буквой"}
          />
          <InputField  
            type="text" 
            name="surname" 
            handleChange={this.handleChange} 
            labelText="Фамилия"
            placeholder="Введите фамилию" 
            value={this.state.surname} 
            submitted={this.state.submitted}
            validated={!this.state.invalidFields["surname"]}
            validationFailedText={"Первый символ должен быть заглавной буквой"}
          />
          <InputField  
            type="date" 
            name="birthDate" 
            handleChange={this.handleChange}
            labelText="Дата рождения" 
            placeholder="Введите дату рождения" 
            value={this.state.birthDate} 
            submitted={this.state.submitted}
            validated={!this.state.invalidFields["birthDate"]}
            validationFailedText={"Введите действительную дату"}
          />
          <InputField  
            type="text" 
            name="number" 
            handleChange={this.handleNumberChange}
            labelText="Телефон"
            placeholder="Введите номер телефона" 
            value={this.state.number} 
            submitted={this.state.submitted}
            validated={!this.state.invalidFields["number"]}
            validationFailedText={"Введите полный номер"}
          />
          <InputField  
            type="text" 
            name="site" 
            handleChange={this.handleChange}
            labelText="Сайт"
            placeholder="Введите адрес сайта"
            value={this.state.site}  
            submitted={this.state.submitted}
            validated={!this.state.invalidFields["site"]}
            validationFailedText={"Должен начинаться с https://"}
          />
          <TextareaField
            rows="7" 
            name="about" 
            handleChange={this.handleTextareaChange}
            labelText="О себе"
            placeholder="Расскажите о себе" 
            value={this.state.about} 
            submitted={this.state.submitted}
          />
          <TextareaField
            rows="7" 
            name="technologyStack"
            handleChange={this.handleTextareaChange} 
            labelText="Стек технологий"
            placeholder="Введите стек технологий" 
            value={this.state.technologyStack} 
            submitted={this.state.submitted}
          />
          <TextareaField
            rows="7" 
            name="projectDescription" 
            handleChange={this.handleTextareaChange}
            labelText="Описание последнего проекта"
            placeholder="Введите описание последнего проекта" 
            value={this.state.projectDescription} 
            submitted={this.state.submitted}
          />
          <div className='buttons-div'>
            <Button 
              text="Отмена" 
              handleClick={this.handleCancel}  
            />
            <Button 
              text="Сохранить" 
              handleClick={this.handleSubmit}  
            />
          </div>
        </form>
        </>}
      </div>
    );
  }
}

export default App;
