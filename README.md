**Project Setup & Installation**
Prerequisites:

- Node.js (v18.x or higher)
  
- npm or yarn 

***1. Clone the repository:***:

    - git clone https://github.com/ESLAM-MK/Bundle_Builder.git
    
    - cd Bundle_Builder
    
 ***2. Install dependencies***:
 
   - npm install

***3. Start the Server (json server)***:

     - npm run server
     
***4. Start the Development Server***:

     - npm run dev
       
**Smart Home Security Bundle Builder**

A responsive, interactive, two-column Bundle Builder Prototype built with React, Redux Toolkit, and TanStack Query. The application allows users to customize a multi-step security system package, switch between product variants, track live pricing, and save their custom system state.

Key Features
Two-Column Responsive Layout:

Left Column: Accordion-based multi-step selector (Cameras, Plan, Sensors, Extra Protection) with step toggle, selected count tracking, and step navigation.

Right Column: Live Review Panel dynamically updating itemized breakdown, discounts, totals, and monthly installment estimates.

Variant-Level State Management:

Independent quantity controls for each product variant (e.g., product colors).

Unique line-item rendering in the Review Panel for each active product variant.

Real-time Price Calculation: Dynamic pricing engine computing item subtotals, compare-at prices, overall bundle discounts, and free shipping triggers.

State Persistence: Local storage persistence for saving and restoring configured security systems via the "Save my system for later" flow.

Asynchronous Data Handling: Data fetching and caching layer integrated using TanStack Query.

**Tech Stack & Architecture**
Frontend Framework: React 18+ (Functional Components, Hooks)

State Management: Redux Toolkit (@reduxjs/toolkit, react-redux)

Server State / Data Fetching: TanStack Query (@tanstack/react-query)

Styling & Icons: Tailwind CSS

Utilities: uuid (unique key generation)

**Architectural Decisions & Trade-offs**
***1. Variant & Product Keying in Redux***
Decision: Products with variants track quantities by variant.id rather than parent product.id.

Rationale: This guarantees that selecting 2 White cameras and 1 Black camera tracks two separate state entries (selectors) and renders as distinct line items in the review panel without state collision.

***2. Category Tracking***
Decision: Category selections (state.categories) dynamically monitor selected products across all steps to display selection counters in accordion headers.

Rationale: Kept synchronized inside updateQuantity to prevent secondary UI passes or unnecessary recalculations during re-renders.

***3. LocalStorage Persistence Strategy***
Decision: Initial state hydration executes synchronously via getInitialState() reading from localStorage.getItem("my_system"), while state commits are explicitly user-triggered via saveSystem.

Rationale: Prevents intermediate draft updates from polluting saved user preferences while avoiding performance bottlenecks associated with writing state on every single quantity increment/decrement.

Components Breakdown Component Responsibility 
-StepListFetches : step/product data using useQuery and renders accordion steps.
-AccordionStep : Handles step toggling, next-step navigation, and product card layouts.
-ProductCard: Displays product details, variant selectors, and quantity incrementors.
-ReviewPanel: Groups selected items by category, renders total prices, savings, and triggers system saving.
-ReviewItemSingle item entry in the review side panel with inline quantity controls.

***4. Performance Optimizations***
Memoization: Components like AccordionStep use React.memo to prevent unnecessary component re-renders when parent steps update.

Derived Calculations: Calculations inside ReviewPanel utilize useMemo for grouping categories dynamically based on selectors.

