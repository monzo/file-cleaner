import UI from 'sketch/ui';
import {getPageByName} from '../utils';
import {validateAll} from '../validators';
import {autoAlignArtboards} from '../artboards';
import {markWipRows} from '../wip-rows';
import {SCOPED_PAGE_NAMES} from '../constants';

export default async function validateAndFix(context) {
  try {
    await validateAll(context);
  } catch (error) {
    UI.message(`‼️ ${error.message}`);
  }

  SCOPED_PAGE_NAMES.forEach(pageName => {
    const page = getPageByName(context, pageName);

    // Fix artboard alignment on the page
    autoAlignArtboards(page);
  });
}
