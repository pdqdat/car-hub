export async function fetchCars() {
    const headers = {
        "X-RapidAPI-Key": "a0511a10bcmsh74c3933e1ddd12ep1cdd13jsne299a6c24e26",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const response = await fetch(
        "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
        { headers: headers }
    );

    const result = await response.json();

    return result;
}
