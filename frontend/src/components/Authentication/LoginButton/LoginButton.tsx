import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { theme } from "../../../Themes/theme";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button variant = "text" onClick={() => loginWithRedirect()} style={{ color: theme.palette.textcolor.main,}}>Log In</Button>;
};

export default LoginButton;