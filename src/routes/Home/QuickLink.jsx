import styled, { css } from 'styled-components';

import getLinks from '../../assets/quicklink/links';

import { Link } from 'react-router-dom';

const links = getLinks();

const QuickLink = () => {
  return (
    <QuickLinkBlock>
      {links.map((link, i) => (
        <LinkBlock key={i} $color={link.color}>
          <Link
            to={link.to}
            style={{ textDecoration: 'none', width: '100%', height: '100%' }}
          >
            <img src={link.src} alt="" />
            <h3 className="caption">{link.title}</h3>
          </Link>
        </LinkBlock>
      ))}
    </QuickLinkBlock>
  );
};

const QuickLinkBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const LinkBlock = styled.li`
  box-sizing: border-box;
  flex-basis: 50%;
  text-align: center;
  padding: 1.2rem;

  ${({ $color }) => css`
    background-color: ${$color};
  `}

  .caption {
    font-size: 0.9rem;

    margin: 1.2rem 0 0;
    color: #fff;
  }

  img {
    width: 25%;
  }
`;

export default QuickLink;
