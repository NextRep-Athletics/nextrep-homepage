"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "@/styles/theme";
import { SectionContainer, Tagline, BebasTitle } from "@/styles/SharedComponents";
import { motionPresets } from "@/lib/utils/animations";
import Input from "@/components/Input";
import Textarea from "@/lib/components/TextArea";
import Dropdown from "@/lib/components/Dropdown";
import type { DropdownOption } from "@/lib/components/Dropdown";

// STYLED COMPONENTS
const ContactSection = styled.section`
  padding: 5rem 2rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 6rem 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 8rem 4rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;

  @media (min-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
  }
`;

const ContactInfo = styled.div`
  color: #1A2733;
`;

const StyledBebasTitle = styled(BebasTitle)`
  color: ${theme.colors.blue};
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  margin-bottom: 3rem;
  max-width: 500px;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: ${theme.fonts.montserrat};

  svg {
    font-size: 1.25rem;
    color: ${theme.colors.gold};
    flex-shrink: 0;
  }
`;

const ContactText = styled.p`
  font-size: 1rem;
`;

const ContactLink = styled.a`
  font-size: 1rem;
  color: ${theme.colors.blue};

  &:hover {
    color: ${theme.colors.blueLight};
  }
`;

const FormCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows["2xl"]};

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 3rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: ${theme.colors.blue};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  font-size: 1.125rem;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background: ${theme.colors.royal};
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

// FITNESS GOAL OPTIONS
const fitnessGoalOptions: DropdownOption[] = [
  { value: "weight-loss", label: "Weight Loss" },
  { value: "muscle-gain", label: "Muscle Gain" },
  { value: "strength", label: "Build Strength" },
  { value: "endurance", label: "Improve Endurance" },
  { value: "general-fitness", label: "General Fitness" },
  { value: "sports-performance", label: "Sports Performance" },
  { value: "injury-recovery", label: "Injury Recovery" },
  { value: "other", label: "Other" },
];

// MAIN COMPONENT
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    fitnessGoal: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., send to API, email service, etc.)
    console.log("Form submitted:", formData);
    // Reset form after submission
    // setFormData({ fullName: '', email: '', phone: '', fitnessGoal: '', message: '' })
  };

  return (
    <ContactSection id="contact">
      <SectionContainer>
        <ContactGrid>
          {/* Left - Contact Info */}
          <motion.div {...motionPresets.fadeInLeft}>
            <ContactInfo>
              <Tagline style={{ marginBottom: "1rem" }}>Get In Touch</Tagline>
              <StyledBebasTitle $size="sm">
                Ready To Start Your Journey?
              </StyledBebasTitle>
              <Description className="body-text">
                Fill out the form and we'll get back to you within 24 hours to
                schedule your free consultation. Let's talk about your goals and
                create a plan to achieve them.
              </Description>

              <ContactDetails>
                <ContactItem>
                  <FaMapMarkerAlt />
                  <ContactText>
                    Serving Southern California & Virtual Training Nationwide
                  </ContactText>
                </ContactItem>
                <ContactItem>
                  <FaEnvelope />
                  <ContactLink
                    href="mailto:contact@nextrep-athletics.com"
                    className="link-hover-underline"
                  >
                    contact@nextrep-athletics.com
                  </ContactLink>
                </ContactItem>
              </ContactDetails>
            </ContactInfo>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            {...motionPresets.fadeInRight}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FormCard>
              <Form onSubmit={handleSubmit}>
                <Input
                  label="Full Name"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <FormRow>
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormRow>

                <Dropdown
                  label="Fitness Goal"
                  name="fitnessGoal"
                  value={formData.fitnessGoal}
                  onChange={handleChange}
                  options={fitnessGoalOptions}
                  placeholder="Select your Primary Goal"
                  required
                />

                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness journey and what you're looking to achieve..."
                  rows={5}
                />

                <SubmitButton type="submit" className="button-hover-lift">
                  Send Message
                </SubmitButton>
              </Form>
            </FormCard>
          </motion.div>
        </ContactGrid>
      </SectionContainer>
    </ContactSection>
  );
}
