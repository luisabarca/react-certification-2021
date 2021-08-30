import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IconButton,
  InputBase,
  Toolbar,
  FormControlLabel,
  Switch,
  makeStyles,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { AccountCircle } from '@material-ui/icons';

import { useGlobalContext } from '../../providers/GlobalProvider';
import { useDebounce } from '../../utils/hooks/useDebounce';
import {
  SearchContainer,
  SearchIconContainer,
  AppHeader,
  ToolbarSpacer,
  ToolbarRight,
} from './styled';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  inputInput: {
    color: 'white',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    flex: 1,
  },
  title: {
    paddingRight: '15px',
  },
  drawer: {
    display: 'flex',
    width: 240,
  },
  appBar: {
    backgroundColor: theme.palette.type !== 'dark' ? '#1c5476' : '#556cd6',
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const { query, setQuery, theme, toggleTheme, logout } = useGlobalContext();
  const [menuLeftEl, setMenuLeftEl] = useState(null);
  const [menuRightEl, setMenuRightEl] = useState(null);
  const [localQuery, setLocalQuery] = useState(query);

  const debounceValue = useDebounce(localQuery, 300);

  useEffect(() => {
    if (!debounceValue) return;

    setQuery(debounceValue);
  }, [debounceValue, setQuery]);

  const handleChange = (e) => {
    setLocalQuery(e.target.value);
  };

  const handleLeftMenu = (event) => {
    setMenuLeftEl(event.currentTarget);
  };

  const handleLeftMenuClose = () => {
    setMenuLeftEl(null);
  };

  const handleRightMenu = (event) => {
    setMenuRightEl(event.currentTarget);
  };

  const handleRightMenuClose = () => {
    setMenuRightEl(null);
  };

  const handleGoHome = (e) => {
    e.preventDefault();
    handleLeftMenuClose();
    history.push('/');
  };

  const handleGoLogin = (e) => {
    e.preventDefault();
    handleLeftMenuClose();
    history.push('/login');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    handleLeftMenuClose();
    logout();
    history.push('/');
  };

  const renderLeftMenu = (
    <Drawer
      className={classes.drawer}
      anchor="left"
      open={Boolean(menuLeftEl)}
      onClose={handleLeftMenuClose}
      classes={{
        paper: classes.drawer,
      }}
    >
      <List>
        <ListItem button onClick={handleGoHome}>
          Home
        </ListItem>
        <ListItem button onClick={handleLogout}>
          Logout
        </ListItem>
      </List>
    </Drawer>
  );

  const renderRightMenu = (
    <Menu
      anchorEl={menuRightEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="header-right-menu"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(menuRightEl)}
      onClose={handleRightMenuClose}
    >
      <MenuItem onClick={handleGoLogin}>Login</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <AppHeader className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleLeftMenu}
        >
          <MenuIcon />
        </IconButton>

        <Typography className={classes.title} variant="h6" noWrap>
          Wizeline Bootcamp
        </Typography>

        <SearchContainer>
          <SearchIconContainer>
            <SearchIcon />
          </SearchIconContainer>
          <InputBase
            placeholder="Search"
            value={localQuery}
            classes={{
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleChange}
          />
        </SearchContainer>
        <ToolbarSpacer />
        <ToolbarRight>
          <FormControlLabel
            control={
              <Switch
                checked={theme === 'dark'}
                name="checkedB"
                color="primary"
                onChange={toggleTheme}
              />
            }
            label="Dark mode"
          />
          <IconButton aria-haspopup="true" onClick={handleRightMenu}>
            <AccountCircle fontSize="large" />
          </IconButton>
        </ToolbarRight>
      </Toolbar>
      {renderLeftMenu}
      {renderRightMenu}
    </AppHeader>
  );
};

export default Header;
