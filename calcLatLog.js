function distanciaHaversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Raio da Terra em km

  const toRad = (value) => (value * Math.PI) / 180;

  const lat1Rad = toRad(lat1);
  const lon1Rad = toRad(lon1);
  const lat2Rad = toRad(lat2);
  const lon2Rad = toRad(lon2);

  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1Rad) *
    Math.cos(lat2Rad) *
    Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

// Exemplo fixo
const dist = distanciaHaversine(
  -23.5144686,
  -46.6006733,
  -23.5143838,
  -46.5997341
);

console.log(`Distância: ${dist.toFixed(2)} km`);
// // Retorno esperado pelo n8n
// return {
//   distancia_km: Number(dist.toFixed(2))
// };
