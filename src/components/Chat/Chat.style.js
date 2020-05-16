import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  form: {
    marginRight: theme.spacing(2),
  },
  sendButton: {
    height: 36,
    alignSelf: 'flex-end',
  },

  message: {
    position: 'relative',
    display: 'inline-block',
    textAlign: 'left',
    maxWidth: '70%',
    wordBreak: 'break-word',
    overflow: 'hidden',
    borderRadius: 4,
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
    color: theme.palette.secondary.contrastText,
  },
  miniTime: {
    color: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: '0.2rem',
    fontSize: '0.6rem',
  },
  
  userContainer: {
    textAlign: 'right',
  },
  user: {
    backgroundColor: theme.palette.secondary.light,
  },
  botContainer: {
    textAlign: 'left',
  },
  bot: {
    backgroundColor: theme.palette.secondary.dark,
  },
  dateContainer: {
    textAlign: 'center',
  },
  date: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.warning.light,
    padding: theme.spacing(1),
  },
}));
