<script>
    import { scaleBand, scaleLinear } from 'd3-scale';

    let {
        data,
        height = 320,
        yMax = undefined,          // pass a shared max so panels are comparable
        format = (v) => v
    } = $props();

    const margin = { top: 30, right: 10, bottom: 28, left: 0 };

    let width = $state(600);
    let hoveredIndex = $state(null);   // index, not object, so it survives data swaps

    let innerW = $derived(width - margin.left - margin.right);
    let innerH = $derived(height - margin.top - margin.bottom);

    let x = $derived(
        scaleBand().domain(data.map((d) => d.label)).range([25, innerW]).padding(0.4)
    );
    let y = $derived(
        scaleLinear()
            .domain([0, yMax ?? Math.max(...data.map((d) => d.value))])
            .nice()
            .range([innerH, 0])
    );
    let yTicks = $derived(y.ticks(5));
    let hovered = $derived(hoveredIndex === null ? null : data[hoveredIndex]);
</script>

<div class="plot" bind:clientWidth={width}>
    <svg {width} {height} role="img">
        <g transform="translate({margin.left},{margin.top})">
            {#each yTicks as t}
                <line x1="0" x2={innerW} y1={y(t)} y2={y(t)}
                    class="grid" class:baseline={t === 0} />
                {#if t !== 0}
                    <text x={0} y={y(t) - 4} text-anchor="start" class="tick">{format(t)}</text>
                {/if}
            {/each}

            <!-- unkeyed each: the same <rect> elements are reused between panels,
                so CSS can animate them from one panel's values to the next -->
            {#each data as d, i}
                <rect
                    x={x(d.label)}
                    y={y(d.value)}
                    width={x.bandwidth()}
                    height={innerH - y(d.value)}
                    class="bar"
                    class:dim={hoveredIndex !== null && hoveredIndex !== i}
                    onmouseenter={() => (hoveredIndex = i)}
                    onmouseleave={() => (hoveredIndex = null)}
                    role="presentation"
                />
                <text x={x(d.label) + x.bandwidth() / 2} y={innerH + 18}
                    text-anchor="middle" class="label">{d.label}</text>
            {/each}
        </g>
    </svg>

    {#if hovered}
        <div class="tooltip"
            style="left:{margin.left + x(hovered.label) + x.bandwidth() / 2}px;
                    top:{margin.top + y(hovered.value)}px">
        <strong>{hovered.label}</strong>
        <span>{format(hovered.value)}</span>
        </div>
    {/if}
</div>

<style>
    .plot { position: relative; }
    svg { display: block; overflow: visible; }
    .grid { stroke: #cfd6db; stroke-width: 1; }
    .grid.baseline { stroke: #121212; }
    .tick, .label { font-size: 12px; fill: #5c5c5c; }

    .bar {
        fill: var(--blue2);
        transition: y 0.35s ease, height 0.35s ease, opacity 0.15s;
    }
    .bar.dim { opacity: 0.75; }

    .tooltip {
        position: absolute;
        transform: translate(-50%, calc(-100% - 8px));
        background: var(--gray5);
        color: black;
        padding: 4px 8px;
        font-size: 12px;
        pointer-events: none;
        white-space: nowrap;
        display: flex;
        gap: 8px;
    }
</style>