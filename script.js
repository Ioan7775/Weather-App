const api_key = 'cbef9d145c54fb066a8183fa085311aa';

function capitalizeFirstLetter(word) {
    if (!word) return word; 
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const api_url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${api_key}&units=metric`;

const getData = async () => {
    try {
        const input='London';
        const response = await axios.get(api_url);
        const data = response.data;
        document.getElementById('temp').innerHTML=data.main.temp + '°C';
        document.getElementById('city').innerHTML=capitalizeFirstLetter(input);
        document.getElementById('windspeedh1').innerHTML=data.wind.speed + 'km/h';
        document.getElementById('humidityh1').innerHTML=data.main.humidity + '%';
        console.log('data',data);

        switch(data.weather[0].main){
            case "Clouds":
                document.getElementById('icon').src='images/clouds.png';
                break;

            case "Clear":
                document.getElementById('icon').src='images/clear.png';
                break;

            case "Rain":
                document.getElementById('icon').src='images/rain.png';
                break;

            case "Drizzle":
                document.getElementById('icon').src='images/drizzle.png';
                break;

            case "Mist":
                document.getElementById('icon').src='images/mist.png';
                break;
        }           
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('weather-data').innerText = 'Error fetching data';
    }
};

getData(); 

document.getElementById('search').addEventListener('click',()=>{
    const input = document.getElementsByTagName('input')[0].value;
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}&units=metric`;

    const getData = async () => {
        try {
            const response = await axios.get(api_url);
            const data = response.data;
            document.getElementById('temp').innerHTML=data.main.temp + '°C';
            document.getElementById('city').innerHTML=capitalizeFirstLetter(input);
            document.getElementById('windspeedh1').innerHTML=data.wind.speed + 'km/h';
            document.getElementById('humidityh1').innerHTML=data.main.humidity + '%';

            switch(data.weather[0].main){
                case "Clouds":
                    document.getElementById('icon').src='images/clouds.png';
                    break;

                case "Clear":
                    document.getElementById('icon').src='images/clear.png';
                    break;

                case "Rain":
                    document.getElementById('icon').src='images/rain.png';
                    break;

                case "Drizzle":
                    document.getElementById('icon').src='images/drizzle.png';
                    break;

                case "Mist":
                    document.getElementById('icon').src='images/mist.png';
                    break;
            }           
        } catch (error) {
            console.error('Error fetching data:', error);
            document.getElementById('weather-data').innerText = 'Error fetching data';
        }
    };

    if(input !== '')
        getData(); 
})