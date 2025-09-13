# EQP+MART Guest/Public Pages Documentation

## Overview
This document provides a comprehensive list and description of all guest/public pages accessible without login credentials in the EQP+MART platform. These pages are designed to provide information, enable browsing, and facilitate lead generation.

## Table of Contents
- [Main Public Pages](#main-public-pages)
- [Legal & Information Pages](#legal--information-pages)
- [Authentication Pages](#authentication-pages)
- [User Manual Pages](#user-manual-pages)
- [Equipment & Categories](#equipment--categories)
- [Marketplace & Browsing](#marketplace--browsing)
- [Services & Business](#services--business)
- [Network & Community](#network--community)
- [Business Proposals & Lead Generation](#business-proposals--lead-generation)
- [Service Provider Registration](#service-provider-registration)
- [Network Registration](#network-registration)
- [Storefront Browsing](#storefront-browsing)
- [Error & Utility Pages](#error--utility-pages)

---

## Main Public Pages

### `/` - Home Page
**Component:** `Index.tsx`
**Purpose:** Main landing page showcasing platform features, statistics, and value propositions
**Key Sections:**
- Hero section with main CTA
- Who we serve overview
- Buyer advantages
- Vendor partnerships
- Market opportunities
- Key features
- Statistics
- Feature highlights

### `/contact-us` - Contact Us
**Component:** `ContactUs.tsx`
**Purpose:** Contact information, forms, and office locations
**Features:**
- Contact methods (phone, email, live chat)
- Contact form
- Office locations worldwide
- Business hours

### `/sitemap` - Site Map
**Component:** `Sitemap.tsx`
**Purpose:** Comprehensive navigation guide with all platform pages
**Features:**
- Categorized page listings
- Platform statistics
- Quick access to all sections

---

## Legal & Information Pages

### `/terms-of-service` - Terms of Service
**Component:** `TermsOfService.tsx`
**Purpose:** Legal terms and conditions for platform usage
**Content:** Beta terms, user agreements, marketplace rules, liability

### `/privacy-policy` - Privacy Policy
**Component:** `PrivacyPolicy.tsx`
**Purpose:** Data privacy and protection policies
**Content:** Data collection, usage, sharing, security, user rights

---

## Authentication Pages

### `/login` - User Login
**Component:** `LoginPage.tsx`
**Purpose:** User authentication entry point
**Features:** Login form, social authentication options

### `/register` - User Registration
**Component:** `RegisterPage.tsx`
**Purpose:** New user account creation
**Features:** Registration form, account setup

---

## User Manual Pages

### `/user-manuals` - User Manuals Index
**Component:** `UserManualsIndex.tsx`
**Purpose:** Central hub for all user documentation
**Manuals Available:**
- Admin Manual (`/user-manuals/admin`)
- Buyer Manual (`/user-manuals/buyer`)
- Contractor Manual (`/user-manuals/contractor`)
- Expert Manual (`/user-manuals/expert`)
- Financier Manual (`/user-manuals/financier`)
- Insurance Provider Manual (`/user-manuals/insurance-provider`)
- Service Provider Manual (`/user-manuals/service-provider`)
- Supplier Manual (`/user-manuals/supplier`)

---

## Equipment & Categories

### `/categories` - Equipment Categories
**Component:** `CategoriesPage.tsx`
**Purpose:** Browse all equipment categories and types

### Equipment Category Pages
- `/categories/excavators` - Excavators
- `/categories/bulldozers` - Bulldozers
- `/categories/cranes` - Cranes
- `/categories/loaders` - Loaders
- `/categories/trucks` - Trucks
- `/categories/concrete-mixers` - Concrete Mixers

### `/equipments-finder` - Equipment Finder
**Component:** `EquipmentsFinderPage.tsx`
**Purpose:** Search and filter equipment across the platform

---

## Marketplace & Browsing

### `/marketplace` - Main Marketplace
**Component:** `MarketplacePage.tsx`
**Purpose:** Browse equipment listings, compare options

### Equipment Actions (Public Browsing)
- `/equipment-details/:id` - Equipment Details
- `/equipment-profile/:id` - Equipment Profile
- `/buy-equipment/:id` - Buy Equipment Information
- `/book-equipment/:id` - Book Equipment Information
- `/contact-seller/:id` - Contact Seller Form

---

## Services & Business

### `/services` - Services Marketplace
**Component:** `Services.tsx`
**Purpose:** Browse service providers and offerings

### `/find-service-providers` - Find Service Providers
**Component:** `FindServiceProviders.tsx`
**Purpose:** Search and discover service providers

### `/post-service-request` - Post Service Request
**Component:** `PostServiceRequest.tsx`
**Purpose:** Submit service requests (lead generation)

---

## Network & Community

### `/explore-network` - Explore Network
**Purpose:** Discover network opportunities and connections

### `/experts-network` - Experts Network
**Purpose:** Browse expert profiles and capabilities

### `/buyer-network` - Buyer Network
**Purpose:** Explore buyer network opportunities

### `/supplier-network` - Supplier Network
**Purpose:** Browse supplier profiles and offerings

### `/find-experts` - Find Experts
**Purpose:** Search for industry experts

---

## Business Proposals & Lead Generation

### `/investor-proposal` - Investor Proposal
**Component:** `InvestorProposal.tsx`
**Purpose:** Investment opportunities and business model presentation
**Sections:**
- Market opportunity
- Business model
- Investment tiers
- Team information
- Investment form

### `/partnership-opportunity` - Partnership Opportunity
**Component:** `PartnershipOpportunity.tsx`
**Purpose:** Strategic partnership opportunities
**Sections:**
- Partnership tiers
- Ecosystem opportunities
- Community benefits
- Success stories
- Partnership application

### `/construction-contractor-proposal` - Construction Contractor Proposal
**Component:** `ConstructionContractorProposal.tsx`
**Purpose:** Targeted proposal for construction contractors
**Features:**
- Project lead generation
- Equipment access
- Supplier networks
- Partnership tiers

### `/equipment-financier-proposal` - Equipment Financier Proposal
**Component:** `EquipmentFinancierProposal.tsx`
**Purpose:** Targeted proposal for equipment financiers
**Features:**
- Market opportunities
- Partnership benefits
- Lead generation tools

---

## Service Provider Registration

### `/join-as-service-provider` - Join as Service Provider
**Component:** `JoinAsServiceProvider.tsx`
**Purpose:** Service provider onboarding and registration

### `/register-as-provider` - Register as Provider
**Component:** `RegisterAsProvider.tsx`
**Purpose:** General provider registration

### `/become-supplier` - Become Supplier
**Purpose:** Supplier registration and onboarding

### `/join-as-expert` - Join as Expert
**Purpose:** Expert network registration

---

## Network Registration

### `/join-buyer-network` - Join Buyer Network
**Purpose:** Buyer network registration

### `/contractor-portal` - Contractor Portal
**Purpose:** Contractor registration and information

---

## Storefront Browsing

### `/storefronts` - Storefronts Directory
**Component:** `StorefrontPage.tsx`
**Purpose:** Browse all business storefronts
**Includes:**
- Supplier storefronts
- Service provider profiles
- Expert showcases
- Contractor profiles
- Financier profiles
- Insurance provider profiles

---

## Error & Utility Pages

### `/404` - Not Found
**Component:** `NotFound.tsx`
**Purpose:** Handle invalid routes and provide navigation back to home

### Demo & Trial Pages
- `/request-demo` - Request Demo
- `/start-free-trial` - Start Free Trial

---

## Marketing & Lead Generation Strategy

The guest pages follow a strategic approach:

### 1. **Information Architecture**
- Clear navigation from general to specific
- Multiple entry points for different user types
- Comprehensive browsing capabilities

### 2. **Lead Generation Flow**
- Proposal pages target specific business segments
- Registration pages for different user types
- Contact forms and demo requests strategically placed

### 3. **SEO Optimization**
- Category pages for equipment types
- Manual pages for comprehensive content
- Storefront browsing for business discovery

### 4. **User Journey Support**
- Progressive disclosure from browsing to registration
- Multiple touchpoints for engagement
- Clear value propositions on each page

---

## Access Patterns

### Public Access (No Authentication Required)
- All browsing and information pages
- Registration and onboarding pages
- Contact and lead generation forms
- Marketing and proposal pages

### Private Access (Authentication Required)
- Personal dashboards
- Transaction management
- Admin functions
- Personal settings and preferences

---

## Implementation Notes

### Authentication Strategy
- Guest pages use no authentication guards
- Private pages implement authentication checks
- Smooth transition from guest to authenticated experience

### Performance Considerations
- Guest pages optimized for fast loading
- SEO-friendly routing structure
- Responsive design for all device types

### Content Management
- Static content with dynamic data integration
- Modular component architecture
- Consistent design system implementation

---

*Last Updated: [Current Date]*
*Total Guest Pages: 50+*
*Documentation maintained for EQP+MART platform*