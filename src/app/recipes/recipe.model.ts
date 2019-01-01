export class myOwnRecipe {
    public name: string;
    public description: string;
    public ImagePath: string;

    constructor(name:string, desc:string, ImagePath:string){
        this.name = name;
        this.description = desc;
        this.ImagePath = ImagePath;
    }

}

export class userDetails {
    public firstName: string;
    public lastName: string;
    public Age: number;
    public city: string;
    public pincode:number;

    constructor(fname:string, lname:string, age:number, city:string, pincode:number ){
        this.firstName = fname;
        this.lastName = lname;
        this.Age = age;
        this.city = city;
        this.pincode = pincode;
    }

}