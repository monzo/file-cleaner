export function getMasterPage(context) {
  const pages = context.document.pages();
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].name() == 'Master') {
      return pages[i];
    }
  }
  return null;
}

export function colorFromString(color) {
  return MSImmutableColor.colorWithSVGString(color).newMutableCounterpart();
}
