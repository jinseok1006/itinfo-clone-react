import { getJobNotices } from '../fetchData';

import Table from './Table';

const notices = getJobNotices().slice(0, 5);

const JobNoticeTable = () => {
  return <Table title="취업소식" contents={notices} more="jobnotice" />;
};

export default JobNoticeTable;
