
export class UserProfile {

    fullName?: string;
    email?: string;
    userName?: string;
    constructor(
        fullName?: string,
        email?: string,
        userName?: string
    ) {
        this.fullName = fullName;
        this.email = email;
        this.userName = userName;
      
    }

}
