-- Local Business Demo Studio
-- Phase 7: database-ready schema. Run this in a future Supabase project.

create table if not exists public.business_profiles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  industry text not null check (industry in (
    'restaurant', 'salon', 'gym', 'clinic', 'coaching',
    'hotel', 'bakery', 'retail', 'automobile', 'real-estate'
  )),
  tagline text not null,
  phone text not null,
  whatsapp text not null,
  address text not null,
  city text not null,
  services jsonb not null default '[]'::jsonb,
  branding jsonb not null default '{}'::jsonb,
  status text not null default 'draft' check (status in ('draft', 'active', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists business_profiles_industry_idx
  on public.business_profiles(industry);

create index if not exists business_profiles_status_idx
  on public.business_profiles(status);

-- Public demos are intentionally read-only from the website.
-- Enable RLS before connecting this table to Supabase clients.
-- Admin write policies should be added only after authentication is defined.
