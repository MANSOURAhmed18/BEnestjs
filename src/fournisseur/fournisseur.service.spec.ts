import { Test, TestingModule } from '@nestjs/testing';
import { FournisseurService } from './fournisseur.service';
import { getModelToken } from '@nestjs/mongoose';
import { Fournisseur } from './schemas/fournisseur.schema';

describe('FournisseurService', () => {
  let service: FournisseurService;

  const mockFournisseurModel = {
    new: jest.fn(),
    constructor: jest.fn(),
    find: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
    save: jest.fn(),
    exec: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FournisseurService,
        {
          provide: getModelToken(Fournisseur.name),
          useValue: mockFournisseurModel,
        },
      ],
    }).compile();

    service = module.get<FournisseurService>(FournisseurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
