import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Pagination({ pageNumber, setPageNumber, pages }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        margin: "10px 10px 0 10px",
      }}
    >
      <ButtonGroup style={{ marginRight: "10px" }}>
        <Button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1 ? true : false}
        >
          Prev
        </Button>
        <Button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= pages ? true : false}
        >
          Next
        </Button>
      </ButtonGroup>
      <Typography>
        {pageNumber} of {pages}
      </Typography>
    </div>
  );
}

export default Pagination;
