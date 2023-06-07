import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTranslation } from '@/common/hooks/i18n/useTranslation';

import * as S from './I18nSwitcher.styles';

function I18nSwitcher() {
  const { translateNS } = useTranslation('common');

  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const otherLocales = (locales || []).filter(
    locale => locale !== activeLocale,
  );

  return (
    <S.I18nSwitcherContainer>
      <S.Paragraph>{translateNS('common.switcher')}:</S.Paragraph>
      <S.UlList>
        {otherLocales.map(locale => {
          const { pathname, query, asPath } = router;

          return (
            <li key={locale}>
              <Link
                href={{ pathname, query }}
                as={asPath}
                locale={locale}
                legacyBehavior
              >
                {translateNS('common.switcher.to', { laguageName: locale })}
              </Link>
            </li>
          );
        })}
      </S.UlList>
    </S.I18nSwitcherContainer>
  );
}

export default I18nSwitcher;
