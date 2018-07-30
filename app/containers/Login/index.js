/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import Button from 'components/Button';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogin, { selectEmail } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { login } from './actions';

const FloatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
const FloatBox = styled.div`
  border: 1px solid #dfdfdf;
  padding: 15px;
  min-width: 300px;
`;
const FormGroup = styled.div`
  margin-bottom: 5px;
`;
const Label = styled.label`
  font-size: 1.6rem;
  display: block;
`;
const Input = styled.input`
  padding: 5px;
  border: 1px solid #dfdfdf;
  display: block;
  width: 100%;
`;

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    this.props.doLogin(this.state.email, this.state.password);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>
        <FloatContainer>
          <FloatBox>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                placeholder="Email here"
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                placeholder="Password here"
              />
            </FormGroup>
            <Button onClick={() => this.onLogin()}>Login</Button>
          </FloatBox>
        </FloatContainer>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  doLogin: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginInfo: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    doLogin: (email, password) => dispatch(login(email, password)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
