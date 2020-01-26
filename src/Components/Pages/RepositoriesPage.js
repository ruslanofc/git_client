import React, {useState} from 'react';
import {
  makeStyles,
  List,
  ListItem,
  Button,
  CardContent,
  Grid,
  Typography,
  Card,
  CircularProgress,
  Link,
} from '@material-ui/core';
import GET_VIEWER_INFO from "../../Graphs/viewer";
import {Query} from "@apollo/react-components";
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 25,
  },
  content: {
    width: "100%"
  },
  title: {
    fontSize: 35,
    margin: theme.spacing(1, 0, 2),
  },
  elementList: {
    margin: "10px 0",
    width: "100%",
    color: 'black'
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white'
  },
  moreButton :{
    margin: "10px ",
    justifyContent: 'right'
  }
}));

export default function RepositoriesPage() {
  const classes = useStyles();
  const [secondary, setSecondary] = useState(false);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div className={classes.page}>
          </div>
          <List>
            <Query query={GET_VIEWER_INFO}>
              {({data: viewer, loading}) => {
                if (loading || !viewer) {
                  return <CircularProgress/>;
                }
                return (
                  <>
                    {viewer.viewer.repositories.edges.map((repo) => (
                      <Card className={classes.elementList} key={repo.node.id}>
                        <ListItem> 
                          <AttachFileIcon/>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              <Link href={repo.node.url}>{repo.node.name}</Link>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                              {secondary ? repo.node.description : null}
                            </Typography>
                          </CardContent>
                        </ListItem>
                      </Card>
                    ))}
                  </>
                )
              }}
            </Query>
          </List>           
        </Grid>
      </Grid>
      <Button className={classes.moreButton} variant="contained" color="primary"
            onClick={() => (setSecondary(!secondary))}>
      {secondary ? "Less info" : "More info"}
      </Button>
    </div>
  );
}
