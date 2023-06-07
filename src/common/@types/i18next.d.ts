import 'i18next';

import type common from '../i18n/pt/common.json';
import type dashboard from '../i18n/pt/dashboard.json';
import type signIn from '../i18n/pt/signIn.json';

export type I18nNamespaces = {
  common: typeof common;
  dashboard: typeof dashboard;
  signIn: typeof signIn;
};

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: I18nNamespaces;
  }
}
