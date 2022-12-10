import styled from 'styled-components';

import Board from '../../components/Board';
import Title from './Title';
import SubVisual from '../../components/SubVisual';

import { getNotices } from '../fetchData';

const posts = getNotices();

const Notice = () => {
  return (
    <NoticeBlock>
      <SubVisual />
      <Title>공지사항</Title>
      <Board posts={posts} limit={10} />
    </NoticeBlock>
  );
};

const NoticeBlock = styled.div``;

export default Notice;
