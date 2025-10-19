import { Test, TestingModule } from '@nestjs/testing';
import { GazoileController } from './gazoile.controller';
import { GazoileService } from './gazoile.service';

describe('GazoileController', () => {
  let controller: GazoileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GazoileController],
      providers: [GazoileService],
    }).compile();

    controller = module.get<GazoileController>(GazoileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
