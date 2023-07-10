import type {ServerLoad} from "@sveltejs/kit";

export const prerender = true;
export const trailingSlash = true

export const load: ServerLoad = () => {
    return {
        date: new Date().getTime()
    }
}