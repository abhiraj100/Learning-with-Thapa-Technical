import readline from 'readline/promises';

const API_KEY = 'd9b8cd2f07a135964b06752e8db0bff0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const getWeather = async(city) => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`${city} City not found, Please check the city name.`);
        } 

        const weatherData = await response.json();
        console.log(weatherData)

        // below are the data's

        console.log('\nWeather Information:');
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp}°C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
        console.log(`Humidity: ${weatherData.main.humidity} %`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
    } catch (error) {
        console.error(error);
    }
}

const city = await rl.question('Enter your city name to get its weather: ');
await getWeather(city);
rl.close();




