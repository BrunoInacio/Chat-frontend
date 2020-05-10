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
        color: theme.palette.error.main,
    },
    desc: {
        textAlign: 'justify',
        color: theme.palette.error.main,
    },
}));