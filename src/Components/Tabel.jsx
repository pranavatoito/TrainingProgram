import ButtonGroup from "@mui/material/ButtonGroup";
import Chip from "@mui/material/Chip";
import CircleIcon from "@mui/icons-material/Circle";
import { useEffect, useState } from "react";
import "./CSS/table.css";

function Tabel({ headers, data, pageData, setData, buttons }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      {pageData.map((user) => (
        <tbody key={user.id}>
          <tr>
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
              {buttons.map((Button, i) => (
                <Button id={user.id} setRowData={setData} rowData={data} key={i} />
              ))}
            </th>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Tabel;
