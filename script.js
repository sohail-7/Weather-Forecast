// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const deg=" ℃";
const dist=" KMPH";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88e9dc751cmsh06bec33d6d5df6cp10166ejsn2726bfd0eb86',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{

cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response => response.json())
.then((response)=> {
	//cloud_pct.innerHTML=response.cloud_pct
	temp.innerHTML=response.temp.toString().concat(deg)
	// feels_like.innerHTML=response.feels_like
	humidity.innerHTML=response.humidity.toString().concat(" %")
	// min_temp.innerHTML=response.min_temp
	// max_temp.innerHTML=response.max_temp
	wind_speed.innerHTML=Math.floor(response.wind_speed*(18/5)).toString().concat(dist)
	// wind_degrees.innerHTML=response.wind_degrees
	//let date = new Date(unix*1000)
	// sunrise.innerHTML=new Date(response.sunrise*1000).toString().slice(16,24)
	// sunset.innerHTML=new Date(response.sunset*1000).toString().slice(16,24)

})
.catch(err => console.log(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value)
})




fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=virginia',options)
.then(response => response.json())
.then((response)=> {
	//cloud_pct1.innerHTML=response.cloud_pct
	temp1.innerHTML=response.temp
	feels_like1.innerHTML=response.feels_like
	humidity1.innerHTML=response.humidity
	min_temp1.innerHTML=response.min_temp
	max_temp1.innerHTML=response.max_temp
	wind_speed1.innerHTML=response.wind_speed*(18/5)
	// wind_degrees1.innerHTML=response.wind_degrees
	sunrise1.innerHTML=new Date(response.sunrise*1000).toString().slice(16,24)
	sunset1.innerHTML=new Date(response.sunset*1000).toString().slice(16,24)
})
.catch(err => console.log(err));




fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london',options)
.then(response => response.json())
.then((response)=> {
	// cloud_pct2.innerHTML=response.cloud_pct
	temp2.innerHTML=response.temp
	feels_like2.innerHTML=response.feels_like
	humidity2.innerHTML=response.humidity
	min_temp2.innerHTML=response.min_temp
	max_temp2.innerHTML=response.max_temp
	wind_speed2.innerHTML=response.wind_speed*(18/5)
	// wind_degrees2.innerHTML=response.wind_degrees
	sunrise2.innerHTML=new Date (response.sunrise * 1000).toString().slice(16,24)
	sunset2.innerHTML=new Date(response.sunset*1000).toString().slice(16,24)

})
.catch(err => console.log(err));


const options4 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88e9dc751cmsh06bec33d6d5df6cp10166ejsn2726bfd0eb86',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=hyderabad',options)
.then(response => response.json())
.then((response)=> {
	
	
	
	//cloud_pct1.innerHTML=response.cloud_pct
	temp3.innerHTML=response.temp
	feels_like3.innerHTML=response.feels_like
	humidity3.innerHTML=response.humidity
	min_temp3.innerHTML=response.min_temp
	max_temp3.innerHTML=response.max_temp
	wind_speed3.innerHTML=response.wind_speed*(18/5)
	// wind_degrees1.innerHTML=response.wind_degrees
	sunrise3.innerHTML=new Date(response.sunrise*1000).toString().slice(16,24)
	sunset3.innerHTML=new Date(response.sunset*1000).toString().slice(16,24)
})
.catch(err => console.log(err));
// if(max_temp3>35 ){

// 	document.getElementById("im1").src="/images/sun.jpg";
// }


