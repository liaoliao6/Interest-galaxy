import React from "react";
import Posts from "./components/Posts/Posts";
//import Container from "@material-ui/lab/Container";
//import AppBar from '@material-ui/lab/AppBar';
//import Typography from "@material-ui/lab/Typography";
import { Typography, Container, AppBar, Grow, Grid } from "@material-ui/core";
import galaxy from "./images/galaxy.jpg";
const App = () => {
    //const [currentId, setCurrentId] = useState(0);
    //const dispatch = useDispatch();
    //const classes = useStyles();



    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center" >Interest Galaxy</Typography>
                <img src={galaxy} alt="icon" height="80" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <Posts />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>


        </Container>
    );
};

export default App;