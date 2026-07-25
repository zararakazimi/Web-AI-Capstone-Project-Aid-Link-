# AidLink

## Project Overview

AidLink is an AI-powered humanitarian assistance platform developed with React. It helps individuals identify appropriate support services by analyzing their needs and recommending relevant humanitarian organizations. The platform includes a directory of 100 verified organizations (50 operating in Afghanistan and 50 international organizations), making it easier for users to access reliable assistance.

---

## Features

- 🤖 AI-powered needs assessment using OpenRouter AI
- 🏥 Directory of 100 verified humanitarian organizations
- 🔍 Search organizations by name, location, category, or service
- 📂 Filter organizations by support category
- ❤️ Save favorite organizations using Local Storage
- 📋 Personalized action plans based on user needs
- 🌐 Direct links to official organization websites
- 📱 Responsive design for desktop, tablet, and mobile devices
- ⏳ Loading indicator while AI analyzes user requests

---

## Technologies Used

- React
- Vite
- React Router DOM
- Tailwind CSS
- Axios
- OpenRouter AI API
- JavaScript (ES6+)
- HTML5
- CSS3
- Local Storage

---

## Project Structure

```
src/
│
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── OrganizationCard.jsx
│   ├── SearchBar.jsx
│   └── CategoryFilter.jsx
│
├── data/
│   ├── afghanistanOrganizations.js
│   ├── internationalOrganizations.js
│   └── organizations.js
│
├── pages/
│   ├── Home.jsx
│   ├── Organizations.jsx
│   ├── RequestHelp.jsx
│   ├── Results.jsx
│   ├── SavedResources.jsx
│   └── NotFound.jsx
│
├── services/
│   └── aiService.js
│
├── App.jsx
└── main.jsx
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/AidLink.git
```

### 2. Navigate into the project

```bash
cd AidLink
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Add your OpenRouter API key:

```env
VITE_OPENROUTER_API_KEY=your_api_key_here
```

### 5. Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

### 6. Build for production

```bash
npm run build
```

---

## Screenshots

Add screenshots of the following pages after deployment:

- Home Page
- Organizations Directory
- Request Help Page
- AI Analysis Results
- Saved Organizations

---

## Live Demo

Deployment Link:

```
https://your-netlify-site.netlify.app
```

(Add your deployment link after publishing.)

---

## Future Improvements

- Dark mode
- Multi-language support
- Interactive map of organizations
- User authentication
- AI chat assistant
- Advanced organization recommendations

---

## Author

**Hakim Kazimi**

React Final Project

---

## License

This project was created for educational purposes as a React Final Project.