import {getPageByName} from './utils';

const REQUIRED_PAGE_NAMES = ['iOS', 'Android'];
const ALLOWED_PAGE_NAMES = ['iOS', 'Android', 'Master', 'Symbols'];

const validators = [
  validatePagePresence,
  validatePageNames,
  validateArtboardNames,
];

export default validators;

export function validateAll(context) {
  return new Promise(async (resolve, reject) => {
    for (let validator of validators) {
      try {
        await validator(context);
      } catch (error) {
        reject(error);
      }
    }

    resolve();
  });
}

/**
 * Ensures that there is either a Master page, or an iOS/Android page.
 */
export function validatePagePresence(context) {
  return new Promise((resolve, reject) => {
    REQUIRED_PAGE_NAMES.forEach(pageName => {
      if (!getPageByName(context, pageName)) {
        reject({message: `Missing page ${pageName}`});
      }
    });

    resolve();
  });
}

export function validatePageNames(context) {
  return new Promise((resolve, reject) => {
    const allowedNames = ['Master', 'Symbols', 'iOS', 'Android'];
    const pages = context.document.pages();

    for (let i = 0; i < pages.length; i++) {
      const name = String(pages[i].name());

      if (allowedNames.indexOf(name) === -1) {
        reject({message: `Invalid page name '${name}'`});
      }
    }

    resolve();
  });
}

export function validateArtboardNames(context) {
  return new Promise((resolve, reject) => {
    const pages = context.document.pages();

    pages.forEach(page => {
      const artboards = page.artboards();
      const artboardsByName = {};

      let flowStart = false;

      artboards.forEach(artboard => {
        const name = String(artboard.name());

        if (name.match(/[0]{2}$/)) {
          flowStart = true;
        }

        if (artboardsByName[name]) {
          reject({message: `Duplicate artboard name '${name}'`});
        }

        artboardsByName[name] = name;

        if (!name.match(/^\d{3,4}(\.[A-Z]{1,2})?/)) {
          reject({message: `Invalid artboard name '${name}'`});
        }
      });

      if (!flowStart) {
        reject({message: `Missing x00 artboard to start the flow`});
      }
    });
    resolve();
  });
}
