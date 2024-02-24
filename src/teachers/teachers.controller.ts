import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    return await this.teachersService.create(createTeacherDto);
  }

  @Get()
  async findAll() {
    return await this.teachersService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.teachersService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return await this.teachersService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.teachersService.remove(id);
  }
}
