<script>
	import PasswordGate from '#lib/PasswordGate.svelte';
	import '../app.css';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	// import SideNav from '#lib/components/SideNav.svelte';

	let { children } = $props();

	// const links = [
	// 	{ href: '/', label: 'Home' },
	// 	{ href: '/about', label: 'About' }
	// ];
</script>

<svelte:head>
</svelte:head>


<PasswordGate hash="27baba5c4ba85563daded439f3d3f2fd3b998a544296a4c66548f0bd87ed27f5">
	<Header />
	{@render children()}
	<Footer />
</PasswordGate>

