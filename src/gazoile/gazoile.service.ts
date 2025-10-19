import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGazoileDto } from './dto/create-gazoile.dto';
import { UpdateGazoileDto } from './dto/update-gazoile.dto';
import { Gazoile, GazoileDocument } from './schemas/gazoile.schema';

@Injectable()
export class GazoileService {
  constructor(
    @InjectModel(Gazoile.name) private gazoileModel: Model<GazoileDocument>
  ) {}

  create(createGazoileDto: CreateGazoileDto) {
    const createdGazoile = new this.gazoileModel(createGazoileDto);
    return createdGazoile.save();
  }

  findAll() {
    return this.gazoileModel.find().populate('vehicule').exec();
  }

  async findOne(id: string) {
    const gazoile = await this.gazoileModel
      .findById(id)
      .populate('vehicule')
      .exec();
    
    if (!gazoile) {
      throw new NotFoundException(`Gazoile with ID ${id} not found`);
    }
    return gazoile;
  }

  async findByVehicule(vehiculeId: string) {
    return this.gazoileModel
      .find({ vehicule: vehiculeId })
      .populate('vehicule')
      .exec();
  }

  async update(id: string, updateGazoileDto: UpdateGazoileDto) {
    const updatedGazoile = await this.gazoileModel
      .findByIdAndUpdate(id, updateGazoileDto, { new: true })
      .populate('vehicule')
      .exec();
    
    if (!updatedGazoile) {
      throw new NotFoundException(`Gazoile with ID ${id} not found`);
    }
    return updatedGazoile;
  }

  async remove(id: string) {
    const deletedGazoile = await this.gazoileModel.findByIdAndDelete(id).exec();
    if (!deletedGazoile) {
      throw new NotFoundException(`Gazoile with ID ${id} not found`);
    }
    return deletedGazoile;
  }
}