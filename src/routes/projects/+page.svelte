<script lang="ts">
    import Project from '$lib/components/page/project/ProjectCard.svelte';
    import {interfaces, pages, pomo, rsp, startmc} from "$lib/projects.js";
    import ProjectContent from "$lib/components/page/project/content/ProjectContent.svelte";
    import PageSection from "$lib/components/layout/PageSection.svelte";
    import TextWrapper from "$lib/components/layout/text/TextWrapper.svelte";

    export let data

    const {projects} = data
</script>

<PageSection title="active 🟢">
    <Project author="webcrawls"
             name="pomo"
             badges={['svelte', 'js', 'css']}
             url="https://github.com/webcrawls/pomo"
             theme="green">
        <ProjectContent items={[...pomo, projects['webcrawls/pomo']]}/>
    </Project>

    <Project name="webcrawls.github.io"
             badges={['svelte', 'js', 'css']}
             url="https://github.com/webcrawls/webcrawls.github.io"
             theme="green">
        <ProjectContent items={[...pages, projects['webcrawls/webcrawls.github.io']]}/>
    </Project>

    <Project name="webcrawls.neocities.org"
             badges={['svelte', 'js', 'css', '11ty']}
             url="https://webcrawls.neocities.org"
             theme="green">
        <ProjectContent><p>A page I use to experiment with various web design ideas.</p></ProjectContent>
    </Project>

    <Project author="apocrypha"
             name="apocrypha.css"
             badges={['css']}
             url="https://github.com/apocryphaCSS/apocrypha.css"
             theme="green">
        <ProjectContent items={['slot', projects['apocryphaCSS/apocrypha.css']]}>
            <p>A CSS theme designed around simplicity. Lead by my friend, I occasionally contribute :)</p>
        </ProjectContent>
    </Project>
    <Project author="webcrawls"
             name="gmi-viewer"
             url="https://github.com/webcrawls/gmi-viewer"
             badges={['svelte', 'gemini']}
             theme="gray">
        <ProjectContent items={['slot', projects['webcrawls/gmi-viewer']]}>
            <p>A simple web application to read and parse the .gmi file spec, rendering the document as you
                write.</p>
        </ProjectContent>
    </Project>
</PageSection>

<PageSection title="loved ❤️">
    <TextWrapper>
        <p>A list of projects I consider complete, or that I no longer spend much time contributing to.</p>
        <p>For some, I may intend to return in the future. Others will remain here as a digital time capsule :D</p>
    </TextWrapper>
    <Project author="incendo"
             name="interfaces"
             badges={['minecraft', 'java']}
             url="https://github.com/incendo/interfaces">
        <ProjectContent items={interfaces}/>
    </Project>
    <Project author="webcrawls"
             name="bonk"
             badges={['minecraft', 'java', '🎮']}
             url="https://github.com/webcrawls/bonk">
        <ProjectContent items="{['slot', projects['webcrawls/bonk']]}">
            <p>A Minecraft minigame, developed off-and-on for the past 3 years.</p>
        </ProjectContent>
    </Project>
    <Project author="startmc"
             name="startmc.sh"
             url="https://github.com/startmc/startmc.sh">
        <ProjectContent items={[...startmc]}/>
    </Project>
    <!--    <Project author="NearVanilla"-->
    <!--             name="bat"-->
    <!--             url="https://github.com/NearVanilla/bat">-->
    <!--        <ProjectContent items={[...bat]}/>-->
    <!--    </Project>-->
</PageSection>

<PageSection title="dead 💀">
    <Project name="RandomSpawnPlus"
             badges={['minecraft']}
             theme="gray"
             url="https://www.spigotmc.org/resources/randomspawnplus-optimized-wild-and-random-spawn-1-8-x-1-15-x.69586/">
        <ProjectContent items={rsp}/>
    </Project>
</PageSection>

<noscript>
    <TextWrapper>
        <p>Hello!</p>
        <p>Certain projects have additional descriptions, but they're unavailable in a no-JS context.</p>
        <p>I tried my best to keep things accessible, and I think I've struck an OK balance.</p>
        <p>Sorry I couldn't provide the full experience to you, and thanks for checking out my site :)</p>
    </TextWrapper>
</noscript>
