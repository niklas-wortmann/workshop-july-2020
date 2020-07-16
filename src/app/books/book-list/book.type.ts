export interface Book {
    title: string;
    subtitle: string;
    publisher: Publisher
}

export interface Publisher {
    name: string;
    url: string;
}