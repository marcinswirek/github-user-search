import { createGlobalStyle } from 'styled-components';

import Arnold from './ArnoldRegular.woff';

const GlobalFonts = createGlobalStyle`
	@font-face {
		font-family: 'Arnold';
		src: local('Arnold'), url(${Arnold}) format('woff');
		font-weight: 600;
		font-style: normal;
    }
`;

export default GlobalFonts