import styled from 'styled-components';

export const AppHeader = styled.header`
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

export const SearchContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  position: relative;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 0;
  width: 100%;
  display: flex;
  flex: 4;
`;

export const SearchIconContainer = styled.div`
  padding: 10px;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToolbarSpacer = styled.div`
  display: flex;
  flex-grow: 10;
  flex: 10;
`;

export const ToolbarRight = styled.div`
  display: flex;
  flex: 5;
  justify-content: flex-end;
`;
