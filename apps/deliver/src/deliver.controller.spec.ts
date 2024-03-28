import { Test, TestingModule } from '@nestjs/testing';
import { DeliverController } from './deliver.controller';
import { DeliverService } from './deliver.service';

describe('DeliverController', () => {
  let deliverController: DeliverController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DeliverController],
      providers: [DeliverService],
    }).compile();

    deliverController = app.get<DeliverController>(DeliverController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(deliverController.getHello()).toBe('Hello World!');
    });
  });
});
