import http from 'node:http';

const PUERTO = 3000;

const servicios = [
  { id: 1, nombre: 'Baño completo', duracionMin: 60, precio: 45000 },
  { id: 2, nombre: 'Corte de raza', duracionMin: 90, precio: 65000 },
  { id: 3, nombre: 'Spa relajante', duracionMin: 120, precio: 85000 },
];

const servidor = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/servicios') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(servicios));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
});

servidor.listen(PUERTO, () => {
  console.log(`Servidor HTTP escuchando en http://localhost:${PUERTO}`);
});