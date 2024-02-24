import React, { ChangeEvent, FormEvent } from 'react';
import './styles.css';

interface State {
  nickname: string;
  email: string;
  gender: string;
  age: string;
}

class RegistrationForm extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      nickname: '',
      email: '',
      gender: '',
      age: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!this.state.nickname || !this.state.email || !this.state.gender || !this.state.age) {
      alert('Будь ласка, заповніть всі поля.');
    } else {
      alert('Форму успішно відправлено!');
    }
  }

  render() {
    return (
        <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <label>
          Нік:
          <input type="text" name="nickname" value={this.state.nickname} onChange={this.handleChange} />
        </label>
        <label>
          Електронна адреса:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Стать:
          <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange} />
        </label>
        <label>
          Вік:
          <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
        </label>
        <button type="submit">Відправити</button>
      </form>
    );
  }
}

export default RegistrationForm;
