<script>
    import { articles } from '#lib/articles.js';
</script>
 
<svelte:head>
    <title>Spotlights | Global Overview of Migration Routes</title>
</svelte:head>
 
<main>
    <h1>Spotlights</h1>
    
    <ul class="grid">
        {#each articles as article (article.slug)}
            <li>
                <a class="tile" href="/{article.slug}">
                    <img
                        src={article.banner}
                        alt=""
                        loading="lazy"
                        width="640"
                        height="200"
                    />
                    <div class="text">
                        <h2>{article.title}</h2>
                        <p>{article.subtitle}</p>
                        <p class="date">{article.date}</p>
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</main>
 
<style>
    main {
        max-width: 72rem;
        margin: 0 auto;
        padding: 2rem 1.25rem 4rem;
    }
    h1 {
        margin: 0 0 1.5rem;
        font-size: 2rem;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 1.5rem;
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .tile {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        color: inherit;
        text-decoration: none;
        /* background: Canvas; */
        background: color-mix(in srgb, currentColor 0%, transparent);
        border: 1px solid color-mix(in srgb, currentColor 10%, transparent);
        border-radius: 0.25rem;
        transition: border-color 0.15s, transform 0.15s;
    }
    .tile:hover {
        /* background: var(--gray5); */
        background: color-mix(in srgb, currentColor 2%, transparent);
        /* border-color: currentColor; */
        border-color: color-mix(in srgb, currentColor 20%, transparent);
        transform: translateY(-2px);
    }
    .tile:focus-visible {
        outline: 3px solid Highlight;
        outline-offset: 2px;
    }
    img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 10;
        object-fit: cover;
        background: color-mix(in srgb, currentColor 10%, transparent);
    }
    .text {
        padding: 1rem 1.1rem 1.25rem;
        & .date {
            color: #777;
        }
    }
    h2 {
        color: var(--blue1);
        margin: 0 0 0.35rem;
        font-size: 1.15rem;
        line-height: 1.3;
    }
    p {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.45;
        opacity: 0.75;
        font-weight: 400;
        &.date {
            font-size: .8rem;
            margin-top: .5rem;
            text-transform: uppercase;
        }
    }
    @media (prefers-reduced-motion: reduce) {
        .tile {
            transition: none;
        }
        .tile:hover {
            transform: none;
        }
    }
</style>