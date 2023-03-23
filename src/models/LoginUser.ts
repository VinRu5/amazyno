export class LoginUser {
    id: number | undefined;
    username: string = '';
    email: string = '';
    firstName: string = '';
    lastName: string = '';
    gender: string = '';
    image: string = '';
    token: string = '';

    constructor(initializer?: any) {
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.username) this.username = initializer.username;
        if(initializer.email) this.email = initializer.email;
        if(initializer.firstName) this.firstName = initializer.firstName;
        if(initializer.lastName) this.lastName = initializer.lastName;
        if(initializer.gender) this.gender = initializer.gender;
        if(initializer.image) this.image = initializer.image;
        if(initializer.token) this.token = initializer.token;
    }

}