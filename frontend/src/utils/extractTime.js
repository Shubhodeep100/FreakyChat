export function extractTime(dateString) {
  const date = new Date(dateString);
  let hours = date.getHours();
  const amOrPm = hours >= 12 ? "pm" : "am";

  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  const paddedHours = padZero(hours);
  const paddedMinutes = padZero(date.getMinutes());
  return `${paddedHours}:${paddedMinutes} ${amOrPm}`;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
