import ccontest from '../assets/imgNotice/ccontest.jpg';
import contest from '../assets/imgNotice/contest.jpg';
import hackcontest from '../assets/imgNotice/hackcontest.png';
import lect from '../assets/imgNotice/lect.png';

const notices = [
  {
    id: 1512,
    title: '2022학년도 2학기 국가장학금 2차 신청 안내',
    date: new Date('2022-09-08'),
    writer: 'IT정보공학과',
    view: 24,
  },
  {
    id: 1511,
    title: '제16회 학생 포트폴리오 경진대회 참가학생 모집 안내 새글',
    date: new Date('2022-09-07'),
    writer: 'IT정보공학과',
    view: 41,
  },
  {
    id: 1510,
    title:
      '[빅데이터 혁신공유대학사업단] 취업연계 원스톱 모델  WE-Meet 프로젝트  안내',
    date: new Date('2022-09-07'),
    writer: 'IT정보공학과',
    view: 40,
  },
  {
    id: 1509,
    title: '2022학년도 교육과정 만족도 조사 안내',
    date: new Date('2022-09-06'),
    writer: 'IT정보공학과',
    view: 52,
  },
  {
    id: 1508,
    title: '2022 IT지능정보공학과 졸업생 초청 진로특강 안내 [9/15(목) 오후2시]',
    date: new Date('2022-09-06'),
    writer: 'IT정보공학과',
    view: 252,
  },
  {
    id: 1507,
    title:
      '2022학년도 2학기 IT융복합종합설계 팀 구성 및 수행신청서 제출 안내 새글',
    date: new Date('2022-09-06'),
    writer: 'IT정보공학과',
    view: 100,
  },
  {
    id: 1506,
    title: '	2022학년도 2학기 취업트렌드 특강 안내',
    date: new Date('2022-09-06'),
    writer: 'IT정보공학과',
    view: 100,
  },
  {
    id: 1505,
    title: '	전공진로설계 재이수 신청 안내',
    date: new Date('2022-09-06'),
    writer: 'IT정보공학과',
    view: 100,
  },
  {
    id: 1504,
    title:
      '2022학년도 2학기 큰사람프로젝트 알찬장학생 및 핵심인재 선발일정 안내',
    date: new Date('2022-09-06'),
    writer: 'IT정보공학과',
    view: 100,
  },
  {
    id: 1504,
    title: '2022년 WISET-GM 글로벌 멘토링 프로그램 안내',
    date: new Date('2022-09-06'),
    writer: 'IT정보공학과',
    view: 100,
  },
  {
    id: 1504,
    title: '2022학년도 2학기 전산실 근로 장학생 선발 계획 안내',
    date: new Date('2022-09-06'),
    writer: 'IT정보공학과',
    view: 100,
  },
  {
    id: 1504,
    title: '2022년 하반기 연구활동종사자 안전교육 계획',
    date: new Date('2022-09-06'),
    writer: 'IT정보공학과',
    view: 100,
  },
  {
    id: 1504,
    title: 'test',
    date: new Date('2022-09-06'),
    writer: 'IT정보공학과',
    view: 100,
  },
  {
    id: 1504,
    title: '111111111111',
    date: new Date('2022-09-06'),
    writer: 'IT정보공학과',
    view: 100,
  },
];

const jobNotices = [
  {
    title: '학과추천채용 - (주)아이엠시티',
    date: new Date('2022-09-08'),
    writer: 'IT정보공학과',
  },
  {
    title: '2022학년도 2학기 취업트렌드 특강 안내',
    date: new Date('2022-09-05'),
    writer: 'IT정보공학과',
  },
  {
    title: '2022년 하반기 면접 집중교육 운영 안내',
    date: new Date('2022-09-02'),
    writer: 'IT정보공학과',
  },
  {
    title: '2022 전북대학교 집중컨설팅 프로그램 안내',
    date: new Date('2022-08-26'),
    writer: 'IT정보공학과',
  },
  {
    title: '2022년 9월 채용상담 및 설명회 개최 안내',
    date: new Date('2022-08-23'),
    writer: 'IT정보공학과',
  },
];

const imgNotices = [
  {
    title: '2021 IT정보공학과 설계작품경진대회 개최',
    date: new Date('2021-09-01'),
    src: contest,
  },
  {
    title: '2021 IT정보공학과 프로그래밍경진대회(ITCPC) 개최',
    date: new Date('2021-09-01'),
    src: ccontest,
  },
  {
    title: '2020년 「코딩 테스트 대비 교육 프로그램」 실시',
    date: new Date('2020-11-10'),
    src: lect,
  },
  {
    title: '2020년 「IT정보공학과 BCG해킹대회」개최',
    date: new Date('2020-09-02'),
    src: hackcontest,
  },
];

const getNotices = () => notices;
const getJobNotices = () => jobNotices;
const getImgNotices = () => imgNotices;
export { getNotices, getJobNotices, getImgNotices };
