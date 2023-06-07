import * as React from 'react';

import * as S from './MainLayout.styles';

type MainLayoutProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return <S.MainLayoutContainer>{children}</S.MainLayoutContainer>;
}

export default MainLayout;
