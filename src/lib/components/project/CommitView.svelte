<script lang="ts">
    export let commits: any[]
</script>

<ul class="commit-view">
    <p class="commit-view-title">latest commits</p>
    {#each commits as commit}
        <li><a href="{commit.url}">{commit.message}</a></li>
    {/each}
</ul>
