<script lang="ts">
    import {fade} from 'svelte/transition';
    import {browser} from "$app/environment";

    export let author: string | undefined;
    export let badges: string[] = [];
    export let name: string;
    export let url: string;
    export let children: string[] = [];

    let childIndex: number = 0;
    let textElement: HTMLElement;
    let containerElement: HTMLElement;
    let nextElement: HTMLElement;
    let nextBgWidth: number = 0;
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

    // background-image: linear-gradient(to right, var(--color-alt) 80%, transparent 80%);

    $: currentText = children[childIndex]
    $: currentText && setTimeout(animateContainerHeight, 5)

    const animateContainerHeight = () => {
        if (!browser || !containerElement || !textElement) return

        animateButtonProgress()

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

    const animateButtonProgress = () => {
        const progress = childIndex / (children.length - 1)
        nextBgWidth = Math.round(progress * 100)
    }
</script>

<article class="project-card project-card-blue">
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
                       in:fly={{ x: 50, duration: 50 }}
                       out:fly={{ x: -50, duration: 50 }}>{@html currentText}</p>
                {/key}
            {:else}
                <slot name="description"/>
            {/if}
        </div>
        {#if currentText}
            <div class="project-aside">
                <button bind:this={nextElement} class="project-next" on:click|preventDefault={handleText}>
                    <span class="project-next-bg" style="width: {nextBgWidth}%;"></span>
                    more
                </button>
            </div>
        {/if}
    </div>
</article>
