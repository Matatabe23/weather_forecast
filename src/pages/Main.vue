<template>
	<div class="Main">
		<div v-if="Info.name" class="MainInfo">
			<i style='font-size: 20vh;' :class='getIcon()'></i>
			<h2>{{ Info.name }}</h2>
			<h3>Температура: {{ Info.main.temp }}</h3>
			<h3>Ощущается как: {{ Info.main.feels_like }}</h3>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			apiKey: '24f246ff57bd750d9aac880beb062cc9',
			city: 'Saint Petersburg',
			Info: {},
			imageUrl: ''
		};

	},
	created() {
		this.getWeatherData();
	},
	methods: {
		getWeatherData() {
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`)
				.then(response => response.json())
				.then(data => {
					this.Info = data
					console.log(data)
				})
		},
		getIcon() {
			const Weather = this.Info.weather[0].main;
			const Choice = {
				Thunderstorm: "bx bx-cloud-lightning",
				Drizzle: 'bx bx-cloud-drizzle',
				Rain: 'bx bx-cloud-rain',
				Snow: 'bx bx-cloud-snow',
				Mist: 'bx bx-water',
				Smoke: 'bx bx-wind',
				Haze: 'bx bx-wind',
				Dust: 'bx bx-wind',
				Fog: 'bx bx-wind',
				Sand: 'bx bx-wind',
				Ash: 'bx bx-wind',
				Squall: 'bx bx-wind',
				Tornado: 'bx bx-wind',
				Clear: 'bx bx-sun',
				Clouds: 'bx bx-cloud',
			};
			if (Choice[Weather]) return Choice[Weather];
		},
	},
};
</script>

<style scoped>
.Main {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-image: url("../assets/Main/BG/Rain.jpg");
}

.MainInfo {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0%;
	margin: 5%;
	height: 80%;
	width: 80%;
	border-radius: 20px;
	background-color: hsl(0, 0%, 0%, 0.4);
}
</style>
