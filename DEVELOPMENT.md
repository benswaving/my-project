# Development Guide

## Project Architectuur

### Marktanalyse Module

De marktanalyse module bestaat uit verschillende componenten die samenwerken om producten te analyseren:

1. **Product Scraper**
   - `aliExpressScraper.js`: Scrapet productgegevens van AliExpress
   - Gebruikt puppeteer voor browser automatisering
   - Handelt rate limiting en user agent rotatie af

2. **Product Analyzer**
   - `productAnalyzer.js`: Analyseert product data
   - Berekent winstmarges
   - Bepaalt competitieniveau
   - Identificeert kansen en risico's

3. **Database Models**
   - `ProductAnalysis.js`: MongoDB schema voor productanalyses
   - Bevat methods voor demand score berekening
   - Handelt trending product identificatie af

## Code Conventies

### Algemene Regels
- Gebruik camelCase voor variabelen en functies
- Gebruik PascalCase voor classes
- Gebruik UPPERCASE voor constanten
- Voeg JSDoc comments toe voor functies

### Voorbeeld
```javascript
/**
 * Berekent de potentiële winstmarge voor een product.
 * @param {number} cost - De inkoopprijs
 * @param {number} price - De verkoopprijs
 * @returns {number} De winstmarge in percentage
 */
function calculateProfitMargin(cost, price) {
    return ((price - cost) / cost) * 100;
}
```

## Git Workflow

### Branches
- `main`: Productie branch
- `development`: Development branch
- Feature branches: `feature/naam-van-feature`
- Bugfix branches: `bugfix/naam-van-bug`

### Commit Messages
Gebruik duidelijke commit messages met een prefix:
- `feat:` voor nieuwe features
- `fix:` voor bug fixes
- `docs:` voor documentatie
- `refactor:` voor code refactoring
- `test:` voor het toevoegen van tests

Voorbeeld:
```bash
git commit -m "feat: Add AliExpress product scraper"
```

## Testing

### Unit Tests
Gebruik Jest voor unit tests:
```javascript
describe('ProductAnalyzer', () => {
    test('should calculate correct profit margin', () => {
        const analyzer = new ProductAnalyzer();
        expect(analyzer.calculateProfitMargin(100, 150)).toBe(50);
    });
});
```

### Test Runnen
```bash
npm test                 # Run alle tests
npm test -- --watch     # Run tests in watch mode
```

## API Documentatie

### Product Analyse Endpoints

#### GET /api/analysis/products
Haalt alle geanalyseerde producten op.

Response:
```json
{
    "products": [
        {
            "id": "123",
            "title": "Product Name",
            "analysis": {
                "potentialProfit": 25.50,
                "recommendedPrice": 49.99,
                "demandScore": 85
            }
        }
    ]
}
```

#### POST /api/analysis/products
Voegt een nieuw product toe voor analyse.

Request Body:
```json
{
    "url": "https://aliexpress.com/product/123",
    "category": "Electronics"
}
```

## Deployment

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

## Monitoring & Logging

### Winston Logger Gebruik
```javascript
const logger = require('../utils/logger');

logger.info('Product analysis started');
logger.error('Error during scraping', { error: err });
```

## TODO & Roadmap

### Fase 1: Marktanalyse
- [x] Basic project setup
- [x] Product model
- [x] AliExpress scraper
- [ ] Amazon/eBay prijsvergelijking
- [ ] Trend analyse
- [ ] Winstmarge calculator

### Fase 2: Frontend
- [ ] React setup
- [ ] Product overzicht
- [ ] Analyse dashboard
- [ ] Trend visualisaties

## Bijdragen
1. Fork het project
2. Maak je feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je changes (`git commit -m 'feat: Add AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request