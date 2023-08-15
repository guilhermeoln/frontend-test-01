import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import BoxChart from "../../components/BoxChart";
import "highcharts/css/highcharts.css";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { addWidget, removeWidget } from "../../redux/widgets/actions";
import uuid from "react-uuid";
import { useState } from "react";
import ModalAddChart from "../../components/ModalAddChart";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const widgets = useSelector((state) => state.widgetsReducer.widgets);

  const dispatch = useDispatch();

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
        {widgets.length > 0 ? (
          widgets.map((widget) => (
            <Container
              maxWidth={false}
              style={{
                width: "100%",
                marginBottom: "100px",
              }}
              key={widget.id}
            >
              <Box width="100%" display="flex" justifyContent="flex-end">
                <Box
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    dispatch(removeWidget(widget));
                    toast("Widget removido com sucesso!");
                  }}
                >
                  <DeleteIcon
                    style={{
                      color: "#1975d2",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Box>
              <BoxChart options={widget} />
            </Container>
          ))
        ) : (
          <Typography>Você não possui Widgets ativos!</Typography>
        )}
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
          onClick={handleOpen}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
      <ModalAddChart
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </Container>
  );
}
