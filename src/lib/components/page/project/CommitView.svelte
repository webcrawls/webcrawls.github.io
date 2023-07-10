<script lang="ts">
    import {getContext} from "svelte";

    export let commits: any[]

    let date = getContext("date")
    $: dateText = `${date.getMonth()}/${date.getDay()}/${date.getYear()}`
</script>

<ul class="commit-view">
    <p class="commit-view-title">latest commits (as of {dateText})</p>
    {#each commits as commit}
        <li><a href="{commit.url}">{commit.message}</a></li>
    {/each}
</ul>
