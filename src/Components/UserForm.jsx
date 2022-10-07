import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi";
import userSchema from "../utilities/schema/user";

const User = ({ onSubmit, defaultValues, title, loading }) => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(userSchema),
    defaultValues,
  });
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        width={"min(350px,90vw)"}
        gap={2}
        margin="20px auto"
        height={"80vh"}
        justifyContent="center"
      >
        <Typography variant="h4" color={"GrayText"}>
          {title}
        </Typography>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              variant="outlined"
              error={errors?.name ? true : false}
              helperText={errors?.name?.message}
            />
          )}
        />
        <Controller
          name="dob"
          control={control}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                label="Date of Birth"
                {...field}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={errors?.dob ? true : false}
                    helperText={errors?.dob?.message}
                  />
                )}
              />
            </LocalizationProvider>
          )}
        />
        <Controller
          name="active"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Switch {...field} defaultChecked={defaultValues.active} />}
              label="Active"
            />
          )}
        />
        <div style={{ margin: "0 auto" }}>
          <Button
            variant="outlined"
            sx={{ width: "min(150px,40vw)", margin: "5px" }}
            onClick={() => navigate("/users", { replace: true, state: null })}
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "min(150px,40vw)", margin: "5px" }}
            disabled={loading || Boolean(Object.keys(errors).length)}
            endIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? "Saving" : "Save"}
          </Button>
        </div>
      </Stack>
    </form>
  );
};
export default User;
