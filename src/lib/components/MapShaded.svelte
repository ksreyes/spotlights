<script>
    import { geoNaturalEarth1, geoPath } from 'd3-geo';
    import { feature } from 'topojson-client';
    import world from 'world-atlas/countries-110m.json';
    
    let {
        title,
        subtitle,
        note = '',
        source = '',
        group1 = [],
        group2 = [],
        group3 = [],
        group4 = [],
        group1Label = '',
        group2Label = '',
        group3Label = '',
        group4Label = '',
        blueColor = '#4068B8',
        unBlueColor = '#84ADEC',
        redColor = '#DD5C64',
        yellowColor = '#FFB81C',
        grayColor = '#e0e0e0',
        label = 'World map'
    } = $props();

    // Country names to shade. They must match the names used by the world-atlas dataset.
    // export let group1 = [];
    // export let group2 = [];
    // export let group3 = [];
    // export let group4 = [];
    // export let label = 'World map';
    
    const width = 960;
    const height = 500;
    
    const projection = geoNaturalEarth1().fitSize([width, height], { type: 'Sphere' });
    const path = geoPath(projection);
    
    // Antarctica is dropped because it stretches across the bottom of the map.
    const countries = feature(world, world.objects.countries)
        .features.filter((c) => c.properties.name !== 'Antarctica')
        .map((c) => ({ name: c.properties.name, d: path(c) }));
    
    const set1 = $derived(new Set(group1));
    const set2 = $derived(new Set(group2));
    const set3 = $derived(new Set(group3));
    const set4 = $derived(new Set(group4));
    
    function fill(name) {
        if (set1.has(name)) return redColor;
        if (set2.has(name)) return yellowColor;
        if (set3.has(name)) return blueColor;
        if (set4.has(name)) return unBlueColor;
        return grayColor;
    }
    function border(name) {
        if (set1.has(name)) return 'white';
        if (set2.has(name)) return 'white';
        if (set3.has(name)) return 'white';
        if (set4.has(name)) return 'white';
        return 'none';
    }
</script>
 
<figure class="chart">
    <div class="tag"></div>
    <h3>{title}</h3>
    <p class="subtitle">{subtitle}</p>

    <svg viewBox="80 -20 {width} {height}" role="img" aria-label={label}>
        {#each countries as country (country.name)}
            <path d={country.d} fill={fill(country.name)} stroke='none'>;
                <title>{country.name}</title>
            </path>
        {/each}
    </svg>

    <ul class="legend">
        {#if group1Label}
            <li><span class="swatch" style:background={redColor}></span>{group1Label}</li>
        {/if}
        {#if group2Label}
            <li><span class="swatch" style:background={yellowColor}></span>{group2Label}</li>
        {/if}
        {#if group3Label}
            <li><span class="swatch" style:background={blueColor}></span>{group3Label}</li>
        {/if}
        {#if group4Label}
            <li><span class="swatch" style:background={unBlueColor}></span>{group4Label}</li>
        {/if}
    </ul>

    {#if note}<figcaption>{note}</figcaption>{/if}
    {#if source}<figcaption>Source: {source}</figcaption>{/if}
</figure>
 
<style>
    svg {
        display: block;
        width: 100%;
        height: auto;
    }
    .tag { 
        width: 36px; 
        height: 8px; 
        background: var(--blue1); 
        margin-bottom: 8px; 
    }
    .legend {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem .75rem;
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 0.8rem;
    }
    .legend li {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        margin: unset;
    }
    .swatch {
        flex: none;
        width: .75rem;
        height: .75rem;
        border-radius: 0.1rem;
    }
</style>