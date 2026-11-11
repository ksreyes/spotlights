<script>
    import { page } from '$app/state';
    import logo from '#lib/assets/dtm-logo.svg';

    const links = [
		{ href: 'https://dtm.iom.int/global-overview-of-migration-routes-portal', label: 'Global Overview of Migration Routes' }
		// { href: '/about', label: 'About' }
	];
</script>

<!-- <header>
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
</header> -->







<header id="header" class="header" aria-label="Site header">

	<nav class="navbar navbar-dark bg-transparent" id="navbar-top">

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
  					
					<ul class="clearfix nav" data-component-id="bootstrap_barrio:menu">
                    	<li class="nav-item">
                			<a href="https://iom.int" class="nav-link nav-link-https--iomint">IOM Global</a>
              			</li>
                		<li class="nav-item">
                			<a href="https://www.iom.int/global-data-institute" target="_blank" class="nav-link nav-link-https--wwwiomint-global-data-institute">GDI</a>
              			</li>
        			</ul>
  
  				</nav>
				
				<nav aria-labelledby="block-dtm-global-account-menu-menu" id="block-dtm-global-account-menu" class="block block-menu navigation menu--account">
            
  					<h2 class="visually-hidden" id="block-dtm-global-account-menu-menu">User account menu</h2>
  
              		<div class="clearfix nav">
                    	<a href="/user/login" class="nav-link nav-link--user-login" data-drupal-link-system-path="user/login">Log in</a>
                    	<a href="/contact" class="contact-menu-item nav-link nav-link--contact" data-drupal-link-system-path="contact">Contact</a>
            		</div>
				
				</nav>

			</section>
        </div>
    </nav>

    <div style="height: auto;"></div><nav class="navbar navbar-dark bg-primary navbar-expand-lg" id="navbar-main" data-toggle="affix" data-once="affixed">

        <div class="container nav-container">
                      
            <div class="nav-primary-menu">
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#CollapsingNavbar" aria-controls="CollapsingNavbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

              	<div class="header-search-button-wrapper d-block d-md-block d-lg-none d-xl-none d-xxl-none">
                	<a href="/search" class="header-search-button" data-once="header-search-button">
                  		<svg class="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path></svg><!-- <i class="fa fa-search" aria-hidden="true"></i> Font Awesome fontawesome.com -->
                	</a>
              	</div>
              	
				<div class="collapse navbar-collapse justify-content-end" id="CollapsingNavbar">

                    <div class="">
                  		<div class="row">
                    		<div class="col-lg-12 col-md-12">
								<div id="block-mainmenu" class="block block-tb-megamenu block-tb-megamenu-menu-blockmain">
      								<div class="content">
      									<nav class="tbm tbm-main tbm-arrows tbm--mobile" id="9bb1262e-1282-448a-9d97-d460145e3f31" data-breakpoint="1200" aria-label="main navigation" data-initialized="true">
      										<button class="tbm-button" type="button" aria-label="Toggle Menu Button">
												<span class="tbm-button-container">
													<span></span>
													<span></span>
													<span></span>
													<span></span>
												</span>
    										</button>
    										<div class="tbm-collapse  always-show">
												<ul class="tbm-nav level-0 items-7">
													<li class="tbm-item level-1 tbm-item--has-dropdown" aria-level="1">
														<div class="tbm-link-container">
															<a href="/about" class="tbm-link level-1 tbm-toggle" aria-expanded="false">
															About
															</a>
															<button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
														</div>
														<div class="tbm-submenu tbm-item-child tbm-has-width" style="width: 300px;">
															<div class="tbm-row">
																<div class="tbm-column span12">
																	<div class="tbm-column-inner">

														<ul class="tbm-subnav level-1 items-9">
													<li class="tbm-item level-2" aria-level="2">

													<div class="tbm-link-container">
														<a href="/about" class="tbm-link level-2">
															About DTM
														</a>
													</div>
												
											</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/dtm-data-kit" class="tbm-link level-2">
                DTM Data Kit
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/updates" class="tbm-link level-2">
                Updates
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/about/methodological-framework" class="tbm-link level-2">
                Methodological Framework
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/about/dtm-standards" class="tbm-link level-2">
                DTM Standards
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/about/infosheets" class="tbm-link level-2">
                Infosheets
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/about/trainings" class="tbm-link level-2">
                Trainings
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/about/vacancies" class="tbm-link level-2">
                Vacancies
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="https://www.iom.int/global-data-institute" class="tbm-link level-2" target="_blank">
                Global Data Institute 
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

          <li class="tbm-item level-1 tbm-item--has-dropdown" aria-level="1">
      <div class="tbm-link-container">
            <span class="tbm-link level-1 no-link tbm-toggle" tabindex="0" aria-expanded="false">
                Countries
          </span>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="dtm-responses-mega-menu-wrapper tbm-submenu tbm-item-child tbm-has-width" style="width: 1000px;">
      <div class="tbm-row">
      <div class="tbm-column span4 dtm-responses-mega-menu">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-1 items-6">
        <li class="tbm-item level-2 tbm-item--has-flyout" aria-level="2">
      <div class="tbm-link-container">
            <a href="/regions/asia-and-pacific" class="tbm-link level-2 tbm-toggle" aria-expanded="false">
                Asia and the Pacific
          </a>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child tbm-has-width" style="width: 657px;">
      <div class="tbm-row">
      <div class="tbm-column span4">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-7">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/afghanistan" class="tbm-link level-3">
                Afghanistan
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/bangladesh" class="tbm-link level-3">
                Bangladesh
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/cambodia" class="tbm-link level-3">
                Cambodia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/federated-states-micronesia" class="tbm-link level-3">
                Federated States of Micronesia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/fiji" class="tbm-link level-3">
                Fiji
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/indonesia" class="tbm-link level-3">
                Indonesia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/iran-islamic-republic" class="tbm-link level-3">
                Iran (Islamic Republic of)
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

      <div class="tbm-column span4">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-7">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/laos" class="tbm-link level-3">
                Laos
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/marshall-islands" class="tbm-link level-3">
                Marshall Islands
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/mongolia" class="tbm-link level-3">
                Mongolia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/myanmar" class="tbm-link level-3">
                Myanmar
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/nepal" class="tbm-link level-3">
                Nepal
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/pakistan" class="tbm-link level-3">
                Pakistan
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/papua-new-guinea" class="tbm-link level-3">
                Papua New Guinea
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

      <div class="tbm-column span4">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-6">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/philippines" class="tbm-link level-3">
                Philippines
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/solomon-islands" class="tbm-link level-3">
                Solomon Islands
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/sri-lanka" class="tbm-link level-3">
                Sri Lanka
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/thailand" class="tbm-link level-3">
                Thailand
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/tonga" class="tbm-link level-3">
                Tonga
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/vanuatu" class="tbm-link level-3">
                Vanuatu
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

        <li class="tbm-item level-2 tbm-item--has-flyout" aria-level="2">
      <div class="tbm-link-container">
            <a href="/regions/central-america-north-america-and-caribbean" class="tbm-link level-2 tbm-toggle" aria-expanded="false">
                Latin America and the Caribbean
          </a>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child tbm-has-width" style="width: 657px;">
      <div class="tbm-row">
      <div class="tbm-column span4">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-10">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/antigua-and-barbuda" class="tbm-link level-3">
                Antigua and Barbuda
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/argentina" class="tbm-link level-3">
                Argentina
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/aruba" class="tbm-link level-3">
                Aruba
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/bahamas" class="tbm-link level-3">
                Bahamas
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/barbados" class="tbm-link level-3">
                Barbados
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/bolivia" class="tbm-link level-3">
                Bolivia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/brazil" class="tbm-link level-3">
                Brazil
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/chile" class="tbm-link level-3">
                Chile
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/colombia" class="tbm-link level-3">
                Colombia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/costa-rica" class="tbm-link level-3">
                Costa Rica
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

      <div class="tbm-column span4">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-12">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/cura%C3%A7ao" class="tbm-link level-3">
                Curaçao
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/dominica" class="tbm-link level-3">
                Dominica
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/dominican-republic" class="tbm-link level-3">
                Dominican Republic
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/ecuador" class="tbm-link level-3">
                Ecuador
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/el-salvador" class="tbm-link level-3">
                El Salvador 
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/grenada" class="tbm-link level-3">
                Grenada
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/guatemala" class="tbm-link level-3">
                Guatemala 
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/guyana" class="tbm-link level-3">
                Guyana
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/haiti" class="tbm-link level-3">
                Haiti
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/honduras" class="tbm-link level-3">
                Honduras
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/jamaica" class="tbm-link level-3">
                Jamaica
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/mexico" class="tbm-link level-3">
                Mexico
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

      <div class="tbm-column span4">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-10">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/nicaragua" class="tbm-link level-3">
                Nicaragua
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/panama" class="tbm-link level-3">
                Panama
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/paraguay" class="tbm-link level-3">
                Paraguay
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/peru" class="tbm-link level-3">
                Peru
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/saint-vincent-and-grenadines" class="tbm-link level-3">
                Saint Vincent and the Grenadines
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/sint-maarten" class="tbm-link level-3">
                Sint Maarten
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/surinam" class="tbm-link level-3">
                Surinam
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/trinidad-tobago" class="tbm-link level-3">
                Trinidad &amp; Tobago
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/uruguay" class="tbm-link level-3">
                Uruguay
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/venezuela" class="tbm-link level-3">
                Venezuela
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

        <li class="tbm-item level-2 tbm-item--has-flyout" aria-level="2">
      <div class="tbm-link-container">
            <a href="/regions/east-and-horn-africa" class="tbm-link level-2 tbm-toggle" aria-expanded="false">
                East, Horn and Southern Africa
          </a>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child tbm-has-width" style="width: 657px;">
      <div class="tbm-row">
      <div class="tbm-column span6">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-9">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/burundi" class="tbm-link level-3">
                Burundi
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/comoros" class="tbm-link level-3">
                Comoros
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/democratic-republic-congo" class="tbm-link level-3">
                Democratic Republic of the Congo
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/djibouti" class="tbm-link level-3">
                Djibouti
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/ethiopia" class="tbm-link level-3">
                Ethiopia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/kenya" class="tbm-link level-3">
                Kenya
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/lesotho" class="tbm-link level-3">
                Lesotho
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/madagascar" class="tbm-link level-3">
                Madagascar
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/malawi" class="tbm-link level-3">
                Malawi
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

      <div class="tbm-column span6">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-9">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/mozambique" class="tbm-link level-3">
                Mozambique
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/namibia" class="tbm-link level-3">
                Namibia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/somalia" class="tbm-link level-3">
                Somalia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/south-africa" class="tbm-link level-3">
                South Africa
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/south-sudan" class="tbm-link level-3">
                South Sudan
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/uganda" class="tbm-link level-3">
                Uganda
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/united-republic-tanzania" class="tbm-link level-3">
                United Republic of Tanzania
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/zambia" class="tbm-link level-3">
                Zambia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/zimbabwe" class="tbm-link level-3">
                Zimbabwe
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

        <li class="tbm-item level-2 tbm-item--has-flyout" aria-level="2">
      <div class="tbm-link-container">
            <a href="/regions/europe-and-central-asia" class="tbm-link level-2 tbm-toggle" aria-expanded="false">
                Europe and Central Asia
          </a>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child tbm-has-width" style="width: 657px;">
      <div class="tbm-row">
      <div class="tbm-column span4">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-11">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/albania" class="tbm-link level-3">
                Albania
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/armenia" class="tbm-link level-3">
                Armenia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/austria" class="tbm-link level-3">
                Austria
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/belarus" class="tbm-link level-3">
                Belarus
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/belgium" class="tbm-link level-3">
                Belgium
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/bosnia-herzegovina" class="tbm-link level-3">
                Bosnia and Herzegovina
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/bulgaria" class="tbm-link level-3">
                Bulgaria
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/croatia" class="tbm-link level-3">
                Croatia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/cyprus" class="tbm-link level-3">
                Cyprus
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/czechia" class="tbm-link level-3">
                Czechia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/estonia" class="tbm-link level-3">
                Estonia
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

      <div class="tbm-column span4">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-14">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/france" class="tbm-link level-3">
                France
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/germany" class="tbm-link level-3">
                Germany
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/greece" class="tbm-link level-3">
                Greece
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/hungary" class="tbm-link level-3">
                Hungary
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/italy" class="tbm-link level-3">
                Italy
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/kazakhstan" class="tbm-link level-3">
                Kazakhstan
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/kosovo-1244" class="tbm-link level-3">
                Kosovo 1244
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/kyrgyzstan" class="tbm-link level-3">
                Kyrgyzstan
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/latvia" class="tbm-link level-3">
                Latvia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/lithuania" class="tbm-link level-3">
                Lithuania
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/malta" class="tbm-link level-3">
                Malta
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/montenegro" class="tbm-link level-3">
                Montenegro
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/netherlands" class="tbm-link level-3">
                Netherlands
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/north-macedonia" class="tbm-link level-3">
                North Macedonia
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

      <div class="tbm-column span4">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-12">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/poland" class="tbm-link level-3">
                Poland
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/republic-of-moldova" class="tbm-link level-3">
                Republic of Moldova
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/republic-of-t%C3%BCrkiye" class="tbm-link level-3">
                Republic of Türkiye 
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/romania" class="tbm-link level-3">
                Romania
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/serbia" class="tbm-link level-3">
                Serbia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/slovakia" class="tbm-link level-3">
                Slovakia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/slovenia" class="tbm-link level-3">
                Slovenia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/spain" class="tbm-link level-3">
                Spain
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/sweden" class="tbm-link level-3">
                Sweden
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/tajikistan" class="tbm-link level-3">
                Tajikistan
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/ukraine" class="tbm-link level-3">
                Ukraine
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="https://dtm.iom.int/uzbekistan" class="tbm-link level-3">
                Uzbekistan
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

        <li class="tbm-item level-2 tbm-item--has-flyout" aria-level="2">
      <div class="tbm-link-container">
            <a href="/regions/middle-east-and-north-africa" class="tbm-link level-2 tbm-toggle" aria-expanded="false">
                Middle East and North Africa
          </a>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child tbm-has-width" style="width: 657px;">
      <div class="tbm-row">
      <div class="tbm-column span6">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-7">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/iraq" class="tbm-link level-3">
                Iraq
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/lebanon" class="tbm-link level-3">
                Lebanon
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/libya" class="tbm-link level-3">
                Libya
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/sudan" class="tbm-link level-3">
                Sudan
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/syria" class="tbm-link level-3">
                Syrian Arab Republic
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/tunisia" class="tbm-link level-3">
                Tunisia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/yemen" class="tbm-link level-3">
                Yemen
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

        <li class="tbm-item level-2 tbm-item--has-flyout" aria-level="2">
      <div class="tbm-link-container">
            <a href="/regions/west-and-central-africa" class="tbm-link level-2 tbm-toggle" aria-expanded="false">
                West and Central Africa
          </a>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child tbm-has-width" style="width: 657px;">
      <div class="tbm-row">
      <div class="tbm-column span6">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-9">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/benin" class="tbm-link level-3">
                Benin
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/burkina-faso" class="tbm-link level-3">
                Burkina Faso
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/cameroon" class="tbm-link level-3">
                Cameroon
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/central-african-republic" class="tbm-link level-3">
                Central African Republic
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/chad" class="tbm-link level-3">
                Chad
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/c%C3%B4te-d%E2%80%99ivoire" class="tbm-link level-3">
                Côte d’Ivoire
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/ghana" class="tbm-link level-3">
                Ghana
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/guinea" class="tbm-link level-3">
                Guinea
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/guinea-bissau" class="tbm-link level-3">
                Guinea-Bissau
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

      <div class="tbm-column span6">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-9">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/liberia" class="tbm-link level-3">
                Liberia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/mali" class="tbm-link level-3">
                Mali
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/mauritania" class="tbm-link level-3">
                Mauritania
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/niger" class="tbm-link level-3">
                Niger
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/nigeria" class="tbm-link level-3">
                Nigeria
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/senegal" class="tbm-link level-3">
                Senegal
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/sierra-leone" class="tbm-link level-3">
                Sierra Leone
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/gambia" class="tbm-link level-3">
                The Gambia
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/togo" class="tbm-link level-3">
                Togo
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

          <li class="tbm-item level-1 tbm-item--has-dropdown" aria-level="1">
      <div class="tbm-link-container">
            <span class="tbm-link level-1 no-link tbm-toggle" tabindex="0" aria-expanded="false">
                Data and Analysis
          </span>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child tbm-has-width" style="width: 300px; display: none; opacity: 1;">
      <div class="tbm-row">
      <div class="tbm-column span12">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-1 items-5">
        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/reports" class="tbm-link level-2">
                Reports
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/datasets" class="tbm-link level-2">
                Datasets
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/data-and-analysis/dtm-api" class="tbm-link level-2">
                API
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/maps" class="tbm-link level-2">
                Maps
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/online-interactive-resources/all" class="tbm-link level-2">
                Online Interactive Resources
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

        <li class="tbm-item level-1" aria-level="1">
      <div class="tbm-link-container">
            <a href="/dtm-partners-toolkit" class="tbm-link level-1">
                Toolkit
          </a>
            </div>
    
</li>

          <li class="tbm-item level-1 tbm-item--has-dropdown active active-trail" aria-level="1">
      <div class="tbm-link-container">
            <span class="tbm-link level-1 no-link tbm-toggle active-trail" tabindex="0" aria-expanded="false">
                Special Focus
          </span>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child tbm-has-width" style="width: 300px;">
      <div class="tbm-row">
      <div class="tbm-column span12">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-1 items-4">
        <li class="tbm-item level-2 tbm-item--has-flyout active active-trail" aria-level="2">
      <div class="tbm-link-container">
            <a href="/dtm-migration-response-plan" class="tbm-link level-2 tbm-toggle active-trail" aria-expanded="false">
                Global Migration Routes
          </a>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child">
      <div class="tbm-row">
      <div class="tbm-column span12">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-1">
        <li class="tbm-item level-3 active active-trail" aria-level="3">
      <div class="tbm-link-container">
            <a href="/global-overview-of-migration-routes-portal" class="tbm-link level-3 active-trail">
                Global Overview of Migration Routes Portal
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/climate-and-mobility" class="tbm-link level-2">
                Climate and Mobility
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2 tbm-item--has-flyout" aria-level="2">
      <div class="tbm-link-container">
            <a href="/data-for-solutions" class="tbm-link level-2 tbm-toggle" aria-expanded="false">
                Data for solutions
          </a>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child">
      <div class="tbm-row">
      <div class="tbm-column span12">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-4">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/progress" class="tbm-link level-3">
                PROGRESS 2025
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/progress-2024" class="tbm-link level-3">
                PROGRESS 2024
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/progress-2023" class="tbm-link level-3">
                PROGRESS 2023
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/solutions" class="tbm-link level-3">
                Solutions and Mobility Index
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/special-focus/youth-engagement" class="tbm-link level-2">
                Youth Engagement
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

          <li class="tbm-item level-1 tbm-item--has-dropdown" aria-level="1">
      <div class="tbm-link-container">
            <span class="tbm-link level-1 no-link tbm-toggle" tabindex="0" aria-expanded="false">
                Crisis Responses
          </span>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child tbm-has-width" style="width: 300px;">
      <div class="tbm-row">
      <div class="tbm-column span12">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-1 items-8">
        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/responses/regional-iran-escalation-mobility-monitoring" class="tbm-link level-2">
                Escalation in the Middle East and Beyond - Mobility Monitoring
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/responses/ukraine-response" class="tbm-link level-2">
                Ukraine Response
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/responses/sudan-crisis" class="tbm-link level-2">
                Sudan Crisis
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/europe" class="tbm-link level-2">
                Migration Flow to Europe
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2 tbm-item--has-flyout" aria-level="2">
      <div class="tbm-link-container">
            <a href="/mobility-impact" class="tbm-link level-2 tbm-toggle" aria-expanded="false">
                COVID-19 Mobility Impact
          </a>
                <button class="tbm-submenu-toggle always-show"><span class="visually-hidden">Toggle submenu</span></button>
          </div>
    <div class="tbm-submenu tbm-item-child">
      <div class="tbm-row">
      <div class="tbm-column span12">
  <div class="tbm-column-inner">
               <ul class="tbm-subnav level-2 items-4">
        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/mobility-impacts-covid-19-methodology" class="tbm-link level-3">
                Methodology
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/mobility-impact-reports" class="tbm-link level-3">
                Reports
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/mobility-impact-sitreps" class="tbm-link level-3">
                Sitreps
          </a>
            </div>
    
</li>

        <li class="tbm-item level-3" aria-level="3">
      <div class="tbm-link-container">
            <a href="/mobility-impact-maps" class="tbm-link level-3">
                Maps
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/operations/returns-and-displacement-afghanistan" class="tbm-link level-2">
                Returns and displacement in Afghanistan
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/operations/migration-flows-venezuela-americas" class="tbm-link level-2">
                Migration Flows from Venezuela to the Americas 
          </a>
            </div>
    
</li>

        <li class="tbm-item level-2" aria-level="2">
      <div class="tbm-link-container">
            <a href="/operations/lake-chad-basin-crisis" class="tbm-link level-2">
                Lake Chad Basin Crisis
          </a>
            </div>
    
</li>

  </ul>

      </div>
</div>

  </div>

  </div>

</li>

        <li class="tbm-item level-1" aria-level="1">
      <div class="tbm-link-container">
            <a href="/dtm-insights" class="tbm-link level-1">
                DTM INSIGHTS
          </a>
            </div>
    
</li>

  </ul>

      </div>
  </nav>

<script>
if (window.matchMedia("(max-width: 1200px)").matches) {
  document.getElementById("9bb1262e-1282-448a-9d97-d460145e3f31").classList.add('tbm--mobile');
}


</script>

    </div>
  </div>

</div>
                    <div> 
                      <div class="form-inline navbar-form justify-content-end">
                        <div class="header-search-button-wrapper  hidden-sm hidden-xs">
                          <a href="/search" class="header-search-button" data-once="header-search-button">
                            <svg class="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path></svg><!-- <i class="fa fa-search" aria-hidden="true"></i> Font Awesome fontawesome.com -->
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                	            </div>
                        </div>
                                </div>
                  </nav>
          </header>




















<style>
	/* header {
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
	} */



	header {
		background-color: white;

		& .nav-container {
			position: relative;
		}

		& .region-secondary-menu .block {
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
			}

			& .contact-menu-item {
				padding: 1.25rem;
				line-height: 0;
				color: white;
				border-radius: 3px;
				background-color: var(--blue1);
				margin-left: 1.25rem;
			}
		}
	}

	h2 {
		display: block;
		font-size: 1.5em;
		margin-block-start: .83em;
		margin-block-end: .83em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		font-weight: bold;
		unicode-bidi: isolate;
	}

	nav#block-dtm-global-account-menu {
		margin-right: .625rem;
	}

	.nav {
		display: flex;
		flex-wrap: wrap;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
	}

	.navbar {
		position: relative;
		display: flex;
		align-items: center;
		padding: .5rem 0;

		& > .container {
			display: flex;
			flex-wrap: inherit;
			align-items: center;
			justify-content: space-between;
		}
	}

	.clearfix::after {
		display: block;
		clear: both;
		content: "";
	}

	.container {
		width: 100%;
		padding: 0 .75rem;
		margin-right: auto; 
		margin-left: auto; 
	}

	@media (min-width: 36rem) {
		.container {
			max-width: 540px;
		}
	}

	@media (min-width: 48rem) {
		.container {
			max-width: 720px;
		}
	}
	
	@media (min-width: 62rem) {

		.container {
			max-width: 960px;
		}
		.navbar-expand-lg {
			flex-wrap: nowrap;
			justify-content: flex-start;
		}
	}

	@media (min-width: 75rem) {
		.container {
			max-width: 1140px;
		}
	}
	.header-search-button-wrapper {
		color: rgba(255, 255, 255, .6);
		position: absolute;
		top: 0px; 
		right: 15px;

		& .header-search-button {
			font-size: 1.625rem;
			color: white;
			border: 1px solid rgba(255, 255, 255, .3);
			padding: .5rem 1.375rem .5rem 1.125rem;
			max-width: 64px;
			margin-top: .6875rem;
			float: right;
			display: block;
			background: rgba(255, 255, 255, .11);
			cursor: pointer;
		}
	}
</style>