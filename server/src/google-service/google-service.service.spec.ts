import { Test, TestingModule } from '@nestjs/testing';
import { GoogleServiceService } from './google-service.service';

describe('GoogleServiceService', () => {
  let service: GoogleServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleServiceService],
    }).compile();

    service = module.get<GoogleServiceService>(GoogleServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
