import React from "react";
import Posts from "./components/Posts/Posts";
import { Typography, Container, AppBar, Grow, Grid } from "@material-ui/core";
import galaxy from "./images/galaxy.jpg";
import useStyles from './styles';

const App = () => {
    //const [currentId, setCurrentId] = useState(0);
    //const dispatch = useDispatch();
    const classes = useStyles();



    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center" >Interest Galaxy</Typography>
                {/* <img className={classes.image} src={galaxy} alt="icon" height="80" /> */}
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