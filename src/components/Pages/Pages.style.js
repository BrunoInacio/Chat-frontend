import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    position: 'relative',
    maxWidth: theme.breakpoints.values['lg'],
    height: "100%",
    padding: theme.spacing(2, 1, 2, 1),
  },

  content: {
    flexGrow: 1,
    maxHeight: "100%",
    overflow: 'auto',
    padding: theme.spacing(2),
  },
  title: {
    textAlign: 'left',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(5),
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
    height: "100%",
    padding: theme.spacing(3),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));