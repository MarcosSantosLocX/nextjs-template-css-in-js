import * as nextI18 from 'next-i18next';

import { I18nNamespaces } from '@/common/@types/i18next';

export const useTranslation = (nameSpace: keyof I18nNamespaces) => {
  const { t: translateNS } = nextI18.useTranslation(nameSpace);

  return { translateNS };
};
