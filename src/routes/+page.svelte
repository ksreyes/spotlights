<script>
	import graphic1 from '#lib/assets/rohingya/graphic-1.png';
	import timeline from '#lib/assets/rohingya/timeline.svg';
    import PanelChart from '#lib/components/PanelChart.svelte';
    import { rohingya } from '#lib/data/rohingya.js';
    import { formatNumber } from '#lib/components/formatNumber.js';
    import src from '#lib/assets/rohingya/image.webp';
</script>

<article class="content-grid">

    <div class="section-title">
        Spotlight
    </div>

    <h1>The rising human cost of Rohingya maritime journeys</h1>
    
    <p class="subtitle">Exploring Rohingya movements along the Naf river, Bay of Bengal and Andaman Sea</p>
    
    <div class="byline">
        30 November 2026
    </div>

    
    <figure>
        <img {src} alt="Rohingya adult with child"/>
        <figcaption>Hakimpara refugee camp, Ukhia, Cox’s Bazar, Bangladesh. OCHA/Vincent Tremeau.</figcaption>
    </figure>

    <div class="boxed">
        <p>This is an excerpt from the <a href="/">Global Overview of Migration Routes report (May–August 2026 edition)</a>.</p>
    </div>
    
    <p>In late June and early July 2026, two boats carrying around 540 Rohingya refugees departed from the coast of Myanmar's Rakhine State. One boat lost contact shortly after departure; the other is believed to have capsized off Myanmar's coast several days later. <a href="https://www.iom.int/news/iom-and-unhcr-deeply-concerned-reports-maritime-incidents-myanmar-coast-over-500-feared-dead">No survivors were reported, with all those on board presumed dead.</a> This was not an isolated tragedy, but the latest in a series of deadly incidents along the Naf River, Bay of Bengal and Andaman Sea that have claimed thousands of Rohingya lives over the past decade.</p>

    <p>Drawing on data from IOM's Missing Migrants Project (IOM MMP), IOM operations and UNHCR, this Spotlight looks at Rohingya maritime movements: boat departures and disembarkations alongside recorded deaths and disappearances. For decades, Rohingya refugees have used maritime routes to escape persecution, conflict and severe humanitarian conditions in Myanmar's Rakhine State and refugee camps in Bangladesh.</p>

    <p>The data reveal a clear pattern: even when Rohingya maritime movements fall, the proportion of individuals who die or go missing continues to rise. In 2025, one in seven people who embarked along Naf River, Bay of Bengal and Andaman Sea died or went missing – <a href="https://www.unhcr.org/news/briefing-notes/unhcr-2025-was-deadliest-year-yet-maritime-movements-rohingya-refugees">the highest fatality rate recorded on any maritime route used by refugees and migrants worldwide</a>.</p>
    
    <div class="collapsible">
        <details>
            <summary>Who are the Rohingya and why are they fleeing?</summary>
            <!-- <h2></h2> -->
    
            <p>The Rohingya are a Muslim ethnic minority who have lived for generations mostly in Myanmar's Rakhine State but were denied citizenship under the 1982 Citizenship Law. Today they are the world's largest stateless population. Statelessness has kept Rohingya communities in chronic poverty and left them vulnerable to exploitation and repeated waves of targeted violence, including major attacks in 1978, 1991 and 2012.</p>
    
            <p>The Rohingya crisis reached a breaking point in August 2017. After attacks on security posts by the Arakan Rohingya Salvation Army, the then Myanmar military launched the so-called "clearance operations" targeting the entire Rohingya population. An estimated 10,000 people were killed, hundreds of villages were burned, and more than 700,000 Rohingya fled to Cox's Bazar in Bangladesh within months. The UN Independent International Fact-Finding Mission on Myanmar later called for senior military officials to be investigated and prosecuted for genocide, crimes against humanity and war crimes.</p>
    
            <p>Nine years on, more than 1.2 million Rohingya refugees – of whom 52 per cent are women and children – reside across 33 camps in Cox's Bazar, the world's largest refugee settlement. Yet, living conditions in the camps are significantly deteriorating. For instance, the camps are highly prone to landslides, flash floods and fires, severely damaging infrastructure – currently 50 per cent of shelters are in need of repairs. In addition, armed groups and criminal networks have made the camps increasingly unsafe, and the recent decrease of humanitarian funding in 2025 has reduced food rations and strained health and education services. This is particularly concerning in a population where about 95 per cent of families depend on humanitarian aid to survive.</p>
    
            <p>For the estimated 500,000–600,000 Rohingya remaining in Myanmar, the situation is especially severe. Since the military takeover in Myanmar in February 2021, the Rohingya have been caught in clashes between armed groups. In November 2023, fighting resumed between the de facto authorities of Myanmar and the Arakan Army, an ethnic Rakhine armed group that currently controls much of the state. Both sides have committed grave abuse against Rohingya communities. The Arakan Army has reportedly imposed arbitrary detention, forced recruitment and labour, extortion and taxation, confiscation of Rohingya homes and land, and restrictions of movement, communications and livelihoods. Access to medical care is limited or unavailable, while humanitarian access remains severely restricted.</p>
    
            <p>Faced with abuse and continued violence in Myanmar and deteriorating conditions in the camps in Bangladesh, thousands of Rohingya risk their lives each year on dangerous maritime journeys in search of protection and the prospect of a more secure future.</p>
        </details>
    </div>

    <h2>Rohingya migration routes, movement trends and lives lost at sea</h2>

    <p>Most Rohingya's maritime journeys begin in Bangladesh or Myanmar and use a combination of river and sea movements, usually facilitated by smugglers. One route involves Rohingya refugees crossing the Naf River – which divides Myanmar (Rakhine state) from Bangladesh – and relocating to the camps in Cox's Bazar. From there, they attempt sea crossings along the Bay of Bengal and Andaman Sea towards Malaysia and Indonesia. Another route involves refugees embarking on boats directly from the Rakhine coast in Myanmar. A notable trend emerging in 2026 involves refugees – some of whom travel from Cox's Bazar back into Myanmar – departing from the Rakhine coast towards locations in southern Myanmar near the Thai border. From there, according to reports, refugees continue on foot or by road through Thailand towards the Malaysian border.</p>

        <figure>
            <img src={graphic1} alt="Map showing maritime and land routes of Rohingyas" />
            <figcaption>This map is for illustration purposes only. Names and boundaries on this map do not imply official endorsement or acceptance by IOM. <br>Source: Illustration based on IOM MMP, 2026; IOM Bangladesh, 2026; IOM Indonesia, 2026; UNHCR, n.d.a and media reporting</figcaption>
        </figure>

    <p>Available data for 2026 indicates a rising trend. Between January and August 2026, an estimated 5,910 individuals have embarked on maritime journeys – 59 per cent departing from Myanmar and 41 per cent from Bangladesh. This represents a significant 47 per cent increase compared with the same period in 2025, bringing the figure close to the total recorded for the whole of 2025, and marking the highest number of maritime departures recorded during the first eight months of any year since 2022. The increase is largely driven by departures from Bangladesh, which nearly quadrupled to 2,430 compared with the same period in 2025 (661 departures). This likely reflects the worsening conditions in Cox's Bazar camps, which are potentially forcing more refugees to undertake dangerous journeys across the Bay of Bengal and Andaman Sea in search of safety, despite the high risks of trafficking and boat capsizing.</p>

    <PanelChart
        title={rohingya.title}
        panels={rohingya.panels}
        note={rohingya.note}
        source={rohingya.source}
        format={(v) => formatNumber(v)}
    />

    <p>Malaysia remains the primary intended destination for Rohingya refugees. Approximately 126,000 registered Rohingya are present in the country, making them the largest refugee group in Malaysia. Yet, when looking at the number of recorded arrivals – or those that have disembarked – available data shows that not all individuals managed to arrive at their intended destinations.  In 2026, of those who departed, 86 per cent (or 5,081) were recorded as having disembarked. Close to 60 per cent landed in Myanmar, which suggests that many boats were intercepted and returned to Myanmar. Only 20 per cent those who disembarked (or 1,018 individuals) were recorded in Malaysia; nevertheless, that is five times the figure recorded during the same period in 2025 and the highest recorded in Malaysia since 2022.</p>

    <p>Despite fluctuation in the numbers of departures and arrivals, the number of deaths and disappearances among Rohingya refugees keep rising. In 2024, at least 657  of the nearly 9,200 individuals who departed along the Naf River, Bay of Bengal and Andaman Sea route were reported dead or missing. Even though departures fell by nearly 30 per cent to 6,500 in 2025, reported deaths and disappearances rose by more than one third to nearly 900 – the deadliest year on record for the route. In other words, one in seven people who attempted the crossing in 2025 died or went missing, the highest mortality rate of any sea route for refugees and migrants in the world.</p>

    <p>Most recorded deaths and disappearances along these maritime routes come from a small number of major shipwrecks. Even though incidents are less frequent, compared to other perilous maritime routes, most result in hundreds of lives lost at once in a single event. To describe a few, for instance, in November 2024, two boats capsized off Myanmar's Central and Delta coasts, resulting in the death of 174 and 250 individuals, respectively. In May 2025, two more boats sank, leaving 427 people dead or missing. Six months later, three boats capsized near the Malaysia-Thailand coast, resulting in 286 deaths and disappearances.</p>

    <p>In 2026, three boat tragedies accounted for nearly all recorded deaths and disappearances. In April, an overcrowded boat left Teknaf, in southern Bangladesh, bound for Malaysia. Five days after departure, nine survivors were found adrift and rescued near the Andaman Islands. An estimated 260 people were feared dead or missing. Less than three months later came the two boat incidents described at the start of this Spotlight, leaving about 540 people presumed dead or missing. Some of those on board had travelled from the Cox's Bazar camps. The boats were reportedly heading towards Myanmar's southern coast, from where refugees were expected to continue overland across Thailand towards the Malaysian border.</p>

    <figure class="breakout">
        <img src={timeline} alt="Graphic showing incidents of Rohingya migrant deaths" />
        <figcaption>Dates are approximate. <br>Source: Analysis based on IOM MMP, 2026.</figcaption>
    </figure>

    <p>Several interrelated factors should be considered when interpreting the rising number of Rohingya maritime deaths and disappearances. First, in 2025 and 2026, around two thirds of recorded deaths (or over 1,100) were linked to boats that departed between May and September, when monsoon conditions and rough seas make crossings especially dangerous. Second, the irregular and increasingly hidden nature of these maritime journeys exposes Rohingya refugees to trafficking, extortion and abuse. In addition, smuggling operations have shifted towards longer, less visible routes involving transfers between vessels at sea, covert landings and overland transit. Third, escalating conflict in Rakhine State, reduced humanitarian assistance and deteriorating conditions in the camps are increasing pressure on refugees to leave, even during dangerous seasons and despite the known risks.</p>

    <h2>Conclusion</h2>

    <p>With the monsoon season expected to end in late October, there are growing concerns that Rohingya maritime movements will intensify from November 2026, when calmer sea conditions typically allow for crossings to resume, potentially leading to more boat tragedies.</p>

    <p>Preventing these incidents, however, begins with understanding how many have died or gone missing during migration. Since 2014, IOM's Missing Migrants Project has recorded deaths and disappearances along the Naf River, the Bay of Bengal and the Andaman Sea, building one of the most comprehensive records of deaths and disappearances on this route. Its global database also informs Sustainable Development Goal indicator 10.7.3 on the “number of people who died or disappeared in the process of migration towards an international destination”, making it one of the most valuable sources of evidence for governments, humanitarian partners and affected communities.</p>

    <p>Yet better data alone will not save lives. Stronger search-and-rescue and identification operations are also needed, along with safe and timely disembarkation, cooperation between countries of origin, transit and destination to access to regular asylum and protection pathways, and action against smuggling and trafficking networks. Above all, the reasons why Rohingya leave must be addressed: persecution in Myanmar, worsening conditions in the camps, and the lack of safe and regular pathways. Migrant and refugee deaths and disappearances are preventable, and counting those who have died and gone missing is the first step towards preventing the next tragedy.</p>

    <div class=boxed>
        <p>Written by <strong>Gabriela Alvarez Sanchez-Spence</strong> (Regional Data Analysis at the Asia-Pacific Regional Data Hub). Data provided by <strong>Boon Benjapornkulpong</strong> (IOM Missing Migrants Project Data and Research Assistant for Asia and the Pacific).</p>
    </div>

</article>





