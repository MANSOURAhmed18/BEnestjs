import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gazoile } from './schemas/gazoile.schema';
import { CreateGazoileDto } from './dto/create-gazoile.dto';
import { UpdateGazoileDto } from './dto/update-gazoile.dto';

@Injectable()
export class GazoileService {
  constructor(
    @InjectModel(Gazoile.name) private gazoileModel: Model<Gazoile>,
  ) {}

  async create(createGazoileDto: CreateGazoileDto): Promise<Gazoile> {
    const createdGazoile = new this.gazoileModel(createGazoileDto);
    // Pre-save hook will automatically calculate totalPrice
    return createdGazoile.save();
  }

  async findAll(): Promise<Gazoile[]> {
    return this.gazoileModel.find().exec();
  }

  async findOne(id: string): Promise<Gazoile | null> {
    return this.gazoileModel.findById(id).exec();
  }

  async update(
    id: string,
    updateGazoileDto: UpdateGazoileDto,
  ): Promise<Gazoile | null> {
    // Fetch current document to get current values
    const currentGazoile = await this.gazoileModel.findById(id).exec();
    if (!currentGazoile) {
      return null;
    }

    // Calculate totalPrice if quantity or pricePerUnit is being updated
    const quantity =
      updateGazoileDto.quantity !== undefined
        ? updateGazoileDto.quantity
        : currentGazoile.quantity;
    const pricePerUnit =
      updateGazoileDto.pricePerUnit !== undefined
        ? updateGazoileDto.pricePerUnit
        : currentGazoile.pricePerUnit;

    const updateData = {
      ...updateGazoileDto,
      totalPrice: quantity * pricePerUnit,
    };

    return this.gazoileModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Gazoile | null> {
    return this.gazoileModel.findByIdAndDelete(id).exec();
  }
}
