import styled from 'styled-components';
import ImgBg from '../../images/home_plaster/home_plaster_ab3.jpg';

export const HomeContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HomeContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HomeItems1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-height: 100%;
  padding: 0 2rem;
  margin-top:-3em;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;


export const HomeH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #5a4517;
  letter-spacing: 3px;
`;

export const HomeP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HomeBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  margin-right:2em;
  border-radius:50em;
  background: #054b14;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #7bb989;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
export const Buttons = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  margin-right:.4em;
  border-radius:0;
  background: #369956;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #000;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;


