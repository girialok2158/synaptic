# 04 — Database Schema

Version: 1.0

Status: Draft

---

# Overview

Synaptic uses **Supabase PostgreSQL** as its primary database.

The database is designed to support:

- Authentication
- User Profiles
- Communities
- Real-time Chat
- Study Groups
- AI Flashcards
- AI Summaries
- Focus Sessions
- Matchmaking
- Karma System
- Notifications
- User Dashboard
- Premium Features

The schema follows relational database design with Row Level Security (RLS).

---

# Database Technologies

Database:
PostgreSQL (Supabase)

Authentication:
Supabase Auth

Storage:
Supabase Storage

Realtime:
Supabase Realtime

Policies:
Row Level Security (RLS)

---

# Core Tables

## users

Purpose

Stores public user information.

Fields

- id (UUID)
- auth_id (UUID)
- full_name
- username
- email
- avatar_url
- bio
- exam_category
- exam_name
- current_level
- target_year
- city
- state
- country
- weak_subjects
- strong_subjects
- karma_points
- streak_days
- focus_minutes
- created_at
- updated_at

---

## study_groups

Purpose

Stores all public study communities.

Fields

- id
- name
- slug
- description
- exam_category
- visibility
- icon
- banner
- member_count
- created_by
- created_at

---

## group_members

Purpose

Users joining study groups.

Fields

- id
- user_id
- group_id
- role
- joined_at

Role

- Owner
- Moderator
- Member

---

## chat_rooms

Purpose

Separate chat rooms inside every community.

Examples

General

Doubts

Resources

Interview

Mock Tests

Off Topic

Fields

- id
- group_id
- name
- description
- created_at

---

## messages

Purpose

Stores chat messages.

Fields

- id
- room_id
- sender_id
- message
- image_url
- file_url
- reply_to
- edited
- created_at

---

## flashcards

Purpose

AI generated flashcards.

Fields

- id
- user_id
- title
- subject
- difficulty
- content
- source
- created_at

---

## summaries

Purpose

AI generated summaries.

Fields

- id
- user_id
- title
- original_text
- summarized_text
- created_at

---

## focus_sessions

Purpose

Pomodoro tracking.

Fields

- id
- user_id
- duration
- completed
- started_at
- ended_at

---

## user_progress

Purpose

Dashboard analytics.

Fields

- id
- user_id
- total_focus_hours
- flashcards_created
- summaries_created
- questions_answered
- karma_points
- weekly_streak
- updated_at

---

## peer_matches

Purpose

Study partner matching.

Fields

- id
- user_one
- user_two
- compatibility_score
- shared_subjects
- created_at

---

## karma_history

Purpose

Tracks all karma transactions.

Fields

- id
- user_id
- action
- points
- created_at

Example Actions

- Answer Accepted
- Helpful Reply
- Daily Login
- Completed Focus Session
- Uploaded Notes

---

## notifications

Purpose

Stores notifications.

Fields

- id
- receiver_id
- title
- message
- type
- read
- created_at

---

## uploaded_notes

Purpose

Community notes and PDFs.

Fields

- id
- uploader_id
- group_id
- title
- file_url
- subject
- downloads
- uploaded_at

---

## premium_subscriptions

Purpose

Premium membership.

Fields

- id
- user_id
- plan
- status
- expires_at
- payment_provider
- created_at

---

# Relationships

users

↓

group_members

↓

study_groups

↓

chat_rooms

↓

messages

---

users

↓

flashcards

---

users

↓

summaries

---

users

↓

focus_sessions

---

users

↓

user_progress

---

users

↓

karma_history

---

users

↓

notifications

---

users

↓

uploaded_notes

---

users

↓

premium_subscriptions

---

# Row Level Security

Every table must use RLS.

Rules

Users can:

✅ Read public communities

✅ Read public messages

✅ Edit only their own profile

✅ Delete only their own messages

✅ Upload only their own notes

✅ View only their own dashboard

Admins can

- Delete messages
- Ban users
- Moderate communities

---

# Indexes

Important indexes

users(username)

users(email)

messages(room_id)

messages(created_at)

study_groups(slug)

group_members(user_id)

notifications(receiver_id)

flashcards(user_id)

focus_sessions(user_id)

---

# Future Tables

Future versions may include

- achievements
- quizzes
- mock_tests
- interview_questions
- recruiter_profiles
- company_pages
- events
- video_rooms
- AI Tutors
- Mentor Sessions

---

# Estimated Database Size

Version 1

15+ Tables

80+ Columns

30+ Relationships

Fully normalized

Supports 100,000+ users

---

End of Document# 04 — Database Schema

Version: 1.0

Status: Draft

---

# Overview

Synaptic uses **Supabase PostgreSQL** as its primary database.

The database is designed to support:

- Authentication
- User Profiles
- Communities
- Real-time Chat
- Study Groups
- AI Flashcards
- AI Summaries
- Focus Sessions
- Matchmaking
- Karma System
- Notifications
- User Dashboard
- Premium Features

The schema follows relational database design with Row Level Security (RLS).

---

# Database Technologies

Database:
PostgreSQL (Supabase)

Authentication:
Supabase Auth

Storage:
Supabase Storage

Realtime:
Supabase Realtime

Policies:
Row Level Security (RLS)

---

# Core Tables

## users

Purpose

Stores public user information.

Fields

- id (UUID)
- auth_id (UUID)
- full_name
- username
- email
- avatar_url
- bio
- exam_category
- exam_name
- current_level
- target_year
- city
- state
- country
- weak_subjects
- strong_subjects
- karma_points
- streak_days
- focus_minutes
- created_at
- updated_at

---

## study_groups

Purpose

Stores all public study communities.

Fields

- id
- name
- slug
- description
- exam_category
- visibility
- icon
- banner
- member_count
- created_by
- created_at

---

## group_members

Purpose

Users joining study groups.

Fields

- id
- user_id
- group_id
- role
- joined_at

Role

- Owner
- Moderator
- Member

---

## chat_rooms

Purpose

Separate chat rooms inside every community.

Examples

General

Doubts

Resources

Interview

Mock Tests

Off Topic

Fields

- id
- group_id
- name
- description
- created_at

---

## messages

Purpose

Stores chat messages.

Fields

- id
- room_id
- sender_id
- message
- image_url
- file_url
- reply_to
- edited
- created_at

---

## flashcards

Purpose

AI generated flashcards.

Fields

- id
- user_id
- title
- subject
- difficulty
- content
- source
- created_at

---

## summaries

Purpose

AI generated summaries.

Fields

- id
- user_id
- title
- original_text
- summarized_text
- created_at

---

## focus_sessions

Purpose

Pomodoro tracking.

Fields

- id
- user_id
- duration
- completed
- started_at
- ended_at

---

## user_progress

Purpose

Dashboard analytics.

Fields

- id
- user_id
- total_focus_hours
- flashcards_created
- summaries_created
- questions_answered
- karma_points
- weekly_streak
- updated_at

---

## peer_matches

Purpose

Study partner matching.

Fields

- id
- user_one
- user_two
- compatibility_score
- shared_subjects
- created_at

---

## karma_history

Purpose

Tracks all karma transactions.

Fields

- id
- user_id
- action
- points
- created_at

Example Actions

- Answer Accepted
- Helpful Reply
- Daily Login
- Completed Focus Session
- Uploaded Notes

---

## notifications

Purpose

Stores notifications.

Fields

- id
- receiver_id
- title
- message
- type
- read
- created_at

---

## uploaded_notes

Purpose

Community notes and PDFs.

Fields

- id
- uploader_id
- group_id
- title
- file_url
- subject
- downloads
- uploaded_at

---

## premium_subscriptions

Purpose

Premium membership.

Fields

- id
- user_id
- plan
- status
- expires_at
- payment_provider
- created_at

---

# Relationships

users

↓

group_members

↓

study_groups

↓

chat_rooms

↓

messages

---

users

↓

flashcards

---

users

↓

summaries

---

users

↓

focus_sessions

---

users

↓

user_progress

---

users

↓

karma_history

---

users

↓

notifications

---

users

↓

uploaded_notes

---

users

↓

premium_subscriptions

---

# Row Level Security

Every table must use RLS.

Rules

Users can:

✅ Read public communities

✅ Read public messages

✅ Edit only their own profile

✅ Delete only their own messages

✅ Upload only their own notes

✅ View only their own dashboard

Admins can

- Delete messages
- Ban users
- Moderate communities

---

# Indexes

Important indexes

users(username)

users(email)

messages(room_id)

messages(created_at)

study_groups(slug)

group_members(user_id)

notifications(receiver_id)

flashcards(user_id)

focus_sessions(user_id)

---

# Future Tables

Future versions may include

- achievements
- quizzes
- mock_tests
- interview_questions
- recruiter_profiles
- company_pages
- events
- video_rooms
- AI Tutors
- Mentor Sessions

---

# Estimated Database Size

Version 1

15+ Tables

80+ Columns

30+ Relationships

Fully normalized

Supports 100,000+ users

---

End of Document