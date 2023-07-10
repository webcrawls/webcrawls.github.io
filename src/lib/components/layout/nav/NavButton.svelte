<script lang="ts">
    import {page} from "$app/stores";

    export let name: string
    export let url: string
    export let colour: string

    $: active = $page.route.id === url
</script>

<a class="nav-button nav-button-{colour}" href="{url}">{name}</a>