"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { SectionContainer, BebasTitle } from "@/styles/SharedComponents";
import { motionPresets, staggeredAnimation } from "@/lib/utils/animations";
import { trainers } from "@/lib/constants/trainers";
import type { Trainer, TrainerCredential } from "@/lib/constants/trainers";

// STYLED COMPONENTS
const TrainersSection = styled.section`
  padding: 5rem 2rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 6rem 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 8rem 4rem;
  }
`;

const StyledBebasTitle = styled(BebasTitle)`
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

  @media (min-width: ${theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
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

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 200px 1fr;
    gap: 2rem;
  }
`;

const TrainerImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  background: #e0e0e0; /* Placeholder background */

  @media (min-width: ${theme.breakpoints.sm}) {
    width: 200px;
    height: 280px;
  }

  /* Placeholder styling when no image */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #999;
`;

const TrainerContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrainerHeader = styled.div`
  margin-bottom: 1rem;
`;

const TrainerName = styled.h3`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.75rem;
  color: ${theme.colors.blue};
  margin-bottom: 0.25rem;
`;

const TrainerTitle = styled.p`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  font-size: 1.25rem;
  color: ${theme.colors.gold};
`;

const TrainerBio = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
`;

const BioText = styled.p`
  font-family: ${theme.fonts.montserrat};
  font-size: 0.9rem;
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
  padding-top: 1.5rem;
  border-top: 2px solid #f0f0f0;
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
          {/* Trainer Photo */}
          <TrainerImageWrapper>
            {/* TODO: Replace with actual Image component when photos are available */}
            {/* <Image 
              src={trainer.photo} 
              alt={trainer.name}
              fill
              style={{ objectFit: 'cover' }}
            /> */}
            👤
          </TrainerImageWrapper>

          {/* Trainer Info */}
          <TrainerContent>
            <TrainerHeader>
              <TrainerName>{trainer.name}</TrainerName>
              <TrainerTitle>{trainer.title}</TrainerTitle>
            </TrainerHeader>

            <TrainerBio>
              {trainer.bio.map((paragraph, idx) => (
                <BioText key={idx}>{paragraph}</BioText>
              ))}
            </TrainerBio>

            <CredentialsList>
              {trainer.credentials.map((credential, idx) => (
                <CredentialItem key={idx} $color={credential.color}>
                  <credential.icon />
                  <span>{credential.text}</span>
                </CredentialItem>
              ))}
            </CredentialsList>
          </TrainerContent>
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
          <StyledBebasTitle $size="md">
            <span className="blue">MEET YOUR </span>
            <span className="gold">TRAINERS</span>
          </StyledBebasTitle>
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
