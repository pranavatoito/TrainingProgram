import { useEffect, useState } from "react";
import UsersTable from "../Components/UsersTable";
import TableLoading from "../utilities/Skeleton/TableLoading";

function Users() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://633ac69ee02b9b64c6173ceb.mockapi.io/Users")
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);
  if (data) {
    return <UsersTable data={data} />;
    // return <TableLoading />;
  } else {
    return <TableLoading />;
  }
}

export default Users;
