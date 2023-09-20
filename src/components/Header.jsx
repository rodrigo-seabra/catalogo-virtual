import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import { Button, Link } from "@mui/material";
import fotoperfil from "../Photos/perfil.jpg";

function Header(props) {
  const [logado, setLogado] = React.useState(false);
  const user = localStorage.getItem("usuario");
  React.useEffect(() => {
    if (user) {
      setLogado(true);
    } else {
      setLogado(false);
    }
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.76)",
        color: "white",
        height: "60px",
      }}
    >
      <Container maxWidth="1920px">
        <Toolbar disableGutters>
          <MinorCrashIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CARS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link
                href="http://localhost:3000/cadastrar-carro"
                sx={{ display: "block" }}
              >
                Cadastre seu carro
              </Link>
              <Link
                href="http://localhost:3000/exibe-carros"
                sx={{ display: "block" }}
              >
                Carros
              </Link>
            </Menu>
          </Box>
          <MinorCrashIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}
          >
            <Link
              href="http://localhost:3000/cadastrar-carro"
              sx={{ color: "white", textDecoration: "none" }}
            >
              Cadastre seu carro
            </Link>
            <Link
              href="http://localhost:3000/exibe-carros"
              sx={{ color: "white", textDecoration: "none" }}
            >
              Carros
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {logado && <Avatar alt="Remy Sharp" src={fotoperfil} />}
                {!logado && <Avatar alt="Remy Sharp" src="" />}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Button>
                  <Link
                    textAlign="center"
                    href="http://localhost:3000/cadastro"
                    sx={{ textDecoration: "none" }}
                  >
                    Cadastrar
                  </Link>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Button>
                  <Link
                    textAlign="center"
                    href="http://localhost:3000/login"
                    sx={{ textDecoration: "none" }}
                  >
                    Login
                  </Link>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Button
                  onClick={() => {
                    localStorage.removeItem("usuario");
                    window.location.reload();
                  }}
                >
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
