# EduCase India - PopX Platform

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-38B2AC.svg)](https://tailwindcss.com/)

A modern, responsive web application built for the Indian education sector, featuring user account management, authentication, and a clean, intuitive interface.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)
- **Git**: For version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd educase-india
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx     # Button component with variants
│   ├── Typography.tsx # Typography components (Heading, Description)
│   ├── LandingPage.tsx # Main landing page
│   ├── CreateAccountForm.tsx # User registration form
│   ├── LoginForm.tsx  # User authentication form
│   └── AccountSettings.tsx # User account management
├── constants/          # Application constants
│   └── strings.ts     # Internationalization strings
├── types/             # TypeScript type definitions
│   ├── button.ts      # Button component types
│   ├── typography.ts  # Typography component types
│   └── index.ts       # Main type exports
├── assets/            # Static assets (images, icons)
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎨 Technology Stack

### Frontend Framework
- **React 19.1.1**: Latest React with modern features and hooks
- **TypeScript 5.8.3**: Type-safe JavaScript development

### Build Tools
- **Vite 7.1.2**: Fast build tool and development server
- **ESLint**: Code quality and consistency

### Styling
- **Tailwind CSS 4.1.12**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach

### Development Tools
- **ESLint**: Code linting and formatting
- **TypeScript**: Static type checking
- **Hot Module Replacement**: Instant updates during development

## 🔧 Development Guidelines

### Code Style
- Use **TypeScript** for all new components
- Follow **React Hooks** patterns
- Implement **functional components** with proper prop typing
- Use **Tailwind CSS** classes for styling

### Component Structure
```typescript
interface ComponentProps {
  // Define props interface
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX
  );
};

export default Component;
```

### State Management
- Use **React useState** for local component state
- Implement **prop drilling** for simple state sharing
- Consider **Context API** for complex state management (future enhancement)

### Form Handling
- Use **controlled components** for form inputs
- Implement **form validation** with proper error handling
- Use **TypeScript interfaces** for form data types

## 📱 Features

### Current Features
- **Landing Page**: Clean, minimalist design with call-to-action buttons
- **User Registration**: Comprehensive account creation form
- **User Authentication**: Login functionality
- **Account Settings**: User profile management
- **Responsive Design**: Mobile-first approach

### Planned Features
- [ ] User dashboard
- [ ] Course management
- [ ] Payment integration
- [ ] Admin panel
- [ ] Multi-language support

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Build Output
The build process generates optimized files in the `dist/` directory:
- Minified JavaScript bundles
- Optimized CSS with Tailwind
- Static assets
- HTML entry point

### Deployment Options
- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop deployment
- **AWS S3 + CloudFront**: Static hosting
- **GitHub Pages**: Free hosting for open source

## 🧪 Testing

### Current Status
- Manual testing implemented
- Component testing framework to be added

### Future Testing Strategy
- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: Component interaction testing
- **E2E Tests**: Playwright or Cypress
- **Visual Regression**: Storybook + Chromatic

## 📊 Performance

### Optimization Features
- **Code Splitting**: Automatic with Vite
- **Tree Shaking**: Unused code elimination
- **Minification**: Production build optimization
- **Lazy Loading**: Component-level code splitting (future)

### Performance Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security

### Current Measures
- **Input Validation**: Form field validation
- **XSS Prevention**: React's built-in protection
- **Type Safety**: TypeScript compilation checks

### Future Enhancements
- [ ] HTTPS enforcement
- [ ] Content Security Policy
- [ ] Rate limiting
- [ ] Input sanitization
- [ ] Authentication tokens

## 🌐 Browser Support

### Supported Browsers
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Mobile Support
- **iOS Safari**: 14+
- **Chrome Mobile**: 90+
- **Samsung Internet**: 14+

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Review Process
- All changes require review
- Ensure tests pass
- Follow coding standards
- Update documentation

### Commit Message Convention
```
type(scope): description

Examples:
feat(auth): add user login functionality
fix(ui): resolve button alignment issue
docs(readme): update installation instructions
```

## 📝 Documentation

### Additional Resources
- **API Documentation**: [Link to API docs]
- **Design System**: [Link to design system]
- **Component Library**: [Link to Storybook]

### Code Comments
- Use **JSDoc** for complex functions
- Comment **business logic** decisions
- Document **API integrations**
- Explain **complex algorithms**

## 🐛 Troubleshooting

### Common Issues

#### Development Server Won't Start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Clear build cache
npm run build --force
```

#### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Getting Help
- **GitHub Issues**: Report bugs and feature requests
- **Discord/Slack**: Join our development community
- **Documentation**: Check this README first

## 📈 Monitoring & Analytics

### Current Setup
- Console logging for development
- Error boundary implementation (planned)

### Future Implementation
- **Error Tracking**: Sentry integration
- **Performance Monitoring**: Web Vitals tracking
- **User Analytics**: Privacy-compliant analytics
- **Health Checks**: Application status monitoring

## 🔄 Version History

### v0.0.0 (Current)
- Initial project setup
- Basic component structure
- User authentication flow
- Responsive design implementation

### Roadmap
- **v0.1.0**: Enhanced user dashboard
- **v0.2.0**: Course management system
- **v1.0.0**: Production-ready platform

## 📄 License

This project is proprietary software developed for EduCase India. All rights reserved.

## 👥 Team

### Development Team
- **Frontend Developers**: [Team members]
- **UI/UX Designers**: [Design team]
- **Product Managers**: [Product team]

### Contact Information
- **Email**: [contact@educaseindia.com]
- **Website**: [https://educaseindia.com]
- **Office**: [Address]

## 🙏 Acknowledgments

- **React Team**: For the amazing framework
- **Vite Team**: For the fast build tool
- **Tailwind CSS**: For the utility-first CSS framework
- **TypeScript Team**: For type safety

---

**Last Updated**: December 2024  
**Maintained by**: EduCase India Development Team

For questions or support, please reach out to our development team or create an issue in this repository.
