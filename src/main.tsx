import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import ruRU from "antd/locale/ru_RU";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      locale={ruRU}
      theme={{
        token: {
          colorPrimary: "#2563eb",
          colorBgLayout: "#f5f7fb",
          colorBgContainer: "#ffffff",
          colorText: "#1e293b",
          colorTextSecondary: "#64748b",
          colorBorder: "#e2e8f0",
          borderRadius: 8,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
