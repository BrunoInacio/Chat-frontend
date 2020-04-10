import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, ListItemIcon } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';

export default class Sidebar extends Component {
  render() {
    return (
      <Drawer variant="permanent" anchor="left">
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    );
  }
}
