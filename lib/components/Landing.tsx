"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { Tagline } from "@/styles/SharedComponents";
import { fadeInImmediate } from "@/lib/utils/animations";
import GymBackground from "@/lib/assets/images/GymBackground.jpg";

// STYLED COMPONENTS
const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url(${GymBackground.src});
  background-size: cover; /* Fills container */
  background-position: center; /* Centers image */
  background-repeat: no-repeat;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.85); /* 60% dark overlay */
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2; /* Content above overlay */
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
  background-image: url(${GymBackground.src});
  background-size: cover;
  background-position: center;
`;

const HeroContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 4rem 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 4rem 4rem;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 400px;
    gap: 4rem;
  }
`;

const HeroContent = styled.div`
  color: white;
`;

const HeroTitle = styled.h1`
  margin-bottom: 1.5rem;

  .blue {
    color: ${theme.colors.blue};
  }

  .gold {
    color: ${theme.colors.gold};
  }
`;

const HeroSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2.5rem;
  max-width: 600px;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: ${theme.colors.blue};
  color: white;
  padding: 1rem 2.5rem;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  font-size: 1.125rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.royal};
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div<{ $fullWidth?: boolean }>`
  background: white;
  padding: 2rem 1.5rem;
  border-radius: ${theme.borderRadius.xl};
  text-align: center;
  box-shadow: ${theme.shadows.lg};

  /* Full width for third card on mobile/tablet */
  ${(props) =>
    props.$fullWidth &&
    `
    @media (max-width: calc(${theme.breakpoints.lg} - 1px)) {
      grid-column: 1 / -1;
    }
  `}
`;

const StatValue = styled.div`
  font-family: ${theme.fonts.bebas};
  font-size: 3.5rem;
  color: ${theme.colors.blue};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  font-size: 0.875rem;
  color: ${theme.colors.gold};
  text-transform: capitalize;
`;

// TYPES
interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
  fullWidth?: boolean;
}

// STAT CARD COMPONENT
function StatCardComponent({
  value,
  label,
  delay = 0,
  fullWidth = false,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <StatCard $fullWidth={fullWidth} className="stat-hover-lift">
        <StatValue>{value}</StatValue>
        <StatLabel>{label}</StatLabel>
      </StatCard>
    </motion.div>
  );
}

// MAIN COMPONENT
export default function HeroLanding() {
  const stats = [
    { value: "4.9", label: "Avg Rating", delay: 0.2 },
    { value: "500+", label: "Active Clients", delay: 0.3 },
    { value: "92%", label: "Reach their goals", delay: 0.4, fullWidth: true },
  ];

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroGrid>
          {/* Left Content */}
          <HeroContent>
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

              <HeroSubtitle className="hero-subtitle">
                Personalized training programs designed for real results. No
                gimmicks, just proven methods that transform your body and mind.
              </HeroSubtitle>

              <CTAButton href="#contact" className="button-hover-lift">
                Get Started Now
              </CTAButton>
            </motion.div>
          </HeroContent>

          {/* Right Stats */}
          <StatsContainer>
            {stats.map((stat, index) => (
              <StatCardComponent
                key={index}
                value={stat.value}
                label={stat.label}
                delay={stat.delay}
                fullWidth={stat.fullWidth}
              />
            ))}
          </StatsContainer>
        </HeroGrid>
      </HeroContainer>
    </HeroSection>
  );
}
