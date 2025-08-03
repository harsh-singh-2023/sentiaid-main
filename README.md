# 🧠 SentiAid – Inclusive Communication SaaS Platform

Empowering Media, Government, Education, and Public Spaces with AI-powered Sign Language Accessibility

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Python 3.8+
- npm or yarn

### Frontend (Next.js)

1. **Install dependencies:**
   ```bash
   npm run install-frontend
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Start production server:**
   ```bash
   npm run start
   ```

### Backend (Django)

1. **Install Python dependencies:**
   ```bash
   pip install django==3.0.4 nltk
   ```

2. **Run migrations:**
   ```bash
   npm run django-migrate
   ```

3. **Start Django development server:**
   ```bash
   npm run django-dev
   ```
   The Django API will be available at `http://localhost:8000`

## 🏗️ Project Structure

```
sentiaid-main/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # App router pages
│   │   └── components/      # React components
│   ├── public/              # Static assets including ISL videos
│   └── package.json
├── A2SL/                    # Django backend
├── assets/                  # Original video assets (copied to frontend/public)
├── manage.py               # Django management script
└── package.json           # Root package.json with scripts
```

## 🎯 Features

- **Modern Next.js Frontend**: Built with React 19, TypeScript, and Tailwind CSS
- **Real-time Speech Recognition**: Convert speech to text using Web Speech API
- **AI-Powered Translation**: Process text using NLP to generate ISL-compatible format
- **Video Animation Playback**: Play synchronized ISL video animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Django API Backend**: Robust text processing and sign language mapping

## 🧠 Technology Stack

### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: React 19
- **Build Tool**: Turbopack (Next.js)

### Backend  
- **Framework**: Django 3.0.4
- **Language**: Python 3.8+
- **NLP**: NLTK, spaCy
- **Database**: SQLite (default)

## 📱 Usage

1. **Home Page**: Introduction to SentiAid and its features
2. **Converter Page**: Main application interface
   - Enter text manually or use speech recognition
   - Click "Convert to ISL" to process the text
   - Watch the generated sign language animations
3. **About Page**: Detailed information about the platform
4. **Contact Page**: Get in touch with the team

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development  
```bash
python manage.py runserver
```

### Linting
```bash
npm run lint
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
```

### Backend (Heroku/AWS)
Configure your preferred hosting platform with the Django application.

## 📊 API Integration

The Next.js frontend communicates with the Django backend via REST API:

- **POST** `/api/process-text/`: Process text for sign language conversion
- **GET** `/static/{word}.mp4`: Retrieve sign language video files

## 1. Executive Summary

SentiAid is a deep-tech SaaS platform enabling seamless Indian Sign Language (ISL) translation using AI and NLP. We serve media houses, government agencies, educational institutions, and public infrastructure - helping them meet accessibility mandates and reach underserved deaf and mute communities.

Our MVP enables both live and recorded content translation into ISL, making media and information inclusive. Backed by the VIT TBI, NSRCEL IIM Bangalore, Microsoft, AWS, Wadhwani Foundation & Startlabs Innovations SentiAid brings together state-of-the-art AI, scalable cloud infrastructure, and domain-specific training to build India's most reliable sign language accessibility solution.

## 2. User Persona

**Name:** Aarti Sharma  
**Role:** Accessibility Officer at a National News Channel

**Responsibilities:**
- Ensure all live and recorded news is inclusive
- Drive accessibility innovation
- Meet social impact, CSR, and regulatory goals

**Pain Points:**
- Manual sign translation is slow, expensive, and unscalable
- Struggles with integrating accessibility into legacy broadcast workflows
- No visibility into accessibility analytics or user engagement

**Needs:**
- Plug-and-play solution for live sign language overlay
- API integration with broadcasting software
- Compliance with RPWD Act and CSR goals
- Real-time and batch support with analytics

## 3. Market Opportunity

**India:** 63 million+ with significant hearing impairment (WHO, 2023)  
**Global:** Over 466 million  
**<5% of content accessible to deaf/mute audiences**

**Accessibility mandates growing under:**
- RPWD Act 2016
- NEP 2020
- CSR impact expectations

**Market segments ripe for disruption:**
- News & Entertainment (TV & OTT)
- Government Public Communication
- Smart Classrooms & Online Learning
- Smart Cities & Public Displays
- Corporate training & compliance

**Global TAM:** Multi-billion dollar opportunity

## 4. Core Use Cases

- 🗞️ News Channels – Live and recorded sign language overlays
- 🧑‍🏫 Schools/Colleges – Inclusive e-learning & hybrid classrooms
- 🏛️ Government Announcements – Digital signage, emergency updates
- 🏙️ Public Infrastructure – Airports, metros, railway platforms
- 🏢 Corporate Campaigns – Inclusive brand messaging and training
- 🏟️ Live Events – Sports, rallies, town halls

## 5. High-Level Product Architecture

```mermaid
flowchart LR
  A[Clients: Media, Gov, Schools, APIs] -->|Content Input| B(SentiAid SaaS Platform)
  B --> C{AI/NLP Pipeline}
  C --> D[Sign Language Conversion Engine]
  D --> E[Animation/Video Renderer]
  E --> F[Deliver Output: Web, Mobile, API, Displays]
  B --> G[User Management & Auth]
  B --> H[Analytics, Logging, Monitoring]
  B --> I[Billing & Subscription]
```

## 6. Internal Working: Step-by-Step Flow

### Input Ingestion

- Users send live or batch content (audio, video, or text) via web portal or API

### Speech/Text Processing

- Audio → Text using ASR (Google, Azure, DeepSpeech)
- Text cleaned, lemmatized, and tagged (spaCy, NLTK)

### Sign Language Mapping

- AI models map sentence structure → ISL sequence
- Tense, gender, grammar adjusted per ISL rules

### Rendering

- Matching sign video assets selected or synthesized
- Videos compiled into a fluent stream

### Output Delivery

- Delivered via web, mobile, TV overlays, or API
- Supports both real-time and batch pipelines

### Analytics & Monitoring

- Dashboard for usage, errors, engagement
- Compliance reporting and alerts

## 7. Backend Architecture (AI & Media Flow)

```mermaid
flowchart TD
    A[User/Client] --> B[API Endpoint/Portal]
    B --> C{Input Type}
    C -- Text --> D[NLP Pipeline]
    C -- Audio/Video --> E[Speech-to-Text Engine]
    E --> D
    D --> F[Sign Language Mapping AI]
    F --> G[Media Asset Selector/Synthesizer]
    G --> H[Render/Stream Output]
    H --> I[Client Devices Web, TV, Mobile, API]
    D --> J[Usage Logging/Analytics]
    F --> J
```

## 8. Tech Stack Overview

| Layer | Technology/Service |
|-------|--------------------|
| Frontend | Next.js 15, React 19, TypeScript, TailwindCSS 4 |
| Backend/API | Django, FastAPI, Python |
| NLP/AI Models | NLTK, spaCy, Transformers, ASR (Google, Azure), TTS |
| Media Processing | FFmpeg, OpenCV |
| Database | PostgreSQL, Redis |
| Hosting/Cloud | AWS/GCP/Azure, Docker, Kubernetes |
| CI/CD | GitHub Actions, Docker Hub |
| Auth | JWT, OAuth, SSO, Django Auth |
| API Protocols | REST, GraphQL, WebSocket |
| Monitoring | Prometheus, Sentry, ELK Stack |
| Analytics | Mixpanel, Google Analytics |
| Billing | Stripe, Razorpay |

## 9. AI Model Performance & Validation

| Metric | Detail |
|--------|--------|
| Accuracy | BLEU, ROUGE, and domain-specific metrics for translation quality |
| Human Review | Human-in-the-loop validation with sign language experts |
| Latency | Sub-second response for live, batch for bulk uploads |
| Fallbacks | Letter-by-letter spelling if word not in dataset |
| Continuous Learning | Feedback loop from users and educators |

## 10. SaaS Capabilities

- ✅ Multi-tenant architecture
- 🔐 Secure Auth & RBAC
- 💳 Self-service billing and subscription
- 📊 Dashboards for usage & compliance
- ⚙️ Developer-friendly APIs
- 🏷️ White-label capability
- 📚 Easy onboarding (docs, SDKs, sandbox)
- 🚨 Alerts, audit logs, error tracking

## 11. Security & Compliance

- AES-256 data encryption (at rest and transit)
- GDPR + RPWD Act 2016 compliance
- Regular vulnerability scanning & audits
- API rate limiting, role-based permissions
- SLAs and uptime guarantees

## 12. Why Now?

- 🔺 Accessibility mandates from NEP 2020 & RPWD Act accelerating adoption
- 🧠 Maturity in AI/Cloud tech allows real-time translation affordably
- 🧑‍🦽 Underserved communities demanding inclusion
- 💼 CSR goals and ESG compliance fueling adoption in large enterprises
- 🌍 Global push for inclusive media & education

## 13. Competitive Moats

- 🇮🇳 India-focused ISL models (not ASL)
- 🕒 Real-time & batch mode
- 🎯 Pre-integrated with media workflows (OBS, AWS IVS, etc.)
- 🧾 Reporting, dashboards, and compliance-ready
- 📚 Large curated video dataset for ISL gestures
- 🧩 Modular API integrations

## 14. Go-to-Market Strategy

- B2B Enterprise Sales: Direct sales to news agencies, gov bodies, edu boards
- API Model: Integration into LMS, OTT, transport screens
- Partnerships: Collaborate with accessibility NGOs, ISL associations
- Government Projects: State-level MoUs for smart city deployments
- Community Uplift: Inclusion drives in schools and public media

## 15. Roadmap & Next Steps

- 🚀 Expand pilots with 3–5 broadcasters and state gov departments
- 💾 Scale cloud backend with GPU + containerized sign rendering
- 🧠 Expand ISL gesture dataset (target 1M+ video clips)
- 🔄 Launch user feedback loop for translation accuracy
- 📱 Launch mobile SDK & LMS plugins (Moodle, Blackboard)

## Contact

**Harsh Singh**  
Founder – SentiAid  
Selected by NSRCEL, IIM Bangalore (Campus Founder Program)  
📧 [support@sentiaid.co.in]  
🌐 [sentaid.co.in]

