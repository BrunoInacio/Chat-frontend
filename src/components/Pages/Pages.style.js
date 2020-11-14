import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // Page container
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    maxWidth: theme.breakpoints.values['lg'],
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2, 1),
    },
  },

  // Default pages
  content: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      height: "100%",
    },
  },

  // Cards
  frame: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: 220,
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2),
      width: 140,
    },
  },
  media: {
    height: 220,
    [theme.breakpoints.down('sm')]: {
      height: 140,
    },
  },

  // Detailed
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
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}), {index: 1});
