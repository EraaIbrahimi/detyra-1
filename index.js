const fetchingCountryData = async () => {
    try{
        const result = await fetch('data.json');
        const data = await result.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

fetchingCountryData();