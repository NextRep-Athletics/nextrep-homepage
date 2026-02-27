"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { motionPresets, staggeredAnimation } from "@/lib/utils/animations";
import { trainers } from "@/lib/constants/trainers";
import type { Trainer } from "@/lib/constants/trainers";

// STYLED COMPONENTS
// SectionContainer component 
const SectionContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 0 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 0 4rem;
  }
`;

// HeroTitle component 
const HeroTitle = styled.h1`
  font-family: ${theme.fonts.montserrat};
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
`;

const TrainersSection = styled.section`
  padding: 5rem 2rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 6rem 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 8rem 4rem;
  }
`;

const StyledTrainerTitle = styled(HeroTitle)`
  text-align: center;
  margin-bottom: 4rem;

  .blue {
    color: ${theme.colors.blue};
  }

  .gold {
    color: ${theme.colors.gold};
  }
`;

const TrainersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;

const TrainerCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows["2xl"]};
`;

const TrainerCardInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: 300px 1fr;
    grid-template-rows: auto auto;
    gap: 3rem;
    align-items: start;
  }
`;

const TrainerImage = styled.img`
  width: auto;
  max-height: 275px;
  aspect-ratio: 3/4;
  border-radius: ${theme.borderRadius.lg};
  object-fit: cover;
  display: block;

  @media (max-width: calc(${theme.breakpoints.md} - 1px)) {
    max-width: 250px;
    margin: 0 auto;
  }
`;

const TrainerPhotoWrapper = styled.div`
  order: 1;
  display: flex;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-column: 1;
    grid-row: 1;
    margin: auto;
  }
`;

const TrainerName = styled.h3`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.75rem;
  color: ${theme.colors.blue};
  margin-bottom: 0.25rem;

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: 1rem;
  }
`;

const TrainerTitle = styled.p`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  font-size: 1.25rem;
  color: ${theme.colors.gold};
`;

const TrainerInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-column: 2;
    grid-row: 1 / span 2;
  }
`;

const TrainerBio = styled.div`
  margin-top: 1.5rem;
`;

const BioText = styled.p`
  font-family: ${theme.fonts.montserrat};
  font-size: 1rem;
  color: ${theme.colors.dark};
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CredentialsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  order: 3;

  @media (min-width: ${theme.breakpoints.md}) {
    order: initial;
    grid-column: 1;
    grid-row: 2;
  }
`;

const CredentialItem = styled.div<{ $color?: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${theme.fonts.montserrat};
  font-size: 0.875rem;
  color: ${theme.colors.dark};

  svg {
    font-size: 1.25rem;
    color: ${(props) => props.$color || theme.colors.blue};
    flex-shrink: 0;
  }
`;

// COMPONENTS
interface TrainerCardComponentProps {
  trainer: Trainer;
  index: number;
}

function TrainerCardComponent({ trainer, index }: TrainerCardComponentProps) {
  return (
    <motion.div {...staggeredAnimation(index, 0.2)}>
      <TrainerCard className="card-hover-lift">
        <TrainerCardInner>
          {/* Photo */}
          <TrainerPhotoWrapper>
            <TrainerImage src={trainer.photo} alt={`${trainer.name} - ${trainer.title}`} />
          </TrainerPhotoWrapper>

          {/* Name, Title, and Bio */}
          <TrainerInfoSection>
            <div>
              <TrainerName>{trainer.name}</TrainerName>
              <TrainerTitle>{trainer.title}</TrainerTitle>
            </div>

            <TrainerBio>
              {trainer.bio.map((paragraph, idx) => (
                <BioText key={idx}>{paragraph}</BioText>
              ))}
            </TrainerBio>
          </TrainerInfoSection>

          {/* Credentials */}
          <CredentialsList>
            {trainer.credentials.map((credential, idx) => (
              <CredentialItem key={idx} $color={credential.color}>
                <credential.icon />
                <span>{credential.text}</span>
              </CredentialItem>
            ))}
          </CredentialsList>
        </TrainerCardInner>
      </TrainerCard>
    </motion.div>
  );
}

// MAIN COMPONENT
export default function Trainers() {
  return (
    <TrainersSection id="trainers">
      <SectionContainer>
        <motion.div {...motionPresets.fadeInUpSmall}>
          <StyledTrainerTitle>
            <span className="blue">MEET YOUR </span>
            <span className="gold">TRAINERS</span>
          </StyledTrainerTitle>
        </motion.div>

        <TrainersGrid>
          {trainers.map((trainer, index) => (
            <TrainerCardComponent
              key={trainer.id}
              trainer={trainer}
              index={index}
            />
          ))}
        </TrainersGrid>
      </SectionContainer>
    </TrainersSection>
  );
}
