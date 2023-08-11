import { useState } from "react";
import catalog from "../data";
import "./Header.css";
const Header = () => {
  const [headerCatalog, setHeaderCatalog] = useState(catalog);
  console.log(headerCatalog);
  return (
    <header
    // style={{ backgroundImage: `url('${headerCatalog.imageUri}')` }}
    >
      <h1>{headerCatalog.name}</h1>
      <h2>{headerCatalog.orgName}</h2>
    </header>
  );
};

export default Header;
