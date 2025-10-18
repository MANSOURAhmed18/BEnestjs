import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gazoile } from './schemas/gazoile.schema';

@Injectable()
export class GazoileService {
  constructor(
    @InjectModel(Gazoile.name) private gazoileModel: Model<Gazoile>,
  ) {}

  async create(createGazoileDto: any): Promise<Gazoile> {
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

  async update(id: string, updateGazoileDto: any): Promise<Gazoile | null> {
    // Fetch current document to get current values
    const currentGazoile = await this.gazoileModel.findById(id).exec();
    if (!currentGazoile) {
      return null;
    }

    // Calculate totalPrice if quantity or pricePerUnit is being updated
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const quantity =
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      updateGazoileDto.quantity !== undefined
        ? // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          updateGazoileDto.quantity
        : currentGazoile.quantity;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const pricePerUnit =
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      updateGazoileDto.pricePerUnit !== undefined
        ? // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          updateGazoileDto.pricePerUnit
        : currentGazoile.pricePerUnit;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    updateGazoileDto.totalPrice = quantity * pricePerUnit;

    return this.gazoileModel
      .findByIdAndUpdate(id, updateGazoileDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Gazoile | null> {
    return this.gazoileModel.findByIdAndDelete(id).exec();
  }
}
