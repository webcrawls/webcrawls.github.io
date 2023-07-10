<script lang="ts">
    import NavButton from "$lib/components/layout/nav/NavButton.svelte";
</script>

<nav class="page-nav">
    <NavButton name="index" url="/" colour="yellow"/>
    <NavButton name="about" url="/about" colour="green"/>
    <NavButton name="projects" url="/projects" colour="red"/>
</nav>