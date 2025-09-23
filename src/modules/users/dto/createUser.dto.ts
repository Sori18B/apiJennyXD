export class CreateUserDto {
    name: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    image?: string;
    notificationToken?: string;
}