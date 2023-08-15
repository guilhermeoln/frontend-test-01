import Container from "@mui/material/Container";
import logoDelfos from "../../assets/delfos-logo.png";
import TextField from "@mui/material/TextField";

export default function Header() {
  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 0px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={logoDelfos}
          alt="delfos"
          style={{ width: "150px", height: "100px" }}
        />
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
        />
      </Container>
    </Container>
  );
}
