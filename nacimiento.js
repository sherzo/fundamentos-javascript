const dias =
[
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"

]

const nacimiento = new Date(2016, 3 -1, 2)
const hoy = new Date()
const tiemoMil = hoy - nacimiento
const tiempoSeg = tiempomil /1000
const tiempoMin = tiemposeg / 60
const tiempoHor = tiempomin / 60
const tiempoDias = tiempohor / 24
const tiempoYear = tiempodias / 365
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
console.log(dias[proximo.getDay()])