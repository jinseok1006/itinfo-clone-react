import styled from 'styled-components';
import officeImg from '../../assets/office_back_img.png';

const Office = () => {
  return (
    <OfficeBlock>
      <TitleBlock>
        <h3>IT정보공학과</h3>
        <h3>IT지능정보공학과</h3>
        <h2>학과사무실</h2>
      </TitleBlock>
      <PhoneBlock>
        <div>063-270-2410</div>
        <div>itcom@jbnu.ac.kr</div>
        <div>FAX 063-270 2394</div>
      </PhoneBlock>
      <LocationBlock>
        <div>전북대학교 공과대학</div>
        <div>7호관 224-2호</div>
      </LocationBlock>
    </OfficeBlock>
  );
};

const OfficeBlock = styled.div`
  margin: 0 1rem;
  background-color: #d8eced;
  background-image: url(${officeImg});
  background-repeat: no-repeat;
  background-position: top 5% right 5%;
  padding: 0 1rem;
`;

const TitleBlock = styled.div`
  font-weight: bold;
  color: #343a40;
  h3 {
    font-size: 0.9rem;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  padding: 1.2rem 0 1rem;
`;

const PhoneBlock = styled.div`
  padding: 1rem 0;
  line-height: 1.2rem;
`;

const LocationBlock = styled.div`
  padding: 1rem 0 1.2rem;
  font-size: 0.8rem;
  color: #343a40;
  line-height: 1.1rem;
`;

export default Office;
