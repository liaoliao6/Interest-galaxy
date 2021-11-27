import { makeStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import galaxy from "./images/galaxy.jpg";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${galaxy})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
    },

    heading: {
        color: 'white',
    },

    homeButton: {
        display: 'flex',
        justifycontent: 'flex-end',
    },

}

)




);