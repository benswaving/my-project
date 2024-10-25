# Dropship Website Project

Een geautomatiseerd dropshipping platform dat producten van AliExpress naar andere marketplaces (zoals Amazon) of een eigen website verkoopt, zonder voorraad te hoeven aanhouden.

## Project Overzicht
Dit project bestaat uit twee hoofdcomponenten:
- Backend (Node.js/Express)
- Frontend (React)

## Systeemvereisten
- Node.js (v14 of hoger)
- npm of yarn
- MongoDB

## Installatie

### Backend Setup
1. Navigeer naar de backend directory:
```bash
cd backend
```

2. Installeer dependencies:
```bash
npm install
```

3. Maak een .env bestand aan met de volgende variabelen:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

4. Start de development server:
```bash
npm run dev
```

### Frontend Setup
1. Navigeer naar de frontend directory:
```bash
cd frontend
```

2. Installeer dependencies:
```bash
npm install
```

3. Start de development server:
```bash
npm start
```

## Functionaliteiten

### Geïmplementeerd
- Basis project structuur
- Product model en routes
- Order model

### In Ontwikkeling
- AliExpress product scraping
- Automatische prijsvergelijking
- Order management systeem
- Marketplace integraties

## Project Structuur

### Backend
```
backend/
├── src/
│   ├── config/         # Configuratie bestanden
│   ├── controllers/    # Request handlers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── utils/          # Helper functies
│   └── server.js       # App entry point
```

### Frontend (In ontwikkeling)
```
frontend/
├── src/
│   ├── components/     # React componenten
│   ├── pages/          # Pagina componenten
│   ├── services/       # API services
│   └── utils/          # Helper functies
```

## API Endpoints

### Products
- GET /api/products - Lijst van alle producten
- POST /api/products - Nieuw product toevoegen
- GET /api/products/:id - Product details ophalen
- PUT /api/products/:id - Product updaten
- DELETE /api/products/:id - Product verwijderen

### Orders (In ontwikkeling)
- GET /api/orders - Lijst van alle orders
- POST /api/orders - Nieuwe order aanmaken

## Roadmap & To-Do List

### Fase 1: Marktanalyse Tool
- [ ] AliExpress bestsellers scraping
- [ ] Amazon/eBay prijzen scraping
- [ ] Winstmarge calculator
- [ ] Trends analyse
- [ ] Kansrijke producten identificatie
- [ ] Product research dashboard

### Fase 2: Frontend Website
- [ ] Responsive product catalogus
- [ ] Winkelwagen functionaliteit
- [ ] Checkout proces
- [ ] User interface design
- [ ] SEO optimalisatie
- [ ] Mobile-first approach

### Fase 3: AliExpress Integratie
- [ ] Product import systeem
- [ ] Voorraad synchronisatie
- [ ] Automatische prijsupdates
- [ ] Order plaatsing automatisering
- [ ] Tracking nummer integratie

### Fase 4: Order Management
- [ ] Order tracking systeem
- [ ] Klant notificaties
- [ ] Email automation
- [ ] Order fulfillment systeem
- [ ] Retour management

### Fase 5: Dashboard & Analytics
- [ ] Verkoop statistieken
- [ ] Winstmarge tracking
- [ ] Customer analytics
- [ ] Marketing ROI monitoring
- [ ] Trend rapportages

## Bijdragen
Pull requests zijn welkom. Voor grote wijzigingen, open eerst een issue om te bespreken wat je wilt veranderen.

## Licentie
[MIT](https://choosealicense.com/licenses/mit/)