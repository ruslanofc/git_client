import React, {useState} from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import {useMutation} from "@apollo/react-hooks";
import styles from "../../Assets/profilePage.js";
import FOLLOW_USER from "../../Mutations/follow";
import GET_USER_INFO from "../../Graphs/user";
import UNFOLLOW_USER from "../../Mutations/unfollow";
import {Button, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(styles);

export default function ProfilePage({data, entity}) {
  const classes = useStyles();
  const info = data[entity];
  const [extended, switchExtended] = useState(false);

  const [follow] = useMutation(FOLLOW_USER,
    {
      refetchQueries: [{query: GET_USER_INFO, variables: {login: info.login}}]
    });
  const [unfollow] = useMutation(UNFOLLOW_USER,
    {
      refetchQueries: [{query: GET_USER_INFO, variables: {login: info.login}}]
    });
  return (
    <div className={classes.page}>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Grid justify="left">
          <Grid xs={12} sm={12} md={6}>
            <div className={classes.profile} >
              <div>
                <img src={info.avatarUrl} alt="Avatar" className={classes.avatar}/>
              </div>
              <div className={classes.buttons}>
                <Button className={classes.moreButton} variant="contained" color="white"
                      onClick={() => (switchExtended(!extended))}>
                  {extended ? "Info" : "Info"}
                </Button>
                {!info.isViewer &&
                <Button variant="contained" className={classes.moreButton} color="white"
                        onClick={() => (info.viewerIsFollowing ?
                          unfollow({variables: {userId: info.id}})
                          :
                          follow({variables: {userId: info.id}}))}>
                  {info.viewerIsFollowing ? "Unfollow" : "Follow"}
                </Button>
                }
              </div>
              <div className={classes.description}>
                <h3 className={classes.title}>{info.name}</h3>
                  <a href={info.url}>
                  <h4 className={classes.url}>{info.login}</h4>
                </a>
              </div>   
            </div>
            <div className={classes.description}>
              {extended && 
                <>
                  <Typography variant="body2" component="p">
                    {info.bio}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {info.email}
                  </Typography>
                  <Typography variant="subtitle2" component="h4">
                    {info.company}
                  </Typography>
                  <Typography variant="overline" component="h5">
                    {info.location}
                  </Typography>
                  <Typography variant="caption" color="textSecondary" component="h6">
                    {info.description}
                  </Typography>
                </>
              } 
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

