import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100%",
    maxWidth: theme.breakpoints.values['lg'],
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 1),
    },
  },
  content: {
    maxHeight: "100%",

    padding: theme.spacing(2),
    overflow: "auto",
    [theme.breakpoints.down('xs')]: {
      height: "100%",
    },
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