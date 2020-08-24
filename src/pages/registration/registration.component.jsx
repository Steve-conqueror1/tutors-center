import React, { Component } from 'react';
import InputComponent from '../../components/shared/input/input.components';
import SelectComponent from '../../components/shared/input/select.components';
import cities from '../../data/cities';
import subjects from '../../data/subjects';
import { withRouter } from 'react-router-dom';
import INITIAL_STATE from './initialState';

import './registration.styles.scss';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async (e) => {
    e.preventDefault();

    const {
      surname,
      firstname,
      middlename,
      sex,
      dateOfBirth,
      experience,
      phone,
      email,
      region,
      subject,
      passwordOne,
      // passwordTwo,
      // image,
      // imageError,
      imageUrl,
    } = this.state;

    console.log(this.state);

    try {
      await this.props.firebase.doCreateUserWithEmailAndPassword(
        email,
        passwordOne
      );
      console.log('User Authenticated..............');
    } catch (error) {
      this.setState({ error });
    }

    const userDetail = await {
      surname,
      firstname,
      middlename,
      sex,
      dateOfBirth,
      experience,
      phone,
      email,
      region,
      subject,
      imageUrl,
    };

    console.log('userDetail', userDetail);

    await this.props.firebase.doAddUserDetail(userDetail);
    await this.setState({ ...INITIAL_STATE });

    this.props.history.push('/');

    console.log('exiting.......');
  };

  onClick = (e) => {
    this.setState({ sex: e.target.value });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFileUpload = async (e) => {
    const imageAllowedTypes = ['image/png', 'image/jpeg'];

    let selected = e.target.files[0];
    if (selected && imageAllowedTypes.includes(selected.type)) {
      await this.setState({ image: selected });
      await this.setState({ imageError: '' });
      await console.log(this.state.image);
      const imageUrl = await this.props.firebase.doStoreImage(
        this.state.image.name,
        this.state.image
      );

      await this.setState({ imageUrl });
      console.log(this.state.imageUrl);
    } else {
      await this.setState({ image: null });
      await this.setState({
        imageError: 'Only (.png or .jpeg) files types are accepted',
      });
    }
  };

  render() {
    const {
      surname,
      firstname,
      middlename,
      email,
      phone,
      sex,
      region,
      subject,
      dateOfBirth,
      passwordOne,
      passwordTwo,
      error,
      image,
      imageError,
    } = this.state;

    return (
      <div className="registration">
        <div className="container">
          <div className="registration__header">
            <h1>Registration for Tutors</h1>
          </div>
          <div className="registration__form">
            <form className="form" onSubmit={this.onSubmit}>
              <div className="form__fields">
                <div className="form__detail">
                  <div className="form__control">
                    <label htmlFor="surname">Surname </label>
                    <InputComponent
                      name="surname"
                      type="text"
                      value={surname}
                      placeholder="Enter Surname"
                      id="surname"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form__control">
                    <label htmlFor="firstname">Firstname </label>
                    <InputComponent
                      type="text"
                      name="firstname"
                      value={firstname}
                      placeholder="Enter Firstname"
                      id="firstname"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form__control">
                    <label htmlFor="middlename">Middlename </label>
                    <InputComponent
                      type="text"
                      name="middlename"
                      value={middlename}
                      placeholder="Enter Middlename"
                      id="middlename"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form__control">
                    <label>Sex</label>
                    <div className="form__radio-boxes">
                      <input
                        type="radio"
                        name="sex"
                        id="male"
                        onClick={this.onClick}
                        value="male"
                        onChange={this.onChange}
                      />
                      <label htmlFor="male">Male</label>
                      <input
                        type="radio"
                        id="female"
                        name="sex"
                        onClick={this.onClick}
                        value="female"
                        onChange={this.onChange}
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>

                  <div className="form__control">
                    <label htmlFor="birthdate">Date of Birth </label>
                    <InputComponent
                      type="date"
                      name="dateOfBirth"
                      id="birthdate"
                      value={dateOfBirth}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form__control">
                    <label htmlFor="profile">Profile </label>
                    <label htmlFor="profile" className="custom-file-upload">
                      <i className="fas fa-file-upload"></i>
                      <span>Upload photo</span>
                      <InputComponent
                        type="file"
                        name="profile"
                        id="profile"
                        onChange={this.handleFileUpload}
                      />
                    </label>
                    {imageError && (
                      <div className="image-error">{imageError}</div>
                    )}
                    {image && <div className="img-name">{image.name}</div>}
                  </div>
                  <div className="form__control">
                    <label htmlFor="experience">Experience </label>
                    <InputComponent
                      type="number"
                      name="experience"
                      id="experience"
                      value={this.value}
                      placeholder="Experience in Years"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="form__authentication">
                  <div className="form__control">
                    <label htmlFor="phone">Mobile Number </label>
                    <InputComponent
                      type="tel"
                      name="phone"
                      value={phone}
                      placeholder="Enter Phone"
                      id="phone"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form__control">
                    <label htmlFor="email">E-mail </label>

                    <InputComponent
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Enter Email"
                      id="email"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form__control">
                    <label htmlFor="email">Region </label>
                    <SelectComponent
                      items={cities}
                      name="region"
                      value={region}
                      onChange={this.onChange}
                      message="choose your city"
                    />
                  </div>
                  <div className="form__control">
                    <label htmlFor="email">Subject </label>
                    <SelectComponent
                      items={subjects}
                      name="subject"
                      value={subject}
                      onChange={this.onChange}
                      message="Choose your subject"
                    />
                  </div>

                  <div className="form__control">
                    <label htmlFor="password">Password </label>
                    <InputComponent
                      type="password"
                      name="passwordOne"
                      value={passwordOne}
                      placeholder="Enter Password"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form__control">
                    <label htmlFor="confirm-password">Confirm Password </label>
                    <InputComponent
                      type="password"
                      name="passwordTwo"
                      value={passwordTwo}
                      placeholder="Confirm Password"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form__submit">
                <InputComponent type="submit" name="submit" value="Register" />
              </div>

              {error && <p>{error.message} </p>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const SignUpPage = withRouter(Register);
export default SignUpPage;
