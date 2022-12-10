import styled from 'styled-components';

const Item = ({ post }) => {
  const { title, writer, view, date } = post;
  return (
    <ItemBlock>
      <h3>{title}</h3>
      <ItemInfo>
        <div>{writer}</div>
        <DivBar />
        <div>{date.toLocaleDateString()}</div>
        <DivBar />
        <div>조회수 {view}</div>
      </ItemInfo>
    </ItemBlock>
  );
};

const ItemBlock = styled.div`
  padding: 1rem;
  line-height: 1.25rem;
  & + & {
    border-top: 1px solid #ced4da;
  }

  h3 {
    padding: 0.3rem 0;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  color: #868e96;
  font-size: 0.85rem;
`;

const DivBar = () => {
  return <DivBarBlock>|</DivBarBlock>;
};

const DivBarBlock = styled.div`
  padding: 0 0.3rem;
`;

export default Item;
