import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // Container
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  // Message List
  messageListContainer: {
    flexGrow: 1,
    overflow: 'auto',
    padding: theme.spacing(1),

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
    textAlign: 'left',
    maxWidth: '90%',
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
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('xs')]: {
      position: 'sticky',
      bottom: 0,
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
