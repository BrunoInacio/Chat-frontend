import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // Container
  root: {
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      top: theme.spacing(2),
      bottom: theme.spacing(2),
      right: theme.spacing(1),
      left: theme.spacing(1),
      padding: theme.spacing(1, 2),
    },
  },
  
  // Message List
  messageListContainer: {
    flexGrow: 1,
    padding: theme.spacing(1),
    overflow: 'auto',

    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgb(0, 0, 0, 0.1)',
    }
  },

  // Messages
  message: {
    position: 'relative',
    maxWidth: '90%',
    textAlign: 'left',
    wordBreak: 'break-word',
    overflow: 'hidden',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    color: theme.palette.primary.contrastText,
  },
  miniTime: {
    color: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: '0.2rem',
    fontSize: '0.6rem',
  },

  // Message types
  user: {
    alignSelf: 'flex-end',
    backgroundColor: theme.palette.primary.dark,
  },
  bot: {
    alignSelf: 'flex-start',
    backgroundColor: theme.palette.primary.light,
  },
  date: {
    alignSelf: 'center',
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1),
  },

  // Input
  inputContainer: {
    width: '100%',
    position: 'sticky',
    bottom: 0,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2, 1, 2),
    },
  },
  flexDisplay: {
    display: 'flex',
  },
  sendButton: {
    height: 36,
    alignSelf: 'flex-end',
    marginLeft: theme.spacing(2),
  },
}));
