import React from 'react';
import Main from './components/Main';

import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

render(<Main><p>Hello</p></Main>, document.getElementById('root'));
