"use client";
import Image from "next/image";
import QuoteIcon from "@/lib/assets/icons/EllipsisIcon.svg";
import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { motionPresets, staggeredAnimation } from "@/lib/utils/animations";
import { testimonials } from "@/lib/constants/testimonials";
import type { Testimonial } from "@/lib/constants/testimonials";
import BlueDumbell from "@/lib/assets/icons/BlueDumbell.svg";

//#region styled components
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

const SectionContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;

  .header {
    text-align: center;
    margin-bottom: 4rem;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 0 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 4rem;
  }
`;

// Tagline component
const Tagline = styled.p`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const Title = styled.h2<{ $size?: "sm" | "md" | "lg" }>`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.05em;
  color: #fff;

  ${(props) => {
    if (props.$size === "sm")
      return `
      font-size: 2.5rem;
      @media (min-width: ${theme.breakpoints.md}) { font-size: 3.5rem; }
      @media (min-width: ${theme.breakpoints.lg}) { font-size: 4rem; }
    `;
    if (props.$size === "lg")
      return `
      font-size: 3rem;
      @media (min-width: ${theme.breakpoints.md}) { font-size: 4.5rem; }
      @media (min-width: ${theme.breakpoints.lg}) { font-size: 5.5rem; }
    `;
    // Default 'md'
    return `
      font-size: 3rem;
      @media (min-width: ${theme.breakpoints.md}) { font-size: 4rem; }
      @media (min-width: ${theme.breakpoints.lg}) { font-size: 4.5rem; }
    `;
  }}
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

  .top {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    position: relative;

    .testimonial-quote {
      position: absolute;
      left: 90px;
    }
  }

  .bottom {
    display: flex;
    justify-content: flex-end;
    border-top: 2px solid ${theme.colors.gold};
    padding-top: 20px;
  }

  /* Center the third card on desktop */
  ${(props) =>
    props.$isBottom &&
    `
    @media (min-width: ${theme.breakpoints.lg}) {
      grid-column: 1 / -1;
      max-width: 550px;
      margin: 0 auto;
      width: 100%;
      justify-self: center;
    }
  `}

  .quote {
    font-family: ${theme.fonts.montserrat};
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.colors.dark};
  }
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

const ClientName = styled.p`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1rem;
  color: ${theme.colors.dark};
  margin-bottom: 0.25rem;

  span {
    font-size: 0.875rem;
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.gray};
  }
`;
//#endregion

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
        <div className="top">
          <AvatarWrapper>👤</AvatarWrapper>
          <img
            className="testimonial-quote"
            src={QuoteIcon.src}
            alt="quotation"
          />
          <p className="quote">{testimonial.quote}</p>
        </div>
        <div className="bottom">
          <ClientName>
            {testimonial.name}&nbsp;-&nbsp;<span>{testimonial.subtitle}</span>
          </ClientName>
        </div>
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
          <div className="header">
            <Tagline className="text-gold" style={{ marginBottom: "1rem" }}>
              Client Transformations
            </Tagline>
            <Title $size="sm">REAL PEOPLE. REAL RESULTS.</Title>
          </div>
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
