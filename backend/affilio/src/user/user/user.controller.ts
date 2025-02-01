/* eslint-disable prettier/prettier */

import { Body, Controller,Get,Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // POST /user - Create a new user
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }



  @Get('dummy')
  async getDummyData() {
    // Dummy CreateUserDto
    const dummyUserDto: CreateUserDto = {
      email: 'dummy@example.com',
      password: 'password123',
      ownedTenants: [ ], // Use valid UUIDs for owned tenants
      authors: [ ], // Use valid UUIDs for authors
      affiliateProducts: [], // Use valid UUIDs for affiliate products
      pages: [ ], // Use valid UUIDs for pages
    };
    // Call the UserService to create the user
    const user = await this.userService.createUser(dummyUserDto);

    return user; // Return the created user
    // Simulate saving or adding the dummy data (just returning for now)
  }

  // GET /user/:id - Retrieve a user by ID
//   @Get(':id')
//   async getUserById(@Param('id') id: string) {
//    // return this.userService.getUserById(id);
//   }
}