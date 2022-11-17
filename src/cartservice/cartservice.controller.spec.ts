import { Test, TestingModule } from '@nestjs/testing';
import { CartserviceController } from './cartservice.controller';

describe('CartserviceController', () => {
    let controller: CartserviceController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CartserviceController],
        }).compile();

        controller = module.get<CartserviceController>(CartserviceController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
