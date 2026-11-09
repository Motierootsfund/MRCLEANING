# MR Cleaning Solutions Website

A responsive static website ready for GitHub and Vercel.

## Included
- Original supplied mascot logo (`assets/mr-cleaning-logo.png`)
- Generated cleaning imagery in `assets/`
- Company profile, services, service areas and contact details
- Individual window prices, commercial monthly packages and house-cleaning packages
- Booking form that prepares a WhatsApp message or email draft
- Mobile responsive layout

## Deploy to GitHub and Vercel
1. Extract this ZIP file.
2. Create a new GitHub repository, e.g. `mr-cleaning-solutions-website`.
3. Upload **all files and folders inside** this project (not the ZIP itself).
4. On Vercel, choose **Add New → Project**, import the GitHub repository.
5. Framework preset: **Other**. Build command: leave blank. Output directory: `.` (or leave default if Vercel detects static files).
6. Deploy.

## Booking behaviour
- WhatsApp button opens WhatsApp to `+27 76 569 5363` with the completed booking details. The customer must press Send.
- Email button opens the visitor's default email app with a pre-filled message to `Mrcleaningsolutions@outlook.com`. The visitor must press Send.
- This static website does not silently send or store bookings. For automatic email delivery and an admin booking dashboard, connect a form service such as FormSubmit, Formspree or EmailJS later.

## Details to verify before publishing
- Confirm the registered company's name and registration number exactly match CIPC records.
- Confirm the email address and phone number are active.
- Review the prices, package scope, travel charges and availability before publishing.
- The price list describes starting prices. Custom quotations apply to larger properties, difficult access and extra services.

## Files
- `index.html` — website content
- `styles.css` — design and responsive layout
- `script.js` — mobile navigation and booking actions
- `assets/` — logo and website imagery
