<script lang="ts">
    import ProjectCard from '$lib/components/project/ProjectCard.svelte';
    import {interfaces, pages, pomo, startmc} from "$lib/projects.js";
</script>

<div class="projects">
    <ProjectCard
            author="webcrawls"
            name="pomo"
            badges={['svelte', 'js', 'css']}
            url="https://github.com/webcrawls/pomo"
            children={pomo}
    />
    <ProjectCard
            name="webcrawls.github.io"
            badges={['svelte', 'js', 'css']}
            url="https://github.com/webcrawls/webcrawls.github.io"
            children={pages}
    />
    <ProjectCard
            name="webcrawls.neocities.org"
            badges={['svelte', 'js', 'css', '11ty']}
            url="https://webcrawls.neocities.org"
    >
        <p slot="description">My experimental webpage, where I play around with random design ideas.</p>
    </ProjectCard>
    <ProjectCard
            author="apocrypha"
            name="apocrypha.css"
            badges={['css']}
            url="https://github.com/apocryphaCSS/apocrypha.css"
    >
        <p slot="description">
            A CSS theme designed around simplicity. Lead by my friend, I occasionally contribute :)
        </p>
    </ProjectCard>
    <ProjectCard
            author="incendo"
            name="interfaces"
            badges={['minecraft', 'java']}
            url="https://github.com/incendo/interfaces"
            children={interfaces}
    />
    <ProjectCard
            author="startmc"
            name="startmc.sh"
            badges={['minecraft', 'svelte', 'js', 'css']}
            url="https://github.com/startmc/startmc.sh"
            children={startmc}
    >
    </ProjectCard>
    <ProjectCard
            author="webcrawls"
            name="bonk"
            badges={['minecraft', 'java', '🎮']}
            url="https://github.com/webcrawls/bonk"
    >
        <p slot="description">
            A Minecraft minigame that's been developed off-and-on for the past 3-ish years.
        </p>
    </ProjectCard>
    <ProjectCard
            name="RandomSpawnPlus"
            badges={['minecraft']}
            url="https://www.spigotmc.org/resources/randomspawnplus-optimized-wild-and-random-spawn-1-8-x-1-15-x.69586/"
    />
</div>
