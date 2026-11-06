<script>
    import { page } from '$app/state';
    import logo from '#lib/assets/dtm-logo.svg';

    const links = [
		{ href: 'https://dtm.iom.int/global-overview-of-migration-routes-portal', label: 'Global Overview of Migration Routes' }
		// { href: '/about', label: 'About' }
	];
</script>

<header>
	<a class="site-name" href="https://dtm.iom.int/"><img src={logo} alt="Home" class="logo"></a>

	<nav>
		{#each links as link}
			<a
				href={link.href}
				aria-current={page.url.pathname === link.href ? 'page' : undefined}
			>
				{link.label}
			</a>
		{/each}
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		border-bottom: 3px solid var(--blue1);
	}

    .logo {
        width: min(60vw, 295px);
        height: auto;
    }

	.site-name {
		font-weight: 700;
		font-size: 1.25rem;
		text-decoration: none;
		color: inherit;
	}

	nav {
		display: flex;
		gap: 1.5rem;
	}

	nav a {
		text-decoration: none;
        text-transform: uppercase;
        font-size: .85rem;
		color: var(--gray2);
	}

	nav a[aria-current='page'] {
		font-weight: 700;
		border-bottom: 2px solid #e3120b;
	}
</style>