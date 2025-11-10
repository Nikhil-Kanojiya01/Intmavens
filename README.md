# IntMavens Static Web App - Documentation

## Project Overview

This project is a static web application recreation of the IntMavens company website (https://www.intmavens.com/) built using modern web technologies. IntMavens is a leading integration company specializing in Application Modernization, DevOps implementation, and B2B Hybrid Integration.

## 🎯 Project Goals

- Create a modern, responsive static website using Vite + React
- Replicate the IntMavens website functionality and design
- Implement best practices for performance and SEO
- Ensure mobile-first responsive design
- Integrate modern development workflow with hot reloading

## 📋 Website Analysis

### Current Website Structure
Based on analysis of https://www.intmavens.com/, the website contains:

#### Main Sections:
1. **Header/Navigation**
   - Company logo (IntMavens)
   - Navigation menu
   - Contact information

2. **Hero Section**
   - Main tagline: "Modernize your Business with our Integration Expertise"
   - Company description: "IntMavens is one of India's fastest growing integration company"
   - Primary CTA: "Lets Connect"

3. **Services/Expertise Areas**
   - Azure Integration Services
   - Azure Monitor
   - Azure Data
   - BizTalk Migration/Modernization
   - Application Modernization
   - DevOps Implementation

4. **Blog Section**
   - Technical blog posts with categories
   - Recent posts include:
     - Logic Apps – Creating Log Analytics based Alerts and Monitoring
     - Bring your own DB(BYOD) with respect to D365 and Export to Data-Lake
     - Azure Synapse Pipeline Monitoring and Alerting
     - BizTalk What's Next – Migrate vs Upgrade vs Redesign

5. **Testimonials**
   - Client testimonials with names, positions, and company details
   - Featured clients: Gabriel Cor (CTO at Beacon42), Manish Verma (Senior Technical Solution Manager)

6. **Footer**
   - Contact information: +91-7972143020, contactus@intmavens.com
   - Social media links (Facebook, Twitter, LinkedIn)
   - Copyright information
   - Company tagline: "Integration Made Easy"

## 🛠️ Technology Stack

### Core Technologies
- **Build Tool**: Vite (v7.2.2)
- **Framework**: React (v19.2.0)
- **Language**: JavaScript/JSX
- **Styling**: CSS3 + CSS Modules/Styled Components
- **Package Manager**: npm/yarn/pnpm

### Development Dependencies
- **Linting**: ESLint with React plugins
- **Code Formatting**: Prettier (recommended)
- **Version Control**: Git
- **Deployment**: Static hosting (Netlify, Vercel, GitHub Pages)

## 📦 Requirements

### System Requirements
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or yarn/pnpm equivalent)
- **Git**: Latest version
- **Modern Browser**: Chrome, Firefox, Safari, Edge (latest versions)

### Development Environment
- **Code Editor**: VS Code (recommended)
- **Terminal**: Bash, PowerShell, or equivalent
- **Browser DevTools**: For debugging and testing

## 🚀 Installation & Setup

### 1. Clone/Initialize Project
```bash
# If starting from scratch
npm create vite@latest intmavens -- --template react
cd intmavens

# If using existing project
cd intmavens
npm install
```

### 2. Install Dependencies
```bash
# Install production dependencies
npm install react react-dom

# Install development dependencies
npm install --save-dev @vitejs/plugin-react eslint @eslint/js eslint-plugin-react-hooks eslint-plugin-react-refresh globals vite
```

### 3. Project Structure Setup
```
intmavens/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── Blog/
│   │   ├── Testimonials/
│   │   └── Footer/
│   ├── pages/
│   ├── assets/
│   ├── styles/
│   ├── utils/
│   ├── data/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Development Workflow

### 1. Start Development Server
```bash
npm run dev
```
- Starts Vite dev server on `http://localhost:5173`
- Features hot module replacement (HMR)
- Automatic browser refresh on file changes

### 2. Code Quality & Linting
```bash
# Run ESLint
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### 3. Build for Production
```bash
npm run build
```
- Creates optimized production build in `dist/` directory
- Minifies and optimizes assets
- Generates source maps for debugging

### 4. Preview Production Build
```bash
npm run preview
```
- Serves the production build locally
- Test production optimizations

## 📱 Implementation Plan

### Phase 1: Project Setup & Basic Structure
- [x] Initialize Vite + React project
- [x] Configure ESLint and development tools
- [x] Set up project structure
- [x] Configure Git and .gitignore
- [ ] Create basic component structure

### Phase 2: Core Components Development
- [ ] Header/Navigation component
- [ ] Hero section with company branding
- [ ] Services/Expertise showcase
- [ ] Footer with contact information

### Phase 3: Content Integration
- [ ] Blog section with post listings
- [ ] Testimonials component
- [ ] Contact information integration
- [ ] Social media links

### Phase 4: Styling & Responsiveness
- [ ] Mobile-first responsive design
- [ ] CSS styling and animations
- [ ] Cross-browser compatibility
- [ ] Performance optimization

### Phase 5: Enhancement & Deployment
- [ ] SEO optimization
- [ ] Accessibility improvements
- [ ] Performance testing
- [ ] Deploy to static hosting

## 🎨 Design Considerations

### UI/UX Requirements
- **Responsive Design**: Mobile-first approach
- **Performance**: Fast loading times (<3 seconds)
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Semantic HTML and meta tags
- **Browser Support**: Modern browsers (ES6+)

### Color Scheme & Branding
- Extract colors from IntMavens branding
- Professional blue/corporate color palette
- High contrast for accessibility
- Consistent typography

## 📊 Performance Goals

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Performance Score**: > 90 (Lighthouse)

### Optimization Strategies
- Image optimization and lazy loading
- Code splitting with React.lazy()
- CSS and JS minification
- Static asset caching
- CDN integration for assets

## 🚀 Deployment Options

### Static Hosting Platforms
1. **Netlify** (Recommended)
   - Automatic deployments from Git
   - Built-in form handling
   - Edge functions support

2. **Vercel**
   - Optimized for React applications
   - Automatic performance optimization
   - Analytics included

3. **GitHub Pages**
   - Free hosting for public repositories
   - GitHub Actions integration
   - Custom domain support

4. **AWS S3 + CloudFront**
   - Enterprise-grade hosting
   - Global CDN distribution
   - Advanced caching controls

### Deployment Commands
```bash
# Build for production
npm run build

# Deploy to Netlify (with Netlify CLI)
netlify deploy --prod --dir=dist

# Deploy to Vercel (with Vercel CLI)
vercel --prod
```

## 🔍 Testing Strategy

### Testing Types
- **Unit Tests**: Component functionality
- **Integration Tests**: Component interactions
- **E2E Tests**: User workflows
- **Performance Tests**: Loading and rendering speed
- **Accessibility Tests**: Screen reader compatibility

### Testing Tools (Future Enhancement)
- Jest + React Testing Library
- Cypress for E2E testing
- Lighthouse CI for performance
- axe-core for accessibility

## 📞 Contact & Support

### IntMavens Contact Information
- **Phone**: +91-7972143020
- **Email**: contactus@intmavens.com
- **Website**: https://www.intmavens.com/
- **Tagline**: "Integration Made Easy"

### Social Media
- **Facebook**: https://www.facebook.com/IntMavens
- **Twitter**: https://twitter.com/IntMavens
- **LinkedIn**: https://www.linkedin.com/company/intmavens-infotech/

## 📝 Next Steps

1. **Development Environment**: Ensure all requirements are installed
2. **Component Development**: Start with Header component
3. **Content Integration**: Add IntMavens specific content
4. **Styling**: Implement responsive design
5. **Testing**: Test across different devices and browsers
6. **Deployment**: Choose and configure hosting platform
7. **Optimization**: Implement performance improvements
8. **Maintenance**: Set up monitoring and updates

---

**Project Status**: In Development
**Last Updated**: November 10, 2025
**Version**: 1.0.0

This documentation serves as a comprehensive guide for developing the IntMavens static web application using modern web technologies and best practices.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Intmavens
