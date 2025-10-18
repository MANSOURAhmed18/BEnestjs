import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { GazoileService } from './gazoile.service';
import { CreateGazoileDto } from './dto/create-gazoile.dto';
import { UpdateGazoileDto } from './dto/update-gazoile.dto';

@Controller('gazoile')
export class GazoileController {
  constructor(private readonly gazoileService: GazoileService) {}

  @Post()
  create(@Body() createGazoileDto: CreateGazoileDto) {
    return this.gazoileService.create(createGazoileDto);
  }

  @Get()
  findAll() {
    return this.gazoileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gazoileService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGazoileDto: UpdateGazoileDto) {
    return this.gazoileService.update(id, updateGazoileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gazoileService.remove(id);
  }
}
