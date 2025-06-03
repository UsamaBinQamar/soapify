create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text check (role in ('admin', 'tenant', 'client')),
  created_at timestamp with time zone default timezone('utc'::text, now())
);
