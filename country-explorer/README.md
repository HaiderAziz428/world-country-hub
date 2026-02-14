# 🌍 Country Explorer

A comprehensive web application for exploring detailed information about countries from around the world with real-time data from the **REST Countries API**.

## 📋 Table of Contents
- [Features](#features)
- [Project Information](#project-information)
- [Installation](#installation)
- [Usage](#usage)
- [API Data Available](#api-data-available)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)

---

## ✨ Features

### 1. **View All Countries**
- Display a beautiful grid of all 195+ countries with their flags
- Responsive design with smooth hover effects
- Countries are sorted alphabetically by name
- Click any flag to view detailed information

### 2. **Search Functionality**
- Real-time search by country name
- Partial search support (e.g., "United" finds both United States and United Kingdom)
- Shows all matching results in a dedicated search results section
- Search suggestions with result count

### 3. **Detailed Country Information**
Click on any country flag to view comprehensive details including:

#### Basic Information:
- 🏳️ Flag and Coat of Arms
- 📍 Official Name (both common and official)
- 🗺️ Region & Subregion
- 📏 Total Area (in km²)
- 👥 Population with density statistics

#### Identification:
- **CCA2**: 2-letter country code (ISO 3166-1 alpha-2)
- **CCA3**: 3-letter country code (ISO 3166-1 alpha-3)
- **CIOC**: International Olympic Committee code

#### Economic & Cultural:
- 💱 **Currencies**: Full currency names, codes, and symbols
- 🗣️ **Languages**: All official languages by language code
- ⏱️ **Timezones**: All timezones where the country operates
- 🚩 **Bordering Countries**: Adjacent countries sharing borders

#### Additional Insights:
- 🏛️ **Capital Cities**: Primary and secondary capitals
- 📊 **GINI Index**: Income inequality statistics
- 🚗 **Car Signs**: International vehicle identification code
- 🗓️ **Start of Week**: Cultural preference (Monday/Sunday)
- 🏢 **UN Membership**: Whether country is UN member
- 📮 **Postal Code Format**: Standard postal code pattern
- 🗺️ **Maps**: Direct links to OpenStreetMaps and Google Maps

### 4. **Responsive Design**
- Beautiful gradient background
- Mobile-friendly responsive layout
- Smooth animations and transitions
- Clean, modern UI with intuitive navigation
- Color-coded sections for easy information scanning

### 5. **Error Handling**
- Graceful error messages for failed searches
- User-friendly feedback when API calls fail
- Clear navigation back to all countries

---

## 📦 Project Information

| Property | Value |
|----------|-------|
| **Repository Name** | country-explorer |
| **Version** | 1.0.0 |
| **Description** | A comprehensive web application for exploring detailed information about countries from around the world with real-time data from the REST Countries API |
| **License** | ISC |
| **Node Type** | ES Module |

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

### Setup Steps

1. **Clone or extract the project**
   ```bash
   cd country-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 💻 Usage

### Home Page
- View all countries displayed as flag tiles in a grid
- Each flag shows the country name on hover
- Click any flag to view detailed information

### Searching
1. Enter a country name in the search box
2. Press Enter or click the 🔍 button
3. View matching countries in a results section
4. Click any result to view full details

### Viewing Details
- Scroll through comprehensive country data
- All information is organized in easy-to-read sections
- Click map links to view the country on OpenStreetMaps or Google Maps
- Use "Back to All Countries" button to return to the main view

---

## 📡 API Data Available

The application leverages the **REST Countries API v3.1** and displays the following data fields:

### Core Information
```javascript
{
  name: {
    common: String,        // Common name (e.g., "France")
    official: String       // Official name (e.g., "French Republic")
  },
  cca2: String,           // 2-letter code (e.g., "FR")
  cca3: String,           // 3-letter code (e.g., "FRA")
  cioc: String,           // Olympic code (e.g., "FRA")
  region: String,         // Major region (e.g., "Europe")
  subregion: String,      // Subregion (e.g., "Western Europe")
  capital: [String],      // Capital cities
  area: Number,           // Area in km²
  population: Number,     // Total population
  densityPopulation: Number // Population density per km²
}
```

### Geographic & Cultural
```javascript
{
  flags: {
    png: String,          // URL to PNG flag (3:2 aspect)
    svg: String,          // URL to SVG flag
    alt: String           // Alt text for accessibility
  },
  coatOfArms: {
    png: String,          // URL to PNG coat of arms
    svg: String           // URL to SVG coat of arms
  },
  timezones: [String],    // All timezones (e.g., ["UTC+01:00"])
  borders: [String],      // Bordering country codes
  maps: {
    openStreetMaps: String, // OpenStreetMaps URL
    googleMaps: String      // Google Maps URL
  }
}
```

### Economic & Languages
```javascript
{
  currencies: {
    [code]: {             // e.g., { EUR: {...} }
      name: String,       // Currency name
      symbol: String      // Currency symbol
    }
  },
  languages: {
    [code]: String        // e.g., { en: "English", fr: "French" }
  }
}
```

### Additional Fields
```javascript
{
  unMember: Boolean,      // UN membership status
  startOfWeek: String,    // "monday" or "sunday"
  postalCode: {
    format: String,       // Postal code format pattern
    regex: String         // Validation regex
  },
  gini: {                 // Income inequality index
    [year]: Number        // e.g., { 2021: 32.4 }
  },
  car: {
    signs: [String],      // International vehicle codes
    side: String          // "left" or "right"
  }
}
```

---

## 🏗️ Architecture

### Frontend (EJS Templating)
- **View Layer**: `views/index.ejs` - Renders all UI components
- **Styling**: Inline CSS with responsive grid layouts
- **Interaction**: JavaScript for dynamic search and navigation

### Backend (Express.js)
- **Framework**: Express v5.2.1
- **HTTP Client**: Axios for API calls
- **View Engine**: EJS template engine

### Data Source
- **API**: REST Countries API v3.1
- **Endpoints Used**:
  - `/v3.1/all` - Fetch all countries
  - `/v3.1/alpha/{code}` - Fetch specific country details

---

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | Latest | JavaScript runtime |
| **Express** | 5.2.1 | Web framework |
| **EJS** | 4.0.1 | Template engine |
| **Axios** | 1.13.5 | HTTP client |
| **Nodemon** | Latest | Development auto-reload |
| **CSS3** | Modern | Styling & animations |
| **JavaScript ES6+** | Modern | Client-side scripting |

---

## 📁 File Structure

```
country-explorer/
├── index.js                 # Main Express server
├── package.json            # Dependencies and metadata
├── README.md               # This file
└── views/
    └── index.ejs           # Main HTML template
```

### Key Files Explained

#### `index.js`
- Main application server
- Defines all API routes:
  - `GET /` - Home page with all countries
  - `POST /search` - Search functionality
  - `GET /country/:cca2` - Detailed country view
- Fetches data from REST Countries API
- Renders EJS templates with data

#### `views/index.ejs`
- Complete HTML/CSS/JavaScript template
- Responsive grid layouts
- Country flag display
- Detailed information sections
- Search interface
- Dynamic data binding with EJS syntax

#### `package.json`
- Project metadata
- NPM scripts for development
- Dependencies specification
- Module configuration

---

## 🔌 API Endpoints

### 1. **Home Page (Get All Countries)**
```
GET /
```
- Returns: HTML page with all countries displayed
- Data: Fetches from REST Countries API `/all` endpoint
- Features: Flag grid, alphabetically sorted

### 2. **Search Countries**
```
POST /search
Body: { country: "country_name" }
```
- Returns: HTML page with search results
- Filters: Case-insensitive partial name matching
- Features: Shows all matching countries

### 3. **View Country Details**
```
GET /country/:cca2
Parameter: cca2 = 2-letter country code (e.g., "US", "FR")
```
- Returns: HTML page with full country details
- Data: Fetches from REST Countries API `/alpha/{code}` endpoint
- Features: All available country information displayed

---

## 🎨 UI Components

### Search Box
- Text input for country search
- Emoji-styled search button
- Enter key support
- Full-width responsive design

### Flags Grid
- Responsive multi-column layout
- Smooth hover animations
- Displays flag and country name
- Click to view details

### Details Container
- Header with flag and basic info
- Multiple information sections:
  - Basic info grid
  - Currencies section
  - Languages section
  - Timezones section
  - Borders section
  - Additional info section
  - Maps links section
- Back button for navigation
- Color-coded sections for clarity

---

## 🚀 Future Enhancement Ideas

- [ ] Add filtering by region/subregion
- [ ] Compare multiple countries side-by-side
- [ ] Save favorite countries
- [ ] Display country statistics/charts
- [ ] Add country flag facts and trivia
- [ ] Implement pagination for large lists
- [ ] Add dark mode support
- [ ] Export country data as PDF/CSV
- [ ] Add international translations
- [ ] Display country images and attractions

---

## 📝 Notes

- All data is fetched real-time from REST Countries API
- No database or backend storage required
- Fully client-side compatible with responsive design
- Free API with no authentication needed
- Extensive error handling for network failures

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🤝 Contributing

This is a learning project. Feel free to fork and modify!

---

**Made with ❤️ for exploring our beautiful world 🌍**