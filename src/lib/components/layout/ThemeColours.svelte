<script lang="ts">
    import {browser} from "$app/environment";

    export let theme: string = "sweetie";
    export let colourCount: number = 16;
    export let darkest: number = 0;
    export let bg: number = 9;

    const style: CSSStyleDeclaration | null = browser ? window.getComputedStyle(document.body) : null

    // maybe the dumbest thing i've done. creates an array of [1,2,3,4,5...] from colourCount.
    $: indexes = [...Array(colourCount).keys()].map(i => i + 1)
    $: codes = indexes.map(i => style ? style.getPropertyValue(`--${theme}-color-${i}`) : '#ffffff')
</script>

<div class="colour-container">
    {#each Object.values(indexes) as i}
        <div class="colour-circle" style="--color: var(--{theme}-color-{i}); border: 1px solid {codes[darkest]};">
            <p class="colour-code">{codes[i-1]}</p>
        </div>
    {/each}
</div>