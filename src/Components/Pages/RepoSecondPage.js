import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Star, StarBorder} from "@material-ui/icons";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Link,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 25,
    },
    card: {
        display: 'flex',
        margin: 16,
        boxSizing: "border-box",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: 200
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));

export default function Repos({repo, addStar, removeStar}) {
    const classes = useStyles();
    const [extended, switchExtended] = useState(false);
    
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            <Link href={repo.url} target="_blank"> {repo.name} </Link>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Login:<Link href={repo.owner.url} target="_blank"> {repo.owner.login} </Link>
                        </Typography> 
                        {extended && 
                            <>                        
                                <Typography variant="body2" component="p">
                                    {repo.primaryLanguage.name}
                                </Typography>
                            </>
                        }            
                    </CardContent>
                    <div className={classes.controls}>
                        {!repo.viewerHasStarred ?
                            <IconButton aria-label="previous" onClick={() => (addStar({variables: {id: repo.id}}))}>
                                <StarBorder/>
                            </IconButton> :
                            <IconButton aria-label="previous" onClick={() => (removeStar({variables: {id: repo.id}}))}>
                                <Star/>
                            </IconButton>
                        }
                            <Button className={classes.moreButton} variant="contained" color="white"
                                    onClick={() => (switchExtended(!extended))}>
                            {extended ? "Less " : "More "}
                            </Button>
                    </div>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={repo.owner.avatarUrl}
                />
            </Card>
        </div>
    );
}
