import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import BoxChart from "../../components/BoxChart";
import "highcharts/css/highcharts.css";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

export default function Home() {
  const widgets = useSelector((state) => state.widgetsReducer.widgets);

  return (
    <Container
      maxWidth={false}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "50px 0px",
        position: "relative",
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {widgets.length > 0
          ? widgets.map((widget) => (
              <Container
                maxWidth={false}
                style={{
                  width: "100%",
                }}
                key={widget.id}
              >
                <BoxChart />
              </Container>
            ))
          : ""}
      </Container>
      <Tooltip title="Adicionar Widget">
        <IconButton
          style={{
            position: "fixed",
            right: "50px",
            top: "80vh",
            width: "80px",
            height: "80px",
            backgroundColor: "#1975d2",
            color: "white",
          }}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
    </Container>
  );
}
