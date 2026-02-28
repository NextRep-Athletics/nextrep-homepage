"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Location from "@/lib/assets/icons/Location.svg";
import Mail from "@/lib/assets/icons/Mail.svg";
import styled from "styled-components";
import { theme } from "@/lib/styles/theme";
import { motionPresets } from "@/lib/utils/animations";
import Input from "@/components/Input";
import Textarea from "@/lib/components/TextArea";
import Dropdown from "@/lib/components/Dropdown";
import type { DropdownOption } from "@/lib/components/Dropdown";
import Button from "@/lib/components/Button";

type ToastState = { type: "success" | "error"; message: string } | null;

//#region styled components
const ContactSection = styled.section`
  padding: 5rem 2rem;
  background-color: rgba(30, 74, 107, 0.1);

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 6rem 3rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 8rem 4rem;
  }

  @media (max-width: 500px) {
    padding: 2rem 0;
  }
`;

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

  @media (max-width: 500px) {
    padding: 0 1rem;
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

const ContactTitle = styled(Title)`
  color: ${theme.colors.blue};
  margin-bottom: 1.5rem;
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
  color: ${theme.colors.dark};

  .description {
    margin-bottom: 3rem;
    max-width: 500px;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .text {
      font-size: 1rem;
    }

    .link {
      font-size: 1rem;
      color: ${theme.colors.blue};

      &:hover {
        color: ${theme.colors.blueLight};
      }
    }
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

  @media (max-width: 500px) {
    padding: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;

      @media (min-width: ${theme.breakpoints.sm}) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .submit-wrapper {
      width: 100%;
      margin-top: 0.5rem;

      button {
        width: 100%;
      }
    }
  }
`;

const Toast = styled(motion.div)<{ $type: "success" | "error" }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  padding: 1rem 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows["2xl"]};
  color: white;
  font-weight: ${theme.fontWeights.semibold};
  font-size: 0.9rem;
  max-width: 340px;
  background-color: ${({ $type }) =>
    $type === "success" ? "#16a34a" : "#dc2626"};
`;
//#endregion

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

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  fitnessGoal: "",
  message: "",
};

// MAIN COMPONENT
export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(timer);
  }, [toast]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setFormData(initialForm);
      setToast({ type: "success", message: "Message sent! We'll be in touch within 24 hours." });
    } catch (err) {
      setToast({
        type: "error",
        message: err instanceof Error ? err.message : "Failed to send. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactSection id="contact" className="montserrat">
      <SectionContainer>
        <ContactGrid>
          {/* Left - Contact Info */}
          <motion.div {...motionPresets.fadeInLeft}>
            <ContactInfo>
              <Tagline style={{ marginBottom: "1rem" }}>Get In Touch</Tagline>
              <ContactTitle $size="sm">
                Ready To Start Your Journey?
              </ContactTitle>
              <p className="description body-text">
                Fill out the form and we'll get back to you within 24 hours to
                schedule your free consultation. Let's talk about your goals and
                create a plan to achieve them.
              </p>

              <div className="details">
                <div className="item">
                  <img src={Location.src} alt="location" />
                  <p className="text">
                    Serving Southern California & Virtual Training Nationwide
                  </p>
                </div>
                <div className="item">
                  <img src={Mail.src} alt="contact-mail" />
                  <a
                    className="link link-hover-underline"
                    href="mailto:contact@nextrep-athletics.com"
                  >
                    contact@nextrep-athletics.com
                  </a>
                </div>
              </div>
            </ContactInfo>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            {...motionPresets.fadeInRight}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FormCard>
              <form onSubmit={handleSubmit}>
                <Input
                  label="Full Name"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />

                <div className="row">
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
                </div>

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

                <div className="submit-wrapper">
                  <Button
                    variant="primary"
                    type="submit"
                    className="button-hover-lift"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </FormCard>
          </motion.div>
        </ContactGrid>
      </SectionContainer>
      <AnimatePresence>
        {toast && (
          <Toast
            $type={toast.type}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
          >
            {toast.message}
          </Toast>
        )}
      </AnimatePresence>
    </ContactSection>
  );
}
