import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormAddChart from "../FormAddChart";
import { useMediaQuery } from "@mui/material";

export default function ModalAddChart({ open, handleOpen, handleClose }) {
  const isLargeThan800 = useMediaQuery("(min-width:800px)");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableScrollLock={true}
      >
        <Box
          sx={{
            position: "absolute",
            top: isLargeThan800 ? "50%" : "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isLargeThan800 ? 400 : "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "8px",
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Adicionar Widget
          </Typography>
          <Box style={{ width: "100%", marginTop: "30px" }}>
            <FormAddChart handleClose={handleClose} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
