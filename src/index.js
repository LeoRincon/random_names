const names = [
  "Luis Marino",
  "Carlos Leiva",
  "Mstha Lex",
  "Mark Luxer",
  "Anais Luci",
  "Camila New",
  "Lucas Mario",
  "Leonor Castro",
  "Maria Letter",
  "Poul Jeans",
  "Marcos Fexels"
]

//Crear función para enviar aleatoriamente  los nombres del arreglo
const nameRandom = () => {
  const name = names[Math.floor(Math.random() * names.length)]
  console.log(name)
};

// Exportar como un módulo

module.exports = { nameRandom };