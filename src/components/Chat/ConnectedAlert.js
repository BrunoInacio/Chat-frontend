import React  from 'react';

import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

export default function ConnectedAlert({ isConnected }) {

  const [connectionAlert, setConnectionAlert] = React.useState({ 
    open: false,
  });

  const handleClose = () => setConnectionAlert({
    ...connectionAlert, 
    open: false,
  })

  React.useEffect(() => {
    if (isConnected === true) {
      setConnectionAlert({
        open: true,
        type: "success",
        message: "Você está conectado.",
      })
    } else if (isConnected === false) {
      setConnectionAlert({
        open: true,
        type: "error",
        message: "Você não está conectado!",
      })
    }
  }, [isConnected])

  return (
      <Snackbar 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={connectionAlert.open}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <MuiAlert 
          elevation={5} 
          variant="filled"
          severity={connectionAlert.type}
        >
          {connectionAlert.message}
        </MuiAlert>
      </Snackbar>
  );
}

