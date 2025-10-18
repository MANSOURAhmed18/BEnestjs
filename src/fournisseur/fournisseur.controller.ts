import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';

@Controller('fournisseur')
export class FournisseurController {
  constructor(private readonly fournisseurService: FournisseurService) {}

  @Post()
  create(@Body() createFournisseurDto: any) {
    return this.fournisseurService.create(createFournisseurDto);
  }

  @Get()
  findAll() {
    return this.fournisseurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fournisseurService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateFournisseurDto: any) {
    return this.fournisseurService.update(id, updateFournisseurDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fournisseurService.remove(id);
  }
}
