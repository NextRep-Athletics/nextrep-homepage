'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCheckCircle } from 'react-icons/fa'
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

// Contact Info Section
const ContactInfoSection = styled.section`
  padding: 3rem 0;
  background: #F9FAFB;
`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactIcon = styled.div<{ $color: string }>`
  font-size: 2.25rem;
  color: ${props => props.$color};
  margin-bottom: 0.75rem;
`;

const ContactTitle = styled.h3`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.125rem;
  color: ${theme.colors.dark};
  margin-bottom: 0.5rem;
`;

const ContactText = styled.p`
  color: ${theme.colors.gray};
`;

// Form Section
const FormSection = styled(Section)`
  background: white;
`;

const FormContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

// Form Type Toggle
const FormToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FormToggleContainer = styled.div`
  background: #F3F4F6;
  padding: 0.25rem;
  border-radius: ${theme.borderRadius.lg};
  display: inline-flex;
`;

const FormToggleButton = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  transition: all ${theme.transitions.normal};
  background: ${props => props.$active ? theme.colors.blue : 'transparent'};
  color: ${props => props.$active ? 'white' : theme.colors.dark};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.$active ? theme.colors.blue : '#E5E7EB'};
  }
`;

// Success Message
const SuccessMessage = styled.div`
  background: #D1FAE5;
  border: 1px solid #34D399;
  color: #065F46;
  padding: 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

const SuccessIcon = styled(FaCheckCircle)`
  margin-right: 0.75rem;
  flex-shrink: 0;
`;

// Form Styles
const Form = styled.form`
  background: #F9FAFB;
  padding: 2rem;
  border-radius: ${theme.borderRadius.xl};
`;

const FormTitle = styled.h2`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.5rem;
  color: ${theme.colors.dark};
  margin-bottom: 1.5rem;
`;

const FormDescription = styled.p`
  color: ${theme.colors.gray};
  margin-bottom: 2rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FormField = styled.div``;

const FormLabel = styled.label`
  display: block;
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  color: ${theme.colors.dark};
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #D1D5DB;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.inter};
  transition: border-color ${theme.transitions.normal};

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #D1D5DB;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.inter};
  transition: border-color ${theme.transitions.normal};
  background: white;

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #D1D5DB;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.inter};
  transition: border-color ${theme.transitions.normal};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

const FormFieldFull = styled(FormField)`
  @media (min-width: ${theme.breakpoints.md}) {
    grid-column: 1 / -1;
  }
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.blue};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.lg};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.semibold};
  transition: all ${theme.transitions.normal};
  border: none;
  cursor: pointer;
  margin-top: 1.5rem;

  &:hover {
    background: ${theme.colors.royal};
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

// FAQ Section
const FAQSection = styled(Section)`
  background: #F9FAFB;
`;

const FAQContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
`;

const FAQTitle = styled.h2`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.875rem;
  color: ${theme.colors.dark};
  margin-bottom: 2rem;
  text-align: center;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FAQCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: ${theme.borderRadius.lg};
`;

const FAQQuestion = styled.h3`
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeights.bold};
  font-size: 1.125rem;
  color: ${theme.colors.dark};
  margin-bottom: 0.5rem;
`;

const FAQAnswer = styled.p`
  color: ${theme.colors.gray};
`;

export default function ContactPage() {
  const [formType, setFormType] = useState<'consultation' | 'information'>('consultation')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    goals: '',
    experience: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
              GET IN TOUCH
            </HeroTitle>
            <HeroSubtitle>
              Ready to start your fitness journey? Book a free consultation or request more information
            </HeroSubtitle>
          </motion.div>
        </HeroContent>
      </HeroSection>

      {/* Contact Info Section */}
      <ContactInfoSection>
        <Container>
          <ContactInfoGrid>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ContactInfoCard>
                <ContactIcon $color={theme.colors.blue}>
                  <FaPhone />
                </ContactIcon>
                <ContactTitle>Phone</ContactTitle>
                <ContactText>(555) 123-4567</ContactText>
              </ContactInfoCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ContactInfoCard>
                <ContactIcon $color={theme.colors.gold}>
                  <FaEnvelope />
                </ContactIcon>
                <ContactTitle>Email</ContactTitle>
                <ContactText>contact@nextrep-athletics.com</ContactText>
              </ContactInfoCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactInfoCard>
                <ContactIcon $color={theme.colors.red}>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactTitle>Location</ContactTitle>
                <ContactText>Caldwell, New Jersey<br />Virtual Training Available</ContactText>
              </ContactInfoCard>
            </motion.div>
          </ContactInfoGrid>
        </Container>
      </ContactInfoSection>

      {/* Form Section */}
      <FormSection>
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FormContainer>
              {/* Form Type Toggle */}
              <FormToggleWrapper>
                <FormToggleContainer>
                  <FormToggleButton
                    onClick={() => setFormType('consultation')}
                    $active={formType === 'consultation'}
                  >
                    <FaCalendarAlt />
                    Book Free Consultation
                  </FormToggleButton>
                  <FormToggleButton
                    onClick={() => setFormType('information')}
                    $active={formType === 'information'}
                  >
                    <FaEnvelope />
                    Request Information
                  </FormToggleButton>
                </FormToggleContainer>
              </FormToggleWrapper>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <SuccessMessage>
                    <SuccessIcon />
                    Thank you! Your {formType === 'consultation' ? 'consultation request' : 'inquiry'} has been received. We'll get back to you within 24 hours.
                  </SuccessMessage>
                </motion.div>
              )}

              {/* Consultation Form */}
              {formType === 'consultation' && (
                <Form onSubmit={handleSubmit}>
                  <FormTitle>
                    Schedule Your Free Consultation
                  </FormTitle>
                  <FormDescription>
                    Let's discuss your fitness goals and create a plan that works for you. This 30-minute consultation is completely free with no obligations.
                  </FormDescription>

                  <FormGrid>
                    <FormField>
                      <FormLabel>
                        Full Name *
                      </FormLabel>
                      <FormInput
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </FormField>

                    <FormField>
                      <FormLabel>
                        Email Address *
                      </FormLabel>
                      <FormInput
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </FormField>

                    <FormField>
                      <FormLabel>
                        Phone Number *
                      </FormLabel>
                      <FormInput
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </FormField>

                    <FormField>
                      <FormLabel>
                        Fitness Experience *
                      </FormLabel>
                      <FormSelect
                        name="experience"
                        required
                        value={formData.experience}
                        onChange={handleInputChange}
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                        <option value="returning">Returning after break</option>
                      </FormSelect>
                    </FormField>

                    <FormField>
                      <FormLabel>
                        Preferred Date *
                      </FormLabel>
                      <FormInput
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                      />
                    </FormField>

                    <FormField>
                      <FormLabel>
                        Preferred Time *
                      </FormLabel>
                      <FormSelect
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (6am - 12pm)</option>
                        <option value="afternoon">Afternoon (12pm - 5pm)</option>
                        <option value="evening">Evening (5pm - 9pm)</option>
                      </FormSelect>
                    </FormField>
                  </FormGrid>

                  <FormFieldFull>
                    <FormLabel>
                      Primary Fitness Goals *
                    </FormLabel>
                    <FormTextarea
                      name="goals"
                      required
                      value={formData.goals}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your fitness goals and what you hope to achieve..."
                    />
                  </FormFieldFull>

                  <SubmitButton type="submit">
                    <FaCalendarAlt />
                    Book Free Consultation
                  </SubmitButton>
                </Form>
              )}

              {/* Information Request Form */}
              {formType === 'information' && (
                <Form onSubmit={handleSubmit}>
                  <FormTitle>
                    Request More Information
                  </FormTitle>
                  <FormDescription>
                    Have questions about our programs or services? Send us a message and we'll get back to you within 24 hours.
                  </FormDescription>

                  <FormGrid>
                    <FormField>
                      <FormLabel>
                        Full Name *
                      </FormLabel>
                      <FormInput
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </FormField>

                    <FormField>
                      <FormLabel>
                        Email Address *
                      </FormLabel>
                      <FormInput
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </FormField>
                  </FormGrid>

                  <FormFieldFull>
                    <FormLabel>
                      How can we help you? *
                    </FormLabel>
                    <FormTextarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      placeholder="Tell us what you'd like to know about our programs, pricing, or anything else..."
                    />
                  </FormFieldFull>

                  <SubmitButton type="submit">
                    <FaEnvelope />
                    Send Message
                  </SubmitButton>
                </Form>
              )}
            </FormContainer>
          </motion.div>
        </Container>
      </FormSection>

      {/* FAQ Section */}
      <FAQSection>
        <Container>
          <FAQContainer>
            <FAQTitle>
              Frequently Asked Questions
            </FAQTitle>

            <FAQList>
              <FAQCard>
                <FAQQuestion>
                  What should I expect in the free consultation?
                </FAQQuestion>
                <FAQAnswer>
                  The 30-minute consultation is a chance for us to discuss your goals, assess your current fitness level,
                  and create a preliminary plan. There's no obligation to sign up for any programs.
                </FAQAnswer>
              </FAQCard>

              <FAQCard>
                <FAQQuestion>
                  Do you offer virtual training sessions?
                </FAQQuestion>
                <FAQAnswer>
                  Yes! We offer both in-person training in the New Jersey area and virtual training sessions nationwide.
                  Our online programs are just as effective and personalized.
                </FAQAnswer>
              </FAQCard>

              <FAQCard>
                <FAQQuestion>
                  What equipment do I need?
                </FAQQuestion>
                <FAQAnswer>
                  It depends on your program. We offer options ranging from bodyweight-only programs to full gym setups.
                  We'll discuss your available equipment during the consultation.
                </FAQAnswer>
              </FAQCard>
            </FAQList>
          </FAQContainer>
        </Container>
      </FAQSection>
    </>
  )
}
