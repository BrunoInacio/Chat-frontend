import React from 'react';
import usePageStyles from './Pages.style';

import {
  Typography, Dialog,
  ListItem, ListItemIcon, ListItemText, IconButton,
  Card, CardMedia, CardContent,
} from '@material-ui/core';

import {
  Close as CloseIcon,
  Code as CodeIcon, Mail as MailIcon,
} from '@material-ui/icons';

export default function TeamDetailed(props) {
  const pageClasses = usePageStyles();

  return (
    <Dialog onClose={props.handleClose} open={props.detailed.open}>
      <Card className={pageClasses.detailed}>
        <CardMedia className={pageClasses.bigMedia} image={props.detailed.photo} title={props.detailed.name} />

        <IconButton className={pageClasses.closeButton} onClick={props.handleClose}>
          <CloseIcon />
        </IconButton>

        <CardContent>
          <ListItem disableGutters>
            <Typography gutterBottom variant="h5">
              {props.detailed.name}
            </Typography>
          </ListItem>

          {props.detailed.NUSP ? (
            <ListItem dense disableGutters>
              <ListItemIcon><CodeIcon color="secondary" /></ListItemIcon>
              <ListItemText primaryTypographyProps={{variant: 'overline'}} primary={props.detailed.NUSP} />
            </ListItem>
          ) : null}
          
          {props.detailed.email ? (
            <ListItem dense disableGutters>
              <ListItemIcon><MailIcon color="secondary" /></ListItemIcon>
              <ListItemText primaryTypographyProps={{variant: 'overline'}} primary={props.detailed.email} />
            </ListItem>
          ) : null}
        </CardContent>
      </Card>
    </Dialog>
  );
}
