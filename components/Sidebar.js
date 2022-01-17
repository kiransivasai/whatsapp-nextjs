import React from "react";
import styles from "./Sidebar.module.scss";
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CustomVerticalMore from "./CustomVerticalMore";

const Sidebar = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.header}>
        <Avatar
          className={styles.avatar}
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <div className={styles.iconsGroup}>
          <IconButton>
            <img src="/assets/images/story.svg" />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <CustomVerticalMore />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
