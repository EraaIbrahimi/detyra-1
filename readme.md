# Assessment #1: Country Population Processor

## Goal

Fetch country data from a local JSON file, perform various transformations and calculations, and output the results to the console.

## JSON Data (Save as `data.json`)

```json
[
  {
    "name": "CountryA",
    "region": "Asia",
    "population": 120000000,
    "capital": "CapitalA"
  },
  {
    "name": "CountryB",
    "region": "Europe",
    "population": 65000000,
    "capital": "CapitalB"
  },
  {
    "name": "CountryC",
    "region": "Africa",
    "population": 95000000,
    "capital": "CapitalC"
  },
  {
    "name": "CountryD",
    "region": "Americas",
    "population": 350000000,
    "capital": "CapitalD"
  },
  {
    "name": "CountryE",
    "region": "Oceania",
    "population": 30000000,
    "capital": "CapitalE"
  }
]
```

## Instructions

### 1. Fetch the Data

Load the JSON file into your program.

### 2. Tasks

Perform the following operations:

- **Filter** out countries with a population greater than 50 million and log the resulting array.
- **Sort** all countries by population in descending order and log the sorted array.
- **Map** the data to create a new array of strings in the format:

  `"<CountryName> in <Region> has <Population> people."`

  Log this array.

- **Find** the country with the largest population and log its name.
- **Compute** the total population across all countries and log the sum.

### 3. Output

Use `console.log` to display results in a clear, structured manner.
