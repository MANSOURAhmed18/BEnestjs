import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChantierModule } from './chantier/chantier.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { PersonnelModule } from './personnel/personnel.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/projet2025_db'),
    ChantierModule,
    VehiculeModule,
    PersonnelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
