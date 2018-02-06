import styles from './moduleC.css';

import React, { Component } from 'react';
import Button from 'shared/Button/Button';

export default class ModuleC extends Component {
    render () {
        return (
            <div className={styles.moduleC}>
                <p className={styles.p}>
                    Module C <span>bold</span>
                </p>
                <Button>Some Module C text</Button>
            </div>
        );
    }
}
