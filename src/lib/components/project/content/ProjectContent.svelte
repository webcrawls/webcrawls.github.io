<script lang="ts">
    import type {SvelteComponent} from "svelte";
    import {onMount} from "svelte";
    import {fly} from "svelte/transition";
    import {browser} from "$app/environment";
    import CommitView from "$lib/components/project/CommitView.svelte";

    export let items: (string | SvelteComponent | { commits: CommitData[] })[] = ['slot'];

    let item: string | SvelteComponent | { commits: CommitData[] } | undefined = 'slot';
    let index: number = 0;

    let wrapper: HTMLElement;
    let childEl: HTMLElement;
    let moreEl: HTMLElement;
    let moreBgWidth: number = 0;
    let loaded: boolean = false;

    let isText: boolean = false;
    let isComponent: boolean = false;
    let isCommit: boolean = false
    let isSlot: boolean = false;

    console.log({items})


    $: item = items[index]
    $: console.log({item})
    $: isText = typeof item === "string" && item !== "slot"
    $: isComponent = typeof item === "object" && !item.commits
    $: isCommit = typeof item === "object" && !!item.commits
    $: isSlot = item === "slot"
    $: item && setTimeout(updateElements, 5)

    const more = () => {
        if (index >= items.length - 1) {
            index = 0;
        } else {
            index = index + 1;
        }
    };
    const updateElements = () => {
        if (!browser || !wrapper || !childEl) {
            console.log({wrapper, childEl})
            return
        }

        const initialHeight = wrapper.offsetHeight
        const contentHeight = childEl.offsetHeight

        console.log({initialHeight, contentHeight})

        const animation = wrapper.animate([
            {
                height: initialHeight + 'px',
                overflow: 'hidden'
            },
            {
                height: contentHeight + 'px',
                overflow: 'hidden'
            }
        ], {
            duration: 100, fill: 'both'
        })

        animation.play()

        const progress = index / (items.length - 1)
        moreBgWidth = Math.round(progress * 100)
    }

    onMount(() => {
        if (!browser) return
        loaded = true
    })

</script>

<main class="project-content-wrapper">
    <div class="project-content" style="min-height: 3rem;" bind:this={wrapper}>
        {#key item}
            <div style='position: absolute;width: 100%;'
                 in:fly={{x: 50, duration: 50}}
                 out:fly={{x: -50, duration: 50}}>
                {#if isText}
                    <p bind:this={childEl}>{@html item}</p>
                {:else if isSlot}
                    <div bind:this={childEl}>
                        <slot></slot>
                    </div>
                {:else if isComponent}
                    <svelte:component this={item} bind:this={childEl}/>
                {:else if isCommit}
                    <div bind:this={childEl}>
                        <CommitView commits="{item.commits}"/>
                    </div>
                {/if}
            </div>
        {/key}
    </div>
    <div class="project-aside">
        {#if items.length > 1}
            <button bind:this={moreEl}
                    class:opaque={loaded} class="project-next"
                    on:click|preventDefault={more}>
                <span class="project-next-bg" style="width: {moreBgWidth}%;"></span>
                more
            </button>
        {/if}
    </div>
</main>
