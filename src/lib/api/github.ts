import {Octokit} from "octokit";

export const githubApi = (key: string) => {
    const octokit = new Octokit({auth: key});
    const commitCache: Record<string, any> = {}

    const getCommits = async (owner: string, repository: string): Promise<{}[]> => {
        if (commitCache[`${owner}/${repository}`]) {
            return Promise.resolve(commitCache[`${owner}/${repository}`])
        }

        let commits;

        try {
            commits = await octokit.request("GET /repos/{owner}/{repo}/commits", {
                owner,
                repo: repository,
                per_page: 7,
                request: {
                    timeout: 100
                }
            })
        } catch (e) {
            return []
        }

        // const commits = {}
        const res = []

        for (const value of (commits?.data ?? [])) {
            res.push({
                author: value?.commit?.author?.name,
                message: value?.commit?.message,
                url: value?.html_url,
                date: value?.commit?.author?.date
            })
        }

        commitCache[`${owner}/${repository}`] = res

        return res
    }

    return {getCommits}
}