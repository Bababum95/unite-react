export interface IMenuStyles {
    menu: string
    link: string
    submenu: string
    sublink: string
    home?: string
    arow?: string
    open?: string
}

export interface Ilink {
    path: string;
    ru: string;
};


export interface ImenuList {
    ourProducts: Ilink[]
    games: Ilink[]
    about: Ilink[]
    main: Ilink[]
};