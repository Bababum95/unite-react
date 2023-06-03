export interface IPost {
    id: number
    title: {
        rendered: string
    };
}
export interface IGame {
    id: number
    featured_media: number
    junre: string
    link: string
    title: {
        rendered: string
    };
}
export interface INews {
    id: number
    featured_media: number
    teg: string
    date: string
    content: {
        rendered: string
    }
    title: {
        rendered: string
    };
};
