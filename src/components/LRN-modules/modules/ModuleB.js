import styles from './moduleB.css';

import React, { Component } from 'react';
import Button from './shared/Button';

export default class ModuleB extends Component {
    render () {
        return (
            <div>
                <p>Module B</p>
                <Button>Some other text</Button>;
            </div>
        );
    }
}
