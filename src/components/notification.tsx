import {Snackbar, Button, IconButton} from 'material-ui';
import {Close} from 'material-ui-icons';

import * as React from 'react';

class NotificationComponent extends React.Component {
  render() {
    return (
      <div>
        <Button onClick={console.log}>Open simple snackbar</Button>
    <Snackbar
    anchorOrigin={{
      vertical: 'top',
        horizontal: 'right',
    }}
    open={true}
    autoHideDuration={6000}
    onClose={console.log}
    SnackbarContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={<span id="message-id">Note archived</span>}
    action={[
          <Button key="undo" color="secondary" size="small" onClick={console.log}>
      UNDO
      </Button>,
      <IconButton
    key="close"
    aria-label="Close"
    color="inherit"
    onClick={console.log}
  >
    <Close />
    </IconButton>,
  ]}
    />
    </div>
  );
  }
}