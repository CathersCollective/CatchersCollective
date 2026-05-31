# Supabase App Plan

The Catcher's Collective should use Supabase for the member side of the business, not for the
public marketing pages alone. The current static site can stay useful as the public front door,
but paid lessons, student profiles, uploads, and progress tracking need an application backend.

## Recommended Stack

- Next.js for the public site plus protected student/admin areas.
- Supabase Auth for parent, athlete, and coach accounts.
- Supabase Postgres for profiles, purchases, lesson access, progress notes, and scheduling data.
- Supabase Storage for future video review uploads and lesson files.
- Stripe Checkout for paid plans and one-time purchases.
- Stripe webhooks to keep Supabase access records in sync after payment events.
- Vercel for hosting and environment variable management.

## Why Supabase Fits

- User profiles will be central: parent contact info, athlete level, position goals, subscription
  tier, and lesson progress.
- Protected student lessons need database-backed access control.
- Online coaching and video reviews will eventually need authenticated uploads.
- Admin workflows need a reliable place to manage athletes, memberships, and submitted inquiries.
- Supabase Row Level Security can keep each family limited to its own records while allowing Josh
  admin access.

## Core Data Model

Initial tables:

- `profiles`: one row per authenticated user.
- `athletes`: player profile records, usually connected to a parent account.
- `plans`: public package or membership definitions.
- `subscriptions`: Stripe-backed active membership records.
- `lesson_modules`: the six development pillars and future paid lessons.
- `lesson_progress`: per-athlete completion and notes.
- `inquiries`: contact form submissions from the public site.
- `video_reviews`: future uploads, review status, and coach feedback.
- `coach_notes`: private notes attached to athletes.

Helpful roles:

- `parent`: can manage their family profile and view assigned athlete lesson access.
- `athlete`: can view their own dashboard and lessons.
- `coach_admin`: can see and manage all athletes, notes, memberships, and reviews.

## Migration Path

1. Keep the current static site as the visual source of truth.
2. Create a Next.js app and move the existing sections into reusable components.
3. Add Supabase project credentials through environment variables.
4. Build auth routes: sign in, sign up, password reset, and account dashboard.
5. Add the student dashboard with the six pillar lessons as the first protected area.
6. Add Stripe Checkout for paid plans.
7. Add Stripe webhooks that update Supabase subscription and lesson-access records.
8. Replace the current placeholder contact form with an `inquiries` insert.
9. Add admin views for athletes, inquiries, subscriptions, and video reviews.

## First Build Milestone

The first useful app version should include:

- Public marketing homepage migrated from the current static site.
- Authenticated parent/student login.
- Student dashboard.
- Six protected pillar lesson pages.
- Supabase-backed inquiry form.
- Basic admin view for new inquiries and student accounts.

Stripe can follow immediately after this milestone, once the protected experience exists.
