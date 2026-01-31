'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaCheck, FaStar, FaShoppingCart } from 'react-icons/fa'
import styled from 'styled-components'
import { theme } from '@/styles/theme'
import { Container, Section } from '@/styles/SharedComponents'

// Hero Section
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

// Filter Section
const FilterSection = styled.section`
  padding: 2rem 0;
  background: #F9FAFB;
  position: sticky;
  top: 5rem;
  z-index: 40;
`;

const FilterContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.5rem;
  border-radius: ${theme.borderRadius.full};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  transition: all ${theme.transitions.normal};
  background: ${props => props.$active ? theme.colors.blue : 'white'};
  color: ${props => props.$active ? 'white' : theme.colors.dark};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${props => props.$active ? theme.colors.blue : theme.colors.blueLight};
    color: white;
  }
`;

// Programs Grid Section
const ProgramsSection = styled(Section)`
  background: white;
`;

const ProgramsGrid = styled.div`
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

const ProgramCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  overflow: hidden;
  position: relative;
  transition: all ${theme.transitions.normal};

  &:hover {
    box-shadow: ${theme.shadows['2xl']};
    transform: translateY(-8px);
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${theme.colors.gold};
  color: ${theme.colors.dark};
  padding: 0.25rem 0.75rem;
  border-radius: ${theme.borderRadius.full};
  font-size: 0.875rem;
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
`;

const ProgramContent = styled.div`
  padding: 2rem;
`;

const ProgramHeader = styled.div`
  margin-bottom: 1rem;
`;

const ProgramCategory = styled.span`
  font-size: 0.875rem;
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.blue};
  text-transform: uppercase;
`;

const ProgramName = styled.h3`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.5rem;
  color: ${theme.colors.dark};
  margin-top: 0.5rem;
`;

const ProgramDescription = styled.p`
  color: ${theme.colors.gray};
  margin-bottom: 1.5rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 1.5rem;
`;

const Price = styled.span`
  font-family: ${theme.fonts.bebas};
  font-size: 2.25rem;
  color: ${theme.colors.dark};
`;

const OriginalPrice = styled.span`
  margin-left: 0.75rem;
  font-size: 1.125rem;
  color: #9CA3AF;
  text-decoration: line-through;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
`;

const CheckIcon = styled(FaCheck)`
  color: ${theme.colors.gold};
  margin-top: 0.25rem;
  margin-right: 0.75rem;
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  color: ${theme.colors.gray};
  font-size: 0.875rem;
`;

const ProgramMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: ${theme.colors.gray};
`;

const PurchaseButton = styled.button`
  width: 100%;
  background: ${theme.colors.blue};
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  transition: all ${theme.transitions.normal};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: ${theme.colors.royal};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`;

// CTA Section
const CTASection = styled(Section)`
  background: ${theme.gradients.gold};
`;

const CTAContent = styled(Container)`
  text-align: center;
`;

const CTATitle = styled.h2`
  font-family: ${theme.fonts.bebas};
  font-size: 2.5rem;
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

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${theme.colors.dark};
  color: white;
  padding: 1rem 2rem;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.125rem;
  transition: all ${theme.transitions.normal};

  &:hover {
    background: ${theme.colors.navy};
  }
`;

interface Program {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  description: string
  features: string[]
  duration: string
  level: string
  popular?: boolean
}

const programs: Program[] = [
  {
    id: 1,
    name: "Foundation Strength",
    category: "Beginner",
    price: 79,
    originalPrice: 99,
    description: "Perfect for beginners looking to build a solid foundation of strength and proper form.",
    features: [
      "12-week progressive program",
      "Video demonstrations for all exercises",
      "Form check guides",
      "Weekly email support",
      "Nutrition guidelines",
      "Progress tracking sheets"
    ],
    duration: "12 weeks",
    level: "Beginner",
  },
  {
    id: 2,
    name: "Athletic Performance",
    category: "Advanced",
    price: 149,
    description: "Designed for athletes and experienced trainers looking to maximize performance.",
    features: [
      "16-week periodized program",
      "Sport-specific training modules",
      "Power and explosive training",
      "Mobility and recovery protocols",
      "Bi-weekly video check-ins",
      "Custom nutrition plan",
      "1-on-1 monthly consultation"
    ],
    duration: "16 weeks",
    level: "Advanced",
    popular: true,
  },
  {
    id: 3,
    name: "Total Body Transformation",
    category: "Intermediate",
    price: 119,
    originalPrice: 149,
    description: "Complete body recomposition program focusing on muscle building and fat loss.",
    features: [
      "12-week transformation plan",
      "4-5 day training split",
      "Cardio and HIIT protocols",
      "Macro nutrition calculator",
      "Weekly progress check-ins",
      "Access to private community",
      "Recipe guide included"
    ],
    duration: "12 weeks",
    level: "Intermediate",
    popular: true,
  },
  {
    id: 4,
    name: "Home Warrior",
    category: "All Levels",
    price: 59,
    description: "Minimal equipment program designed for effective home workouts.",
    features: [
      "8-week home program",
      "Bodyweight and dumbbell exercises",
      "30-45 minute workouts",
      "No gym required",
      "Mobile app access",
      "Exercise substitution guide"
    ],
    duration: "8 weeks",
    level: "All Levels",
  },
  {
    id: 5,
    name: "Executive Fitness",
    category: "Intermediate",
    price: 199,
    description: "Time-efficient program designed for busy professionals.",
    features: [
      "12-week executive program",
      "30-minute efficient workouts",
      "Stress management techniques",
      "Travel workout alternatives",
      "Weekly 1-on-1 check-ins",
      "Personalized schedule optimization",
      "Premium nutrition guide"
    ],
    duration: "12 weeks",
    level: "Intermediate",
  },
  {
    id: 6,
    name: "Post-Injury Recovery",
    category: "Rehabilitation",
    price: 139,
    description: "Safe return to fitness after injury with progressive loading protocols.",
    features: [
      "12-week recovery program",
      "Joint-specific protocols",
      "Progressive loading strategies",
      "Pain management techniques",
      "Physical therapy exercises",
      "Weekly progress monitoring",
      "Direct email support"
    ],
    duration: "12 weeks",
    level: "All Levels",
  }
]

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels', 'Rehabilitation']

  const filteredPrograms = selectedCategory === 'All'
    ? programs
    : programs.filter(p => p.category === selectedCategory)

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
              TRAINING PROGRAMS
            </HeroTitle>
            <HeroSubtitle>
              Science-backed programs designed to help you achieve your specific fitness goals
            </HeroSubtitle>
          </motion.div>
        </HeroContent>
      </HeroSection>

      {/* Filter Section */}
      <FilterSection>
        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category}
              onClick={() => setSelectedCategory(category)}
              $active={selectedCategory === category}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
      </FilterSection>

      {/* Programs Grid */}
      <ProgramsSection>
        <Container>
          <ProgramsGrid>
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProgramCard>
                  {program.popular && (
                    <PopularBadge>
                      POPULAR
                    </PopularBadge>
                  )}

                  <ProgramContent>
                    <ProgramHeader>
                      <ProgramCategory>
                        {program.category}
                      </ProgramCategory>
                      <ProgramName>
                        {program.name}
                      </ProgramName>
                    </ProgramHeader>

                    <ProgramDescription>
                      {program.description}
                    </ProgramDescription>

                    <PriceContainer>
                      <Price>
                        ${program.price}
                      </Price>
                      {program.originalPrice && (
                        <OriginalPrice>
                          ${program.originalPrice}
                        </OriginalPrice>
                      )}
                    </PriceContainer>

                    <FeaturesList>
                      {program.features.slice(0, 4).map((feature, i) => (
                        <FeatureItem key={i}>
                          <CheckIcon />
                          <FeatureText>{feature}</FeatureText>
                        </FeatureItem>
                      ))}
                    </FeaturesList>

                    <ProgramMeta>
                      <span>{program.duration}</span>
                      <span>{program.level}</span>
                    </ProgramMeta>

                    <PurchaseButton>
                      <FaShoppingCart />
                      Purchase Program
                    </PurchaseButton>
                  </ProgramContent>
                </ProgramCard>
              </motion.div>
            ))}
          </ProgramsGrid>
        </Container>
      </ProgramsSection>

      {/* Custom Program CTA */}
      <CTASection>
        <CTAContent>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CTATitle>
              NEED A CUSTOM PROGRAM?
            </CTATitle>
            <CTASubtitle>
              Work directly with me to create a personalized training program tailored to your specific needs and goals.
            </CTASubtitle>
            <CTAButton href="/contact">
              Get Your Custom Program
            </CTAButton>
          </motion.div>
        </CTAContent>
      </CTASection>
    </>
  )
}
