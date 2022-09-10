export class Patient{
    constructor(
        public username: string,
        public firstName: string,
        public surname: string,
        public personalNumber: string,
        public adress: string,
        public gender: string,
        public weight: number,
        public height: number,
        public bloodType: string,
        public phoneNumber: string,
        public email: string,
        public password: string,
        public dateOfBirth: string,
    ){}
} 