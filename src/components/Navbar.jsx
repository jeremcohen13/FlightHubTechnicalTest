import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function Navbar() {
  return (
    <Menu inverted>
      <Link to="/">
        <Menu.Item name="Home"></Menu.Item>
      </Link>
      <Link to="/People">
        <Menu.Item name="People"></Menu.Item>
      </Link>
      <Link to="/Planets">
        <Menu.Item name="Planets"></Menu.Item>
      </Link>
      <Link to="/Starships">
        <Menu.Item name="Starships"></Menu.Item>
      </Link>
    </Menu>
  );
}
