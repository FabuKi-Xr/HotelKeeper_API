import { Test, TestingModule } from '@nestjs/testing';
import { CartserviceService } from './cartservice.service';

describe('CartserviceService', () => {
  let service: CartserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CartserviceService],
    }).compile();

    service = module.get<CartserviceService>(CartserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
