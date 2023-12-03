import { IoLogoReact } from 'react-icons/io5';
import { NavBar, HeaderWrapper, NavText } from './Header.styled';
import { Container } from 'components';
import { useTheme } from '@emotion/react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/global/globalSlice';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <IoLogoReact size="40px" color={theme.colors.accent} />

              <NavText>Lesson 2</NavText>
            </div>
            <ThemeSwitcher />
          </HeaderWrapper>
        </Container>
      </NavBar>
    </>
  );
};

const ThemeSwitcher = () => {
  const themeTitle = useSelector(state => state.global.themeTitle);
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(toggleTheme())}>{themeTitle}</button>;
};
