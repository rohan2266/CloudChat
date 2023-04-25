import React from "react";
import { Menu } from "semantic-ui-react";
import UserInfo from "./UserInfo/UserInfo.component";
import Channels from "./Channels/Channels.component";
import PrivateChat from "./PrivateChat/PrivateChat.component";
import FavouriteChannels from "./FavouriteChannels/FavouriteChannels.component";

import "./SideBar.css";

export const SideBar = () => {
  return (
    <Menu
      vertical
      secondary
      fixed="right"
      border
      size="large"
      className="side_bar"
      background_img
    >
      <UserInfo />
      <FavouriteChannels />
      <Channels />
      <PrivateChat />
    </Menu>
  );
};
