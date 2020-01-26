import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core';
import MyProfile from "./MyProfile";
import RepositorySearch from "./RepositorySearch";
import UserSearch from "./UserSearch";
import GET_USER_INFO from "../Graphs/user";
import SvgIcon from '@material-ui/core/SvgIcon';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import RepositoriesPage from "./Pages/RepositoriesPage";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function MenuePanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      className="repos"
      component="div"
      role="MenuePanel"
      hidden={value !== index}
      id={`nav-MenuePanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

MenuePanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-MenuePanel-${index}`,
  };
}

function MenueItem(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color={"default"}>
        <Tabs
          variant="fullWidth"
          width='100'
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <MenueItem icon={<HomeIcon/>} label="My profile" href="/my_profile" {...a11yProps(0)} />
          <MenueItem icon={<FolderOpenIcon/>} label="My Repositories" href="/users" {...a11yProps(1)} />
          <MenueItem icon={<FindInPageIcon/>} label="Search repositories" href="/repositories" {...a11yProps(2)} />
          <MenueItem icon={<PersonAddIcon/>} label="Search users" href="/users" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <MenuePanel value={value} index={0}>
       <MyProfile/>
      </MenuePanel>
      <MenuePanel value={value} index={1}>
        <RepositoriesPage/>
      </MenuePanel>
      <MenuePanel value={value} index={2}>
        <RepositorySearch/>
      </MenuePanel>
      <MenuePanel value={value} index={3}>
        <UserSearch query={GET_USER_INFO} title={"Search users"} 
          entityName={"user"} initialInput={""}/>
      </MenuePanel>
    </div>
  );
}