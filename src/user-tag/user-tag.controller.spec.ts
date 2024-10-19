import { Test, TestingModule } from '@nestjs/testing';
import { UserTagController } from './user-tag.controller';
import { UserTagService } from './user-tag.service';

describe('UserTagController', () => {
  let controller: UserTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTagController],
      providers: [UserTagService],
    }).compile();

    controller = module.get<UserTagController>(UserTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
