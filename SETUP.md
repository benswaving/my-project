# Project Setup Instructies

## Systeemvereisten
- Node.js (v14 of hoger)
- npm (komt met Node.js)
- MongoDB
- Git

## Initiële Setup

### 1. Node.js en npm installeren
```bash
# Voor Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm
node --version  # Controleer of Node.js is geïnstalleerd
npm --version   # Controleer of npm is geïnstalleerd
```

### 2. Repository klonen
```bash
git clone https://github.com/benswaving/my-project.git
cd my-project
```

### 3. Backend Setup
```bash
cd backend
npm install  # Installeert alle dependencies uit package.json
```

### 4. MongoDB Setup
```bash
# Voor Ubuntu/Debian
sudo apt update
sudo apt install mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb  # Start MongoDB automatisch bij systeemstart
```

### 5. Environment Variabelen
Maak een `.env` bestand aan in de backend directory:
```bash
cd backend
touch .env
```

Voeg de volgende variabelen toe aan `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/dropship
NODE_ENV=development
```

### 6. Development Server Starten
```bash
# In de backend directory
npm run dev
```

## Project Structuur

### Backend
```
backend/
├── src/
│   ├── config/         # Configuratie bestanden
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   │   └── analysis/   # Analyse gerelateerde models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   │   └── marketAnalysis/  # Marktanalyse services
│   ├── utils/          # Helper functies
│   └── server.js       # App entry point
```

## Gebruikte Dependencies

### Backend Dependencies
- express: Web framework
- mongoose: MongoDB ODM
- puppeteer: Web scraping
- user-agents: Random user agent generator
- cors: Cross-Origin Resource Sharing
- dotenv: Environment variabelen
- express-rate-limit: Rate limiting
- helmet: Security headers
- winston: Logging
- axios: HTTP client
- cheerio: HTML parsing

### Development Dependencies
- nodemon: Auto-reload tijdens development
- jest: Testing framework

## Scripts
- `npm start`: Start de productieserver
- `npm run dev`: Start de development server met auto-reload
- `npm run analyze`: Voert de product analyse uit

## Troubleshooting

### MongoDB Connection Issues
Als je problemen hebt met MongoDB, controleer:
1. Of MongoDB service draait: `sudo systemctl status mongodb`
2. De connection string in je .env bestand
3. MongoDB logs: `sudo journalctl -u mongodb`

### Scraping Issues
Als er problemen zijn met web scraping:
1. Controleer je internetverbinding
2. Verifieer dat puppeteer correct is geïnstalleerd
3. Controleer de user-agent settings
4. Bekijk de error logs voor meer details