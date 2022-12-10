import Carousel from './Carousel';
import QuickLink from './QuickLink';
import Office from './Office';
import NoticeTable from './NoticeTable';
import JobNoticeTable from './JobNoticeTable';
import ImgNotice from './ImgNotice';
function Home() {
  return (
    <>
      <Carousel />
      <QuickLink />
      <NoticeTable />
      <Office />
      <JobNoticeTable />
      <ImgNotice />
    </>
  );
}

export default Home;
