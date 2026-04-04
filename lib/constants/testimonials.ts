// TYPES

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  quote: string;
  subtitle: string;
  url?: string;
}

// TESTIMONIAL DATA

export const testimonials: Testimonial[] = [
  {
    id: "chris-tate",
    name: "Chris Tate",
    photo: "",
    quote:
      "Working with NextRep, I have a stronger structure making my schedule easier to follow. These plans also strenghen muscle groups I would not have found on my own.",
    subtitle: "Active NextRep Client",
  },
  {
    id: "kyoko-silverman",
    name: "Kyoko Silverman",
    photo: "",
    quote:
      "I've been working with Cyrus for my weight training, and the experience has been excellent. What makes his coaching stand out is that he updates my training program every week based on my progress. The workouts are always challenging but realistic, and I never feel stuck doing the same routine.Even though everything is online, Cyrus is very responsive and supportive. He takes the time to explain adjustments and makes sure the program fits my goals and schedule. It feels personalized rather than generic. Since starting, I've seen steady strength gains and noticeable physical improvements. I also feel more confident and consistent with my training. If you're looking for structured online coaching with real accountability and weekly updates, I highly recommend Cyrus.",
    subtitle: "Active NextRep Client",
    url: "https://www.yelp.com/biz/nextrep-san-mateo",
  },
];
