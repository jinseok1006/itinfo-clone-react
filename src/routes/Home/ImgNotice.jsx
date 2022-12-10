import styled from 'styled-components';
import { getImgNotices } from '../fetchData';
import { HiPlus } from 'react-icons/hi';

const imgNotices = getImgNotices();

const ImgNotice = () => {
  return (
    <ImgNoticeBlock>
      <ImgNoticeHead>
        <h3>학과소식</h3>
        <MoreButton>
          <HiPlus size="20" />
        </MoreButton>
      </ImgNoticeHead>
      <ImgNoticeBody>
        {imgNotices.map((noti, i) => (
          <NoticeItem key={i}>
            <img src={noti.src} alt="" />
            <div>{noti.title}</div>
            <div className="date">{noti.date.toLocaleDateString()}</div>
          </NoticeItem>
        ))}
      </ImgNoticeBody>
    </ImgNoticeBlock>
  );
};

const MoreButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #495057;
`;
const ImgNoticeBlock = styled.div`
  padding: 1rem;
`;
const ImgNoticeHead = styled.div`
  padding: 0 0 0.5rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
`;

const ImgNoticeBody = styled.ol`
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #868e96;
  border-left: none;
  border-right: none;
  padding: 1rem 0;
`;

const NoticeItem = styled.li`
  flex-basis: 50%;

  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  line-height: 1.2rem;
  padding: 0 0.2rem;
  box-sizing: border-box;

  img {
    width: 100%;
  }

  .date {
    font-size: 0.8rem;
    color: #868e96;
  }
`;

export default ImgNotice;
