import type {ServerLoad} from "@sveltejs/kit";
import {githubApi} from "$lib/api/github";

const repositories = [
    {owner: 'webcrawls', repo: 'bonk'},
    {owner: 'webcrawls', repo: 'pomo'},
    {owner: 'webcrawls', repo: 'webcrawls.github.io'},
    {owner: 'apocryphaCSS', repo: 'apocrypha.css'}
]

const github = githubApi(import.meta.env.VITE_GITHUB_TOKEN)

export const load: ServerLoad = async () => {
    const projects: { [key: string]: { commits: any[] } } = {}
    for (const repo of repositories) {
        const commits = await github.getCommits(repo.owner, repo.repo)
        projects[`${repo.owner}/${repo.repo}`] = {commits}
    }

    return {projects}
}