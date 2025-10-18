import { Test, TestingModule } from '@nestjs/testing';
import { StockService } from './stock.service';
import { getModelToken } from '@nestjs/mongoose';
import { Stock } from './schemas/stock.schema';

describe('StockService', () => {
  let service: StockService;

  const mockStockModel = {
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
        StockService,
        {
          provide: getModelToken(Stock.name),
          useValue: mockStockModel,
        },
      ],
    }).compile();

    service = module.get<StockService>(StockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
