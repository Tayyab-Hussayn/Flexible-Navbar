# Flexible & Creative Header Bar React Component

A modern, animated navigation bar component built with React, TypeScript, and Framer Motion. Features smooth hover animations, dark/light theme toggle, and a responsive design perfect for modern web applications.

## ✨ Features

- **🎨 Smooth Animations**: Powered by Framer Motion for buttery smooth transitions
- **🌙 Dark/Light Theme**: Built-in theme toggle with smooth transitions
- **📱 Responsive Design**: Adapts beautifully to different screen sizes
- **♿ Accessible**: Full keyboard navigation and ARIA labels
- **🎯 Hover Effects**: Interactive hover states with animated text reveals
- **🔧 Customizable**: Easy to modify colors, icons, and layout
- **⚡ Performance Optimized**: Efficient animations with `willChange` properties
- **🎭 Custom Logo**: Animated logo with expanding text effect

## 🚀 Demo

The navbar includes:
- **Animated Logo**: Hover to reveal brand name with smooth expansion
- **Navigation Items**: Home, Work, About with icon rotations on hover
- **Theme Toggle**: Sun/Moon icon with smooth transitions
- **Auth Buttons**: Login and Sign Up with responsive visibility
- **Backdrop Blur**: Modern glassmorphism effect

## 📦 Installation

```bash
# Install dependencies
npm install react framer-motion
# or
yarn add react framer-motion

# For TypeScript support
npm install --save-dev @types/react
```

## 🎯 Usage

```jsx
import React from 'react';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Your app content */}
    </div>
  );
}

export default App;
```

## 🔧 Customization

### Navigation Items
```jsx
const navItems = [
  { id: 1, icon: Home, label: 'Home', onClick: () => console.log('Home clicked') },
  { id: 2, icon: Briefcase, label: 'Work', onClick: () => console.log('Work clicked') },
  { id: 3, icon: User, label: 'About', onClick: () => console.log('About clicked') },
  // Add more items as needed
];
```

### Logo Customization
```jsx
<CustomLogoIcon 
  label="YourBrand" 
  size={24} 
  className="text-indigo-700 dark:text-indigo-100" 
/>
```

### Theme Colors
The component uses Tailwind CSS classes. Customize colors by modifying:
- `bg-white/70 dark:bg-gray-800/70` - Background colors
- `text-indigo-700 dark:text-indigo-100` - Logo colors
- `bg-indigo-600 hover:bg-indigo-700` - Button colors

## 🎨 Styling

This component uses:
- **Tailwind CSS** for styling
- **Backdrop blur** for glassmorphism effect
- **Custom CSS properties** for smooth animations
- **Responsive classes** for mobile-first design

## 🏗️ Components Structure

- **Navbar**: Main navigation component
- **CustomLogoIcon**: Animated logo with expanding text
- **NavItem**: Individual navigation items with hover effects
- **AuthButton**: Styled buttons for authentication
- **Icon Components**: SVG icons for all UI elements

## 🔄 Animation Details

- **Spring animations** for natural movement
- **Layout animations** for smooth repositioning
- **Opacity transitions** for text reveals
- **Scale effects** on hover and tap
- **Rotate animations** for icons

## 📱 Responsive Behavior

- **Mobile**: Compact layout with essential items
- **Tablet**: Medium spacing with most features visible
- **Desktop**: Full layout with all animations and features

## 🎭 Browser Support

- Modern browsers with CSS backdrop-filter support
- React 16.8+ (uses hooks)
- TypeScript support included

## 🤝 Contributing

Feel free to submit issues and enhancement requests! This component is designed to be:
- Easy to extend with new features
- Simple to customize for different brands
- Performance-optimized for smooth animations

## 📄 License

MIT License - feel free to use in your projects!

## 🔗 Dependencies

- React 16.8+
- Framer Motion
- Tailwind CSS (for styling)
- TypeScript (optional but recommended)

---

**Perfect for**: Modern web applications, portfolios, SaaS dashboards, and any project requiring a sleek, animated navigation experience.

