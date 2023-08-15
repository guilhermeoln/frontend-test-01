import {
  Box,
  Button,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function FormAddChart() {
  const [categorie, setCategorie] = useState("");
  const [listCategories, setListCategories] = useState([]);
  const [serieName, setSerieName] = useState("");
  const [listSeries, setListSeries] = useState([]);
  const [dataSerie, setDataSerie] = useState("");
  const [listDataSerie, setListDataSerie] = useState([]);

  const handleCategorie = (event) => {
    setCategorie(event.target.value);
  };

  const handleListCategories = () => {
    setListCategories((list) => [...list, categorie]);
  };

  const handleSerieName = (event) => {
    setSerieName(event.target.value);
  };

  const handleDataSerie = (event) => {
    setDataSerie(event.target.value);
  };

  const handleListDataSerie = () => {
    setListDataSerie((list) => [...list, dataSerie]);
  };

  const addListSeries = () => {
    setListSeries((list) => [
      ...list,
      { name: serieName, data: listDataSerie },
    ]);
  };

  return (
    <form style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <FormControl>
        <TextField id="outlined-basic" label="Título" variant="outlined" />
      </FormControl>
      <FormControl style={{ marginTop: "30px" }}>
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Tipo"
        >
          <MenuItem value="line">Linha</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ marginTop: "30px" }}>
        <TextField
          id="outlined-basic"
          label="Categorias"
          variant="outlined"
          value={categorie}
          onChange={handleCategorie}
        />
        <Box
          padding="10px 0px"
          display="flex"
          width="100%"
          style={{ overflowX: "scroll" }}
          sx={{
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
              borderRadius: "20px",
              backgroundColor: `#F0F0F0`,
            },
            "&::-webkit-scrollbar-thumb": {
              width: "1px",
              backgroundColor: `#A8A8A8`,
              borderRadius: "100px",
            },
          }}
        >
          {listCategories.length > 0 &&
            listCategories.map((categorie, index) => (
              <Typography
                variant="caption"
                key={index}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#E3E3E3",
                  borderRadius: "8px",
                  marginRight: "10px",
                }}
              >
                {categorie}
              </Typography>
            ))}
        </Box>
        <Box display="flex" width="100%" justifyContent="center">
          <Button
            variant="contained"
            style={{ marginTop: "10px", width: "50%" }}
            onClick={() => {
              if (categorie.length > 0) {
                handleListCategories();
                setCategorie("");
              }
            }}
          >
            Adicionar Categoria
          </Button>
        </Box>
      </FormControl>
      <FormControl style={{ marginTop: "30px" }}>
        <TextField
          id="outlined-basic"
          label="Nome da Serie"
          variant="outlined"
          value={serieName}
          onChange={handleSerieName}
        />
        <Box
          padding="10px 0px"
          display="flex"
          width="100%"
          style={{ overflowX: "scroll" }}
          sx={{
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
              borderRadius: "20px",
              backgroundColor: `#F0F0F0`,
            },
            "&::-webkit-scrollbar-thumb": {
              width: "1px",
              backgroundColor: `#A8A8A8`,
              borderRadius: "100px",
            },
          }}
        >
          {listSeries.length > 0 &&
            listSeries.map((serie, index) => (
              <Typography
                variant="caption"
                key={index}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#E3E3E3",
                  borderRadius: "8px",
                  marginRight: "10px",
                }}
              >
                {serie.name}
              </Typography>
            ))}
        </Box>
      </FormControl>
      <FormControl style={{ marginTop: "8px" }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Digite um valor"
          type="number"
          value={dataSerie}
          onChange={handleDataSerie}
        />

        <Box
          padding="10px 0px"
          display="flex"
          width="100%"
          style={{ overflowX: "scroll" }}
          sx={{
            "&::-webkit-scrollbar": {
              width: "5px",
              height: "5px",
              borderRadius: "20px",
              backgroundColor: `#F0F0F0`,
            },
            "&::-webkit-scrollbar-thumb": {
              width: "1px",
              backgroundColor: `#A8A8A8`,
              borderRadius: "100px",
            },
          }}
        >
          {listDataSerie.length > 0 &&
            listDataSerie.map((data, index) => (
              <Typography
                variant="caption"
                key={index}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#E3E3E3",
                  borderRadius: "8px",
                  marginRight: "10px",
                }}
              >
                {data}
              </Typography>
            ))}
        </Box>
        <Box display="flex" width="100%" justifyContent="center">
          <Button
            variant="contained"
            style={{ marginTop: "10px", width: "50%" }}
            onClick={() => {
              if (dataSerie.length > 0) {
                handleListDataSerie();
                setDataSerie("");
              }
            }}
          >
            Adicionar Valor
          </Button>
        </Box>
        <Box display="flex" width="100%" justifyContent="center">
          <Button
            variant="contained"
            style={{ marginTop: "10px", width: "50%" }}
            disabled={
              listDataSerie.length < listCategories.length ||
              listCategories.length === 0
            }
            onClick={() => {
              addListSeries();
              setSerieName("");
              setListDataSerie([]);
            }}
          >
            Adicionar Serie
          </Button>
        </Box>
      </FormControl>
      <Box display="flex" width="100%" justifyContent="center" marginTop="40px">
        <Button variant="contained" style={{ marginTop: "10px", width: "80%" }}>
          Inserir Widget
        </Button>
      </Box>
    </form>
  );
}
