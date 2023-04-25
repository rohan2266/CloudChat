import React from "react";
import { Segment, Header, Input, Icon } from "semantic-ui-react";
import "./MessageHeader.css";

const MessageHeader = (props) => {
  return (
    <Segment clearing>
      <Header floated="center" fluid="true" as="h2">
        <span>
          {(props.isPrivateChat ? "@ " : "# ") + props.channelName}
          {!props.isPrivateChat && (
            <Icon
              onClick={props.starChange}
              name={props.starred ? "star" : "star outline"}
              color={props.starred ? "yellow" : "black"}
            />
          )}
        </span>
        <Header.Subheader>
          {" "}
          {props.uniqueUsers} User{props.uniqueUsers === 1 ? "" : "s"}
        </Header.Subheader>
      </Header>
      <Header floated="left">
        <Input
          id="search"
          name="search"
          icon="search"
          placeholder="Search"
          size="large"
          style={{
            color: "#12c595",
            borderRadius: "55%",
          }}
          onChange={props.searchTermChange}
        />
      </Header>
    </Segment>
  );
};

export default MessageHeader;
