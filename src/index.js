import express from "express";

const app = express();
const PUERTO = 3000;

const servicios = [
  { id: 1, nombre: "Baño completo", duracionMin: 60, precio: 45000 },
  { id: 2, nombre: "Corte de raza", duracionMin: 90, precio: 65000 },
  { id: 3, nombre: "Spa relajante", duracionMin: 120, precio: 85000 },
  { id: 4, nombre: "Corte de uñas", duracionMin: 20, precio: 15000 },
];

app.get("/api/salud", (req, res) => {
  res.json({ estado: "ok", servicio: "agendia-api" });
});

app.get("/api/servicios", (req, res) => {
  res.json(servicios);
});

app.get("/api/servicios/:id", (req, res) => {
  const id = Number(req.params.id);
  const servicio = servicios.find((s) => s.id === id);

  if (!servicio) {
    return res
      .status(404)
      .json({ error: `No existe el servicio con id ${id}` });
  }

  res.json(servicio);
});

app.listen(PUERTO, () => {
  console.log(`Agendia API escuchando en http://localhost:${PUERTO}`);
});
