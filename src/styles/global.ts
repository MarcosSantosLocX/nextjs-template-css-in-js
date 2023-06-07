import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
  html: {
    fontSize: '62.5%',
    fontFamily: '$inter',
  },
  'html, body': {
    height: '100%',
  },
  li: {
    listStyle: 'none',
  },
  button: {
    cursor: 'pointer',
  },
});
