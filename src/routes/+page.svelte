<script lang="ts">
    import PageSection from "$lib/components/layout/PageSection.svelte";
    import LandingButton from "$lib/components/layout/LandingButton.svelte";
</script>

<PageSection title="webcrawls on the 'net">
    <div class="landing-buttons">
        <LandingButton name="github" url="https://github.com/webcrawls" image="/img/github.svg"/>
        <LandingButton name="twitch" url="https://twitch.tv/webcrawls" image="/img/twitch.svg"/>
        <LandingButton name="twitter" url="https://twitter.com/webcrawlstv" image="/img/twitter.svg"/>
        <LandingButton name="last.fm" url="https://last.fm/user/webcrawls" image="/img/lastfm.svg"/>
        <LandingButton name="mastodon" url="https://torontodiy.xyz/@kaden" image="/img/mastodon.svg"/>
    </div>
</PageSection>
