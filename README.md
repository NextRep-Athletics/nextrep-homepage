# NextRep Athletics Website

A modern, responsive Next.js website for NextRep Athletics personal training business, featuring science-based fitness programs and professional coaching services.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern Stack**: Built with Next.js 14, React 18, TypeScript, and styled-components
- **Brand Integration**: Complete brand identity with custom colors, fonts, and logos
- **Pages Included**:
  - Home page with hero section and service overview
  - About page showcasing credentials and philosophy
  - Programs page with purchasable exercise programs
  - Testimonials page with client reviews and Yelp integration placeholder
  - Contact page with consultation booking and inquiry forms
- **Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Meta tags and structured data ready

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: styled-components
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Bebas Neue, Montserrat, Inter

## Installation

1. **Clone or download this repository**

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Run the development server**:
   ```bash
   yarn dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## Deployment to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Connect your domain**:
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain from GoDaddy
   - Follow Vercel's instructions to update DNS records in GoDaddy

## Customization

### Colors & Theme
Edit the theme configuration in `/styles/theme.ts`:
```typescript
export const theme = {
  colors: {
    blue: '#003262',      // Primary Blue
    royal: '#023E8A',     // Royal Blue
    gold: '#D4A03A',      // Gold
    red: '#C84134',       // Red
    dark: '#1A2733',      // Dark
    // ... more colors
  },
  // ... fonts, breakpoints, etc.
}
```

### Styling Components
The project uses styled-components for all styling:
- **Theme**: `/styles/theme.ts` - Brand colors, fonts, breakpoints, shadows
- **Global Styles**: `/styles/GlobalStyles.tsx` - Global CSS reset and base styles
- **Shared Components**: `/styles/SharedComponents.tsx` - Reusable styled components (buttons, containers, etc.)
- **Component Styles**: Each component file contains its own styled-components

Example of creating a styled component:
```typescript
import styled from 'styled-components'
import { theme } from '@/styles/theme'

const Button = styled.button`
  background: ${theme.colors.blue};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${theme.borderRadius.lg};

  &:hover {
    background: ${theme.colors.royal};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 1rem 2rem;
  }
`
```

### Content
- Update personal information in `/app/about/page.tsx`
- Modify programs and pricing in `/app/programs/page.tsx`
- Add real testimonials in `/app/testimonials/page.tsx`
- Update contact information in `/components/Footer.tsx` and `/app/contact/page.tsx`

### Yelp Integration
To add real Yelp reviews:
1. Get your Yelp Business ID
2. Use Yelp Fusion API or embed widget
3. Replace placeholder in `/app/testimonials/page.tsx`

### Payment Integration
To enable program purchases:
1. Integrate Stripe or PayPal
2. Add payment processing to `/app/programs/page.tsx`
3. Set up webhook endpoints for order processing

## Project Structure

```
nextrep-homepage/
├── app/
│   ├── layout.tsx          # Root layout with GlobalStyles
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── programs/
│   │   └── page.tsx        # Programs page
│   ├── testimonials/
│   │   └── page.tsx        # Reviews page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── styles/
│   ├── theme.ts            # Theme configuration (colors, fonts, etc.)
│   ├── GlobalStyles.tsx    # Global styles
│   └── SharedComponents.tsx # Reusable styled components
├── public/                 # Static assets
├── package.json           # Dependencies
├── next.config.js         # Next.js config (with styled-components support)
└── tsconfig.json          # TypeScript config
```

## Styled-Components Architecture

### Theme System
All design tokens are centralized in `/styles/theme.ts`:
- **Colors**: Brand colors with consistent naming
- **Typography**: Font families and weights
- **Spacing**: Consistent spacing scale
- **Breakpoints**: Responsive design breakpoints
- **Shadows**: Box shadow definitions
- **Transitions**: Animation timing functions

### Global Styles
The `GlobalStyles` component (`/styles/GlobalStyles.tsx`) provides:
- CSS reset
- Base typography
- Custom scrollbar styling
- Font imports

### Shared Components
Common UI components are defined in `/styles/SharedComponents.tsx`:
- `Container`: Max-width container with responsive padding
- `Section`: Section with consistent vertical padding
- `PrimaryButton`, `SecondaryButton`, `OutlineButton`: Reusable button styles
- `Card`: Card component with hover effects
- `Grid`: Responsive grid layout

## Environment Variables

Create a `.env.local` file for any API keys:

```env
# Example for future integrations
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
NEXT_PUBLIC_YELP_API_KEY=your_yelp_key
NEXT_PUBLIC_GOOGLE_ANALYTICS=your_ga_id
```

## Development Tips

### Adding New Styled Components
1. Import the theme and styled-components
2. Use theme values for consistency
3. Use transient props (prefix with `$`) for dynamic styling:
   ```typescript
   const Button = styled.button<{ $variant?: string }>`
     background: ${props =>
       props.$variant === 'primary' ? theme.colors.blue : theme.colors.gold
     };
   `

   // Usage: <Button $variant="primary">Click me</Button>
   ```

### Responsive Design
Use theme breakpoints for media queries:
```typescript
const Component = styled.div`
  padding: 1rem;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 2rem;
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    padding: 3rem;
  }
`
```

## Support

For any questions or issues, please contact: contact@nextrep-athletics.com

## License

© 2024 NextRep Athletics. All rights reserved.
