import React, { useState } from "react";
import {
  Grid,
  Form,
  Segment,
  Header,
  Icon,
  Button,
  Message,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

import firebase from "../../../server/firebase";
import cloudchat from "./cloudchat.png";

import "../Auth.css";

const Login = () => {
  let user = {
    email: "",
    password: "",
  };

  let errors = [];

  const [userState, setuserState] = useState(user);
  const [isLoading, setIsLoading] = useState(false);
  const [errorState, seterrorState] = useState(errors);

  const handleInput = (event) => {
    let target = event.target;
    setuserState((currentState) => {
      let currentuser = { ...currentState };
      currentuser[target.name] = target.value;
      return currentuser;
    });
  };

  const checkForm = () => {
    if (isFormEmpty()) {
      seterrorState((error) =>
        error.concat({ message: "Please fill in all fields" })
      );
      return false;
    }
    return true;
  };

  const isFormEmpty = () => {
    return !userState.password.length || !userState.email.length;
  };

  const formaterrors = () => {
    return errorState.map((error, index) => <p key={index}>{error.message}</p>);
  };

  const onSubmit = (event) => {
    seterrorState(() => []);
    if (checkForm()) {
      setIsLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(userState.email, userState.password)
        .then((user) => {
          setIsLoading(false);
          console.log(user);
        })
        .catch((serverError) => {
          setIsLoading(false);
          seterrorState((error) => error.concat(serverError));
        });
    }
  };

  return (
    <Grid
      verticalAlign="middle"
      textAlign="center"
      className="grid-form"
      style={{
        backgroundImage: `url("https://static.scientificamerican.com/sciam/cache/file/6B2730C8-B0D0-485F-A0618F3954CF58D8_source.jpg")`,
        // backgroundRepeat: 'no-repeat',
        // height: '100%',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Grid.Column
        style={{
          maxWidth: "500px",
        }}
      >
        <Header as="h2" icon>
          <div
            style={{
              borderRadius: "55%",
              verticalAlign: "top",
              alignContent: "center",
              overflow: "hidden",
              width: "250px",
              height: "230px",
            }}
          >
            <img src={cloudchat} />
            <br />
          </div>
        </Header>
        <Form inverted onSubmit={onSubmit}>
          <Segment inverted stacked>
            <Header as="h2" icon>
              Login
            </Header>

            <Form.Input
              name="email"
              value={userState.email}
              icon="mail"
              iconPosition="left"
              onChange={handleInput}
              type="email"
              placeholder="User Email"
            />
            <Form.Input
              name="password"
              value={userState.password}
              icon="lock"
              iconPosition="left"
              onChange={handleInput}
              type="password"
              placeholder="User Password"
            />
          </Segment>
          <Button color="blue" disabled={isLoading} loading={isLoading}>
            Login
          </Button>
        </Form>
        {errorState.length > 0 && (
          <Message error>
            <h3>Errors</h3>
            {formaterrors()}
          </Message>
        )}
        <Message color="black">
          Not an User? <Link to="/register">Register </Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
