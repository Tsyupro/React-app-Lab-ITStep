import React, { ChangeEvent } from 'react';
import './styles.css';

interface State {
  name: string;
  phone: string;
  email: string;
  city: string;
}

class PersonalPage extends React.Component<{}, State> {
  initialState: State = {
    name: 'Імя',
    phone: 'Телефон',
    email: 'Email',
    city: 'Місто'
  };

  constructor(props: {}) {
    super(props);
    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  reset() {
    this.setState(this.initialState);
  }

  render() {
    return (
      <div className="PersonalPage">
        <label>
          Ім\'я:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Телефон:
          <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Місто:
          <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
        </label>
        <button onClick={this.reset}>Скинути</button>
      </div>
    );
  }
}

export default PersonalPage;
