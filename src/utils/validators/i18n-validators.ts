import * as validators from "@vuelidate/validators";
import { createI18n } from "vue-i18n";

const { createI18nMessage } = validators;

const messages = {
  en: {
    validations: {
      required: "The field {property} is required.",
    },
  },
  es: {
    validations: {
      required: "El campo es obligatorio",
      decimal: "El campo debser un decimal",
      numeric: "El campo debe ser un número"
    },
  },
};

const i18n = createI18n({
  locale: "es",
  fallbackLocale: "en",
  messages,
});

const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) });
export const required = withI18nMessage(validators.required);