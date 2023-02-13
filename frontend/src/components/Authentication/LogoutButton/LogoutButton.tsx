import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { theme } from "../../../Themes/theme";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <Button variant = "text" onClick={() => logout({ returnTo: window.location.origin })} style={{ color: theme.palette.textcolor.main,}}>Log Out</Button>;
};

export default LogoutButton;