import { Test, TestingModule } from '@nestjs/testing';
import { FournisseurController } from './fournisseur.controller';
import { FournisseurService } from './fournisseur.service';

describe('FournisseurController', () => {
  let controller: FournisseurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FournisseurController],
      providers: [
        {
          provide: FournisseurService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<FournisseurController>(FournisseurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
