<script>
    import ProjectCard from "$lib/components/project/ProjectCard.svelte";
</script>

<div class="projects">
    <ProjectCard author="webcrawls" name="pomo" badges={["svelte", "js", "css"]}
                 url="https://github.com/webcrawls/pomo">
        <p slot="description">A simple note-taking application for the web.</p>
    </ProjectCard>
    <ProjectCard name="webcrawls.github.io" badges={["svelte", "js", "css"]}
                 url="https://github.com/webcrawls/webcrawls.github.io">
        <p slot="description">My personal page.</p>
    </ProjectCard>
    <ProjectCard name="webcrawls.neocities.org" badges={["svelte", "js", "css", "11ty"]}
                 url="https://webcrawls.neocities.org">
        <p slot="description">My experimental webpage, where I play around with random design ideas.</p>
    </ProjectCard>
    <ProjectCard author="apocrypha" name="apocrypha.css" badges={["css"]}
                 url="https://github.com/apocryphaCSS/apocrypha.css">
        <p slot="description">A CSS theme designed around simplicity. Lead by my friend, I occasionally contribute
            :)</p>
    </ProjectCard>
    <ProjectCard author="incendo" name="interfaces" badges={["minecraft", "java"]}
                 url="https://github.com/incendo/interfaces">
        <p slot="description">A Minecraft user interface library.</p>
    </ProjectCard>
    <ProjectCard author="startmc" name="startmc.sh" badges={["minecraft", "svelte", "js", "css"]}
                 url="https://github.com/startmc/startmc.sh">
        <p slot="description">A website which generates startup scripts for a Minecraft server.</p>
    </ProjectCard>
    <ProjectCard author="webcrawls" name="bonk" badges={["minecraft", "java", "🎮"]}
                 url="https://github.com/webcrawls/bonk">
        <p slot="description">A Minecraft minigame that's been developed off-and-on for the past 3-ish years.</p>
    </ProjectCard>
    <ProjectCard name="RandomSpawnPlus" badges={["minecraft"]}
                 url="https://www.spigotmc.org/resources/randomspawnplus-optimized-wild-and-random-spawn-1-8-x-1-15-x.69586/">
    </ProjectCard>
</div>