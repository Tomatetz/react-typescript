import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'

import App from './src/Components/App/'

ReactDOM.render(
    <div>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</div>, document.getElementById("root"));