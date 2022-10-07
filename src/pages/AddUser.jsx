import { useState } from "react";
import UserForm from "../Components/UserForm";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setLoading(true);
    fetch("https://633ac69ee02b9b64c6173ceb.mockapi.io/Users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ ...data, dob: data.dob.format() }),
    })
      .then((r) => r.json())
      .then((d) => {
        console.log("after update", d);
        setLoading(false);
        navigate("/users", { replace: true, state: `You Successfully Added New User ${d.name}` });
      });
  };
  const defaultValues = { name: "", dob: moment(), active: false };
  return (
    <div>
      <UserForm
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        title={"Add User"}
        loading={loading}
      />
    </div>
  );
}

export default AddUser;
