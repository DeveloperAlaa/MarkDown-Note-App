export type Note = {
    id: string;
    title: string;
    content: string;
    tagsId: string[]
    tags: Tag[]
}

export type Tag = {
    value: string;
    label: string
}

