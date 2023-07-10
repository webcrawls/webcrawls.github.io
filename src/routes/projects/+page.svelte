<script lang="ts">
    import Project from '$lib/components/page/project/ProjectCard.svelte';
    import {interfaces, pages, pomo, rsp} from "$lib/projects.js";
    import ProjectContent from "$lib/components/page/project/content/ProjectContent.svelte";
    import PageSection from "$lib/components/layout/PageSection.svelte";
    import TextWrapper from "$lib/components/layout/wrapper/TextWrapper.svelte";

    export let data

    const {projects} = data
</script>

<PageSection title="active">
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
        <ProjectContent items={['slot', projects['apocryphaCSS/apocrypha.css']]}>
            <p>A CSS theme designed around simplicity. Lead by my friend, I occasionally contribute :)</p>
        </ProjectContent>
    </Project>
</PageSection>

<PageSection title="loved">
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
    <Project name="RandomSpawnPlus"
             badges={['minecraft']}
             url="https://www.spigotmc.org/resources/randomspawnplus-optimized-wild-and-random-spawn-1-8-x-1-15-x.69586/">
        <ProjectContent items={rsp}/>
    </Project>
</PageSection>

<PageSection title="planned">
    <Project name="unnamed discord bot"
             badges={['tbd']}>
        <ProjectContent>
            <p></p>
        </ProjectContent>
    </Project>
    <Project name="personal gateway"
             badges={['tbd']}>
        <ProjectContent
                items={[
                    'slot',
                    'It would integrate with services, such as Steam, GitHub, or last.fm, and provide JSON endpoints to access service statistics.',
                    'For example, you could choose to expose things like your favourite Steam game, or latest active GitHub projects, and read these values into your own website.',
                    'This project would be a great excuse to learn Rust, and to buff up my backend architecture skills :D']}>
            <p>A spiritual successor of my <a href="https://github.com/webcrawls/current-song-worker">current-song-worker</a>
                project, 'personal-gateway' would provide an all-encompassing service to expose personal details on the
                web.</p>
        </ProjectContent>
    </Project>
</PageSection>

<PageSection title="dead">

</PageSection>

<noscript>
    <TextWrapper>
        <p>Hey, JavaScript-disabling netizen!</p>
        <p>This page features expanded descriptions for certain projects, but they're unavailable without
            JavaScript.</p>
        <p>Sorry! I tried my best to keep things accessible, but certain interactions were impossible without JS.</p>
        <p>Let me know if you saw this, and as a token of good will, I'll... give you a cookie or something? :D</p>
        <p>That's all. Thanks for checking out my site :)</p>
    </TextWrapper>
</noscript>
