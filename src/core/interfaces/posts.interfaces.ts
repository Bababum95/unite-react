export interface IPost {
    id: number
    title: {
        rendered: string
    };
}
export interface IGame {
    id: number
    featured_media: number
    'img-game': string
    'name-game': string
    junre: string
    link: string
    poster: string
    title: {
        rendered: string
    }
    guid: {
        rendered: string
    }
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
