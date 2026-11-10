<script>
    import { articles } from '#lib/articles.js';
    import banner from '#lib/assets/el-nino/banner.jpg';
	import graphic1 from '#lib/assets/el-nino/graphic-1.png';
	import graphic2 from '#lib/assets/el-nino/graphic-2.svg';
    import Figure from '#lib/components/Figure.svelte';
    import MapShaded from '#lib/components/MapShaded.svelte';

    let back = `spotlight`
</script>

<article class="content-grid">

    <div class="section-title">
        <a href="/">{@html back}</a>
    </div>

    <h1>{articles[1].title}</h1>
    
    <p class="subtitle">{articles[1].subtitle}</p>
    
    <div class="byline">
        30 November 2026
    </div>

    <figure>
        <img src={banner} alt="Woman in a corn field"/>
        <figcaption>Juana, 34, examines her family’s maize crop in La Lagunilla, Jalapa, Guatemala, where prolonged drought has damaged staple crops, reducing food availability and increasing risks to food and nutrition security. Photo: UNICEF/UN0913836/Izquierdo</figcaption>
    </figure>

    <div class="boxed">
        <p>This is an excerpt from the <a href="/">Global Overview of Migration Routes report (May–August 2026 edition)</a>.</p>
    </div>
    
    <p>According to forecasts from the World Meteorological Organization (WMO) and the United States National Oceanic and Atmospheric Administration (NOAA), as trade winds weakened, a new El Niño emerged as of mid-year. The event is forecast to intensify through late 2026, reach record strength between October and December, and persist into spring 2027. It is developing against an already exceptional climate baseline. Record heat, drought, wildfires and major floods have already strained livelihoods, infrastructure, essential services and coping capacity. El Niño therefore acts as a risk multiplier, with the greatest impacts expected to exacerbate existing vulnerabilities, where climate hazards converge with conflict, food insecurity, displacement, poverty and limited response capacity. Such impacts are further amplified where high debt burdens, energy and fertilizer costs, fragile supply chains and shrinking aid budgets constrain governments’ and communities’ capacity to absorb repeated shocks.</p>

    <p>Current outlooks point to elevated flood risks in parts of the East & Horn of Africa, Central Asia, the Middle East and southern South America, while worsening drought conditions are expected across the Indian subcontinent, the Maritime Continent , southern Central America and northern South America. These outlooks indicate broad trends, while actual outcomes and localized effects will be further shaped by its interaction with other climate drivers. For instance, a developing positive Indian Ocean Dipole is likely to reinforce regional rainfall anomalies.  At the same time, elevated temperatures amplified by El Niño could also increase water stress, agricultural losses and wildfire risk. Warmer oceans and a moister atmosphere could also intensify storms and tropical cyclone activity in both hemispheres. El Niño may therefore favour hurricane activity in the eastern and central Pacific while supressing it in the Atlantic, though any landfalls could still remain destructive.</p>

    <p>Extreme heat exemplifies how these risks can directly threaten lives and human mobility. Preliminary Climate Mobility Innovation Lab modelling projects 451,000 additional heat-related deaths between June 2026 and February 2027 compared with an average year, including 239,000 between September and February.  The largest projected increases over the latter period are identified in Nigeria, Indonesia, Sudan, India, Brazil, the Democratic Republic of the Congo, Niger and Chad, with substantial impacts also projected across parts of Southeast Asia.  Many projected deaths fall between December and February, leaving a limited but important window for preparedness. Heat can harm health, livelihoods, transport and trade, increasing pressure to move while limiting households’ ability to do so. Health impacts can be particularly acute for pregnant women, with growing evidence linking heat exposure to preterm births and other pregnancy complications. Meanwhile, the ongoing heat storm  has cumulatively affected nearly three-quarters of the planet’s surface, underscoring the scale and persistence of this exposure. Prolonged heat can intensify existing pressures, leaving exposed communities less time to recover between shocks. Under these conditions, poorer households and displaced people in shelters or sites and migrants travelling along exposed routes are likely to face disproportionate risks.</p>

    <div class="collapsible">
        <details>
            <summary>What is El Niño?</summary>
            <p>El Niño is a recurring warming of the central and eastern equatorial Pacific Ocean that alters atmospheric circulation, shifting rainfall and temperature patterns worldwide. Occurring every two to seven years, it is among the strongest drivers of year-to-year climate variability. </p>
        </details>
    </div>

    <Figure
        title="El Niño and rainfall"
        subtitle="El Niño conditions in the tropical Pacific are known to shift rainfall patterns in many different parts of the world"
        src={graphic1}
        alt="Map showing El Niño dry and wet zones"
        note="For more information on El Niño and La Niña, go to http://iri.columbia.edu/enso/."
        source="Sources: Ropelewski and Halpert (1987); Mason and Goddard (2001)."
    />

    <h2>Human mobility implications</h2>
    
    <p>Hazards can affect human mobility through four main pathways:</p>
    
    <ul>
        <li><strong>New and repeated displacement:</strong> Floods, storms and wildfires among other hazards can force people from their homes, including populations already displaced by conflict or previous disasters. Evacuation and displacement can separate families and disrupt livelihoods. As a consequence, overcrowded or insecure shelters may heighten risks of gender-based violence, abuse and exploitation, particularly for unaccompanied children and people requiring additional support. IDMC recorded 26.4 million disaster-related internal displacements in 2023 and 45.8 million in 2024, or 72.8 million altogether during the previous El Niño. Although not attributable to El Niño alone, this total makes 2023–2024 one of the highest periods of disaster displacement on record.</li>

        <li><strong>Livelihood-related mobility:</strong> Drought, crop losses, food insecurity and reduced employment may alter established patterns of seasonal and circular labour mobility, as well as shaping rural-to-urban migration. Developing countries are particularly exposed, as agriculture historically accounts for around 82 per cent of direct drought-related economic damage, putting a vital source of household income at risk.  Moreover, WFP estimates that El Niño could push an additional 49 million people in 45 countries into acute food insecurity by the end of 2027 and cause up to $20 billion in economic losses across Africa according to the AfDB.  El-Niño related impacts can also extend beyond areas directly affected by weather extremes through global supply chains’ spillover effects. Crop losses in exporting countries and transport disruptions could raise costs in food-importing countries, eroding purchasing power and increasing debt. This may heighten pressure to seek work elsewhere while reducing households’ ability to finance movement that, depending on local market conditions and policy responses, can generate more risky migration decisions and patterns.</li>

        <li><strong>Unsafe or prolonged movement:</strong> Climate hazards can damage roads, suspend public transport and cut-off affected and remote communities. This can delay evacuation and humanitarian assistance, while forcing residents to take longer or more costly journeys to reach health facilities, markets and other essential services. Disrupted evacuation routes may also leave people stranded or require travel through areas exposed to extreme heat, floodwaters or limited drinking water. In conflict-affected areas, floods and landslides can move landmines and unexploded ordnance, heightening safety risks along evacuation and return routes.</li>

        <li><strong>Inability to move:</strong> Rapid shifts from drought to floods can deepen losses and gradually exhaust coping capacities. As livelihoods are disrupted and food prices rise, mobility may become increasingly necessary but less attainable. Households without sufficient resources, documentation, accessible transport, information or support networks may remain in deteriorating conditions with limited access to services and alternative livelihoods. These barriers can be particularly acute for people with disabilities, older people and those with care responsibilities. Repeated shocks can prolong displacement and delay onward movement, safe return and recovery or equally trigger the opposite behaviours, with households facing unsafe or premature return as assistance and resources diminish.</li>
    </ul>
    
    <p>While impacts will vary across contexts, El Niño is one of the most predictable global climate phenomena. Its foreseeable weather extremes have historically contributed to major global disruptions, including severe food crises and wider socioeconomic and geopolitical change. Seasonal forecasts provide an important opportunity to identify potential hotspots months in advance and support preparedness measures before environmental stress translates into humanitarian and development needs, such as displacement or other adverse mobility outcomes.</p>

    <h2>Regional mobility outlooks: routes and hotspots</h2>

    <p>The following section identifies regional routes and hotspots to monitor over the next 12 months, drawing on forecasts, mobility and displacement trends, and vulnerability analysis. It also considers how seasonal hazards may interact with wider pressures to influence mobility risks.</p>
    <MapShaded
        title='Country prioritization'

        group1Label='Very high priority (3)'
        group1={['Sudan', 'Ethiopia', 'Somalia']}
        
        group2Label='High priority (15)'
        group2={['Honduras', 'Belize', 'Guatemala', 'Haiti', 'Burkina Faso', 'Mali', 'Niger', 'Nigeria', 'Chad', 'S. Sudan', 'Kenya', 'Madagascar', 'Afghanistan', 'Bangladesh', 'Philippines']}
        
        group3Label='Monitored (32)'
        group3={['Colombia', 'Venezuela', 'Ecuador', 'Peru', 'Bolivia', 'Mauritania', 'Angola', 'Namibia', 'Mozambique', 'Malawi', 'Zimbabwe', 'Uganda', 'Rwanda', 'Burundi', 'Zambia', 'Tanzania', 'Pakistan', 'India', 'Sri Lanka', 'Nepal', 'Myanmar', 'Thailand', 'Laos', 'Cambodia', 'Vietnam', 'Indonesia', 'Papua New Guinea']}

        group4Label='Additional monitored (21)'
        group4={['Cuba', 'Jamaica', 'Dominican Rep.', 'Costa Rica', 'Panama', 'W. Sahara', 'Guinea', 'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Egypt', 'Syria', 'Iraq', 'Yemen', 'Eritrea', 'Djibouti']}
    />

    <div class=boxed>
        <p>Written by <strong>Jasmine Jocelyne Mei Lin</strong> (Global Data Institute).</p>
    </div>

</article>





