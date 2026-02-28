import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Hr,
} from "@react-email/components";

const DUMBBELL_PATTERN_URL = `${process.env.NEXT_PUBLIC_SITE_URL}/BlueDumbell.png`;
const LOGO_URL = `${process.env.NEXT_PUBLIC_SITE_URL}/OrgLogo.png`;

interface ContactEmailProps {
  fullName: string;
  email: string;
  phone?: string;
  fitnessGoal: string;
  message: string;
}

const fitnessGoalLabels: Record<string, string> = {
  "weight-loss": "Weight Loss",
  "muscle-gain": "Muscle Gain",
  "strength": "Build Strength",
  "endurance": "Improve Endurance",
  "general-fitness": "General Fitness",
  "sports-performance": "Sports Performance",
  "injury-recovery": "Injury Recovery",
  "other": "Other",
};

export default function ContactEmail({
  fullName,
  email,
  phone,
  fitnessGoal,
  message,
}: ContactEmailProps) {
  const goalLabel = fitnessGoalLabels[fitnessGoal] ?? fitnessGoal;

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Montserrat"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Ew-.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Montserrat"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM70w-.woff2",
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <Preview>New training inquiry from {fullName}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>NextRep Inquiry</Heading>
          </Section>
          <Section style={content}>
            <Heading style={sectionTitle}>New Training Inquiry</Heading>
            <Text style={introText}>We have a new inquiry:</Text>
            {/* Full Name */}
            <Section style={plainFieldGroup}>
              <Text style={plainLabel}>Full Name</Text>
              <Text style={plainValue}>{fullName}</Text>
            </Section>
            {/* Email */}
            <Section style={plainFieldGroup}>
              <Text style={plainLabel}>Email</Text>
              <Text style={plainValue}>
                <a href={`mailto:${email}`} style={linkStyle}>{email}</a>
              </Text>
            </Section>
            {/* Phone (optional) */}
            {phone && (
              <Section style={plainFieldGroup}>
                <Text style={plainLabel}>Phone</Text>
                <Text style={plainValue}>
                  <a href={`tel:${phone}`} style={linkStyle}>{phone}</a>
                </Text>
              </Section>
            )}
            {/* Goal */}
            <Section style={shadedBlock}>
              <Text style={shadedLabel}>Fitness Goal</Text>
              <Text style={shadedValue}>{goalLabel}</Text>
            </Section>
            {/* Message*/}
            <Row>
              <Column style={messageAccentBar} />
              <Column style={messageBlockCell}>
                <Text style={shadedLabel}>Message</Text>
                <Text style={messageValue}>{message}</Text>
              </Column>
            </Row>
            <Text style={closingText}>
              Get started by emailing the user back above.
            </Text>
          </Section>
          <Section style={footer}>
            <Hr style={footerDivider} />
            <Row>
              <Column style={{ textAlign: "center", padding: "16px 0" }}>
                <Img
                  src={LOGO_URL}
                  alt="NextRep Athletics"
                  width={140}
                  style={logoImg}
                />
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

//#region styles
const body: React.CSSProperties = {
  backgroundColor: "#f4f7fb",
  fontFamily: "Montserrat, Arial, sans-serif",
  margin: 0,
  padding: "40px 0",
};

const container: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

// CSS background for modern clients; solid #1e4a6b fallback for Outlook
const header: React.CSSProperties = {
  backgroundColor: "#1e4a6b",
  backgroundImage: `url(${DUMBBELL_PATTERN_URL})`,
  backgroundRepeat: "repeat",
  backgroundSize: "40px",
  textAlign: "center",
  padding: "40px 40px 36px",
};

const headerTitle: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: 800,
  letterSpacing: "0.06em",
  margin: 0,
};

const content: React.CSSProperties = {
  padding: "36px 40px 24px",
};

const sectionTitle: React.CSSProperties = {
  color: "#c69b2e",
  fontSize: "20px",
  fontWeight: 700,
  margin: "0 0 6px",
};

const introText: React.CSSProperties = {
  color: "#4b5563",
  fontSize: "14px",
  margin: "0 0 24px",
};

// Plain fields (Name, Email, Phone) — no background
const plainFieldGroup: React.CSSProperties = {
  marginBottom: "16px",
};

const plainLabel: React.CSSProperties = {
  color: "#1e4a6b",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  margin: "0 0 2px",
};

const plainValue: React.CSSProperties = {
  color: "#111827",
  fontSize: "15px",
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  color: "#1e4a6b",
  textDecoration: "none",
};

const shadedBlock: React.CSSProperties = {
  backgroundColor: "#f0ede0",
  padding: "14px 16px",
  marginBottom: "16px",
};

const shadedLabel: React.CSSProperties = {
  color: "#1e4a6b",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  margin: "0 0 4px",
};

const shadedValue: React.CSSProperties = {
  color: "#374151",
  fontSize: "15px",
  margin: 0,
};

const messageAccentBar: React.CSSProperties = {
  backgroundColor: "#1e4a6b",
  width: "4px",
};

const messageBlockCell: React.CSSProperties = {
  backgroundColor: "#f9fafb",
  padding: "14px 16px",
};

const messageValue: React.CSSProperties = {
  color: "#374151",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: 0,
};

const closingText: React.CSSProperties = {
  color: "#6b7280",
  fontSize: "13px",
  margin: "20px 0 0",
};

const footer: React.CSSProperties = {
  padding: "0 40px 32px",
};

const footerDivider: React.CSSProperties = {
  borderColor: "#c69b2e",
  margin: "0 0 0",
};

const logoImg: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
};
//#endregion