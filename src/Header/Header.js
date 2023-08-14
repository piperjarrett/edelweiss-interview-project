import { useState } from "react";
import catalog from "../data";
import "./Header.css";
const Header = () => {
  const [headerCatalog, setHeaderCatalog] = useState(catalog); // this is a placeholder for a proper fetch

  return (
    <header>
      <h1>{headerCatalog.name}</h1>
      <h2>{headerCatalog.orgName}</h2>
    </header>
  );
};

export default Header;
