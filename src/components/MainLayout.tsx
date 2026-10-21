import { useState } from "react";
import type { MenuProps } from "antd";
import { Layout } from "antd";
import { Outlet, useLocation, useMatches, useNavigate } from "react-router";
import { LayoutDashboard, Users } from "lucide-react";
import AppHeader from "./AppHeader";
import SideBar from "./Sidebar";
const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

type PageHandle = {
  title: string;
  description: string;
};

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
  const matches = useMatches();

  const currentMatch = [...matches].reverse().find((match) => {
    const handle = match.handle as Partial<PageHandle> | undefined;

    return (
      typeof handle?.title === "string" &&
      typeof handle?.description === "string"
    );
  });

  const pageInfo = currentMatch?.handle as PageHandle | undefined;

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
        <AppHeader />
      </Header>

      <Layout style={{ flex: 1, minHeight: 0 }}>
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            borderRight: "1px solid #e2e8f0",
          }}
        >
          <SideBar items={items} onClick={onClick} location={location} />
        </Sider>
        <Content
          style={{
            flex: 1,
            minWidth: 0,
            padding: 24,
            background: "#f5f7fb",
          }}
        >
          {pageInfo && (
            <div style={{ marginBottom: 20 }}>
              <h1 style={{ fontSize: 24, fontWeight: 600 }}>
                {pageInfo.title}
              </h1>

              <p style={{ color: "#64748b" }}>{pageInfo.description}</p>
            </div>
          )}

          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
