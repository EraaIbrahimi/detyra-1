const filterCountries = (countries) => {
    const filteredCountries = countries.filter(country => country.population > 50000000);
    console.log('2. Array of filtered countries:')
    console.log(filteredCountries);
}

const sortCountriesDESC = (countries) => {
    const sortCountriesDESC = countries.sort((a, b) => b - a);
    console.log('3. Array of sorted countries:')
    console.log(sortCountriesDESC);
}

const getCountryPopulation = (coutries) => {
    const countryPopulations = coutries.map(country => 
        `${country.name} in ${country.region} has ${country.population} people.`)
    console.log('4. Array with discriptive elements of countries:')
    console.log(countryPopulations);    
}

const findLargestPopulation = (countries) => {
    const populations = countries.map(country => country.population);
    const country = countries.find((country) => country.population === Math.max(...populations));
    console.log('5. Country of the highest population:')
    console.log(country.name)
}

const getTotalPopulation = (countries) => {
    const populations = countries.map(country => country.population);
    const populationsSum = populations.reduce((sum, population) => sum += population);
    console.log(`Total sum of populations: `);
    console.log(populationsSum)
}


const fetchingCountryData = async () => {
    try{
        const result = await fetch('data.json');
        const data = await result.json();
        console.log('1. Main data fetched:')
        console.log(data);

        filterCountries(data);
        sortCountriesDESC(data);
        getCountryPopulation(data);
        findLargestPopulation(data);
        getTotalPopulation(data);
    }
    catch(error){
        console.log(error);
    }
}

fetchingCountryData();