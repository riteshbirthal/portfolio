# Ritesh Birthal - Portfolio

A modern, responsive portfolio website built with React and Vite, featuring a sleek dark theme with smooth animations.

![Portfolio Preview](public/profile.jpg)

## Features

- **Modern UI/UX** - Clean dark theme with purple gradient accents
- **Fully Responsive** - Optimized for all device sizes
- **Smooth Animations** - Subtle hover effects and transitions
- **Fast Performance** - Built with Vite for optimal loading speed
- **SEO Friendly** - Proper meta tags and semantic HTML

## Sections

- **Home** - Introduction with profile image and CTA buttons
- **Skills** - Technical skills organized by category
- **Projects** - Featured projects with descriptions and links
- **Experience** - Professional work history timeline
- **Education** - Academic background and qualifications
- **Achievements** - Awards, recognitions, and certifications
- **Contact** - Contact form with conversation starters

## Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Icons**: React Icons
- **Deployment**: Docker + Nginx

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/riteshbirthal/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Docker Deployment

### Build and run with Docker

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -d -p 80:80 portfolio
```

### Using Docker Compose (optional)

```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

```bash
docker-compose up -d
```

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── profile.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── Dockerfile
├── nginx.conf
└── package.json
```

## Customization

1. Update personal information in component files
2. Replace `public/profile.jpg` with your photo
3. Modify colors in `src/index.css` CSS variables
4. Update social links and contact information

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Ritesh Birthal**
- Email: riteshbirthal@gmail.com
- LinkedIn: [ritesh-birthal](https://linkedin.com/in/ritesh-birthal)
- GitHub: [riteshbirthal](https://github.com/riteshbirthal)
