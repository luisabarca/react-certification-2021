import React, { useEffect, useState } from 'react';
import {
  IconButton,
  InputBase,
  Toolbar,
  FormControlLabel,
  Switch,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import { AccountCircle } from '@material-ui/icons';
import { useSearch } from '../../providers/SearchProvider';
import { useDebounce } from '../../utils/hooks/useDebounce';

const AppHeader = styled.header`
  background-color: #1c5476;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%);
  color: #fff;
  display: flex;
  min-height: 64px;
  width: 100%;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
`;

const SearchContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  position: relative;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 0;
  width: 100%;
  display: flex;
  flex: 4;
`;

const SearchIconContainer = styled.div`
  padding: 10px;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToolbarSpacer = styled.div`
  display: flex;
  flex-grow: 10;
  flex: 10;
`;

const ToolbarRight = styled.div`
  display: flex;
  flex: 5;
  justify-content: flex-end;
`;

const useStyles = makeStyles((theme) => ({
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
}));

const Header = () => {
  const classes = useStyles();
  const { query, setQuery } = useSearch();
  const [localQuery, setLocalQuery] = useState(query);

  const debounceValue = useDebounce(localQuery, 300);

  useEffect(() => {
    if (!debounceValue) return;

    setQuery(debounceValue);
  }, [debounceValue, setQuery]);

  const handleChange = (e) => {
    setLocalQuery(e.target.value);
  };

  return (
    <AppHeader className="header">
      <Toolbar className={classes.toolbar}>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>

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
            control={<Switch checked={false} name="checkedB" color="primary" />}
            label="Dark mode"
          />
          <IconButton aria-haspopup="true" disabled>
            <AccountCircle fontSize="large" />
          </IconButton>
        </ToolbarRight>
      </Toolbar>
    </AppHeader>
  );
};

export default Header;
