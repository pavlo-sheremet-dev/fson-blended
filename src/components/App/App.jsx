import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Header, Section, Text } from 'components';
import { Gallery, Todos } from 'tabs';
import { useContext } from 'react';
import {
  ArrayHandlerProvider,
  MobileMenuContext,
} from 'Providers/MobileMenuProvider';

export const App = () => {
  const { isOpen } = useContext(MobileMenuContext);

  return (
    <>
      <Header />

      <Section>
        <Container>
          <Tabs>
            <TabList>
              <Tab>
                <Text>Gallery</Text>
              </Tab>
              <Tab>
                <Text>Todos</Text>
              </Tab>
            </TabList>

            <TabPanel>
              <Gallery />
            </TabPanel>

            <TabPanel>
              <ArrayHandlerProvider
                initialState={[{ id: 'sdasd', text: 'initialTodo' }]}
                storageKey="todos"
              >
                <Todos />
              </ArrayHandlerProvider>
            </TabPanel>
          </Tabs>
        </Container>
      </Section>
      {isOpen && <MobileMenu />}
    </>
  );
};

const MobileMenu = () => {
  const { toggle } = useContext(MobileMenuContext);
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}
    >
      <div
        style={{
          width: 200,
          top: 0,
          left: 0,
          position: 'absolute',
          height: '100vh',
          backgroundColor: 'gray',
        }}
      >
        <button type="button" onClick={toggle}>
          CLOSE MOBILE MENU
        </button>
      </div>
    </div>
  );
};
