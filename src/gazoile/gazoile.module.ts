import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GazoileController } from './gazoile.controller';
import { GazoileService } from './gazoile.service';
import { Gazoile, GazoileSchema } from './schemas/gazoile.schema';
import { VehiculeModule } from '../vehicule/vehicule.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Gazoile.name, schema: GazoileSchema }
    ]),
    VehiculeModule
  ],
  controllers: [GazoileController],
  providers: [GazoileService],
  exports: [GazoileService],
})
export class GazoileModule {}