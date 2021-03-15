import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyled } from "./styles/global";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
  },
});

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyled />
    </>
  );
}
