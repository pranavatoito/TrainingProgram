import React, { useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Drawer from "../Components/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Outlet, useLocation } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Home() {
  const [open, setOpen] = React.useState(false);
  const [snackText, setSnackText] = React.useState("");
  const location = useLocation();
  useEffect(() => {
    if (location?.state) {
      setSnackText(location?.state);
      setOpen(true);
      console.log("testing", location, open);
    }
  }, [location.state]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const mobile = useMediaQuery("(min-width:600px)");
  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ width: "100%" }} onClose={handleClose}>
          {snackText} &#127881;
        </Alert>
      </Snackbar>
      <Grid container spacing={0} height={"89vh"}>
        <Grid md={3} display={!mobile && "none"}>
          <Drawer />
        </Grid>

        <Grid xs={12} md={9}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
