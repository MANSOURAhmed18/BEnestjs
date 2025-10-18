import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GazoileService } from './gazoile.service';
import { GazoileController } from './gazoile.controller';
import { Gazoile, GazoileSchema } from './schemas/gazoile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Gazoile.name, schema: GazoileSchema }]),
  ],
  controllers: [GazoileController],
  providers: [GazoileService],
  exports: [GazoileService],
})
export class GazoileModule {}
