import UI from 'sketch/ui';
import {getMasterPage} from '../utils';
import {validateAll} from '../validators';
import {autoAlignArtboards} from '../artboards';
import {markWipRows} from '../wip-rows';

export default function validateAndFix(context) {
  const result = validateAll(context);
  if (!result.success) {
    UI.message(`‼️ ${result.message}`);
    return;
  }

  const master = getMasterPage(context);

  // Fix artboard alignment on the Master page
  autoAlignArtboards(master);

  // Colour the backgrounds of rows with WIP symbols
  markWipRows(context, master);
}
