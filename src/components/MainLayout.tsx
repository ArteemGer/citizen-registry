import { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router";
import { LayoutDashboard, Users } from "lucide-react";
const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "/",
    label: "Дешборд",
    icon: <LayoutDashboard />,
  },
  {
    key: "/citizens",
    label: "Граждане",
    icon: <Users />,
  },
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const onClick: MenuProps["onClick"] = (item) => {
    navigate(item.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          height: 64,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          background: "#fff",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 600 }}>Реестр граждан</div>
      </Header>

      <Layout>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            borderRight: "1px solid #e2e8f0",
          }}
        >
          <div className="demo-logo-vertical" />
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
            }}
          />
        </Sider>
        <Content
          style={{
            minWidth: 0,
            padding: 24,
            background: "#f5f7fb",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
