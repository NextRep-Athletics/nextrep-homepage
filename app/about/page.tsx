'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate, FaSwimmer, FaHeartbeat } from 'react-icons/fa'
import styled from 'styled-components'
import { theme } from '@/styles/theme'
import { Container, Section, DarkButton } from '@/styles/SharedComponents'

const HeroSection = styled.section`
  position: relative;
  padding: 5rem 0;
  background: ${theme.gradients.blue};
  color: white;
`;

const HeroContent = styled(Container)`
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-family: ${theme.fonts.bebas};
  font-size: 3rem;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 4.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 48rem;
  margin: 0 auto;
`;

const StorySection = styled(Section)`
  background: ${theme.colors.white};
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StoryTitle = styled.h2`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.875rem;
  color: ${theme.colors.dark};
  margin-bottom: 1.5rem;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${theme.colors.gray};
`;

const CredentialsBox = styled.div`
  background: #F9FAFB;
  padding: 2rem;
  border-radius: ${theme.borderRadius.xl};
`;

const CredentialsTitle = styled.h3`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.5rem;
  color: ${theme.colors.dark};
  margin-bottom: 1.5rem;
`;

const CredentialsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CredentialItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const CredentialIcon = styled.div<{ $color: string }>`
  font-size: 1.5rem;
  color: ${props => props.$color};
  margin-top: 0.25rem;
  flex-shrink: 0;
`;

const CredentialContent = styled.div`
  flex: 1;
`;

const CredentialItemTitle = styled.h4`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  font-size: 1.125rem;
  color: ${theme.colors.dark};
`;

const CredentialDescription = styled.p`
  color: ${theme.colors.gray};
`;

const PhilosophySection = styled(Section)`
  background: #F9FAFB;
`;

const PhilosophyContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
`;

const PhilosophyTitle = styled.h2`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.875rem;
  color: ${theme.colors.dark};
  margin-bottom: 1.5rem;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

const PhilosophyText = styled.div`
  font-size: 1.125rem;
  color: ${theme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PhilosophyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PhilosophyCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;

const PhilosophyCardTitle = styled.h3<{ $color: string }>`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.25rem;
  color: ${props => props.$color};
  margin-bottom: 0.75rem;
`;

const PhilosophyCardText = styled.p`
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
  font-size: 2.25rem;
  color: ${theme.colors.dark};
  margin-bottom: 1rem;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 3rem;
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

const CTAButton = styled(DarkButton)`
  margin-top: 0.5rem;
`;

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>
              ABOUT NEXTREP ATHLETICS
            </HeroTitle>
            <HeroSubtitle>
              Combining elite athletic experience with advanced health sciences to deliver transformative fitness coaching
            </HeroSubtitle>
          </motion.div>
        </HeroContent>
      </HeroSection>

      {/* Story Section */}
      <StorySection>
        <Container>
          <StoryGrid>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <StoryTitle>
                Meet Your Coach
              </StoryTitle>
              <StoryContent>
                <p>
                  Hi, I'm Cy Morrison, founder of NextRep Athletics. My journey in fitness began as a Division I swimmer at Cornell University,
                  where I learned the discipline and science behind peak athletic performance.
                </p>
                <p>
                  After my competitive swimming career, I combined my passion for fitness with a commitment to public health,
                  earning my Master's in Public Health (MPH) and becoming a Certified Strength and Conditioning Specialist (CSCS).
                </p>
                <p>
                  This unique combination allows me to approach personal training not just as exercise prescription,
                  but as a comprehensive wellness strategy that considers your entire lifestyle, health history, and long-term goals.
                </p>
                <p>
                  Beyond training, I've published research in medical journals and founded Kick for Kids, a nonprofit that
                  raised over $84,000 for pediatric care. I believe in giving back and making fitness accessible to everyone.
                </p>
              </StoryContent>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <CredentialsBox>
                <CredentialsTitle>
                  Credentials & Experience
                </CredentialsTitle>
                <CredentialsList>
                  <CredentialItem>
                    <CredentialIcon $color={theme.colors.gold}>
                      <FaCertificate />
                    </CredentialIcon>
                    <CredentialContent>
                      <CredentialItemTitle>
                        CSCS - Certified Strength & Conditioning Specialist
                      </CredentialItemTitle>
                      <CredentialDescription>
                        National Strength and Conditioning Association
                      </CredentialDescription>
                    </CredentialContent>
                  </CredentialItem>

                  <CredentialItem>
                    <CredentialIcon $color={theme.colors.blue}>
                      <FaGraduationCap />
                    </CredentialIcon>
                    <CredentialContent>
                      <CredentialItemTitle>
                        Master of Public Health (MPH)
                      </CredentialItemTitle>
                      <CredentialDescription>
                        Specialized in health behavior and wellness promotion
                      </CredentialDescription>
                    </CredentialContent>
                  </CredentialItem>

                  <CredentialItem>
                    <CredentialIcon $color={theme.colors.red}>
                      <FaSwimmer />
                    </CredentialIcon>
                    <CredentialContent>
                      <CredentialItemTitle>
                        Division I Athlete
                      </CredentialItemTitle>
                      <CredentialDescription>
                        Cornell University Swimming - Understanding elite performance
                      </CredentialDescription>
                    </CredentialContent>
                  </CredentialItem>

                  <CredentialItem>
                    <CredentialIcon $color={theme.colors.blueLight}>
                      <FaHeartbeat />
                    </CredentialIcon>
                    <CredentialContent>
                      <CredentialItemTitle>
                        Published Health Researcher
                      </CredentialItemTitle>
                      <CredentialDescription>
                        Contributing to evidence-based fitness practices
                      </CredentialDescription>
                    </CredentialContent>
                  </CredentialItem>
                </CredentialsList>
              </CredentialsBox>
            </motion.div>
          </StoryGrid>
        </Container>
      </StorySection>

      {/* Philosophy Section */}
      <PhilosophySection>
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <PhilosophyContent>
              <PhilosophyTitle>
                Training Philosophy
              </PhilosophyTitle>
              <PhilosophyText>
                <p>
                  At NextRep Athletics, we believe fitness is more than just getting stronger or losing weight—it's about
                  building a sustainable lifestyle that enhances every aspect of your life.
                </p>
                <p>
                  Our approach combines cutting-edge exercise science with public health principles, ensuring that every
                  workout, every program, and every recommendation is grounded in research and tailored to your unique needs.
                </p>
              </PhilosophyText>

              <PhilosophyGrid>
                <PhilosophyCard>
                  <PhilosophyCardTitle $color={theme.colors.blue}>
                    Evidence-Based
                  </PhilosophyCardTitle>
                  <PhilosophyCardText>
                    Every technique and program is backed by scientific research and proven methods.
                  </PhilosophyCardText>
                </PhilosophyCard>

                <PhilosophyCard>
                  <PhilosophyCardTitle $color={theme.colors.gold}>
                    Personalized
                  </PhilosophyCardTitle>
                  <PhilosophyCardText>
                    Your program is uniquely designed for your body, goals, and lifestyle.
                  </PhilosophyCardText>
                </PhilosophyCard>

                <PhilosophyCard>
                  <PhilosophyCardTitle $color={theme.colors.red}>
                    Sustainable
                  </PhilosophyCardTitle>
                  <PhilosophyCardText>
                    Focus on building habits and strength that last a lifetime, not quick fixes.
                  </PhilosophyCardText>
                </PhilosophyCard>
              </PhilosophyGrid>
            </PhilosophyContent>
          </motion.div>
        </Container>
      </PhilosophySection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle>
            READY TO WORK TOGETHER?
          </CTATitle>
          <CTASubtitle>
            Let's discuss your goals and create a plan that works for you.
          </CTASubtitle>
          <CTAButton href="/contact">
            Schedule Your Free Consultation
          </CTAButton>
        </CTAContent>
      </CTASection>
    </>
  )
}
