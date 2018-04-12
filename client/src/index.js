import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppContainer } from 'react-hot-loader';
import Voting from './components/Voting';
import registerServiceWorker from './registerServiceWorker';


const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Voting pair = { pair }
  </AppContainer>, rootEl
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default; // eslint-disable-line global-require
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}
registerServiceWorker();
