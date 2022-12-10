import { getNotices } from '../fetchData';

import Table from './Table';

const notices = getNotices().slice(0, 5);

const NoticeTable = () => {
  return <Table title="공지사항" contents={notices} more="/notice" />;
};

export default NoticeTable;
