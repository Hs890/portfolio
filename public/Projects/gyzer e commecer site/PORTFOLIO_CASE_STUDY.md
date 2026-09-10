# ⚡ Gyzer (Aurax / Asif Brothers) — Full-Stack E-Commerce & Industrial Equipment Platform

> **A high-performance, enterprise-grade E-Commerce Web Application & Admin Operating System built for modern HVAC / Geyser appliances with TanStack Start, React 19, TypeScript, Tailwind CSS v4, and Supabase.**

---

## 📌 Project Overview

- **Project Name:** Gyzer / Aurax E-Commerce Platform
- **Role:** Full-Stack Web Developer & UI/UX Designer
- **Type:** Full-Stack Production E-Commerce Web App + Enterprise Admin Dashboard
- **Tech Stack:** TanStack Start (SSR/CSR), React 19, TypeScript, TanStack Router, TanStack Query v5, Tailwind CSS v4, Radix UI, Supabase (PostgreSQL & Auth), Recharts, jsPDF.
- **Key Focus Areas:** Full-Stack Architecture, Type-Safe Routing, High-Conversion UX, Real-Time Inventory, Dynamic Invoice Engine, Secure Admin Management.

---

## 🚀 Key Highlights & Numbers (Resume / Case Study Punchlines)

- ⚡ **Sub-Second Page Loads:** Built with TanStack Start SSR & TanStack Query caching for instant transitions.
- 🛡️ **End-to-End Type Safety:** Fully typed from database schema (Supabase) to frontend routes and search parameters.
- 📦 **Complete E-Commerce Flow:** Browsing, advanced comparison matrix, cart drawer, checkout, live order tracking, and instant PDF invoice downloads.
- 📊 **Enterprise Admin Operating System:** Full real-time analytics with Recharts, inventory tracking, order status lifecycles, and abandoned cart recovery.
- 🎨 **Bespoke Industrial Luxury Design System:** Custom typography, micro-interactions, responsive drawer carts, and mobile-first layouts.

---

## 🛠️ Tech Stack & Architecture

### Frontend Architecture
- **Framework & Routing:** `React 19` + `@tanstack/react-start` (SSR/Nitro) + `@tanstack/react-router` (File-based, fully type-safe routing).
- **State Management & Data Fetching:** `@tanstack/react-query v5` (optimistic updates, query options, caching, suspense).
- **Styling & Design System:** `Tailwind CSS v4`, custom CSS tokens (Copper / Gold / Charcoal Industrial Palette), `Lucide React` icons.
- **UI Components & Interactions:** `Radix UI` Primitives (Dialog, Popover, Dropdown, Accordion, Tabs), `Vaul` (Smooth mobile drawer), `Embla Carousel` (Touch-friendly image sliders).
- **Forms & Validation:** `React Hook Form` + `Zod` schema validation.
- **Data Visualization & Export:** `Recharts` (interactive sales charts), `jsPDF` & `html2canvas` (client-side printable invoice generation).

### Backend & Cloud Services
- **Database & Auth:** `Supabase` (PostgreSQL relational database with Row Level Security policies).
- **Authentication:** Role-based access control (Customers vs. Admin staff) with secure session handling.
- **Storage:** Supabase Storage buckets for product imagery and media assets.

---

## 🌟 Core Features & Modules

### 1. 🛍️ Customer Experience & Storefront
- **High-Converting Hero & Brand Story:** Dynamic hero showcase, category discovery cards, verified reviews carousel, and technical trust badges.
- **Smart Catalog & Filter Engine:** Instant filtering by Category, Fuel Type (Electric / Gas / Hybrid / Solar), Capacity (Liters), Price Range, and In-Stock status.
- **Product Specification & Comparison Matrix (`/compare`):** Side-by-side spec comparison table (Energy efficiency, heating elements, tank material, warranty) to assist buying decisions.
- **Rich Product Details (`/product/$slug`):** Multi-angle gallery with zoom preview, real-time inventory badge, customer review submission with star breakdown, and related product recommendations.
- **Slide-Over Cart Drawer & Persistent Wishlist:** Seamless drawer cart accessible anywhere with instant subtotal updates, free shipping progress bar, and one-click checkout trigger.
- **Frictionless Checkout Flow (`/checkout`):** Multi-step checkout with saved address selection, Cash on Delivery (COD) & Online Bank transfer support, and instant order creation.
- **Live Order Tracking (`/track`):** Public tracking portal where customers can check order progress (Received → Confirmed → Shipped → Delivered) using their Order ID and Phone Number.
- **Automated Digital Invoices (`/invoice/$id`):** Beautifully formatted, print-ready tax invoice with barcode/QR styling, downloadable as high-resolution PDF.

### 2. 🔐 Customer Portal (`/account`)
- **Order History:** Visual timeline of past orders with line items, tracking statuses, and one-click invoice generation.
- **Address Book:** Multi-address manager with default shipping and billing preferences.
- **Wishlist & Saved Items:** Synchronized across devices for logged-in users.
- **Security & Password Management:** Safe profile updates and credential resets.

### 3. 💼 Enterprise Admin Command Center (`/admin`)
- **Executive Analytics Dashboard:** Gross revenue, monthly orders, average order value, conversion rate, and revenue trend graphs powered by Recharts.
- **Product & Inventory Catalog:** Full CRUD operations for product inventory, stock status triggers (In Stock / Low Stock / Out of Stock), pricing, and specifications.
- **Order Lifecycle Management:** Live status changing (Pending, Processing, In Transit, Completed, Refunded) with automatic audit timestamps.
- **Abandoned Carts Recovery System (`/admin/abandoned-carts`):** Identifies shoppers who dropped off during checkout, capturing items, total value, and contact info for direct remarketing.
- **Customer & Review Moderation (`/admin/reviews`, `/admin/messages`):** Admin review approval workflow, rating distributions, and contact form inbox management.
- **Category & Taxonomy Structure (`/admin/categories`):** Hierarchical category and banner management.

---

## 📸 Screenshots & Visual Asset Guide (Portfolio Photos)

To present this project at its maximum potential on your portfolio website, Behance, LinkedIn, or GitHub README, capture the following **8 high-impact screenshots**:

### 1. ⭐ Hero Section & Landing Page (Desktop)
- **URL/Page:** `/` (Home)
- **What to show:** The striking hero section with high-resolution geyser visuals, headline, key trust badges (25+ Years, Fast Delivery, Warranty), and category cards.
- **Mockup tip:** Display inside a clean MacBook Pro mockup or high-res desktop frame.

### 2. ⭐ Product Catalog with Active Filters
- **URL/Page:** `/shop` or `/categories/instant-electric`
- **What to show:** Grid of product cards showing price tags, discount tags, rating stars, and the left-side filter sidebar (Fuel type, Capacity, Price Slider).
- **Caption:** *"Faceted product filtering & lightning-fast search experience."*

### 3. ⭐ Product Details Page (PDP) & Review Breakdown
- **URL/Page:** `/product/[slug]` (e.g. Instant Geyser or Storage Tank)
- **What to show:** Image carousel, technical specifications table, capacity selector, "Add to Cart" sticky interaction, and customer review star ratings.
- **Caption:** *"Data-dense, conversion-focused product showcase with technical specifications."*

### 4. ⭐ Interactive Product Comparison Tool
- **URL/Page:** `/compare`
- **What to show:** 2-3 products placed side-by-side comparing specs, capacity, warranty, price, and features.
- **Caption:** *"Interactive spec-comparison tool helping users choose the ideal water heating system."*

### 5. ⭐ Seamless Checkout & Cart Drawer
- **URL/Page:** `/checkout` or slide-over cart drawer open on top of the page.
- **What to show:** Clean 2-column checkout layout showing order summary, shipping address inputs, and payment method selector.
- **Caption:** *"Streamlined frictionless checkout process optimized for mobile and desktop."*

### 6. ⭐ Printable / Downloadable PDF Invoice
- **URL/Page:** `/invoice/[id]`
- **What to show:** The clean, branded industrial tax invoice with order details, breakdown table, and "Download PDF" button.
- **Caption:** *"Client-side automated PDF invoice generator for B2C & B2B clients."*

### 7. ⭐ Admin Analytics & Sales Dashboard
- **URL/Page:** `/admin`
- **What to show:** Metric cards (Total Revenue, Total Orders, Average Order Value), the interactive Recharts revenue graph, and recent orders table.
- **Caption:** *"Comprehensive administrative command center with real-time financial & order metrics."*

### 8. ⭐ Mobile Responsive Collage (iPhone Mockups)
- **What to show:** 3 mobile screen mockups side by side:
  1. Mobile Navigation & Drawer Cart
  2. Mobile Product Details Screen
  3. Mobile Order Tracking Screen (`/track`)
- **Caption:** *"100% mobile-first responsive architecture designed for on-the-go shoppers."*

---

## 💡 Engineering Challenges & Solutions

| Challenge | Technical Solution |
| :--- | :--- |
| **High Performance SSR with Complex State** | Implemented **TanStack Start** with `@tanstack/react-query` hydration to eliminate layout shifts and deliver immediate first contentful paint (FCP). |
| **Type-Safe Routing Across 40+ Pages** | Utilized **TanStack Router** file-based routing with strict route contracts, eliminating runtime 404s and search param type mismatches. |
| **Live Multi-Channel Order Tracking** | Built dual-parameter verification (Order ID + Customer Phone) with Supabase queries to offer secure, frictionless order tracking without forcing account creation. |
| **High Precision PDF Rendering** | Integrated `jsPDF` and CSS print media styles to guarantee pixel-perfect receipt and invoice outputs across all desktop and mobile browsers. |

---

## 💻 How to Run Locally

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd geyser

# 2. Install dependencies (using bun or npm)
bun install
# or: npm install

# 3. Setup Environment Variables
# Create a .env file and add your Supabase credentials:
# VITE_SUPABASE_URL=your_supabase_url
# VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# 4. Start Development Server
bun run dev
# or: npm run dev
```

---

## 👨‍💻 Author & Contact
- **Developer:** [Your Name / Portfolio Link]
- **GitHub:** [@yourusername](https://github.com/yourusername)
- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Email:** `your.email@example.com`
