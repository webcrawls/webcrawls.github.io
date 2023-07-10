import {Octokit} from "octokit";
import {browser} from "$app/environment";

export const githubApi = (key: string) => {
    const octokit = new Octokit({auth: key});

    const getCommits = async (owner: string, repository: string): Promise<{}[]> => {
        const commits = await octokit.request("GET /repos/{owner}/{repo}/commits", {
            owner,
            repo: repository,
            per_page: 7
        })

        const res = []

        for (const value of commits.data) {
            res.push({
                author: value?.commit?.author?.name,
                message: value?.commit?.message,
                url: value?.html_url,
                date: value?.commit?.author?.date
            })
        }
        return res
    }

    return {getCommits}
}

// @ts-ignore
if (browser) document.github = githubApi()