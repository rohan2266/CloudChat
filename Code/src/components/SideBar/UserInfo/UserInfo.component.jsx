import React from "react";
import { Grid, Header, Icon, Image, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import firebase from "../../../server/firebase";
import cloudchat from "./cloudchat.png";

import "./UserInfo.css";

const UserInfo = (props) => {
  const getDropDownOptions = () => {
    return [
      {
        key: "signout",
        text: <span onClick={signOut}>Sign Out</span>,
      },
    ];
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("user signed out"));
  };

  if (props.user) {
    return (
      <Grid>
        <Grid.Column>
          <Grid.Row className="userinfo_grid_row">
            <Header inverted as="h2">
              <img
                src={cloudchat}
                style={{
                  borderRadius: "55%",
                  verticalAlign: "top",
                  alignContent: "center",
                  overflow: "hidden",
                  //   width: "250px",
                  //   height: "230px",
                }}
              />
              <br />
              <Header.Content>CloudChat</Header.Content>
            </Header>
            <Header className="userinfo_displayname" inverted as="h4">
              <Dropdown
                trigger={
                  <span>
                    <Image src={props.user.photoURL} avatar></Image>
                    {props.user.displayName}
                  </span>
                }
                options={getDropDownOptions()}
              ></Dropdown>
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(UserInfo);
