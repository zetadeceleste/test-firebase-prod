import App from './App.svelte';
import './firebase';

const app = new App({
	target: document.body,
	props: {
		name: 'soy Celeste y estoy probando variables de entorno en distintos ambientes, yay'
	}
});

export default app;