import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterAuthDto {
  @ApiProperty({
    description: 'Nombre del usuario',
    example: 'Juan',
    type: String,
  })
  @IsNotEmpty()
  @IsString({ message: "El campo name debe ser de tipo string"})
  name: string;

  @ApiProperty({
    description: 'Apellido del usuario',
    example: 'Pérez',
    type: String,
  })
  @IsNotEmpty()
  @IsString({ message: "El campo name debe ser de tipo string"})
  lastName: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perez@ejemplo.com',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Número de teléfono del usuario',
    example: '+1234567890',
    type: String,
  })
  @IsNotEmpty()
  @MinLength(10, { message: 'El número de teléfono debe tener al menos 10 caracteres' })
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Contraseña del usuario (mínimo 6 caracteres)',
    example: 'password123',
    type: String,
    minLength: 6,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}
