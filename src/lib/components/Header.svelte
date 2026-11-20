<script>
    // import { fade } from 'svelte/transition';
    // import nav from '#lib/nav.json';
    import logo from '#lib/assets/dtm-logo.svg';

    let open = $state(false);
    let expand = $state(false);
</script>

<header class="header">

    <!-- Logo -->

    <nav class="navbar" id="navbar-top">

		<div class="container py-2">

			<section class="row region region-top-header">

      			<a class="header-site-logo" href="/" title="Home" rel="home">
          			<img src={logo} alt="Home" class="img-fluid d-inline-block align-top">
        			<span class="ml-2 d-none d-md-inline"></span>
  				</a>

  			</section>

            <section class="row region region-secondary-menu">

    			<nav aria-labelledby="block-sites-menu" id="block-sites" class="block block-menu navigation menu--sites">
            
  					<h2 class="visually-hidden" id="block-sites-menu">Sites</h2>

                    <div class="clearfix nav">
                    	<a href="https://iom.int" class="nav-link nav-link-https--iomint">IOM Global</a>
                    	<a href="https://www.iom.int/global-data-institute" target="_blank" class="nav-link nav-link-https--wwwiomint-global-data-institute">GDI</a>
            		</div>
  					
  				</nav>
				
				<nav aria-labelledby="block-dtm-global-account-menu-menu" id="block-dtm-global-account-menu" class="block block-menu navigation menu--account">
            
  					<h2 class="visually-hidden" id="block-dtm-global-account-menu-menu">User account menu</h2>
  
              		<div class="clearfix nav">
                    	<a href="dtm.iom.int/user/login" class="nav-link nav-link--user-login" data-drupal-link-system-path="user/login">Log in</a>
                    	<a href="dtm.iom.int/contact" class="contact-menu-item nav-link nav-link--contact" data-drupal-link-system-path="contact">Contact</a>
            		</div>
				
				</nav>

			</section>
        </div>
    </nav>

    <!-- Navigation -->

    <nav class="navbar bg-primary">

        <!-- <div class="container py-2 nav-container">

            <button
                class="toggler"
                type="button"
                aria-controls="CollapsingNavbar"
                aria-expanded={open}
                aria-label="Toggle navigation"
                onclick={() => (open = !open)}
            >
                <span class="toggler-icon"></span>
            </button>
        
            <nav id="CollapsingNavbar" class="collapsible" class:open>
                <ul class="tbm-nav">
                    {#each nav as item}
                        <li onmouseenter={() => expand = true} onmouseleave={() => expand = false}>
                            {#if item.href}
                                <a href={item.href} onclick={() => (open = false)}>{item.label}</a>
                            {:else}
                                <button type="button">{item.label}</button>
                            {/if}
                            {#if item.children}
                                <div class="tbm-submenu" style="width: 300px;" transition:fade={{ duration: 200 }}>
                                    <ul class="submenu">
                                        {#each item.children as child}
                                            <li>
                                                <a href={child.href} onclick={() => (open = false)}>{child.label}</a>
                                            </li>
                                        {/each}
                                    </ul>
                                </div>
                            {/if}
                        </li>
                    {/each}
                </ul>
            </nav>

        </div> -->

    </nav>

</header>

<style>
    .navbar {
		position: relative;
		display: flex;
		align-items: center;
		padding: .5rem 0;
	}

    .container {
		width: 100%;
        max-width: 960px;
		padding: 0 .75rem;
		margin-right: auto; 
		margin-left: auto; 

        display: flex;
        align-items: center;
        justify-content: space-between;
	}

    .region-secondary-menu .block {
        display: inline-block;
        width: auto;
        padding: 0;
        text-transform: uppercase;
        margin-right: 1rem;

        & * {
            line-height: 2.5rem;
        }

        & a {
            font-size: .75rem;;
            color: #777;
            padding: 0;
            margin: 0;
            height: 18px;
            /* vertical-align: middle; */
            padding-left: 1.625rem;
            display: block;
            position: relative;

            &:first-child::before {
                display: none;
            }

            &::before {
                content: "";
                border: 1px solid #ccc;
                height: 10px;
                left: 11px;
                top: 15px;
                position: ABSOLUTE;
            }
        }

        & .contact-menu-item {
            padding: 1.25rem;
            line-height: 0;
            color: white;
            border-radius: 3px;
            background-color: var(--blue1);
            margin-left: 1.25rem;

            &::before {
                content: none;
                display: none;
            }
        }
    }

    .nav {
		display: flex;
		flex-wrap: wrap;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
	}

    .nav-container {
        position: relative;
    }

    .tbm-nav {
        display: flex;
        flex-direction: row;
        list-style: none;
        margin: 0;
        padding: 0;

        & > li a {
            padding: .9375rem .625rem !important;
            color: white !important;
            text-transform: uppercase !important;
            font-size: .9375rem;
            font-weight: bold;
        }
    }

    .tbm-submenu {
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, .2);
        border-bottom: 1px solid #ccc;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
        border-radius: 0;
        box-sizing: border-box;

        display: block;
        left: 0;
        position: absolute;
        top: 100%;
        width: 100%;
        z-index: 10; 
    }

    .toggler {
        display: none; /* hidden on desktop */
        background: none;
        border: 1px solid currentColor;
        padding: 0.4rem 0.6rem;
        cursor: pointer;
    }

    /* simple hamburger icon */
    .toggler-icon,
    .toggler-icon::before,
    .toggler-icon::after {
        display: block;
        width: 1.5rem;
        height: 2px;
        background: currentColor;
    }
    .toggler-icon {
        position: relative;
    }
    .toggler-icon::before,
    .toggler-icon::after {
        content: "";
        position: absolute;
    }
    .toggler-icon::before { top: -7px; }
    .toggler-icon::after  { top: 7px; }

    /* Desktop: normal horizontal menu */
    .collapsible ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    /* Mobile: collapsed by default */
    @media (max-width: 1200px) {
        .toggler {
            display: block;
        }
        .collapsible {
            display: none;
            width: 100%;
        }
        .collapsible.open {
            display: block;
        }
        .collapsible ul {
            flex-direction: column;
        }
    }
</style>