import React, { Component } from 'react';

import Basic from './LRN-basic/Basic';
import Basic2 from './LRN-basic-2/Basic';
import Hashing from './LRN-hashing/Hashing';
import Modules from './LRN-modules/Modules';

export default class LRN extends Component {

  render() {
    // return <Basic />;
    // return (
    //     <div>
    //         Basic:
    //         <Basic />
    //         Basic 2:
    //         <Basic2 />
    //         Basic:
    //         <Basic />
    //     </div>
    // );
    // return <Hashing />;
    return <Modules />;
  }

};
