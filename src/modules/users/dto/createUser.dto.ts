import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {
    @ApiProperty({
        description: 'The name of the user',
        example: 'John',
    })
    name: string;

    @ApiProperty({
        description: 'The last name of the user',
        example: 'Doe',
    })
    lastName: string;

    @ApiProperty({
        description: 'The email of the user',
        example: 'john.doe@example.com',
    })
    email: string;

    @ApiProperty({
        description: 'The password of the user',
        example: '123456',
    })
    password: string;

    @ApiProperty({
        description: 'The phone of the user',
        example: '1234567890',
    })
    phone: string;

    @ApiProperty({
        description: 'The image of the user',
        example: 'https://example.com/image.png',
    })
    image?: string;

    @ApiProperty({
        description: 'The notification token of the user',
        example: '1234567890',
    })
    notificationToken?: string;
}