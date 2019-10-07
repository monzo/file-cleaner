import {getMasterPage} from './utils';
import {validateAll} from './validators';

export function artboardsByName(page) {
  const artboards = page.artboards();
  const artboardsByName = {};
  for (let i = 0; i < artboards.length; i++) {
    const name = String(artboards[i].name());
    artboardsByName[name] = artboards[i];
  }

  return artboardsByName;
}

export function artboardRowsByName(page) {
  const artboards = page.artboards();
  const rows = {};
  for (let i = 0; i < artboards.length; i++) {
    const name = String(artboards[i].name());
    const number = parseInt(name.match(/\d+/)[0], 10);
    const rowName = String(number - (number % 100));
    const row = rows[rowName] || [];
    row.push(artboards[i]);
    rows[rowName] = row.sort((a, b) => a.frame().x() - b.frame().x());
  }
  return rows;
}

export function artboardRowsByPosition(page) {
  const artboards = page.artboards();

  // Find the row covers
  const rowCovers = [];
  for (let i = 0; i < artboards.length; i++) {
    const number = parseInt(artboards[i].name(), 10);
    if (number % 100 === 0) {
      rowCovers.push(artboards[i]);
    }
  }

  // Sort the existing covers
  rowCovers.sort((a, b) => a.frame().y() - b.frame().y());

  // Build up the rows, starting with their covers
  const rows = {};
  for (let i = 0; i < rowCovers.length; i++) {
    const rowName = ((i + 1) * 100).toString();
    rows[rowName] = [rowCovers[i]];
  }
  const yPositions = Object.entries(rows).map(([name, row]) => [
    name,
    row[0].frame().y(),
  ]);

  // Add other artboards into the rows
  for (let i = 0; i < artboards.length; i++) {
    const artboard = artboards[i];

    // Skip row covers, obvs...
    if (rowCovers.includes(artboard)) {
      continue;
    }

    const yPos = artboard.frame().y();

    let closestRow;
    let smallestDist = Infinity;
    for (const [rowName, rowYPos] of yPositions) {
      const yDist = Math.abs(yPos - rowYPos);
      if (yDist < smallestDist) {
        closestRow = rowName;
        smallestDist = yDist;
      }
    }

    rows[closestRow].push(artboards[i]);
  }

  // Sort rows by board x position
  Object.values(rows).forEach(row =>
    row.sort((a, b) => a.frame().x() - b.frame().x())
  );
  return rows;
}

export function autoAlignArtboards(page) {
  const rows = artboardRowsByPosition(page);

  const rowNames = Object.keys(rows).sort(
    (a, b) => parseInt(a, 10) - parseInt(b, 10)
  );
  let y = 0;
  for (let rowName of rowNames) {
    const row = rows[rowName];
    let x = 0;
    let nextYOffset = 1000;
    let sequenceNumber = 0;

    for (let artboard of row) {
      // Make sure they're in the right order, so the list on the left is sorted
      const parent = artboard.parentGroup();
      artboard.removeFromParent();
      parent.insertLayer_atIndex(artboard, 0);

      // Update name
      const artboardNumber = parseInt(rowName, 10) + sequenceNumber;
      artboard.name = artboardNumber.toString();

      // Update artboard's position
      // artboard.frame().{x,y}() isn't always relatively to (0,0), and using
      // absoluteRect.ruler{X,Y} seems to solve this
      artboard.absoluteRect().rulerX = x;
      artboard.absoluteRect().rulerY = y;

      // Use the height of the largest artboard on this row to determine the
      // y-offset of the next row (plus a small buffer for labels)
      const height = artboard.frame().height() + 100;
      if (height > nextYOffset) {
        // Snap to a 500 unit grid
        nextYOffset = height + (500 - (height % 500));
      }

      const width = artboard.frame().width() + 140;
      x += width;
      sequenceNumber++;
    }
    y += nextYOffset;
  }
}
