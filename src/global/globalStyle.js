import { createGlobalStyle } from 'styled-components';

import Arnold from './ArnoldRegular.woff';

const GlobalFonts = createGlobalStyle`
	* {
		box-sizing: border-box;
	}
	body {
		margin: 0 auto;
	}
	@font-face {
		font-family: 'Arnold';
		src: local('Arnold'), url(${Arnold}) format('woff');
		font-weight: 600;
		font-style: normal;
  }
`;

export default GlobalFonts