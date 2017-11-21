import styles from './moduleA.css';

import React, { Component } from 'react';
import Button from 'shared/Button/Button';

export default class ModuleA extends Component {
    render () {
        return (
            <div className={styles.moduleA}>
                <p>Module A</p>
                <Button>Some text</Button>
            </div>
        );
    }
}
