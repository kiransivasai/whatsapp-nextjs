import React from "react";
import styles from "./Sidebar.module.scss";
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CustomVerticalMore from "./CustomVerticalMore";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

      <div className={styles.notification}>
        <Avatar className={styles.notificationAvatar}>
          <NotificationsOffIcon style={{ color: "#9de1fe" }} />
        </Avatar>
        <div className={styles.notificationText}>
          <div>Get Notified of New Messages</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="#">
              <u>Turn on desktop notifications</u>
            </a>
            <IconButton>
              <ArrowForwardIosIcon style={{ width: 15, height: 15 }} />
            </IconButton>
          </div>
        </div>
      </div>

      <div className={styles.searchChat}>
        <div className={styles.searchBar}>
          <SearchIcon />
          <input
            placeholder="Search or start new chat"
            className={styles.searchInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
