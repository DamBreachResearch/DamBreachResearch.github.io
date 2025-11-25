export function timeStringFormat(timeValueHours: number) {
  let hours = Math.floor(timeValueHours);
  let minutes = Math.floor((timeValueHours - hours) * 60);
  let seconds = Math.floor(((timeValueHours - hours) * 60 - minutes) * 60);
  return `${hours}h ${minutes}m ${seconds}s`;
}
