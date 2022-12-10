import styled from 'styled-components';
import { HiOutlineExternalLink } from 'react-icons/hi';

const Footer = () => {
  return (
    <FooterBlock>
      <Nav />
      <Notice />
    </FooterBlock>
  );
};

const Notice = () => {
  return (
    <NoticeBlock>
      powered by{' '}
      <a
        href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"
        target="_blank"
        rel="noreferrer"
      >
        blazor
        <HiOutlineExternalLink />
      </a>
      ,{' '}
      <a href="https://create-react-app.dev/" target="blank" rel="nonreferrer">
        create-react-app
        <HiOutlineExternalLink />
      </a>
      .
    </NoticeBlock>
  );
};
const NoticeBlock = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: #868e96;
  line-height: 1.2rem;
  padding: 0 0 0.5rem;
`;

const Nav = () => {
  return (
    <NavBlock>
      <div className="active">개인정보처리방침</div>
      <DivBar />
      <div className="active">이메일무단수집거부</div>
      <DivBar />
      <div>찾아오시는 길</div>
    </NavBlock>
  );
};

const NavBlock = styled.div`
  display: flex;
  padding: 1.2rem 1rem;
  margin: 1rem 0;
  font-size: 0.8rem;
  color: #343a40;
  border: 1px solid #ced4da;
  border-left: none;
  border-right: none;

  .active {
    color: #0054a7;
  }
`;

const DivBar = () => {
  return <DivBarBlock>|</DivBarBlock>;
};

const DivBarBlock = styled.div`
  margin: 0 0.3rem;
  color: #ced4da;
`;

const FooterBlock = styled.div`
  padding: 1rem 0 0;
`;

export default Footer;
