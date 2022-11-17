import { Test, TestingModule } from '@nestjs/testing';
import { CartuserController } from './cartuser.controller';

describe('CartuserController', () => {
    let controller: CartuserController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CartuserController],
        }).compile();

        controller = module.get<CartuserController>(CartuserController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
