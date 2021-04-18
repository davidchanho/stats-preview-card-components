import React from "react";
import {
  Card,
  Header,
  Section,
  Stats,
  StatsGroup,
  StatsHeading,
  Subtitle,
  Title,
} from "./StatsCard.styles";

function StatsCard() {
  return (
    <Card>
      <Section>
        <hgroup>
          <Title>
            Get <span>insights</span> that help your business grow.
          </Title>
          <Subtitle>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </Subtitle>
        </hgroup>
        <StatsGroup>
          <li>
            <Stats>10k+</Stats>
            <StatsHeading>Companies</StatsHeading>
          </li>
          <li>
            <Stats>314</Stats>
            <StatsHeading>Templates</StatsHeading>
          </li>
          <li>
            <Stats>12M+</Stats>
            <StatsHeading>Queries</StatsHeading>
          </li>
        </StatsGroup>
      </Section>
      <Header />
    </Card>
  );
}

export default StatsCard;
