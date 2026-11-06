<script>
    import { onMount } from 'svelte';

    let { hash, children } = $props();

    let ready = $state(false);      // false until we've checked storage (avoids a login-form flash)
    let unlocked = $state(false);
    let input = $state('');
    let error = $state(false);

    const STORAGE_KEY = 'gate-unlocked';

    async function sha256(text) {
        const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
        return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
    }

    onMount(() => {
        try {
            unlocked = sessionStorage.getItem(STORAGE_KEY) === hash;
        } catch {}
        ready = true;
    });

    async function submit(e) {
        e.preventDefault();
        if ((await sha256(input)) === hash) {
            unlocked = true;
            try {
                sessionStorage.setItem(STORAGE_KEY, hash);
            } catch {}
        } else {
            error = true;
            input = '';
        }
    }
</script>

{#if ready}
    {#if unlocked}
        {@render children()}
    {:else}
        <form class="gate" onsubmit={submit}>
            <label for="pw">Password</label>
            <div class="row">
                <input
                    id="pw"
                    type="password"
                    bind:value={input}
                    oninput={() => (error = false)}
                    autocomplete="current-password"
                />
                <button type="submit">Enter</button>
            </div>
            {#if error}<p class="error" role="alert">Incorrect password</p>{/if}
        </form>
    {/if}
{/if}

<style>
    .gate {
        max-width: 22rem;
        margin: 20vh auto 0;
        padding: 0 1rem;
        font-family: 'Helvetica Neue', Arial, sans-serif;
    }
    /* .gate::before {
        content: '';
        display: block;
        width: 36px;
        height: 8px;
        background: var(--blue1);
        margin-bottom: 12px;
    } */
    label { display: block; margin-bottom: 8px; font-weight: 700; }
    .row { display: flex; gap: 6px; }
    input {
        flex: 1;
        font: inherit;
        padding: 6px 10px;
        border: 1px solid #b8c0c6;
    }
    button {
        font: inherit;
        padding: 6px 14px;
        border: 0;
        background: #121212;
        color: #fff;
        cursor: pointer;
    }
    .error { margin: 8px 0 0; color: #e3120b; font-size: 0.9rem; }
</style>