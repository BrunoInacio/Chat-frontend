import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  alert: {
    position: 'absolute',
  }
}));

export default function ConnectedAlert({ chat }) {
  const classes = useStyles();
  const isConnected = chat.current.isConnected;

  const [alert, setAlert] = React.useState({ open: false });
  const handleClose = () => setAlert({ ...alert, open: false })

  React.useEffect(() => {
    if (isConnected === true) {
      setAlert({
        open: true,
        type: "success",
        message: "Você está conectado.",
      })
    } else if (isConnected === false) {
      setAlert({
        open: true,
        type: "error",
        message: "Você não está conectado!",
      })
    }
  }, [isConnected])

  return (
      <Snackbar 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={alert.open}
        onClose={handleClose}
        autoHideDuration={3000}
        className={classes.alert}
      >
        <MuiAlert elevation={5} variant="filled" severity={alert.type}>
          {alert.message}
        </MuiAlert>
      </Snackbar>
  );
}

