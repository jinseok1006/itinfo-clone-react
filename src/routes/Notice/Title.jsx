import styled from 'styled-components';

const Title = ({ children }) => {
  return <TitleBlock>{children}</TitleBlock>;
};

const TitleBlock = styled.div`
  font-size: 1.5rem;
  padding: 2rem 1.25rem;
`;

export default Title;
