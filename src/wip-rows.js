import { Document } from "sketch/dom";
import { artboardRowsByName } from "./artboards";
import { colorFromString } from "./utils";

const wipSymbolRegex = /\bWIP$/;
const defaultArtboardColor = colorFromString("#000000");
const wipArtboardColor = colorFromString("#F43951");

export function markWipRows(context, page) {
  const wipRows = findWipRows(context, page);
  const rows = artboardRowsByName(page);
  for (let rowNumber of Object.keys(rows)) {
    const artboard = rows[rowNumber][0];
    if (wipRows.includes(rowNumber)) {
      artboard.backgroundColor = wipArtboardColor;
    } else {
      // This conditional prevents us from e.g. changing green "approved"
      // artboards back to black
      if (artboard.backgroundColor().fuzzyIsEqual(wipArtboardColor)) {
        artboard.backgroundColor = defaultArtboardColor;
      }
    }
  }
}

export function findWipRows(context, page) {
  const symbolMaster = Document.fromNative(context.document)
    .getSymbols()
    .find(s => s.name.match(wipSymbolRegex));

  if (!symbolMaster) {
    console.log("Couldn't find WIP symbol");
    return [];
  }

  const wipRows = [];
  for (let instance of symbolMaster.getAllInstances()) {
    while (instance && instance.type != "Artboard") {
      instance = instance.parent;
    }

    if (instance && instance.sketchObject.parentPage() == page) {
      const boardNumber = parseInt(instance.name, 10);
      const rowName = (boardNumber - (boardNumber % 100)).toString();
      if (wipRows.indexOf(rowName) === -1) {
        wipRows.push(rowName);
      }
    }
  }
  return wipRows;
}
