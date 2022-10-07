import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { HeaderContext } from "../context/HeaderName";
import { useContext } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import loginSchema from "../utilities/schema/login";

const Login = () => {
  const navigate = useNavigate();
  const { setName } = useContext(HeaderContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });
  console.log(errors);
  const onSubmit = (data) => {
    window.localStorage.setItem("fullName", data.fullName);
    window.localStorage.setItem("email", data.email);
    window.localStorage.setItem("password", data.password);
    setName(data.fullName);
    navigate("/users", {
      replace: true,
      state: `Welcome ${data.fullName}, Login Successful`,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        width={"min(350px,90vw)"}
        gap={2}
        margin="20px auto"
        height={"70vh"}
        justifyContent="center"
      >
        <Typography variant="h4" color={"GrayText"}>
          User Login
        </Typography>
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Full Name"
              variant="outlined"
              error={errors?.fullName ? true : false}
              helperText={errors?.fullName?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              error={errors?.email ? true : false}
              helperText={errors?.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              variant="outlined"
              type={"password"}
              error={errors?.password ? true : false}
              helperText={
                errors?.password ? "Passowrd should contain Uppercase, lowercase and numbers" : ""
              }
            />
          )}
        />
        <Button type="submit" variant="contained" disabled={Boolean(Object.keys(errors).length)}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};
export default Login;
