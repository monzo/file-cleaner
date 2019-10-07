import UI from 'sketch/ui';
import {validateAll} from '../validators';

export default function validate(context, hideSuccess) {
  const result = validateAll(context);
  if (result.success) {
    UI.message(`😍 Looks good!`);
  } else {
    UI.message(`‼️ ${result.message}`);
  }
}
