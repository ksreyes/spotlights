<script>
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

<Header />

<!-- <div class="shell">
	<SideNav {links} />

	<div class="main">
		<Header />
		{@render children()}
	</div>
</div>

<style>
	@media (min-width: 900px) {
		.shell {
			display: grid;
			grid-template-columns: 14rem 1fr;
		}
	}

	.main {
		min-width: 0; /* stops wide content from forcing horizontal scroll */
	}
</style> -->

{@render children()}

<Footer />
