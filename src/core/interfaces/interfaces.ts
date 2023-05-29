export interface INews {
    id: number;
    featured_media: number;
    teg: string
    date: string
    content: {
        rendered: string
    }
    title: {
        rendered: string
    };
};
