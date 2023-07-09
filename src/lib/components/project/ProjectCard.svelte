<script lang="ts">
    import {fly, fade} from 'svelte/transition';
    import {browser} from "$app/environment";

    export let author: string | undefined;
    export let badges: string[] = [];
    export let name: string;
    export let url: string;
    export let children: string[] = [];

    let childIndex: number = 0;
    let textElement: HTMLElement;
    let containerElement: HTMLElement;
    let currentText: string = "";

    const handleText = () => {
        let nextIndex = childIndex + 1;
        if (nextIndex >= children.length) {
            // wrap to 0;
            childIndex = 0;
        } else {
            childIndex = nextIndex;
        }
    };

    $: currentText = children[childIndex]
    $: currentText && setTimeout(animateContainerHeight, 5)

    const animateContainerHeight = (): string => {
        if (!browser || !containerElement || !textElement) return

        const initialHeight = containerElement.offsetHeight
        const textHeight = textElement.offsetHeight
        const animation = containerElement.animate([
            {
                height: initialHeight + 'px',
                overflow: 'hidden'
            },
            {
                height: textHeight + 'px',
                overflow: 'hidden'
            }
        ], {
            duration: 100, fill: 'both'
        })

        animation.play()
    }
</script>

<article class="project-card">
    <div class="project-title-wrapper">
        <h1 class="project-title">
            {#if author}
                <span class="project-title-author">{author}</span>
                <span class="project-title-slash">/</span>
            {/if}
            <a href={url} class="project-title-name">{name}</a>
        </h1>
        <div class="project-badges">
            {#each badges as badge}
                <p
                        class:badge-css={badge === 'css'}
                        class:badge-js={badge === 'js'}
                        class:badge-svelte={badge === 'svelte'}
                        class:badge-java={badge === 'java'}
                        class:badge-minecraft={badge === 'minecraft'}
                        {badge}
                        class="badge"
                >
                    {badge}
                </p>
            {/each}
        </div>
    </div>
    <div class="project-content-wrapper">
        <div class="project-content" bind:this={containerElement}>
            {#if !!children && currentText}
                {#key currentText}
                    <p bind:this={textElement}
                       class="child-holder"
                       style="position:absolute;bottom:0;width:80%;"
                       in:fade={{ duration: 200 }}
                       out:fade={{ duration: 200 }}>{@html currentText}</p>
                {/key}
            {:else}
                <slot name="description"/>
            {/if}
        </div>
        {#if currentText}
            <div class="project-aside">
                <button class="project-next" on:click|preventDefault={handleText}>more</button>
            </div>
        {/if}
    </div>
</article>
