import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </footer>
    </div>
  );
}

export default Sidebar;
