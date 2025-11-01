# FitCrypt Web 🏋️‍♂️

A modern, privacy-focused fitness tracking web application with a stunning UI and dark mode support.

![FitCrypt](https://img.shields.io/badge/FitCrypt-Fitness%20Tracker-orange)
![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-cyan)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 🎨 Modern Design
- **Clean & Premium UI**: Bold typography, generous spacing, and modern aesthetics
- **Dark Mode**: Seamless theme toggle with localStorage persistence
- **Glassmorphism Effects**: Beautiful backdrop blur and transparency effects
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

### 🔒 Privacy-First
- **End-to-End Encryption**: Your fitness data stays secure
- **Zero-Knowledge Architecture**: We can't see your data
- **Privacy by Design**: Built with security at its core

### 🚀 Core Features
- **Workout Tracking**: Log and monitor your fitness journey
- **Progress Analytics**: Visualize your achievements
- **Custom Goals**: Set and track personalized objectives
- **Encrypted Storage**: All data encrypted at rest
- **Cross-Platform**: Access anywhere, anytime

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/fitcrypt/fitcrypt-web.git
cd fitcrypt-web
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` directory.

## 📁 Project Structure

```
fitcrypt-web/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, and media
│   ├── component/       # React components
│   │   ├── Header.jsx           # Navigation with theme toggle
│   │   ├── Banner.jsx           # Hero section
│   │   ├── Features.jsx         # Feature showcase cards
│   │   ├── EncryptedJourney.jsx # Privacy section
│   │   ├── HealthObjective.jsx  # Goals section
│   │   ├── WorkoutSlider.jsx    # Workout carousel
│   │   ├── Legends.jsx          # Inspiration page
│   │   ├── AboutUsSection.jsx   # About section
│   │   ├── CTA.jsx              # Call-to-action
│   │   ├── Footer.jsx           # Site footer
│   │   └── ComingSoon.jsx       # Coming soon page
│   ├── pages/           # Route pages
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Blog.jsx
│   │   ├── Challenges.jsx
│   │   ├── Inspiration.jsx
│   │   ├── Privacy.jsx
│   │   ├── TermsOfService.jsx
│   │   └── NotFound.jsx
│   ├── context/         # React context
│   │   └── ThemeContext.jsx    # Dark mode state
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & utilities
├── eslint.config.js     # ESLint configuration
├── tailwind.config.js   # Tailwind CSS config
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 🎨 Design System

### Color Scheme
- **Primary**: Orange (#fd6934)
- **Gradients**: Orange → Purple → Blue
- **Background Light**: White, Orange-50, Blue-50
- **Background Dark**: Gray-900, Gray-800

### Typography
- **Headings**: Font Black/Bold (Poppins-inspired)
- **Body**: Font Medium/Normal
- **Sizes**: Responsive (mobile-first)

### Custom Utilities
```css
.btn-primary        /* Primary button with gradient hover */
.btn-secondary      /* Secondary button style */
.card-modern        /* Card with hover lift effect */
.glass-effect       /* Glassmorphism backdrop blur */
.heading-xl         /* Extra large heading (5xl→7xl) */
.heading-lg         /* Large heading (4xl→6xl) */
.heading-md         /* Medium heading (3xl→5xl) */
```

## 🌙 Dark Mode

Dark mode is implemented using:
- **Tailwind's `darkMode: 'class'`** strategy
- **ThemeContext** for global state management
- **localStorage** for persistence
- **System preference** detection on first load

Toggle dark mode using the sun/moon button in the header.

## 📱 Responsive Breakpoints

```
sm: 640px   // Small devices
md: 768px   // Tablets
lg: 1024px  // Laptops
xl: 1280px  // Desktops
2xl: 1536px // Large screens
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Deploy!

The site is automatically deployed on push to the main branch.

### Other Platforms

For Netlify, Render, or other platforms:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 16+

## 🔧 Configuration Files

### `tailwind.config.js`
- Custom colors and utilities
- Dark mode configuration
- Animation extensions

### `vite.config.js`
- React plugin configuration
- Build optimizations

### `vercel.json`
- Routing configuration
- SPA fallback settings

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Design & Development**: FitCrypt Team
- **UI/UX**: Modern, clean, and user-focused

## 📧 Contact

- **Website**: [fitcrypt.com](https://fitcrypt.com)
- **Email**: support@fitcrypt.com
- **GitHub**: [@fitcrypt](https://github.com/fitcrypt)

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Vite](https://vitejs.dev/) - Lightning-fast build tool

---

<div align="center">
  <p>Made with ❤️ by the FitCrypt Team</p>
  <p>
    <a href="https://fitcrypt.com">Website</a> •
    <a href="https://github.com/fitcrypt/fitcrypt-web">GitHub</a> •
    <a href="https://twitter.com/fitcrypt">Twitter</a>
  </p>
</div>
