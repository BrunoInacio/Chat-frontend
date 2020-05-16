import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  form: {
    marginRight: theme.spacing(3),
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
    padding: theme.spacing(2, 2, 2, 2),
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
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.light,
  },
  botContainer: {
    textAlign: 'left',
  },
  bot: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  },
  dateContainer: {
    textAlign: 'center',
  },
  date: {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.warning.light,
  },
}));
