import React, { useCallback, useContext } from "react";
import Form from 'react-bootstrap/Form';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { withRouter, Redirect } from 'react-router';
import appAuth from './base.js';
import { AuthContext } from './auth.js';

const schema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await appAuth
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />
  }

  return(
    <div className="login d-flex">
                <div className="container mt-auto mb-auto">
                    <h1 className="text-white text-center">Inicia Sesión</h1>
                    <div className="form">
                    <Formik
      validationSchema={schema}
      onSubmit={handleLogin}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        //ariel@nextu.com.mx
        //prueba123
        <Form noValidate onSubmit={handleLogin}>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="validationFormik01">
              <Form.Label className="text-white">Email</Form.Label> 
              <Form.Control
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                placeholder="Correo Electrónico"
              />
              <Form.Control.Feedback type="invalid">Necesitas un mail válido</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" controlId="validationFormik02">
              <Form.Label className="text-white">Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                placeholder="Contraseña"
              />
              <Form.Control.Feedback type="invalid">Ingresa una contraseña correcta</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type="submit" className="center mt-2">Ingresar</Button>
        </Form>
      )}
    </Formik>
                    </div>
                </div>
            </div>
  )
}

export default withRouter(Login);
