import React from "react";
import { Container } from "../components/container";
import NextHead from "../components/next-head";
import StatsCard from "../components/stats-card";

export default function Home() {
  return (
    <Container>
      <NextHead />
      <StatsCard />
    </Container>
  );
}
