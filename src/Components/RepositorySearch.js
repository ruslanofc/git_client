import React, {useState} from "react";
import {Button, makeStyles, TextField, Typography, Grid} from "@material-ui/core";
import RepoSecondPage from "./Pages/RepoSecondPage";
import {useLazyQuery, useMutation} from "@apollo/react-hooks";
import REPOSITORY_QUERY from "../Graphs/repos";
import ADD_STAR from "../Mutations/AddStar";
import REMOVE_STAR from "../Mutations/RemoveStar";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cards: {
    maxWidth: "fit-content",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  content: {
    width: "100%"
  },
  title: {
    margin: theme.spacing(1, 0, 2),
  },
  elementList: {
    margin: "10px 0",
    width: "100%"
  },
  searchButton: {
    margin: 8
  },
}));

const RepositorySearch = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [getData, {loading, error, data}] = useLazyQuery(REPOSITORY_QUERY);

  const [addStar] = useMutation(ADD_STAR,
    {
      refetchQueries: [{query: REPOSITORY_QUERY, variables: {title: input}}]
    });
  const [removeStar] = useMutation(REMOVE_STAR,
    {
      refetchQueries: [{query: REPOSITORY_QUERY, variables: {title: input}}]
    });

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} className={classes.page}>
          <div className={classes.search}>
            <Typography variant="h4" className={classes.title}>
              Search repositories
            </Typography>
            <TextField label="Login" value={input} onChange={(e) => (setInput(e.target.value))}/>
            <Button variant="contained" color="primary" className={classes.searchButton}
                    onClick={() => (getData({variables: {title: input}}))}>
              Search
            </Button>
          </div>
          {error && (
            <h5>Not found</h5>
          )}
          {loading && (
            <CircularProgress/>
          )}
          {data && (
            <div className={classes.cards}>
              {data.search.nodes.map((node) => (
                <RepoSecondPage repo={node} key={node.id} addStar={addStar} removeStar={removeStar}/>
              ))}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  )
};

export default RepositorySearch;
