import styled from 'styled-components';

export const VideoTitle = styled.h2`
  font-size: 1.2rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  line-height: 1.4;
  letter-spacing: 0.001em;
  padding: 10px 10px 0 10px;
  margin: 0;
`;

export const VideoDescription = styled.p`
  font-size: 0.8rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01em;
  padding: 0 10px 10px 10px;
`;

export const VideoThumbnail = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.url || ''});
  display: block;
  height: 140px;
`;
