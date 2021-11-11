import { makeStyles } from '@material-ui/core/styles';
import bg1 from "../../images/bg1.jpg";

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },

    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
        color: 'black',
        fontStyle: 'Bold',
        backgroundColor: '#757bc8',
    },
    buttonClear: {
        marginBottom: 10,
        color: 'black',
        fontStyle: 'Bold',
        backgroundColor: '#e0c3fc',
    },
    input: {
        '&:hover': {
            background: "#e2ced6",
        },
    }

}));