import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import logOut from "../utilities/logOut";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../context/HeaderName";

export default function Drawer() {
  const navigate = useNavigate();
  const { setName } = useContext(HeaderContext);

  const handleLogOut = () => {
    logOut();
    setName("");
    navigate("/login", { replace: true });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        widh: "100%",
        maxWidth: "250px",
        height: "100%",
        border: " 1px solid #dddddd",
      }}
    >
      <div style={{ display: "flex", borderBottom: " 1px solid #dddddd" }}>
        <IconButton>
          <PeopleIcon />
        </IconButton>
        <Typography sx={{ margin: "10px 0" }}>My Users</Typography>
      </div>
      <div
        style={{ display: "flex", borderTop: " 1px solid #dddddd", cursor: "pointer" }}
        onClick={() => handleLogOut()}
      >
        <IconButton>
          <LogoutIcon />
        </IconButton>
        <Typography sx={{ margin: "10px 0" }}>Log Out</Typography>
      </div>
    </div>
  );
}
