import styles from './moduleB.css';

import React, { Component } from 'react';
import Button from 'shared/Button/Button';

export default class ModuleB extends Component {
    render () {
        return (
            <div className={styles.moduleB}>
                <p>Module B</p>
                <Button>Some other text</Button>
            </div>
        );
    }
}
