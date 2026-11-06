<script>
    import BarChart from './BarChart.svelte';

    let {
        title,
        panels,                 // [{ id, label, subtitle, data }]
        note = '',
        source = '',
        height = 320,
        sharedScale = false,     // same y-axis across all panels
        format = (v) => v
    } = $props();

    let activeId = $state(panels[0].id);

    let active = $derived(panels.find((p) => p.id === activeId));
    let yMax = $derived(
        sharedScale
            ? Math.max(...panels.flatMap((p) => p.data.map((d) => d.value)))
            : undefined
    );
</script>

<figure class="chart">
    <div class="tag"></div>
    <h3>{title}</h3>
    <p class="subtitle">{active.subtitle}</p>

    <div class="buttons" role="group" aria-label="Chart panels">
        {#each panels as p}
            <button
                type="button"
                class:active={p.id === activeId}
                aria-pressed={p.id === activeId}
                onclick={() => (activeId = p.id)}
            >
                {p.label}
            </button>
        {/each}
    </div>

    <BarChart data={active.data} {height} {yMax} {format} />

    {#if note}<figcaption>{note}</figcaption>{/if}
    {#if source}<figcaption>Source: {source}</figcaption>{/if}
</figure>

<style>
    .chart { 
        margin: 2rem 0; 
        font-family: 'Helvetica Neue', Arial, sans-serif; 
    }
    .tag { 
        width: 36px; 
        height: 8px; 
        background: var(--blue1); 
        margin-bottom: 8px; 
    }
    h3 { 
        margin: 0 0 2px; 
        font-size: 1.05rem; 
        font-weight: 700; 
        color: #121212; 
    }
    .subtitle { 
        margin: 0 0 10px; 
        font-size: 0.9rem; 
        color: #3f3f3f; 
        min-height: 1.3em; 
    }
    .buttons { 
        display: flex; 
        gap: 6px; 
        margin-bottom: 8px; 
        flex-wrap: wrap; 
    }
    button {
        font: inherit;
        font-size: 0.8rem;
        padding: 4px 12px;
        border: 1px solid #b8c0c6;
        background: #fff;
        color: #121212;
        border-radius: 999px;
        cursor: pointer;
    }
    button:hover { 
        border-color: #121212; 
    }
    button.active { 
        background: #121212; 
        border-color: #121212; 
        color: #fff; 
    }
    button:focus-visible { 
        outline: 2px solid #006ba2; 
        outline-offset: 2px; 
    }
    figcaption { 
        margin-top: 6px; 
        font-size: 0.75rem; 
        color: #5c5c5c; 
    }
</style>