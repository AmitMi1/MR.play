export class Contact {

    constructor(
        public _id?: string,
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public password?: string,
        public shares?: any,
        public ytPlaylists?: any,
        public spPlaylists?: any,
    ) {

    }

    setId?(id: string) {
        // Implement your own set Id
        if (id) this._id = id
        else {
            var txt = ''
            let length = 24;
            const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
            for (let i = 0; i < length; i++) {
                txt += possible.charAt(Math.floor(Math.random() * possible.length))
            }
            this._id = txt
        }

    }
}

