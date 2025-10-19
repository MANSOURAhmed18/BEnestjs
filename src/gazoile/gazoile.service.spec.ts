import { Test, TestingModule } from '@nestjs/testing';
import { GazoileService } from './gazoile.service';

describe('GazoileService', () => {
  let service: GazoileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GazoileService],
    }).compile();

    service = module.get<GazoileService>(GazoileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
