import { Menu, type MenuProps } from "antd";
import type { Location } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

interface SideBarProps {
  items: MenuItem[];
  onClick: MenuProps["onClick"];
  location: Location;
}

const Sidebar = ({ items, onClick, location }: SideBarProps) => {
  return (
    <Menu
      theme="light"
      selectedKeys={[
        location.pathname.startsWith("/citizens") ? "/citizens" : "/",
      ]}
      mode="inline"
      items={items}
      onClick={onClick}
      style={{
        borderInlineEnd: 0,
        paddingTop: 12,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    />
  );
};

export default Sidebar;
