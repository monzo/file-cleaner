export function getPageByName(context, name) {
  const pages = context.document.pages();
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].name() == name) {
      return pages[i];
    }
  }
  return null;
}

export function colorFromString(color) {
  return MSImmutableColor.colorWithSVGString(color).newMutableCounterpart();
}
