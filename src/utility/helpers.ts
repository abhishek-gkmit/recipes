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
