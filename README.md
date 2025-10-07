# Creemers Exclusive

Een elegante, zwart-wit website voor Tom Creemers - een professionele zzp horeca medewerker.

## Features

- **Ultra Clean Design**: Minimalistisch zwart-wit ontwerp met chique styling
- **Responsive Layout**: Volledig responsief voor alle apparaten
- **Hero Slider**: Automatische slider met twee professionele afbeeldingen
- **Multilingual Support**: Ondersteuning voor Nederlands, Engels, Duits en Frans
- **Modern Technology**: Gebouwd met Next.js 14, TypeScript, Tailwind CSS en Framer Motion

## Secties

1. **Header**: Minimalistische navigatie met taalkeuze
2. **Hero**: Slider met twee afbeeldingen en welkomstboodschap
3. **Over Mij**: Profiel van Tom Creemers met vaardigheden
4. **Diensten**: Overzicht van hospitality diensten
5. **Contact**: Contactformulier en informatie

## Technologie Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Inter (sans-serif) + Playfair Display (serif)

## Installatie & Development

```bash
# Dependencies installeren
npm install

# Development server starten
npm run dev

# Production build
npm run build

# Production server starten
npm start
```

## Project Structuur

```
├── app/
│   ├── globals.css      # Global styles en Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Homepage
├── components/
│   ├── Header.tsx       # Navigatie header
│   ├── Hero.tsx         # Hero sectie met slider
│   ├── AboutSection.tsx # Over Tom sectie
│   ├── ServicesSection.tsx # Diensten sectie
│   └── ContactSection.tsx # Contact sectie
├── public/
│   └── resources/       # Hero afbeeldingen
└── resources/           # Originele afbeeldingen
```

## Styling

Het design gebruikt een strikt zwart-wit kleurenschema:
- **Primary**: Zwart (#000000)
- **Secondary**: Wit (#ffffff)
- **Accents**: Grijstinten voor subtiele details
- **Typography**: Playfair Display voor headings, Inter voor body text

## Responsive Design

De website is volledig responsief met breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Performance

- Optimized images met Next.js Image component
- Smooth animations met Framer Motion
- Efficient CSS met Tailwind CSS
- Fast loading met Next.js optimizations

