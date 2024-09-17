import { MaskInput, type MaskInputOptions } from "maska";
import { Directive } from "vue";

const maskOption = <MaskInputOptions>{
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
    if (value.startsWith("8")) return "7" + value.substring(1, value.length);
    else if (value.startsWith("+8"))
      return "7" + value.substring(2, value.length);
    else if (value.startsWith("+9"))
      return "79" + value.substring(2, value.length);
    else return value;
  },
};

function CreatePhoneMask(input: HTMLInputElement) {
  new MaskInput(input, maskOption);
}

const vMaskPhone = <Directive>{
  mounted: (element: HTMLInputElement, binding) => {
    if(binding.value === true) CreatePhoneMask(element)
  },
};

export default vMaskPhone;