import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { I18nNamespaces } from '@/common/@types/i18next';
import { DEFAULT_LOCALE, LOCALES } from '@/common/constants/i18nConfig';

export const getI18nPaths = () => {
  return LOCALES.map(lng => ({
    params: {
      locale: lng,
    },
  }));
};

export const getI18nProps = async (
  context: GetStaticPropsContext,
  nameSpaces: (keyof I18nNamespaces)[] = ['common'],
) => {
  const locale = context.locale || DEFAULT_LOCALE;

  return {
    ...(await serverSideTranslations(locale, nameSpaces)),
  };
};
