import article from 'data/article.json';
import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          name={article.name}
          postedAt={article.postedAt}
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          avatar={article.avatar}
        />

        {/* <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading> */}
        {/* <CryptoHistory /> */}
      </Container>
    </Section>
  );
};
