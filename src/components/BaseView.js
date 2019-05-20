import React from 'react';

import './BaseView.css';

const BaseView = (props) => {
    return (
        <div id="content">
            {props.top && <div>{props.top}</div>}
            <div id="main" className={props.alignCenter ? 'center-content' : ''}>{props.children}</div>
            {props.bottom && <div>{props.bottom}</div>}
        </div>
    )
}

export default BaseView;
