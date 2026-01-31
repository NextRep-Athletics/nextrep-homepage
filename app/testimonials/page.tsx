'use client'
import { motion } from 'framer-motion'
import { FaStar, FaYelp, FaQuoteLeft } from 'react-icons/fa'
import styled from 'styled-components'
import { theme } from '@/styles/theme'
import { Container, Section, DarkButton } from '@/styles/SharedComponents'

// Hero Section Styles
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

// Stats Section Styles
const StatsSection = styled.section`
  padding: 4rem 0;
  background: #F9FAFB;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  text-align: center;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatNumber = styled.div`
  font-family: ${theme.fonts.bebas};
  font-size: 3rem;
`;

const StatLabel = styled.div`
  font-family: ${theme.fonts.montserrat};
  color: ${theme.colors.gray};
`;

// Testimonials Section Styles
const TestimonialsSection = styled(Section)`
  background: ${theme.colors.white};
`;

const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const TestimonialsTitle = styled.h2`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.875rem;
  color: ${theme.colors.dark};
  margin-bottom: 1rem;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

const TestimonialsSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.gray};
  max-width: 42rem;
  margin: 0 auto;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  transition: all ${theme.transitions.normal};

  &:hover {
    box-shadow: ${theme.shadows['2xl']};
    transform: translateY(-8px);
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const QuoteIcon = styled(FaQuoteLeft)`
  font-size: 3rem;
  color: ${theme.colors.blueLight};
  opacity: 0.2;
  margin-right: 0.75rem;
`;

const TestimonialHeaderContent = styled.div`
  flex: 1;
`;

const StarsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Star = styled(FaStar)<{ $filled: boolean }>`
  color: ${props => props.$filled ? theme.colors.gold : '#D1D5DB'};
`;

const VerifiedBadge = styled.span`
  font-size: 0.75rem;
  color: ${theme.colors.gold};
  font-weight: ${theme.fontWeights.semibold};
`;

const TestimonialName = styled.h3`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.125rem;
  color: ${theme.colors.dark};
`;

const TestimonialProgram = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.blue};
  margin-bottom: 0.75rem;
`;

const TestimonialText = styled.p`
  color: ${theme.colors.gray};
  margin-bottom: 0.75rem;
`;

const TestimonialDate = styled.p`
  font-size: 0.875rem;
  color: #9CA3AF;
`;

// Yelp Section Styles
const YelpSection = styled(Section)`
  background: #F9FAFB;
`;

const YelpHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const YelpTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const YelpIcon = styled(FaYelp)`
  font-size: 3rem;
  color: #DC2626;
  margin-right: 0.75rem;
`;

const YelpTitle = styled.h2`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.875rem;
  color: ${theme.colors.dark};

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 2.25rem;
  }
`;

const YelpSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.gray};
  max-width: 42rem;
  margin: 0 auto 2rem;
`;

const YelpWidget = styled.div`
  background: white;
  padding: 2rem;
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  max-width: 48rem;
  margin: 0 auto;
`;

const YelpPlaceholder = styled.div`
  border: 2px dashed #D1D5DB;
  padding: 3rem;
  border-radius: ${theme.borderRadius.lg};
`;

const YelpPlaceholderIcon = styled(FaYelp)`
  font-size: 4rem;
  color: #DC2626;
  margin: 0 auto 1rem;
  display: block;
`;

const YelpPlaceholderText = styled.p`
  color: ${theme.colors.gray};
  margin-bottom: 1rem;
  text-align: center;
`;

const YelpPlaceholderSubtext = styled.p`
  font-size: 0.875rem;
  color: #9CA3AF;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const YelpLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #DC2626;
  font-weight: ${theme.fontWeights.semibold};
  transition: color ${theme.transitions.normal};
  margin: 0 auto;
  display: flex;
  justify-content: center;

  &:hover {
    color: #B91C1C;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const YelpNote = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #DBEAFE;
  border-radius: ${theme.borderRadius.lg};
`;

const YelpNoteText = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.dark};

  strong {
    font-weight: ${theme.fontWeights.bold};
  }
`;

// CTA Section Styles
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

interface Testimonial {
  id: number
  name: string
  program: string
  rating: number
  text: string
  date: string
  verified: boolean
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    program: "Total Body Transformation",
    rating: 5,
    text: "Cy's approach to fitness is unlike anything I've experienced. The combination of scientific knowledge and practical application made all the difference. I've lost 25 pounds and gained so much strength and confidence.",
    date: "2 months ago",
    verified: true
  },
  {
    id: 2,
    name: "Michael Chen",
    program: "Athletic Performance",
    rating: 5,
    text: "As a former athlete, I was skeptical about online programs. But Cy's Athletic Performance program brought me back to my peak condition. The attention to detail and personalized check-ins were game-changers.",
    date: "1 month ago",
    verified: true
  },
  {
    id: 3,
    name: "Jennifer Martinez",
    program: "Foundation Strength",
    rating: 5,
    text: "I was completely new to strength training and felt intimidated. Cy's patient guidance and evidence-based approach helped me build confidence. The video demonstrations and form checks were incredibly helpful.",
    date: "3 weeks ago",
    verified: true
  },
  {
    id: 4,
    name: "David Thompson",
    program: "Executive Fitness",
    rating: 5,
    text: "The Executive Fitness program fits perfectly into my busy schedule. 30-minute workouts that actually work! Cy understands the demands of professional life and designs programs accordingly.",
    date: "2 months ago",
    verified: true
  },
  {
    id: 5,
    name: "Amanda Roberts",
    program: "Post-Injury Recovery",
    rating: 5,
    text: "After my knee surgery, I was afraid to exercise again. Cy's recovery program was exactly what I needed. Progressive, safe, and effective. I'm stronger now than before my injury!",
    date: "3 months ago",
    verified: true
  },
  {
    id: 6,
    name: "James Wilson",
    program: "Home Warrior",
    rating: 5,
    text: "Perfect for working out at home! I've built an impressive physique with just dumbbells and bodyweight exercises. Cy proves you don't need a fancy gym to get results.",
    date: "1 month ago",
    verified: true
  }
]

export default function TestimonialsPage() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        $filled={i < rating}
      />
    ))
  }

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
              CLIENT SUCCESS STORIES
            </HeroTitle>
            <HeroSubtitle>
              Real results from real people who transformed their lives with NextRep Athletics
            </HeroSubtitle>
          </motion.div>
        </HeroContent>
      </HeroSection>

      {/* Stats Section */}
      <StatsSection>
        <Container>
          <StatsGrid>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <StatNumber style={{ color: theme.colors.blue }}>500+</StatNumber>
              <StatLabel>Clients Trained</StatLabel>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StatNumber style={{ color: theme.colors.gold }}>4.9</StatNumber>
              <StatLabel>Average Rating</StatLabel>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatNumber style={{ color: theme.colors.red }}>95%</StatNumber>
              <StatLabel>Success Rate</StatLabel>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <StatNumber style={{ color: theme.colors.blue }}>10K+</StatNumber>
              <StatLabel>Workouts Completed</StatLabel>
            </motion.div>
          </StatsGrid>
        </Container>
      </StatsSection>

      {/* Testimonials Grid */}
      <TestimonialsSection>
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TestimonialsHeader>
              <TestimonialsTitle>
                What Our Clients Say
              </TestimonialsTitle>
              <TestimonialsSubtitle>
                Don't just take our word for it - hear from the people who have experienced the NextRep difference
              </TestimonialsSubtitle>
            </TestimonialsHeader>
          </motion.div>

          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard>
                  <TestimonialHeader>
                    <QuoteIcon />
                    <TestimonialHeaderContent>
                      <StarsRow>
                        <StarsContainer>
                          {renderStars(testimonial.rating)}
                        </StarsContainer>
                        {testimonial.verified && (
                          <VerifiedBadge>
                            Verified
                          </VerifiedBadge>
                        )}
                      </StarsRow>
                      <TestimonialName>
                        {testimonial.name}
                      </TestimonialName>
                      <TestimonialProgram>
                        {testimonial.program}
                      </TestimonialProgram>
                      <TestimonialText>
                        "{testimonial.text}"
                      </TestimonialText>
                      <TestimonialDate>
                        {testimonial.date}
                      </TestimonialDate>
                    </TestimonialHeaderContent>
                  </TestimonialHeader>
                </TestimonialCard>
              </motion.div>
            ))}
          </TestimonialsGrid>
        </Container>
      </TestimonialsSection>

      {/* Yelp Reviews Section */}
      <YelpSection>
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <YelpHeader>
              <YelpTitleContainer>
                <YelpIcon />
                <YelpTitle>
                  Find Us On Yelp
                </YelpTitle>
              </YelpTitleContainer>
              <YelpSubtitle>
                Check out our reviews on Yelp and see why clients consistently rate us 5 stars
              </YelpSubtitle>

              {/* Yelp Widget Placeholder */}
              <YelpWidget>
                <YelpPlaceholder>
                  <YelpPlaceholderIcon />
                  <YelpPlaceholderText>
                    Yelp reviews widget will be embedded here
                  </YelpPlaceholderText>
                  <YelpPlaceholderSubtext>
                    To integrate Yelp reviews, add your Yelp Business ID to enable the widget
                  </YelpPlaceholderSubtext>
                  <YelpLink
                    href="https://www.yelp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYelp />
                    View on Yelp →
                  </YelpLink>
                </YelpPlaceholder>

                {/* Sample Yelp Integration Note */}
                <YelpNote>
                  <YelpNoteText>
                    <strong>Integration Note:</strong> Add the Yelp Business API widget code here or use the Yelp Fusion API
                    to dynamically fetch and display reviews. You'll need your Yelp Business ID and API key.
                  </YelpNoteText>
                </YelpNote>
              </YelpWidget>
            </YelpHeader>
          </motion.div>
        </Container>
      </YelpSection>

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
              JOIN OUR SUCCESS STORIES
            </CTATitle>
            <CTASubtitle>
              Start your transformation today and become our next success story
            </CTASubtitle>
            <DarkButton href="/contact">
              Start Your Journey
            </DarkButton>
          </motion.div>
        </CTAContent>
      </CTASection>
    </>
  )
}
