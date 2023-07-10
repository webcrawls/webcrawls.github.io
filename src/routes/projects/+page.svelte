<script lang="ts">
    import Project from '$lib/components/project/ProjectCard.svelte';
    import {interfaces, pages, pomo, rsp, startmc} from "$lib/projects.js";
    import ProjectContent from "$lib/components/project/content/ProjectContent.svelte";

    export let data

    const {projects} = data
</script>
<h3>projects</h3>
<div class="projects">
    <Project author="webcrawls"
             name="pomo"
             badges={['svelte', 'js', 'css']}
             url="https://github.com/webcrawls/pomo"
             theme="gray">
        <ProjectContent items={[...pomo, projects['webcrawls/pomo']]}/>
    </Project>

    <Project name="webcrawls.github.io"
             badges={['svelte', 'js', 'css']}
             url="https://github.com/webcrawls/webcrawls.github.io"
             theme="gray">
        <ProjectContent items={[...pages, projects['webcrawls/webcrawls.github.io']]}/>
    </Project>

    <Project name="webcrawls.neocities.org"
             badges={['svelte', 'js', 'css', '11ty']}
             url="https://webcrawls.neocities.org"
             theme="gray">
        <ProjectContent><p>My experimental webpage, where I play around with random design ideas.</p></ProjectContent>
    </Project>

    <Project author="apocrypha"
             name="apocrypha.css"
             badges={['css']}
             url="https://github.com/apocryphaCSS/apocrypha.css"
             theme="gray">
        <ProjectContent>
            <p>A CSS theme designed around simplicity. Lead by my friend, I occasionally contribute :)</p>
        </ProjectContent>
    </Project>

    <Project author="incendo"
             name="interfaces"
             badges={['minecraft', 'java']}
             url="https://github.com/incendo/interfaces">
        <ProjectContent items={interfaces}/>
    </Project>

    <Project author="startmc"
             name="startmc.sh"
             badges={['minecraft', 'svelte', 'js', 'css']}
             url="https://github.com/startmc/startmc.sh">
        <ProjectContent items={startmc}/>
    </Project>

    <Project author="webcrawls"
             name="bonk"
             badges={['minecraft', 'java', '🎮']}
             url="https://github.com/webcrawls/bonk">
        <ProjectContent items="{['slot', projects['webcrawls/bonk']]}">
            <p>A Minecraft minigame, developed off-and-on for the past 3 years.</p>
        </ProjectContent>
    </Project>

    <Project name="RandomSpawnPlus"
             badges={['minecraft']}
             url="https://www.spigotmc.org/resources/randomspawnplus-optimized-wild-and-random-spawn-1-8-x-1-15-x.69586/">
        <ProjectContent items={rsp}/>
    </Project>
</div>
