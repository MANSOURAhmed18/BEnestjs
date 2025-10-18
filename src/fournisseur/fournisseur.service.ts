import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Fournisseur } from './schemas/fournisseur.schema';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';

@Injectable()
export class FournisseurService {
  constructor(
    @InjectModel(Fournisseur.name) private fournisseurModel: Model<Fournisseur>,
  ) {}

  async create(
    createFournisseurDto: CreateFournisseurDto,
  ): Promise<Fournisseur> {
    const createdFournisseur = new this.fournisseurModel(createFournisseurDto);
    return createdFournisseur.save();
  }

  async findAll(): Promise<Fournisseur[]> {
    return this.fournisseurModel.find().exec();
  }

  async findOne(id: string): Promise<Fournisseur | null> {
    return this.fournisseurModel.findById(id).exec();
  }

  async update(
    id: string,
    updateFournisseurDto: UpdateFournisseurDto,
  ): Promise<Fournisseur | null> {
    return this.fournisseurModel
      .findByIdAndUpdate(id, updateFournisseurDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Fournisseur | null> {
    return this.fournisseurModel.findByIdAndDelete(id).exec();
  }
}
