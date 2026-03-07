import Certification from "@/lib/assets/icons/Certification.svg";
import Education from "@/lib/assets/icons/Education.svg";
import Swimming from "@/lib/assets/icons/Swimming.svg";
import Heart from "@/lib/assets/icons/Heart.svg";
import Chad from "@/lib/assets/images/Chad.webp";
import Cyrus from "@/lib/assets/images/Cyrus.webp";

// TYPES

export interface TrainerCredential {
  icon: string;
  text: string;
  color?: string;
}

export interface Trainer {
  id: string;
  name: string;
  title: string;
  photo: string; // Path to image - placeholder for now
  bio: string[];
  credentials: TrainerCredential[];
}

// TRAINER DATA

export const trainers: Trainer[] = [
  {
    id: "cy-morrison",
    name: "Cy Morrison",
    title: "Founder",
    photo: Cyrus.src,
    bio: [
      "I am a Certified Strength and Conditioning Specialist (CSCS) with a strong foundation in both science and athletics. With an undergraduate degree in Biology from Cornell University and a postgraduate degree in Public Health from George Washington University (MPH), I have a deep understanding of human physiology, biomechanics, and health optimization.",
      "As a former NCAA Division I swimmer, I know firsthand the demands of high-level competition. My background fuels my passion for performance enhancement, injury prevention, and long-term athlete development. I specialize in creating tailored training programs that emphasize not only strength and conditioning but also efficiency in movement, recovery strategies, and injury resilience.",
      "Beyond athletics, I take a holistic approach to health and wellness. My education in public health shapes my training philosophy, integrating evidence-based strategies to enhance performance and longevity. I emphasize the critical role of nutrition in fueling the body to optimize recovery and prevent chronic disease. I hope to help my clients build sustainable athletic and nutritional habits that promote long-term health benefits at every stage of life.",
    ],
    credentials: [
      {
        icon: Certification.src,
        text: "CSCS - Certified Strength & Conditioning Specialist",
        color: "#C9A961", // Gold
      },
      {
        icon: Education.src,
        text: "Master of Public Health (MPH)",
        color: "#E84545", // Red
      },
      {
        icon: Swimming.src,
        text: "Division I Athlete - Cornell University Swimming",
        color: "#003262", // Blue
      },
      //Need to clean this one up and change the icon
      {
        icon: Certification.src,
        text: "5+ Years Coaching Experience (high school athletics, club swimming, and strength training)",
        color: "#C9A961", // Gold
      },
      {
        icon: Heart.src,
        text: "Published Health Researcher",
        color: "#00BFA5", // Teal
      },
    ],
  },
  {
    id: "chad-morrison",
    name: "Chad Morrison",
    title: "Co-Founder",
    photo: Chad.src,
    bio: [
      "My journey in fitness began in the pool, swimming after my big brother. This led to 16 years of competitive swimming, ultimately competing in Division 1 at the University of California - San Diego. Athletics have given me purpose and routine, teaching me the importance of consistent, intentional work. After finishing my swimming career, I quickly learned that training was a part of my identity. Now, I’m driven to continue that journey by helping others build strength, confidence, and longevity through movement, all things athletics gave me.",
      "I’m deeply curious about the “why” behind training. I enjoy studying different training styles and understanding what physiologically drives their effectiveness and how the body adapts to different stimuli. That curiosity allows me to design programs that are purposeful, individualized, and rooted in science rather than trends.",
      "With a background in bioengineering, I’ve developed a strong understanding of biomechanics and human performance, which I’ve applied directly to athletics and movement quality. My experience working in gait and biomechanics further sharpened my ability to analyze movement patterns and optimize performance while reducing injury risk.",
      "For me, personal training is more than just workouts, it’s about building sustainable systems that help people move better, perform better, and feel stronger in every area of life.",
    ],
    credentials: [
      {
        icon: Certification.src,
        text: "CSCS - Certified Strength & Conditioning Specialist",
        color: "#C9A961", // Gold
      },
      {
        icon: Education.src,
        text: "Bachelor of Science in Bioengineering",
        color: "#E84545", // Red
      },
      {
        icon: Swimming.src,
        text: "Division 1 Athlete - UCSD Swimming",
        color: "#003262", // Blue
      },
      //Need to clean this one up and change the icon
      {
        icon: Certification.src,
        text: "5+ Years Coaching Experience (club swimming, xxx )",
        color: "#C9A961", // Gold
      },
      {
        icon: Heart.src,
        text: "2+ Years Experience in Gait and Biomechanics at Rady Children’s Hospital",
        color: "#00BFA5", // Teal
      },
    ],
  },
];
