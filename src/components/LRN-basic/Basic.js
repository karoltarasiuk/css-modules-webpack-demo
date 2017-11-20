import styles from './basic.css';

import React, { Component } from 'react';

export default class Basic extends Component {

  render() {
    return (
      <div>
        <p className={styles.red}>red</p>
        <p className={styles.blue}>blue</p>
      </div>
    );
  }

};
