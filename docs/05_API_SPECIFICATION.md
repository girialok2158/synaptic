# 05 — API Specification

Version: 1.0

Status: Draft

---

# Overview

Synaptic follows a RESTful API architecture built with **FastAPI**.

The API is organized into feature-based modules and uses JSON for all request and response payloads.

Authentication is handled through **Supabase Auth JWT tokens**.

---

# API Base URL

Development

/api/v1

Production

https://api.synaptic.app/api/v1

---

# Authentication

Provider

Supabase Auth

Authentication Method

Bearer Token

Header

Authorization: Bearer <JWT_TOKEN>

---

# API Modules

- Authentication
- Users
- Profiles
- Study Groups
- Chat
- Flashcards
- AI Services
- Focus Timer
- Matchmaking
- Dashboard
- Notifications
- Notes
- Premium
- Admin

---

# Authentication APIs

## POST /auth/signup

Create a new account.

Request

- Full Name
- Email
- Password

Response

- User
- Access Token

---

## POST /auth/login

Login user.

Request

- Email
- Password

Response

- JWT Token

---

## POST /auth/logout

Logout current user.

---

## GET /auth/me

Returns current logged-in user.

---

# User APIs

## GET /users/profile

Returns user profile.

---

## PUT /users/profile

Updates profile.

---

## GET /users/dashboard

Returns dashboard analytics.

---

## GET /users/stats

Returns study statistics.

---

# Study Group APIs

## GET /groups

Returns all study groups.

---

## GET /groups/{id}

Returns group details.

---

## POST /groups

Create new study group.

---

## POST /groups/{id}/join

Join group.

---

## POST /groups/{id}/leave

Leave group.

---

## DELETE /groups/{id}

Delete group (Admin).

---

# Chat APIs

## GET /rooms/{roomId}/messages

Load messages.

---

## POST /rooms/{roomId}/messages

Send message.

---

## PUT /messages/{id}

Edit message.

---

## DELETE /messages/{id}

Delete message.

---

# AI APIs

## POST /ai/summarize

Input

Long text

Output

Summary

---

## POST /ai/flashcards

Input

Study notes

Output

Flashcards

---

## POST /ai/matchmaker

Returns best study partners.

---

## POST /ai/recommendations

Returns personalized study suggestions.

---

## POST /ai/chat

AI Study Assistant conversation.

---

# Focus APIs

## POST /focus/start

Start focus session.

---

## POST /focus/end

End session.

---

## GET /focus/history

Returns completed sessions.

---

# Dashboard APIs

## GET /dashboard

Complete dashboard.

Returns

- Progress
- Streak
- Karma
- Study Hours
- AI Usage
- Flashcards
- Goals

---

# Notification APIs

## GET /notifications

List notifications.

---

## PUT /notifications/read

Mark as read.

---

# Notes APIs

## POST /notes/upload

Upload PDF.

---

## GET /notes

Browse notes.

---

## DELETE /notes/{id}

Delete uploaded note.

---

# Premium APIs

## GET /premium/plans

Returns plans.

---

## POST /premium/subscribe

Purchase premium.

---

# Admin APIs

## GET /admin/users

Manage users.

---

## GET /admin/reports

Reported content.

---

## DELETE /admin/message/{id}

Delete message.

---

## POST /admin/ban

Ban user.

---

# Response Format

Success

{
  "success": true,
  "message": "Operation completed",
  "data": {}
}

Error

{
  "success": false,
  "message": "Validation failed",
  "errors": {}
}

---

# Status Codes

200 OK

201 Created

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

409 Conflict

422 Validation Error

500 Internal Server Error

---

# Security

All endpoints require HTTPS.

JWT Authentication

Rate Limiting

Input Validation

SQL Injection Protection

XSS Protection

CSRF Protection

Role-Based Access Control

---

# API Versioning

Current Version

v1

Future

v2

v3

---

# Estimated API Size

Approximately

80+ Endpoints

14 Modules

RESTful Design

Production Ready

---

End of Document