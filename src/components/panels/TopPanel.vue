<template>
	<nav class="navbar navbar-expand-lg navbar-light">
		<div class="container">
			<a class="navbar-brand">Погода</a>
			<button class="navbar-toggler custom-toggler ml-auto" type="button" data-bs-toggle="collapse"
				data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon custom-icon"></span>
			</button>

			<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link">Главная</a>
					</li>
					<li class="nav-item">
						<a class="nav-link">Информация</a>
					</li>
					<li class="nav-item">
						<a class="nav-link">ссылки</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default{
	name: 'TopPanel'
}
</script>

<style scoped>
.navbar{
	background: none;
}
</style>