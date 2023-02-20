import { Controller, Query, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { NinjaService } from './ninja.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninja')
export class NinjaController {
  constructor(private readonly ninjaService:NinjaService){}

  @Get()
  getNinjas(){
    return this.ninjaService.getNinja()
  }

  @Get(':id')
  getNinjaId(@Param('id')id:string){
    return this.ninjaService.getNinjaId(+id)
  }

  @Post()
  createNinja(
    @Body() CreateNinjaDto:CreateNinjaDto){
    return this.ninjaService.createNinja(CreateNinjaDto)
  }

  @Put(':id')
  updateNinja(
    @Param('id') id:string,
    @Body() updateNinjaDto:UpdateNinjaDto){
    return this.ninjaService.updateNinja(+id, updateNinjaDto)
  }

  @Delete(':id')
  deleteNinja(
    @Param('id') id:string
  ){
    return this.ninjaService.removeNinja(+id)
  }
}
