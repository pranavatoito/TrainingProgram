import { useEffect, useMemo, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Tabel from "./Tabel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
// headers and buttons
const headers = ["id", "name", "dob", "active"];
const EditButton = ({ id }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("edit/" + id);
  };
  return (
    <Button startIcon={<EditIcon />} onClick={handleEdit}>
      Edit
    </Button>
  );
};
const DeleteButton = ({ id, setRowData, rowData }) => {
  const navigate = useNavigate();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const handleDelete = () => {
    console.log("deleteing", id);
    setDeleteLoading(true);
    fetch("https://633ac69ee02b9b64c6173ceb.mockapi.io/Users/" + id, { method: "DELETE" })
      .then((r) => r.json())
      .then((data) => {
        setDeleteLoading(false);
        setRowData(rowData.filter((r) => r.id !== id));
      })
      .catch((err) => console.log(err));
  };
  return (
    <Button
      disabled={deleteLoading}
      color="error"
      startIcon={!deleteLoading ? <DeleteForeverIcon /> : null}
      onClick={handleDelete}
      endIcon={deleteLoading ? <CircularProgress size={20} /> : null}
    >
      {deleteLoading ? "deleting" : "Delete"}
    </Button>
  );
};
const buttons = [EditButton, DeleteButton];
// end of headers and buttons

function UsersTable({ data }) {
  const [newData, setNewData] = useState(data);
  const navigate = useNavigate();

  const pageRow = 7;
  const [pageNumber, setPageNumber] = useState(1);
  const pages = Math.ceil(newData.length / pageRow);
  const indexOfLastPage = pageNumber * pageRow;
  const indexOfFistPage = indexOfLastPage - pageRow;
  const pageData = newData.slice(indexOfFistPage, indexOfLastPage);

  const handleAddNew = () => {
    navigate("add");
  };
  return (
    <div>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "600" }}>
          My Users
        </Typography>
        <Button color="success" variant="contained" endIcon={<AddIcon />} onClick={handleAddNew}>
          Add New
        </Button>
      </Toolbar>
      <Tabel
        headers={headers}
        pageData={pageData}
        data={data}
        setData={setNewData}
        buttons={buttons}
      />
      <Pagination pageNumber={pageNumber} pages={pages} setPageNumber={setPageNumber} />
    </div>
  );
}

export default UsersTable;
