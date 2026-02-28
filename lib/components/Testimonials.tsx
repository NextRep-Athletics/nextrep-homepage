"use client";

import QuoteIcon from "@/lib/assets/icons/EllipsisIcon.svg";
import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "@/lib/styles/theme";
import { motionPresets, staggeredAnimation } from "@/lib/utils/animations";
import { testimonials } from "@/lib/constants/testimonials";
import type { Testimonial } from "@/lib/constants/testimonials";
import BlueDumbell from "@/lib/assets/icons/BlueDumbell.svg";

//#region styled components
const TestimonialsSection = styled.section`
  background: ${theme.colors.testimonialsBg};
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

  @media (max-width: 500px) {
    padding: 3rem 1rem;
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

  @media (max-width: 500px) {
    padding: 0;
  }
`;

const Tagline = styled.p`
  font-weight: ${theme.fontWeights.semibold};
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  @media (min-width: ${theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const Title = styled.h2<{ $size?: "sm" | "md" | "lg" }>`
  font-weight: ${theme.fontWeights.bold};
  letter-spacing: 0.05em;
  color: #fff;

  ${(props) => {
    if (props.$size === "sm")
      return `
      font-size: 2.5rem;
      @media (min-width: ${theme.breakpoints.md}) { font-size: 3.5rem; }
      @media (min-width: ${theme.breakpoints.lg}) { font-size: 4rem; }
      @media (max-width: 500px) { font-size: 1.75rem; }
    `;
    if (props.$size === "lg")
      return `
      font-size: 3rem;
      @media (min-width: ${theme.breakpoints.md}) { font-size: 4.5rem; }
      @media (min-width: ${theme.breakpoints.lg}) { font-size: 5.5rem; }
      @media (max-width: 500px) { font-size: 2rem; }
    `;
    // Default 'md'
    return `
      font-size: 3rem;
      @media (min-width: ${theme.breakpoints.md}) { font-size: 4rem; }
      @media (min-width: ${theme.breakpoints.lg}) { font-size: 4.5rem; }
      @media (max-width: 500px) { font-size: 2rem; }
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
    font-size: 1rem;
    font-weight: 600;
    color: ${theme.colors.dark};
  }

  @media (max-width: 500px) {
    padding: 1.25rem;

    .top {
      flex-direction: column;
      gap: 0.75rem;

      .testimonial-quote {
        display: none;
      }
    }
  }
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background: ${theme.colors.inputBgDisabled};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 50px;
    border-radius: ${theme.borderRadius.lg};
    object-fit: cover;
    display: block;
  }
`;

const ClientName = styled.p`
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
          <AvatarWrapper>
            <img
              src={testimonial.photo ? testimonial.photo : BlueDumbell.src}
              alt="profile"
            />
          </AvatarWrapper>
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
    <TestimonialsSection id="testimonials" className="montserrat">
      <SectionContainer>
        <motion.div {...motionPresets.fadeInUpSmall}>
          <div className="header">
            <Tagline className="text-gold" style={{ marginBottom: "1rem" }}>
              Client Transformations
            </Tagline>
            <Title $size="sm">REAL PEOPLE. REAL RESULTS.</Title>
          </div>
        </motion.div>
        {testimonials.length === 1 ? (
          <TestimonialCardComponent
            key={testimonials[0].id}
            testimonial={testimonials[0]}
            index={0}
            isBottom={false}
          />
        ) : (
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCardComponent
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                isBottom={index === 2}
              />
            ))}
          </TestimonialsGrid>
        )}
      </SectionContainer>
    </TestimonialsSection>
  );
}
