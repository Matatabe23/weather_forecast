import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import componentUI from '@/components/UI'
import componentPanels from '@/components/panels'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const app = createApp(App)

//Глобально в проекте регестрируем UI, Panel, Other компоненты
const components = [...componentUI, ...componentPanels];
components.forEach(component => {
	app.component(component.name, component);
});


app.use(store).use(router).mount('#app')
