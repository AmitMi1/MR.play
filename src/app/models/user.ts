export class User {
    constructor(

        public _id: string,
        public name: string,
        public ytId: string,
        public spId: string,
        public shares: Array<object>
    ) { }
}
