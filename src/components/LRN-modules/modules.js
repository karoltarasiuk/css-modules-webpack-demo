import styles from './modules.css';

import React, { Component } from 'react';
import ModuleA from './modules/ModuleA';
// import ModuleB from './modules/ModuleB';

export default class Modules extends Component {

  render() {
    return (
      <div>
        <ModuleA />
        {/* <ModuleB /> */}
      </div>
    );
  }

};
