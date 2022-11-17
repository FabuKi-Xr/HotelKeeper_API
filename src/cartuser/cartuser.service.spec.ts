import { Test, TestingModule } from '@nestjs/testing';
import { CartuserService } from './cartuser.service';

describe('CartuserService', () => {
    let service: CartuserService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CartuserService],
        }).compile();

        service = module.get<CartuserService>(CartuserService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
