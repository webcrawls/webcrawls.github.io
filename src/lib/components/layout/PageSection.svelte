<script lang="ts">
    export let title: string = ""
</script>

<section class="page-section">
    {#if title}
        <h1 class="title">{title}</h1>
    {:else}
        <div class="title">
            <slot name="title"></slot>
        </div>
    {/if}

    <main class="page-section-content">
        <slot></slot>
    </main>
</section>