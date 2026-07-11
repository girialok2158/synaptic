# 03 — System Architecture

> **Document Version:** 1.0
> **Project:** Synaptic
> **Last Updated:** July 2026
> **Owner:** Synaptic Engineering Team

---

# 1. Overview

## What is Synaptic?

Synaptic is an AI-powered Career Preparation Platform that helps learners prepare for both technology careers and competitive examinations through AI, community collaboration, productivity tools, and progress analytics.

Unlike traditional learning platforms, Synaptic combines multiple experiences into one unified workspace.

The platform supports multiple career paths while maintaining a common architecture and user experience.

Examples include:

- Software Engineering
- Data Science
- AI & Machine Learning
- UPSC
- SSC
- Banking
- Railways
- GATE
- CAT
- NEET
- CLAT
- State PSC
- NDA / CDS

---

# 2. Architecture Philosophy

Synaptic follows these engineering principles:

- Modular Architecture
- API-first Development
- Mobile-first UI
- Security by Design
- AI as a Platform Feature
- Scalable Infrastructure
- Clean Code
- Component Reusability
- Documentation-first Development

Every feature should be independently maintainable.

---

# 3. High-Level System Architecture

                Users
                   │
         Next.js Frontend
                   │
        HTTPS REST API Calls
                   │
             FastAPI Backend
                   │
      ┌────────────┴────────────┐
      │                         │
 Supabase                 AI Services
(PostgreSQL)                (Groq)
      │
 Storage + Authentication

---

# 4. Technology Stack

## Frontend

Framework:
- Next.js 15

Language:
- TypeScript

UI Library:
- React 19

Styling:
- Tailwind CSS v4

Component Library:
- shadcn/ui

Animation:
- Framer Motion

Icons:
- Lucide React

Forms:
- React Hook Form

Validation:
- Zod

State Management:
- Zustand

Data Fetching:
- TanStack Query

Theme:
- next-themes

Charts:
- Recharts

Notifications:
- Sonner

---

## Backend

Framework:
- FastAPI

Language:
- Python 3.12+

Validation:
- Pydantic

Authentication:
- Supabase Auth

Database SDK:
- Supabase Python SDK

Background Tasks:
- FastAPI Background Tasks

Logging:
- Loguru

---

## Database

Provider:

Supabase PostgreSQL

Features:

- Authentication
- PostgreSQL
- Row Level Security
- Storage
- Realtime
- Database Functions

---

## AI

Provider:

Groq

Models:

- Llama
- Future model upgrades

Architecture:

Frontend

↓

Backend

↓

Groq

The frontend never communicates directly with the AI provider.

---

# 5. Folder Structure

synaptic/

frontend/
backend/
docs/

Frontend and backend are completely independent applications.

---

## Frontend

frontend/

app/
components/
features/
hooks/
lib/
providers/
services/
store/
styles/
types/
utils/
public/

---

## Backend

backend/

app/

api/
core/
db/
models/
schemas/
services/
repositories/
middleware/
utils/
ai/

main.py

---

# 6. Application Layers

Presentation Layer

↓

Business Logic

↓

Service Layer

↓

Database Layer

↓

External Services

Responsibilities are separated between layers.

Business logic must never exist inside UI components.

---

# 7. Authentication Architecture

Authentication Provider:

Supabase Auth

Authentication Flow

User Login

↓

Supabase Authentication

↓

JWT Token

↓

Frontend stores secure session

↓

Requests include Bearer Token

↓

FastAPI validates token

↓

Access granted

Authentication methods:

- Email & Password
- Google OAuth (Future)
- GitHub OAuth (Future)

---

# 8. Career Path Architecture

Every user selects one Career Path during onboarding.

Examples:

Technology

- Software Engineering
- Data Science
- AI

Government Exams

- UPSC
- SSC
- Banking
- Railways

Higher Education

- GATE
- CAT
- CLAT
- NEET

The Career Path personalizes:

- Dashboard
- Community
- AI Responses
- Analytics
- Resources
- Recommendations

The platform architecture remains the same.

---

# 9. Core Modules

## Authentication

Responsibilities

- Register
- Login
- Logout
- Session Management

---

## Dashboard

Responsibilities

- Progress
- Recommendations
- Analytics
- Goals

---

## Community

Responsibilities

- Rooms
- Discussions
- Reactions
- Matchmaking

---

## AI Mentor

Responsibilities

- Chat
- Flashcards
- Summaries
- Study Plans
- Interview Practice

---

## Focus Workspace

Responsibilities

- Pomodoro
- Daily Goals
- Study Planner
- Focus Sessions

---

## Resources

Responsibilities

- Notes
- PDFs
- Videos
- Bookmarks

---

## Analytics

Responsibilities

- Progress
- Streaks
- Study Hours
- AI Usage

---

## Settings

Responsibilities

- Profile
- Theme
- Notifications
- Privacy

---

# 10. API Communication

All communication follows this flow.

Frontend

↓

REST API

↓

FastAPI

↓

Services

↓

Supabase

↓

Response

The frontend never communicates directly with the database.

---

# 11. AI Request Flow

User

↓

Frontend

↓

FastAPI

↓

Prompt Builder

↓

Groq

↓

Response Formatter

↓

Frontend

Prompt engineering remains inside the backend.

---

# 12. Security Principles

Authentication required.

Authorization enforced.

Row Level Security enabled.

Environment variables never exposed.

Sensitive operations performed server-side.

HTTPS everywhere.

Input validation on every endpoint.

Rate limiting (Future).

Audit logs (Future).

---

# 13. Performance Strategy

Use lazy loading.

Use code splitting.

Optimize images.

Server Components where appropriate.

Cache API responses.

Pagination for large datasets.

Virtualized lists for chats.

Database indexing.

---

# 14. Scalability Strategy

Synaptic should support:

- Thousands of concurrent users
- Multiple career paths
- Additional AI providers
- Additional modules
- Mobile application
- Premium subscriptions

without major architectural changes.

---

# 15. Deployment Architecture

Frontend

↓

Vercel

↓

Backend

↓

Render / Railway

↓

Supabase Cloud

↓

Groq API

Each service can scale independently.

---

# 16. Engineering Standards

Use TypeScript strict mode.

Follow ESLint rules.

Use Prettier formatting.

Write reusable components.

Avoid duplicated code.

Prefer composition over inheritance.

Keep functions small.

Document public APIs.

Use descriptive commit messages.

---

# 17. Future Expansion

The architecture is intentionally designed to support:

- Native Mobile Apps
- AI Voice Mentor
- Mock Interviews
- Premium Subscription
- Payment Integration
- Admin Dashboard
- Company Communities
- Real-time Collaboration
- Calendar Sync
- Job Tracking
- Resume Builder
- Portfolio Generator

without redesigning the system.

---

# 18. Architecture Goals

The primary goals of Synaptic are:

- Scalability
- Reliability
- Maintainability
- Security
- Performance
- Excellent User Experience
- Modular Design
- AI-first Development
- Production Readiness

Every engineering decision should support these goals.

---

**End of Document**