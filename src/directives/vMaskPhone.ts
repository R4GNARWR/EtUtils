import { MaskInput, type MaskInputOptions } from "maska";
import type { Directive } from "vue";

const phoneMaskOptions: MaskInputOptions = {
  mask: (value: string) => {
    if (
      value.startsWith("7") ||
      value.startsWith("+7") ||
      value.startsWith("9")
    ) {
      return "+7 (###) ###-##-##";
    } else {
      return "+################";
    }
  },
  preProcess: (value: string) => {
    if (value.startsWith("8")) return "7" + value.substring(1);
    else if (value.startsWith("+8")) return "7" + value.substring(2);
    else if (value.startsWith("+9")) return "79" + value.substring(2);
    else return value;
  },
};

function createPhoneMask(instance: MaskInput | null, input: HTMLInputElement) {
  if (!input) return;
  instance?.destroy();
  instance = new MaskInput(input, phoneMaskOptions);
  input.dataset.maskApplied = "true";
  input.dispatchEvent(new Event("input"));
}

let maskInstance: MaskInput | null = null;

const vMaskPhone: Directive = {
  mounted: (element: HTMLInputElement, binding) => {
    if (binding.value) {
      createPhoneMask(maskInstance, element);
    }
  },
  updated: (element: HTMLInputElement, binding) => {
    if (binding.value) {
      createPhoneMask(maskInstance, element);
    }
  },
};
export default vMaskPhone;