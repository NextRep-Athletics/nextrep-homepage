"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "@/lib/styles/theme";
import { fadeInImmediate } from "@/lib/utils/animations";
import GymBackground from "@/lib/assets/images/GymBackground.jpg";
import Button from "@/lib/components/Button";

//#region styled components
const Tagline = styled.p`
  font-weight: ${theme.fontWeights.semibold};
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.75rem;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;

  .blue {
    color: ${theme.colors.blue};
  }

  .gold {
    color: ${theme.colors.gold};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 4.25rem;
  }

  @media (max-width: 500px) {
    font-size: 2.25rem;
  }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  background-image: url(${GymBackground.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const HeroContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;
  width: 100%;

  .hero-subtitle {
    color: ${theme.colors.dark};
    margin-bottom: 2.5rem;
    max-width: 600px;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;

    @media (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: 1fr 400px;
      gap: 4rem;
    }
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 4rem 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 4rem 4rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  & > :nth-child(3) {
    grid-column: 1 / -1; /* span both columns */
    justify-self: center; /* center horizontally */
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);

    & > :nth-child(3) {
      grid-column: auto; /* reset to single column */
      justify-self: auto; /* reset centering */
    }
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);

    & > :nth-child(3) {
      grid-column: 1 / -1; /* span both columns again */
      justify-self: center; /* center horizontally again */
    }
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: 25px;

    & > * {
      width: 100%;
    }
  }
`;

const StatCard = styled.div<{ $fullWidth?: boolean }>`
  background: white;
  padding: 2rem 1.5rem;
  border-radius: ${theme.borderRadius.xl};
  text-align: center;
  box-shadow: ${theme.shadows.lg};
  min-width: 200px;

  .stat {
    font-weight: ${theme.fontWeights.bold};
    font-size: 3.5rem;
    color: ${theme.colors.blue};
    margin-bottom: 0.5rem;
  }

  .label {
    font-weight: ${theme.fontWeights.semibold};
    font-size: 0.875rem;
    color: ${theme.colors.gold};
    text-transform: capitalize;
  }

  /* Full width for third card on mobile/tablet */
  ${(props) =>
    props.$fullWidth &&
    `
    @media (max-width: calc(${theme.breakpoints.lg} - 1px)) {
      grid-column: 1 / -1;
    }
  `}

  @media (max-width: 500px) {
    min-width: unset;
    width: 100%;

    .stat {
      font-size: 2rem;
    }

    .label {
      font-size: 1rem;
    }
  }
`;
//#endregion

// MAIN COMPONENT
export default function HeroLanding() {
  const stats = [
    { value: "4.9", label: "Avg Rating", delay: 0.2 },
    { value: "500+", label: "Active Clients", delay: 0.3 },
    { value: "92%", label: "Reach their goals", delay: 0.4, fullWidth: true },
  ];

  return (
    <HeroSection id="home" className="font-montserrat">
      <HeroContainer>
        <div className="hero-grid">
          <motion.div {...fadeInImmediate}>
            <Tagline className="text-gold" style={{ marginBottom: "1.5rem" }}>
              Your Transformation Journey Starts Now
            </Tagline>
            <HeroTitle className="hero-title">
              <span className="blue">WHERE SCIENCE</span>
              <br />
              <span className="blue">MEETS </span>
              <span className="gold">STRENGTH</span>
            </HeroTitle>
            <p className="hero-subtitle">
              Personalized training programs designed for real results. No
              gimmicks, just proven methods that transform your body and mind.
            </p>
            <Button
              variant="primary"
              href="#contact"
              className="button-hover-lift"
            >
              Get Started Now
            </Button>
          </motion.div>
          <StatsContainer>
            {stats.map((stat, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.delay }}
                viewport={{ once: true }}
                key={`card-${idx}`}
              >
                <StatCard
                  $fullWidth={stat.fullWidth}
                  className="stat-hover-lift"
                >
                  <div className="stat">{stat.value}</div>
                  <div className="label">{stat.label}</div>
                </StatCard>
              </motion.div>
            ))}
          </StatsContainer>
        </div>
      </HeroContainer>
    </HeroSection>
  );
}
