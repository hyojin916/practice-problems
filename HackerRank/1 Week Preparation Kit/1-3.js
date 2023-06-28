function timeConversion(s) {
  /* 
    if s include PM - remove pm and plus 12 for hour
    if s include AM - remove AM
    if s time is 12 in PM -  remove pm (dont't plus 12 for hour)
    if s time is 12 in AM -  remove am and subtract 12 for hour
    */
  const hh = s.substr(0, 2);
  const mm = s.substr(3, 2);
  const ss = s.substr(6, 2);
  const changedFormat = s.substr(0, 8); // * scope!!!
  if (s.includes('PM')) {
    if (hh == '12') {
      return changedFormat;
    } else {
      const newHh = Number(hh) + 12;
      return `${newHh}:${mm}:${ss}`;
    }
  } else {
    if (hh == '12') {
      return `00:${mm}:${ss}`;
    } else {
      return changedFormat;
    }
  }
}
