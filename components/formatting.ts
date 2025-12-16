export function timeStringFormat(timeValueHours: number | string) {
  const timeValue = Number(timeValueHours);
  const hours = Math.floor(timeValue);
  const minutes = Math.floor((timeValue - hours) * 60);
  let hoursImprecise = hours;
  let minutesImprecise = parseFloat(((timeValue - hours) * 60).toPrecision(1));
  const seconds = Math.floor(((timeValue - hours) * 60 - minutes) * 60);
  let secondsImprecise = parseFloat(
    (((timeValue - hours) * 60 - minutes) * 60).toPrecision(1)
  );
  if (secondsImprecise === 60) {
    secondsImprecise = 0;
    minutesImprecise++;
  }
  if (minutesImprecise === 60) {
    minutesImprecise = 0;
    hoursImprecise++;
  }
  if (hours > 10) {
    return `${Math.round(hours)}h`;
  } else if (hours > 0) {
    return `${hoursImprecise}h ${minutesImprecise}min`;
  } else if (minutes > 0) {
    return `${minutesImprecise}min ${secondsImprecise}s`;
  } else {
    return `${seconds}s`;
  }
}
