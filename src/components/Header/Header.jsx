import { IoLogoReact } from 'react-icons/io5';
import { NavBar, HeaderWrapper, NavText } from './Header.styled';
import { Container } from 'components';
import { useTheme } from '@emotion/react';
import { useContext } from 'react';
import { MobileMenuContext } from 'Providers/MobileMenuProvider';

export const Header = () => {
  const theme = useTheme();
  const { toggle } = useContext(MobileMenuContext);

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <IoLogoReact size="40px" color={theme.colors.accent} />

            <NavText>Lesson 2</NavText>
            <button onClick={toggle}>OPEN MOBILE MENU</button>
          </HeaderWrapper>
        </Container>
      </NavBar>
    </>
  );
};
