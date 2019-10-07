import UI from 'sketch/ui';
import {getMasterPage} from '../utils';
import {validateAll} from '../validators';
import {autoAlignArtboards} from '../artboards';
import {markWipRows} from '../wip-rows';

export default async function validateAndFix(context) {
  try {
    await validateAll(context);
  } catch (error) {
    UI.message(`‼️ ${erro.message}`);
  }

  const master = getPageByName(context, 'Master');

  // Fix artboard alignment on the Master page
  autoAlignArtboards(master);

  // Colour the backgrounds of rows with WIP symbols
  markWipRows(context, master);
}
