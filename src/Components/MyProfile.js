import React from "react";
import {makeStyles} from "@material-ui/core";
import VIEWER_INFO from "../Graphs/viewer";
import {Query} from "@apollo/react-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProfilePage from "./Pages/ProfilePage";

const useStyles = makeStyles(theme => ({
  panel: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 30
  },
  userInfo: {
    marginRight: "50px"
  }
}));

export default function MyProfile() {
  const classes = useStyles();

  return (
    <div className={classes.panel}>
      <Query query={VIEWER_INFO} className={classes.userInfo} >
            {({data: viewer, loading}) => {
                if (loading || !viewer) {
                    return <CircularProgress />;
                }
                return (
                    <ProfilePage data={viewer} entity={"viewer"}/>
                )
            }}
        </Query>
    </div>
  )
};


