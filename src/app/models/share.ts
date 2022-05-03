export class Share {
    constructor(
        public playlistId: string,
        public source: string,
        public sharedAt: number,
        public sharedWithID: string,
        public sharedWithName: string,
        public imgUrl?: string,
        public url?: string,
        public name?: string,
    ) { }
}
