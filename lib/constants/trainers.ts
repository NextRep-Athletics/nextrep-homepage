import { IconType } from "react-icons";
import {
  FaStar,
  FaGraduationCap,
  FaSwimmer,
  FaHeartbeat,
} from "react-icons/fa";

// TYPES

export interface TrainerCredential {
  icon: IconType;
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
    photo: "/images/trainers/cy-morrison.jpg", // TODO: Replace with actual image
    bio: [
      "My journey in fitness began as a Division I swimmer at Cornell University, where I learned the discipline and science behind peak athletic performance.",
      "After my competitive swimming career, I combined my passion for fitness with a commitment to public health, earning my Master's in Public Health (MPH) and becoming a Certified Strength and Conditioning Specialist (CSCS).",
      "This unique combination allows me to approach personal training not just as exercise prescription, but as a comprehensive wellness strategy that considers your entire lifestyle, health history, and long-term goals.",
      "Beyond training, I've published research in medical journals and founded Kick for Kids, a nonprofit that raised over $84,000 for pediatric care. I believe in giving back and making fitness accessible to everyone.",
    ],
    credentials: [
      {
        icon: FaStar,
        text: "CSCS - Certified Strength & Conditioning Specialist",
        color: "#C9A961", // Gold
      },
      {
        icon: FaGraduationCap,
        text: "Master of Public Health (MPH)",
        color: "#E84545", // Red
      },
      {
        icon: FaSwimmer,
        text: "Division I Athlete - Cornell University Swimming",
        color: "#003262", // Blue
      },
      {
        icon: FaHeartbeat,
        text: "Published Health Researcher",
        color: "#00BFA5", // Teal
      },
    ],
  },
  {
    id: "chad-morrison",
    name: "Chad Morrison",
    title: "Trainer",
    photo: "/images/trainers/chad-morrison.jpg", // TODO: Replace with actual image
    bio: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum ultricies lacus vitae luctus. Fusce aliquet dolor sollicitudin, facilisis libero non, tristique ex. Sed augue mauris, aliquet eget consequat ut, lobortis sit amet leo. Ut tellus neque, viverra eget erat vel, ultricies dapibus arcu. In a pulvinar leo. In vel nisl vitae purus malesuada rhoncus non et est. Cras id pellentesque eros, eget facilisis turpis. Cras mattis enim ac lorem fringilla scelerisque. Aenean suscipit urna metus, in blandit erat hendrerit vel.",
      "Nunc a nisl lectus. Duis nec sem at augue congue pharetra nec vel diam. Nam posuere nunc purus. Phasellus blandit nulla in diam dignissim auctor. In vel felis eu diam bibendum varius eu quis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "Mauris justo odio, sodales ut nibh in, tincidunt ullamcorper neque. Vestibulum vel luctus dolor, congue vulputate massa. Sed eu tellus non libero",
    ],
    credentials: [
      {
        icon: FaStar,
        text: "CSCS - Certified Strength & Conditioning Specialist",
        color: "#C9A961", // Gold
      },
    ],
  },
];
