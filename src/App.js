import React from 'react';
import './App.css';
import Button from './components/Button';
import InputField from './components/InputField';
import TextareaField from './components/TextareaField';

class App extends React.Component {
  state = {
    name: '',
    surname: '', 
    birthDate: '',
    number: '',
    site: '',
    about: '', 
    technologyStack: '',
    projectDescription: ''
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState, 
      [name]: value
    }));
  }

  render() {
    return ( 
      <div className="app">
        <header>Создание анкеты</header>
        <form onSubmit={e => e.preventDefault()}>
          <InputField  
            type="text" 
            name="name" 
            handleChange={this.handleChange}
            labelText="Имя"
            placeholder="Введите имя" 
            value={this.state.name}  
          />
          <InputField  
            type="text" 
            name="surname" 
            handleChange={this.handleChange} 
            labelText="Фамилия"
            placeholder="Введите фамилию" 
            value={this.state.surname} 
          />
          <InputField  
            type="date" 
            name="birthDate" 
            handleChange={this.handleChange}
            labelText="Дата рождения" 
            placeholder="Введите дату рождения" 
            value={this.state.birthDate} 
          />
          <InputField  
            type="number" 
            name="number" 
            handleChange={this.handleChange}
            labelText="Телефон"
            placeholder="Введите номер телефона" 
            value={this.state.number} 
          />
          <InputField  
            type="text" 
            name="site" 
            handleChange={this.handleChange}
            labelText="Сайт"
            placeholder="Введите адрес сайта"
            value={this.state.site}  
          />
          <TextareaField
            rows="7" 
            name="about" 
            handleChange={this.handleChange}
            labelText="О себе"
            placeholder="Расскажите о себе" 
            value={this.state.about} 
          />
          <TextareaField
            rows="7" 
            name="technologyStack"
            handleChange={this.handleChange} 
            labelText="Стек технологий"
            placeholder="Введите стек технологий" 
            value={this.state.technologyStack} 
          />
          <TextareaField
            rows="7" 
            name="projectDescription" 
            handleChange={this.handleChange}
            labelText="Описание последнего проекта"
            placeholder="Введите описание последнего проекта" 
            value={this.state.projectDescription} 
          />
          <div className='buttons-div'>
            <Button text="Отмена" />
            <Button text="Сохранить" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
