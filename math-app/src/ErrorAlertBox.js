import React, { Component } from 'react';
import { DialogContainer} from 'react-md';

export default class SimpleListDialog extends Component {

    test() {
        console.log('hiding')
        this.props.toggle();
    }
  render() {
    const visible = {...this.props}.visibility;
    return (
      <div>
        <DialogContainer
          initialFocus="simple-list-dialog"
          id="simple-list-dialog"
          visible={visible}
          title="Simple List Dialog"
          onHide={() => this.test()}
        >
        test
        </DialogContainer>
      </div>
    );
  }
}
