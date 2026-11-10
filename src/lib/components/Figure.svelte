<script>
    let {
        title,
        subtitle,
        src,
        alt,
        note = '',
        source = ''
    } = $props();
</script>

<figure class="figure">
    <div class="tag"></div>
    <h3>{title}</h3>
    <p class="subtitle">{subtitle}</p>

    <img src={src} alt={alt}>
    {#if note}<figcaption>{note}</figcaption>{/if}
    {#if source}<figcaption>{source}</figcaption>{/if}
</figure>

<style>
    .figure { 
        margin-top: 2rem; 
        font-family: 'Open Sans', Arial, sans-serif; 
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
    figcaption { 
        margin-top: 6px; 
        font-size: 0.75rem; 
        color: #5c5c5c; 
    }
</style>