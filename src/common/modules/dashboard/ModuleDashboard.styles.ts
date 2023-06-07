import { styled } from '@/styles/stitches.config';

export const ModuleDashboardContainer = styled('div', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Content = styled('div', {
  display: 'grid',
  rowGap: '$10',
});

export const Paragraph = styled('p', {
  fontSize: '$8',
});
