import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const fields = {
  marginBottom: "20px",
  width: "400px",
};

const pages = ["Home", "My files", "Convert"];
const settings = ["Profile", "Logout"];

interface NavigationProps {}

export const Navigation = (props: NavigationProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogined, setIsLogined] = useState(false); //тимчасова змінна, змінити

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setPassword("");
  };

  const handleLogIn = () => {
    var credential = {
      password: password,
      email: email,
    };

    console.log(credential);
    //TODO axios login
    alert("Logined");
    setIsLogined(true);
    setOpen(false);
  };

  const handleLogOut = () => {
    setIsLogined(false);
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AddAPhotoIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
            Drawing Recognizer
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
              <MenuItem key={"home"} onClick={handleCloseNavMenu}>
                <Link href="/" underline="none">
                  Home
                </Link>
                {/* <Link></Link> */}
              </MenuItem>
              <MenuItem key={"myFiles"} onClick={handleCloseNavMenu}>
                <Link href="/user-files-page" underline="none">
                  My Files
                </Link>
                {/* <Link></Link> */}
              </MenuItem>
              <MenuItem key={"convert"} onClick={handleCloseNavMenu}>
                <Link href="/file-conversion-page" underline="none">
                  Convert
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <AddAPhotoIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key={"home"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/"
            >
              Home
            </Button>
            <Button
              key={"myFiles"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/user-files-page"
            >
              My Files
            </Button>
            <Button
              key={"convert"}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              href="/file-conversion-page"
            >
              Convert
            </Button>
          </Box>

          {isLogined ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
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
                  <MenuItem key={"profile"} onClick={handleCloseUserMenu}>
                    {/* <Typography textAlign="center">{setting}</Typography> */}
                    <Link underline="none" href="/profile">
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem key={"logOut"} onClick={handleCloseUserMenu}>
                    {/* <Typography textAlign="center">{setting}</Typography> */}
                    <Link underline="none" onClick={handleLogOut}>
                      Log Out
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Button
                  onClick={handleOpen}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Log In
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <TextField
                      id="outlined-basic"
                      label="Login"
                      variant="outlined"
                      style={fields}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      type="password"
                      style={fields}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{ display: "block" }}
                      onClick={() => {
                        handleLogIn();
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Modal>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
