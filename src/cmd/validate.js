import UI from 'sketch/ui';
import {validateAll} from '../validators';

export default async function validate(context) {
  try {
    await validateAll(context);
    UI.message(`😍 Looks good!`);
  } catch (error) {
    UI.message(`‼️ ${error.message}`);
  }
}
