import React, {Component} from 'react';
import {createPortal} from 'react-dom';

import Styles from './styles';

export default function Spinner(){

    return createPortal(<section className={Styles.spinner}></section>, document.getElementById('spinner'));
}