import { getMasterPage } from "./utils";

const validators = [
  validateMasterPresence,
  validatePageNames,
  validateArtboardNames
];
export default validators;

export function validateAll(context) {
  for (let validator of validators) {
    const result = validator(context);
    if (!result.success) {
      return result;
    }
  }
  return { success: true };
}

export function validateMasterPresence(context) {
  if (!getMasterPage(context)) {
    return { success: false, message: "Missing page 'Master'" };
  }
  return { success: true };
}

export function validatePageNames(context) {
  const allowedNames = ["Master", "Symbols"];
  const pages = context.document.pages();
  for (let i = 0; i < pages.length; i++) {
    const name = String(pages[i].name());
    if (allowedNames.indexOf(name) === -1) {
      return { success: false, message: `Invalid page name '${name}'` };
    }
  }
  return { success: true };
}

export function validateArtboardNames(context) {
  const master = getMasterPage(context);
  const artboards = master.artboards();
  const artboardsByName = {};
  for (let i = 0; i < artboards.length; i++) {
    const name = String(artboards[i].name());
    if (artboardsByName[name]) {
      return { success: false, message: `Duplicate artboard name '${name}'` };
    }
    artboardsByName[name] = name;

    if (!name.match(/^\d{3,4}(\.[A-Z]{1,2})?/)) {
      return { success: false, message: `Invalid artboard name '${name}'` };
    }
  }
  return { success: true };
}
