import * as React from 'react';

import { I18nSwitcher } from '@/common/components/structure';
import { useTranslation } from '@/common/hooks/i18n/useTranslation';

import * as S from './ModuleSignIn.styles';

function ModuleSignIn() {
  const { translateNS } = useTranslation('common');

  return (
    <S.ModuleSignInContainer>
      <S.Content>
        <I18nSwitcher />
        <S.Paragraph>{translateNS('common.content')}</S.Paragraph>
      </S.Content>
    </S.ModuleSignInContainer>
  );
}

export default ModuleSignIn;
