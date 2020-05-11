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

    fullBox: {
        flexGrow: 1,
        padding: theme.spacing(3),
        height: '89vh',
    },
}));