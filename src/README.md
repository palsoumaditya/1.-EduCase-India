# Landing Page - Modular Architecture

This landing page is built using a modular architecture following DRY (Don't Repeat Yourself) principles.

## Component Structure

### Core Components
- **Button**: Reusable button component with primary/secondary variants
- **Typography**: Reusable text components (Heading, Description)
- **LandingPage**: Main landing page component that orchestrates other components

### Architecture Benefits
1. **Reusability**: Components can be used across different parts of the application
2. **Maintainability**: Changes to button styles or typography only need to be made in one place
3. **Consistency**: Ensures uniform styling across the application
4. **Type Safety**: Shared TypeScript interfaces for better development experience

### File Organization
```
src/
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── Typography.tsx      # Text styling components
│   ├── LandingPage.tsx     # Main landing page
│   └── index.ts            # Component exports
├── constants/
│   └── strings.ts          # Reusable string constants
├── types/
│   └── index.ts            # Shared TypeScript interfaces
└── App.tsx                 # Main application entry point
```

### Usage Example
```tsx
import { Button, Heading, Description } from './components';

// Use components with consistent styling
<Heading>Your Title</Heading>
<Description>Your description text</Description>
<Button variant="primary">Click me</Button>
```

### Design Features
- Responsive mobile-first design
- Tailwind CSS for styling
- Hover and focus states for accessibility
- Consistent spacing and typography
- Purple color scheme matching the design
