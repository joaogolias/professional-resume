import React from "react";
import logo from "./logo.svg";
import { useTranslation } from "react-i18next";
function App() {
  const { t } = useTranslation();
  return <div>{t("initial-greeting")}</div>;
}

export default App;
