export function extracttime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}: ${minutes}`;
}

function padZero(number) {
  return number.toString().padZero(2, "0");
}
