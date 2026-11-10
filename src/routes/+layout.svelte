<script>
	import PasswordGate from '#lib/PasswordGate.svelte';
	import '../app.css';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let { children } = $props();

</script>

<svelte:head>
</svelte:head>

<PasswordGate hash="27baba5c4ba85563daded439f3d3f2fd3b998a544296a4c66548f0bd87ed27f5">
	<Header />
	{@render children()}
	<Footer />
</PasswordGate>

