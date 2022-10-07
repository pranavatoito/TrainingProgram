import ButtonGroup from "@mui/material/ButtonGroup";
import Chip from "@mui/material/Chip";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect, useState } from "react";
import "./CSS/table.css";

function Tabel({ headers, data, pageData, setData, buttons }) {
  return (
    <table>
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
        <th></th>
      </tr>
      {pageData.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{new Date(user.dob).toDateString()}</td>
          <td>
            {user.active ? (
              <Chip
                label="Active"
                icon={<CircleIcon sx={{ fontSize: 15 }} />}
                color="success"
                variant="outlined"
                size="small"
              />
            ) : (
              <Chip
                label="Idle"
                icon={<CircleIcon sx={{ fontSize: 15 }} />}
                color="error"
                variant="outlined"
                size="small"
              />
            )}
          </td>
          <th style={{ textAlign: "center" }}>
            {buttons.map((Button) => (
              <Button id={user.id} setRowData={setData} rowData={data} />
            ))}
          </th>
        </tr>
      ))}
    </table>
  );
}

export default Tabel;
