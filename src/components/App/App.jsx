import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Header, Section, Text } from 'components';
import { Gallery, Todos } from 'tabs';

import { Global, ThemeProvider } from '@emotion/react';
import { theme as th, colors, createGlobalStyles } from 'styles';

import { useSelector } from 'react-redux';

export const App = () => {
  const themeTitle = useSelector(state => state.global.themeTitle);

  const theme = { ...th, ...colors[themeTitle] };

  return (
    <>
      <Global styles={createGlobalStyles(theme)} />
      <ThemeProvider theme={theme}>
        <Header />

        <Section>
          <Container>
            <Tabs>
              <TabList>
                <Tab>
                  <Text>Todos</Text>
                </Tab>
                <Tab>
                  <Text>Gallery</Text>
                </Tab>
              </TabList>

              <TabPanel>
                <Todos />
              </TabPanel>

              <TabPanel>
                <Gallery />
              </TabPanel>
            </Tabs>
          </Container>
        </Section>
      </ThemeProvider>
    </>
  );
};
