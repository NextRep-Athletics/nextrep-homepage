"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { SectionContainer, Tagline, BebasTitle } from "@/styles/SharedComponents";
import { motionPresets, staggeredAnimation } from "@/lib/utils/animations";
import { testimonials } from "@/lib/constants/testimonials";
import type { Testimonial } from "@/lib/constants/testimonials";
import BlueDumbell from "@/lib/assets/icons/BlueDumbell.svg";

// STYLED COMPONENTS
const TestimonialsSection = styled.section`
  background: #1a3a52; /* Dark blue background */
  background-image: url(${BlueDumbell.src});
  background-repeat: repeat;
  background-size: 40px;
  padding: 5rem 2rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 6rem 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 8rem 4rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const StyledBebasTitle = styled(BebasTitle)`
  color: white;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const TestimonialCard = styled.div<{ $isBottom?: boolean }>`
  background: white;
  border-radius: ${theme.borderRadius.xl};
  padding: 2rem;
  box-shadow: ${theme.shadows["2xl"]};

  /* Center the third card on desktop */
  ${(props) =>
    props.$isBottom &&
    `
    @media (min-width: ${theme.breakpoints.lg}) {
      grid-column: 1 / -1;
      max-width: 550px;
      margin: 0 auto;
      width: 100%;
    }
  `}
`;

const TestimonialTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background: #e0e0e0; /* Placeholder background */
  flex-shrink: 0;

  /* Placeholder styling */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #999;
`;

const QuoteText = styled.p`
  font-family: ${theme.fonts.montserrat};
  font-size: 0.95rem;
  color: ${theme.colors.dark};
  font-style: italic;
`;

const Divider = styled.div`
  height: 2px;
  background: ${theme.colors.gold};
  margin: 1.5rem 0;
  opacity: 0.5;
`;

const TestimonialBottom = styled.div`
  text-align: center;
`;

const ClientName = styled.p`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1rem;
  color: ${theme.colors.dark};
  margin-bottom: 0.25rem;
`;

const ClientSubtitle = styled.p`
  font-family: ${theme.fonts.montserrat};
  font-size: 0.875rem;
  color: ${theme.colors.gray};
`;

// COMPONENTS
interface TestimonialCardComponentProps {
  testimonial: Testimonial;
  index: number;
  isBottom?: boolean;
}

function TestimonialCardComponent({
  testimonial,
  index,
  isBottom = false,
}: TestimonialCardComponentProps) {
  return (
    <motion.div {...staggeredAnimation(index, 0.15)}>
      <TestimonialCard $isBottom={isBottom} className="card-hover-lift">
        <TestimonialTop>
          <AvatarWrapper>
            {/* TODO: Replace with actual Image component when photos are available */}
            {/* <Image 
              src={testimonial.photo} 
              alt={testimonial.name}
              fill
              style={{ objectFit: 'cover' }}
            /> */}
            👤
          </AvatarWrapper>
          <QuoteText>"{testimonial.quote}"</QuoteText>
        </TestimonialTop>

        <Divider />

        <TestimonialBottom>
          <ClientName>{testimonial.name}</ClientName>
          <ClientSubtitle>{testimonial.subtitle}</ClientSubtitle>
        </TestimonialBottom>
      </TestimonialCard>
    </motion.div>
  );
}

// MAIN COMPONENT
export default function Testimonials() {
  return (
    <TestimonialsSection id="testimonials">
      <SectionContainer>
        <motion.div {...motionPresets.fadeInUpSmall}>
          <SectionHeader>
            <Tagline className="text-gold" style={{ marginBottom: "1rem" }}>
              Client Transformations
            </Tagline>
            <StyledBebasTitle $size="sm">
              REAL PEOPLE. REAL RESULTS.
            </StyledBebasTitle>
          </SectionHeader>
        </motion.div>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCardComponent
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isBottom={index === 2} // Third card is centered bottom
            />
          ))}
        </TestimonialsGrid>
      </SectionContainer>
    </TestimonialsSection>
  );
}
