<script lang="ts">
    export let author: string | undefined
    export let badges: string[] = []
    export let name: string
    export let url: string
</script>

<article class="project-card">
    <div class="project-title-wrapper">
        <h1 class="project-title">
            {#if author}
                <span class="project-title-author">{author}</span>
                <span class="project-title-slash">/</span>
            {/if}
            <a href="{url}" class="project-title-name">{name}</a>
        </h1>
        <div class="project-badges">
            {#each badges as badge}
                <p class:badge-css={badge === 'css'}
                   class:badge-js={badge === 'js'}
                   class:badge-svelte={badge === 'svelte'}
                   class:badge-java={badge === 'java'}
                   class:badge-minecraft={badge === 'minecraft'}
                   {badge} class="badge">{badge}</p>
            {/each}
        </div>
    </div>
    <div class="project-content">
        <slot name="description"></slot>
    </div>
</article>