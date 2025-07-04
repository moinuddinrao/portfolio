# Moin Ud Din - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my experience as a Full-Stack Software Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance**: Built with Next.js for optimal performance and SEO
- **Interactive**: Smooth scrolling, hover effects, and engaging animations
- **Contact Form**: Functional contact form with email integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📋 Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal background, education, and achievements
3. **Skills**: Technical skills organized by category
4. **Experience**: Professional and volunteer work timeline
5. **Projects**: Featured projects with detailed descriptions
6. **Contact**: Contact form and social links

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/moinuddinrao/portfolio.git
    cd portfolio
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Setting Up NodeMailer for Contact Form

1. Install NodeMailer:

    ```bash
    npm install nodemailer
    ```

2. Create a "APP PASSWORD" for your email account (Gmail, Outlook, etc.) to use with NodeMailer. This is necessary for secure email sending.

3. Create a `.env` file in the root directory of your project and add your email credentials:

    ```plaintext
    NEXT_PUBLIC_SMTP_USER=your_email@example.com
    NEXT_PUBLIC_SMTP_PASS=your_app_password
    NEXT_PUBLIC_CONTACT_RECEIVER=recipient_email@example.com
    ```

4. Test the contact form to ensure emails are being delivered correctly.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Deployment

1. Build the project:

    ```bash
    npm run build
    ```

2. Start the production server:

    ```bash
    npm start
    ```

## 📁 Project Structure

```bash
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── ...
```

## 🎨 Customization

### Colors

The color scheme is defined in `app/globals.css`. You can customize the primary colors by modifying the color palette.

### Content

Update the content in each component file to reflect your personal information, experience, and projects.

### Animations

Framer Motion animations can be customized in each component. Adjust timing, easing, and effects as needed.

## 📧 Contact

- **Email**: <moinuddinrao.dev@gmail.com>
- **Phone**: +92-305-3284679
- **LinkedIn**: [linkedin.com/in/moinuddinrao](https://linkedin.com/in/moinuddinrao)
- **GitHub**: [github.com/moinuddinrao](https://github.com/moinuddinrao)

Built with ❤️ by Moin Ud Din
