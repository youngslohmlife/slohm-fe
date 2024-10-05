import { Drawer } from "@material-ui/core";
import NavContent from "./NavContent.jsx";
import "./sidebar-old.scss";

function Sidebar({ theme }) {
  return (
    <div className={`sidebar`} id="sidebarContent">
      <Drawer variant="permanent" anchor="left">
        <NavContent theme={theme} />
      </Drawer>
    </div>
  );
}

export default Sidebar;
