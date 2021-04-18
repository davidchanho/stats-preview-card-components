import styled from "styled-components";

export const Card = styled.article`
  color: ${(props) => props.theme.colors.primaryText};
  width: 60%;
  display: flex;

  span {
    color: ${(props) => props.theme.colors.accent};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
  }
`;

export const Section = styled.section`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 0.5333rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    padding: 4.8rem;
  }
`;

export const Header = styled.div`
  flex: 0.5;
  background-color: ${(props) => props.theme.colors.tint};
  background-image: url(/images/image-header-desktop.jpg);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 0 0.5333rem 0.5333rem 0;
`;

export const Title = styled.h1`
  font-weight: ${(props) => props.theme.fonts.fontWeight.bold};
  font-size: clamp(1.8667rem, 1.5vw, 2.4rem);
  line-height: 2.1333rem;
  margin-bottom: 1.7rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    line-height: 2.9333rem;
  }
`;

export const Subtitle = styled.h2`
  font-weight: ${(props) => props.theme.fonts.fontWeight.medium};
  line-height: 1.5625rem;
  opacity: 0.75;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 4.8rem;
`;

export const Stats = styled.p`
  font-weight: ${(props) => props.theme.fonts.fontWeight.bold};
  font-size: 1.6rem;
`;

export const StatsHeading = styled.h3`
  font-family: ${(props) => props.theme.fonts.fontFamily2};
  font-weight: ${(props) => props.theme.fonts.fontWeight.medium};
  font-size: 0.8rem;
  line-height: 1.6667rem;
  letter-spacing: 0.0667rem;
  color: ${(props) => props.theme.colors.secondary};
  opacity: 0.6;
`;

export const StatsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;
