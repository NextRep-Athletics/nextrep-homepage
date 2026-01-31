'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaUserMd, FaChartLine, FaDumbbell } from 'react-icons/fa'
import styled from 'styled-components'
import { theme } from '@/styles/theme'
import { Container, Section, SecondaryButton, OutlineButton, DarkButton } from '@/styles/SharedComponents'

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroGradient = styled.div`
  position: absolute;
  inset: 0;
  background: ${theme.gradients.blue};
  opacity: 0.9;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: black;
  opacity: 0.2;
`;

const HeroContent = styled(Container)`
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.bebas};
  font-size: 3.75rem;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 6rem;
  }
`;

const HeroSubtitle = styled.p`
  font-family: ${theme.fonts.inter};
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const HeroButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
  }
`;

const HeroButtonSecondary = styled(SecondaryButton)`
  font-size: 1.125rem;
`;

const HeroButtonOutline = styled(OutlineButton)`
  font-size: 1.125rem;
`;

const HeroBottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  background: linear-gradient(to top, ${theme.colors.white}, transparent);
`;

const FeaturesSection = styled(Section)`
  background: ${theme.colors.white};
`;

const FeaturesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const FeaturesTitle = styled.h2`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 2.25rem;
  color: ${theme.colors.dark};
  margin-bottom: 1rem;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

const FeaturesSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.gray};
  max-width: 42rem;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  transition: all ${theme.transitions.normal};

  &:hover {
    box-shadow: ${theme.shadows['2xl']};
    transform: translateY(-8px);
  }
`;

const FeatureIcon = styled.div<{ $color: string }>`
  font-size: 3rem;
  color: ${props => props.$color};
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.5rem;
  color: ${theme.colors.dark};
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.gray};
`;

const CTASection = styled(Section)`
  background: ${theme.gradients.gold};
`;

const CTAContent = styled(Container)`
  text-align: center;
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.bebas};
  font-size: 3rem;
  color: ${theme.colors.dark};
  margin-bottom: 1rem;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 3.75rem;
  }
`;

const CTASubtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.dark};
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesSection = styled(Section)`
  background: #F9FAFB;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ServicesTitle = styled.h2`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 2.25rem;
  color: ${theme.colors.dark};
  margin-bottom: 1rem;
`;

const ServicesSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.gray};
  max-width: 42rem;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  text-align: center;
`;

const ServiceTitle = styled.h3`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.5rem;
  color: ${theme.colors.blue};
  margin-bottom: 0.75rem;
`;

const ServiceDescription = styled.p`
  color: ${theme.colors.gray};
  margin-bottom: 1rem;
`;

const ServiceLink = styled(Link)`
  color: ${theme.colors.gold};
  font-weight: ${theme.fontWeights.semibold};
  transition: color ${theme.transitions.normal};

  &:hover {
    color: ${theme.colors.goldDark};
  }
`;

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroGradient />
        <HeroOverlay />

        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>
              WHERE SCIENCE MEETS STRENGTH
            </HeroTitle>
            <HeroSubtitle>
              Evidence-based personal training combining CSCS certification with public health expertise.
              Build sustainable fitness that enhances your entire life.
            </HeroSubtitle>
            <HeroButtonGroup>
              <HeroButtonSecondary href="/contact">
                Book Free Consultation
              </HeroButtonSecondary>
              <HeroButtonOutline href="/programs">
                View Programs
              </HeroButtonOutline>
            </HeroButtonGroup>
          </motion.div>
        </HeroContent>

        <HeroBottomGradient />
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FeaturesHeader>
              <FeaturesTitle>
                Why Choose NextRep Athletics
              </FeaturesTitle>
              <FeaturesSubtitle>
                A unique approach to fitness that combines scientific expertise with personalized coaching
              </FeaturesSubtitle>
            </FeaturesHeader>
          </motion.div>

          <FeaturesGrid>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard>
                <FeatureIcon $color={theme.colors.blue}>
                  <FaUserMd />
                </FeatureIcon>
                <FeatureTitle>
                  CSCS Certified
                </FeatureTitle>
                <FeatureDescription>
                  Nationally recognized certification in strength and conditioning, ensuring the highest standard of training expertise.
                </FeatureDescription>
              </FeatureCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FeatureCard>
                <FeatureIcon $color={theme.colors.gold}>
                  <FaChartLine />
                </FeatureIcon>
                <FeatureTitle>
                  Public Health Expertise
                </FeatureTitle>
                <FeatureDescription>
                  Master's in Public Health brings a holistic approach to fitness, focusing on long-term wellness and lifestyle changes.
                </FeatureDescription>
              </FeatureCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FeatureCard>
                <FeatureIcon $color={theme.colors.red}>
                  <FaDumbbell />
                </FeatureIcon>
                <FeatureTitle>
                  Evidence-Based Methods
                </FeatureTitle>
                <FeatureDescription>
                  Every program is backed by scientific research and tailored to your individual goals and capabilities.
                </FeatureDescription>
              </FeatureCard>
            </motion.div>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CTATitle>
              READY TO TRANSFORM YOUR FITNESS?
            </CTATitle>
            <CTASubtitle>
              Take the first step towards sustainable strength and wellness.
              Your journey to better health starts here.
            </CTASubtitle>
            <DarkButton href="/contact">
              Start Your Journey Today
            </DarkButton>
          </motion.div>
        </CTAContent>
      </CTASection>

      {/* Services Preview */}
      <ServicesSection>
        <Container>
          <ServicesHeader>
            <ServicesTitle>
              Training Options
            </ServicesTitle>
            <ServicesSubtitle>
              Choose the training format that fits your lifestyle and goals
            </ServicesSubtitle>
          </ServicesHeader>

          <ServicesGrid>
            <ServiceCard>
              <ServiceTitle>
                1-on-1 Personal Training
              </ServiceTitle>
              <ServiceDescription>
                Fully personalized sessions tailored to your specific goals and needs
              </ServiceDescription>
              <ServiceLink href="/programs">
                Learn More →
              </ServiceLink>
            </ServiceCard>

            <ServiceCard>
              <ServiceTitle>
                Small Group Training
              </ServiceTitle>
              <ServiceDescription>
                Train with 2-4 others for motivation and community support
              </ServiceDescription>
              <ServiceLink href="/programs">
                Learn More →
              </ServiceLink>
            </ServiceCard>

            <ServiceCard>
              <ServiceTitle>
                Online Programs
              </ServiceTitle>
              <ServiceDescription>
                Custom workout programs delivered digitally with regular check-ins
              </ServiceDescription>
              <ServiceLink href="/programs">
                Learn More →
              </ServiceLink>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ServicesSection>
    </>
  )
}
