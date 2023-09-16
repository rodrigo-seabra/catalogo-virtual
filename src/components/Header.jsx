import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import { styled, alpha } from "@mui/material/styles";

export default function Header(props) {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const [menu, setMenu] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "rgba(3, 98, 252, 0.76)", color: "black" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {!menu && (
              <MenuIcon
                onClick={() => {
                  setMenu(true);
                }}
              />
            )}
            {menu && (
              <CloseIcon
                onClick={() => {
                  setMenu(false);
                }}
              />
            )}
          </IconButton>
          {menu && (
            <Box
              component={"div"}
              sx={{
                position: "absolute",
                top: 63,
                left: 0,
                height: 900,
                width: 300,
                backgroundColor: "#8CB8FF",
              }}
            >
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexFlow: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  backgroundColor: "#8CB8FF",
                  color: "black",
                }}
              >
                <Button>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, color: "black" }}
                  >
                    Cadastrar carro
                  </Typography>
                </Button>
                <Button>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, color: "black" }}
                  >
                    Carros
                  </Typography>
                </Button>
              </Box>
            </Box>
          )}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CARS
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
