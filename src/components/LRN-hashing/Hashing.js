import styles from './hashing.css';

import React, { Component } from 'react';

export default class Hashing extends Component {

  render() {
    return (
      <div>
        <p className={styles.red}>
            red <span className='bold'>bold</span>
        </p>
        <p className='blue'>
            blue <span className='bold'>bold</span>
        </p>
        <p className={styles.red}>
            blue <span className={styles.bold}>bold</span>
        </p>
      </div>
    );
  }

};
