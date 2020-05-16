import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  title: {
    textAlign: 'left',
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(5),
  },
  desc: {
    textAlign: 'justify',
  },
  grid: {
    marginBottom: theme.spacing(2),
  },
  card: {
    width: 220,
    [theme.breakpoints.down('sm')]: {
      width: 140,
    },
  },
  media: {
    height: 220,
    [theme.breakpoints.down('sm')]: {
      height: 140,
    },
  },
  detailed: {
    margin: 'auto',
    width: 440,
    [theme.breakpoints.down('sm')]: {
      width: 280,
    },
  },
  bigMedia: {
    height: 440,
    [theme.breakpoints.down('sm')]: {
      height: 280,
    },
  },
  fullBox: {
    flexGrow: 1,
    height: "88vh",
    padding: theme.spacing(3),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));