let datos = [
  {
    ciudad: "Bogota",
    precio: 500,
  },
  { ciudad: "Lima", precio: 400 },
  {
    ciudad: "Santiago",
    precio: 380,
  },
  {
    ciudad: "Montevideo",
    precio: 200,
  },
];

let presupuestoDisponible = 190;
let i = 0;

while (i < datos.length && datos[i].precio > presupuestoDisponible) {
  i++;
}

if (i == datos.length) {
  console.log("No hay ciudades disponibles");
} else {
  console.log(`Puedes comprar pasajes para: ${datos[i].ciudad}`);
}
