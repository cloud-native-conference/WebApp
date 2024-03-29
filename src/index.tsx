import * as React from "react";
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider, themes } from '@stardust-ui/react';
import App from "./App";

ReactDOM.render(
    <Provider theme={themes.teams}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
