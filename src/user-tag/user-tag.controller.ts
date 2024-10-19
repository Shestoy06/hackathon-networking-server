import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTagService } from './user-tag.service';
import { CreateUserTagDto } from './dto/create-user-tag.dto';
import { UpdateUserTagDto } from './dto/update-user-tag.dto';

@Controller('user-tag')
export class UserTagController {
  constructor(private readonly userTagService: UserTagService) {}

  @Post()
  create(@Body() createUserTagDto: CreateUserTagDto) {
    return this.userTagService.create(createUserTagDto);
  }

  @Get()
  findAll() {
    return this.userTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTagDto: UpdateUserTagDto) {
    return this.userTagService.update(+id, updateUserTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTagService.remove(+id);
  }
}
