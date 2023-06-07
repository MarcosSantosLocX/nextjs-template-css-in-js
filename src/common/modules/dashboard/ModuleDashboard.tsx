import * as React from 'react';

import { I18nSwitcher } from '@/common/components/structure';
import { useTranslation } from '@/common/hooks/i18n/useTranslation';

import * as S from './ModuleDashboard.styles';

function ModuleDashboard() {
  const { translateNS } = useTranslation('common');

  return (
    <S.ModuleDashboardContainer>
      <S.Content>
        <I18nSwitcher />
        <S.Paragraph>{translateNS('common.content')}</S.Paragraph>
      </S.Content>
    </S.ModuleDashboardContainer>
  );
}

export default ModuleDashboard;
