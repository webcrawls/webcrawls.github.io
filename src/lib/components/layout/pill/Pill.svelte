<script lang="ts">
    import {onMount} from "svelte";
    import {browser} from "$app/environment";

    export let open: boolean = false;

    onMount(() => {
        if (!browser) return
        open = true;
    })
</script>

<div class="pill">
    <div class="pill-face">
        <p>☺️</p>
    </div>
    <div class="pill-content" class:pill-content-full={open}>
        <p id="pill-text">hello</p>
    </div>
</div>
