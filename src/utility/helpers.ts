// returns the fraction of a floating point number
// like for input 0.5 it will return 1/2
export function getFraction(decimal: number) {
  let denominator;
  for (denominator = 1; (decimal * denominator) % 1 !== 0; denominator++);

  const numerator = decimal * denominator;

  if (denominator === 1) {
    return numerator + '';
  }
  return numerator + '/' + denominator;
}

export function removeHtmlTags(htmlText: string) {
  return htmlText.replace(/<[^>]*>/g, '');
}
