import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const API_URL = "https://restcountries.com/v3.1";

// GET all countries on initial load
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/all?fields=name,flags,cca2`);
    const countries = response.data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    
    res.render("index.ejs", { 
      countries: countries,
      selectedCountry: null, 
      error: null,
      searchResults: null
    });
  } catch (err) {
    res.render("index.ejs", { 
      countries: [],
      selectedCountry: null, 
      error: "Failed to load countries!",
      searchResults: null
    });
  }
});

// Search countries by name
app.post("/search", async (req, res) => {
  const countryName = req.body.country;

  try {
    const allResponse = await axios.get(`${API_URL}/all?fields=name,flags,cca2`);
    const allCountries = allResponse.data.sort((a, b) => a.name.common.localeCompare(b.name.common));

    const searchResults = allCountries.filter(country => 
      country.name.common.toLowerCase().includes(countryName.toLowerCase())
    );

    res.render("index.ejs", {
      countries: allCountries,
      selectedCountry: null,
      error: searchResults.length === 0 ? "No countries found!" : null,
      searchResults: searchResults.length > 0 ? searchResults : null
    });

  } catch (err) {
    res.render("index.ejs", {
      countries: [],
      selectedCountry: null,
      error: "Search failed! Please try again.",
      searchResults: null
    });
  }
});

// GET country details by country code
app.get("/country/:cca2", async (req, res) => {
  const cca2 = req.params.cca2.toUpperCase();

  try {
    const response = await axios.get(`${API_URL}/alpha/${cca2}`);
    const allResponse = await axios.get(`${API_URL}/all?fields=name,flags,cca2`);
    const allCountries = allResponse.data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    
    // API returns an array, so extract the first element
    const selectedCountry = Array.isArray(response.data) ? response.data[0] : response.data;
    
    res.render("index.ejs", {
      countries: allCountries,
      selectedCountry: selectedCountry,
      error: null,
      searchResults: null
    });

  } catch (err) {
    res.render("index.ejs", {
      countries: [],
      selectedCountry: null,
      error: "Country details not found!",
      searchResults: null
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
