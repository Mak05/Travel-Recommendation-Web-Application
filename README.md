# Travel Recommendation Web Application (TravelBloom)

Welcome to **TravelBloom**, a dynamic web application built to help users discover top travel destinations across the globe, including iconic beaches, historic temples, and popular countries.

---

## 🌟 Features

- **Interactive Search:** Allows users to search for destinations by entering keywords like `beach`, `temple`, `country`, or specific country names (e.g., *Australia*, *Japan*, *Brazil*).
- **Dynamic Content Fetching:** Uses JavaScript's `fetch()` API to dynamically load travel recommendations from a local JSON dataset (`travel_recommendation_api.json`).
- **Responsive Navigation Bar:** Clean header with navigation links to **Home**, **About Us**, and **Contact Us** pages.
- **Clear Action:** A dedicated **Clear** button that resets the search input and clears displayed result cards immediately.
- **Responsive Design:** Modern layout styled with CSS Flexbox and CSS Grid to ensure an enjoyable experience across different screen sizes.

---

## 📂 Project Structure

```text
Travel-Recommendation-Web-Application/
├── index.html                    # Main Home page with search bar & hero layout
├── about.html                    # About Us page highlighting team & mission
├── contact.html                  # Contact page with feedback form
├── travel_recommendation.js      # Main JavaScript handling fetch & dynamic UI rendering
├── travel_recommendation.css     # CSS stylesheet for navigation, layouts, & result cards
└── travel_recommendation_api.json # JSON dataset containing destinations, images, & details
