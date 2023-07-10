<script lang="ts">
    export let author: string | undefined;
    export let badges: string[] = [];
    export let name: string;
    export let url: string;
    export let theme: "blue" | "gray" | "purple" = "blue";
</script>

<article class="project-card project-card-{theme}">
    <header class="project-title-wrapper">
        <h1 class="project-title">
            {#if author}
                <span class="project-title-author">{author}</span>
                <span class="project-title-slash">/</span>
            {/if}
            <a href={url} class="project-title-name">{name}</a>
        </h1>
        <ul class="project-badges">
            {#each badges as badge}
                <li
                        class:badge-css={badge === 'css'}
                        class:badge-js={badge === 'js'}
                        class:badge-svelte={badge === 'svelte'}
                        class:badge-java={badge === 'java'}
                        class:badge-minecraft={badge === 'minecraft'}
                        class="badge">
                    {badge}
                </li>
            {/each}
        </ul>
    </header>
    <slot/>
</article>
