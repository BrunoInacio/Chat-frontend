import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    desc: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
}));