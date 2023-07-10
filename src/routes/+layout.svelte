<script lang="ts">
    import {setContext} from "svelte";
    import PageNav from "$lib/components/layout/nav/PageNav.svelte";

    export let data
    let {date} = data

    setContext("date", new Date(date))
</script>

<svelte:head>
    <title>webcrawls on github!</title>
</svelte:head>

<div class="page-wrapper">
    <PageNav/>
    <slot></slot>
</div>
