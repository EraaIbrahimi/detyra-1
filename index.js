const filterCountries = (countries) => {
    const filteredCountries = countries.filter(
      (country) => country.population > 50_000_000
    );
    console.log('2. Array of filtered countries:', filteredCountries);
    //   console.log(filteredCountries);
  };
  /// result OK, no need to write two console.log statements you can do it all in one by separating them by commas
   
  const sortCountriesDESC = (countries) => {
    const sortCountriesDESC = countries.sort((a, b) => b - a);
    console.log('3. Array of sorted countries:');
    console.log(sortCountriesDESC);
  };
  // Result is bad, it said sort by population, you sorted the whole object
  // name should be all camel case and it's very unclear. you could do  sortCountriesDescOrder
   
  // typo
  const getCountryPopulation = (coutries) => {
    const countryPopulations = coutries.map(
      (country) =>
        `${country.name} in ${country.region} has ${country.population} people.`
    );
    console.log('4. Array with discriptive elements of countries:');
    console.log(countryPopulations);
  };
  // result OK, you should name it better because you are outputting a description about that country not its population.
  // BONUS: when the callback function in the map array method gets a bit too long you should wrap it in curly braces and explicitly return
   
  const findLargestPopulation = (countries) => {
    const populations = countries.map((country) => country.population);
    const country = countries.find(
      (country) => country.population === Math.max(...populations)
    );
    console.log('5. Country of the highest population:');
    console.log(country.name);
  };
  // result is OK, but you're using too many methods to get to the result when you could use only one the swiss army knife aka reduce
  // solution: // 4. Find the country with the largest population
  // const largestPopulationCountry = countryData.reduce((max, country) => {
  //   return country.population > max.population ? country : max;
  // });
   
  const getTotalPopulation = (countries) => {
    const populations = countries.map((country) => country.population);
    const populationsSum = populations.reduce(
      (sum, population) => (sum += population)
    );
    console.log(`Total sum of populations: `);
    console.log(populationsSum);
  };
  // Result ok, but you again could use only reduce no need for map here
   
  const fetchingCountryData = async () => {
    try {
      const result = await fetch('data.json');
      const data = await result.json();
      console.log('1. Main data fetched:');
      console.log(data);
   
      filterCountries(data);
      sortCountriesDESC(data);
      getCountryPopulation(data);
      findLargestPopulation(data);
      getTotalPopulation(data);
    } catch (error) {
      console.log(error);
    }
  };
  // the name should be fetchCountryData not fetching...
   
  fetchingCountryData();
   
  // there was no need for functions you could make just declare const values
  // like const data  = fetch(data)
  // and then const result1 and so on
  // we read the file from the top to the bottom so getting the main function at the top is better to know where the data comes from