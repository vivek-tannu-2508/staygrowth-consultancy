# StayGrowth Consulting — Version 2

Full-stack hospitality consultancy platform.

## Modules
- Public marketing website
- Lead capture
- Admin authentication
- Admin dashboard
- Leads / CRM
- Clients
- Properties
- OTA audits
- Monthly performance reports
- Client portal
- Supabase/Postgres backend

## Setup
1. Create a Supabase project.
2. Run `supabase/schema.sql` in Supabase SQL Editor.
3. Create users in Supabase Authentication.
4. Copy `.env.example` to `.env.local`.
5. Add Supabase URL and publishable key.
6. `npm install`
7. `npm run dev`
8. Website: http://localhost:3000
9. Admin: http://localhost:3000/admin/login
10. Client portal: http://localhost:3000/client

## Important security note
The included SQL uses authenticated access for simplicity. Before using the client portal with real customer data, tighten Row Level Security so each client can only access their own records. Do not expose Supabase service-role keys in the browser.

## Production roadmap
- Add role-based access (admin vs client)
- Add create/edit forms in dashboard
- Add PDF report generation
- Add charts
- Add WhatsApp/email notifications
- Add invoice module
- Add custom domain and business email
- Add audit score calculator
- Add OTA data import/API integrations
