import 'react-app-polyfill/ie11';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import AppWrapper from './AppWrapper';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <HashRouter>
        <I18nextProvider i18n={i18n}>
            <AppWrapper />
        </I18nextProvider>
    </HashRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
