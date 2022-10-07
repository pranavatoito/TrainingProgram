import { useState, useEffect } from "react";
import UserForm from "../Components/UserForm";
import { useParams, useNavigate } from "react-router-dom";

function EditUser() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params?.id);
  const [loading, setLoading] = useState(false);
  const [defaultValues, setDefaultValues] = useState();
  useEffect(() => {
    fetch("https://633ac69ee02b9b64c6173ceb.mockapi.io/Users/" + params?.id)
      .then((r) => r.json())
      .then((data) => setDefaultValues(data))
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (data) => {
    setLoading(true);
    fetch("https://633ac69ee02b9b64c6173ceb.mockapi.io/Users/" + params?.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, dob: data.dob.format() }),
    })
      .then((r) => r.json())
      .then((d) => {
        console.log("after update", d);
        setLoading(false);
        navigate("/users", {
          replace: true,
          state: `You Successfully Upadated ${d.name} details `,
        });
      });
  };
  if (defaultValues) {
    return (
      <div>
        <UserForm
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          title={"Edit User"}
          loading={loading}
        />
      </div>
    );
  } else {
    return null;
  }
}

export default EditUser;
