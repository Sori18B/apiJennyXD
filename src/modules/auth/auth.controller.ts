import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    register(@Body() registerAuthDto: RegisterAuthDto) {
        return this.authService.register(registerAuthDto);
    }

    @Post('login')
    login(@Body() loginAuthDto: LoginAuthDto) {
        return this.authService.login(loginAuthDto);
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Users list' })
    
    @Get('users')
    usersList() {
        return this.authService.UsersList();
    }

    @ApiOperation({ summary: 'Get user by id' })
    @ApiResponse({ status: 200, description: 'User by id' })
    @Get('users/:id')
    usersById(@Param('id') id: number) {
        return this.authService.UsersById(id);
    }

}
