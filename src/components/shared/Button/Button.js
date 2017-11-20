import styles from './Button.css';

import React, { Component } from 'react';

export default class Button extends Component {
    render () {
        return (
            <button className={styles.button}>
                {this.props.children}
            </button>
        );
    }
};
