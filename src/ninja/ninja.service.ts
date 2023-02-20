import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjaService {
  private ninjas = [
    {id: 1,name:"Akame S",weapon:"shuriken"},
    {id: 2,name:"Tahina",weapon:"kunai"}
  ]

  getNinja(){
    return this.ninjas;
  }

  getNinjaId(id: number){
    const ninjaId = this.ninjas.find(
      (ninja) => ninja.id === id
    )

    if(!ninjaId) throw new Error('[ERR] Ninja not found')

    return ninjaId
  }

  createNinja(createNinja:CreateNinjaDto){
    const a = {
      ...createNinja,
      id: Date.now()
    }
    this.ninjas.push(a)

    return a
  }

  updateNinja(id:number, updateNinjaDto:UpdateNinjaDto){
    this.ninjas = this.ninjas.map((ninja) => {
      if(ninja.id === id){
        return{
          ...ninja,
          ...updateNinjaDto
        }
        return ninja
      }
      return this.getNinjaId(id)
    }) 
  }

  removeNinja(id:number){
    const tobeRemoved = this.getNinjaId(id)
    this.ninjas = this.ninjas.filter((ninja) => {
      ninja.id !== id 
    })
    return tobeRemoved;
  }

}
