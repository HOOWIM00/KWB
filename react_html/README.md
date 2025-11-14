# RAAK Achterbos - React Versie

## Overzicht
Deze moderne versie van de RAAK Achterbos website is gebouwd met React (zonder build tools) en gebruikt PHP voor backend functionaliteit.

## Structuur
```
react_html/
├── index.html       # Hoofd HTML bestand
├── App.jsx          # React applicatie componenten
├── styles.css       # Alle styling
└── README.md        # Deze documentatie

public_html/
└── api/
    └── contact.php  # Backend endpoint voor contactformulier
```

## Verschillen met oude versie

### ✅ Verbeteringen
- **Geen iframes meer** - Alles werkt in één pagina (SPA - Single Page Application)
- **Snellere navigatie** - Geen herladen van pagina's nodig
- **Moderne React componenten** - Herbruikbare code
- **Responsive design** - Werkt op alle schermgroottes
- **Betere gebruikerservaring** - Smooth overgangen tussen pagina's

### 🔧 Technologie
- **Frontend**: React 18 (via CDN)
- **Backend**: PHP 7.4+ (voor contactformulier en toekomstige database)
- **Styling**: Pure CSS met moderne features

## Hoe te gebruiken

### Lokaal testen
1. Open `react_html/index.html` in een browser
   - Of gebruik een lokale server (XAMPP, WAMP, etc.)
   - Navigeer naar: `http://localhost/vscode_kwb/react_html/`

2. Voor contactformulier functionaliteit:
   - Zorg dat PHP server draait
   - Contactberichten worden gelogd in `public_html/api/contact_log.txt`

### Deployment
Upload de volgende bestanden naar je webserver:
- Volledige `react_html/` folder
- `public_html/api/` folder (voor backend)
- `public_html/images/` folder (bestaande afbeeldingen)

## Toekomstige uitbreidingen

### Wanneer je Node.js installeert:
1. Migreer naar Vite/Create-React-App voor betere development ervaring
2. Voeg React Router toe voor betere URL management
3. Gebruik state management (Redux/Context API)
4. Build optimalisatie en code splitting

### Database integratie:
1. **Activiteiten agenda**
   - MySQL tabel voor events
   - CRUD operaties via PHP API
   - React formulier voor toevoegen/bewerken

2. **Admin panel**
   - Login systeem met PHP sessions
   - Dashboard voor beheer van activiteiten
   - Gebruikersbeheer

3. **Nieuws sectie**
   - Database tabel voor nieuwsberichten
   - Dynamische weergave in linker sidebar

## Componenten structuur

### App.jsx bevat:
- `Header` - Hoofdnavigatie
- `SidebarLeft` - Nieuws sectie (nu statisch, later dynamisch)
- `SidebarRight` - Afbeeldingen
- `HomePage` - Welkomstpagina
- `AboutPage` - Over ons
- `ActivitiesPage` - Activiteiten lijst
- `ContactPage` - Contactformulier met twee tabs
- `Footer` - Copyright info

## PHP Backend

### contact.php
- Accepteert POST requests met JSON
- Valideert input
- Logt berichten naar bestand
- Klaar voor email integratie (zie comments in code)

### Voor email functionaliteit:
Uncomment de mail() functie in `contact.php` en pas het email adres aan.

## Browser compatibiliteit
- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- IE11: ❌ (React 18 vereist moderne browser)

## Vragen?
Deze setup is een tijdelijke oplossing zonder Node.js. Voor een productie-klare website raad ik aan om Node.js te installeren en te migreren naar een professionele build setup.
