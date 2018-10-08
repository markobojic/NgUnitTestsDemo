import { MessageService } from './message.service';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let mockMessageService;
  let httpTestingControler: HttpTestingController;
  let service;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        {provide: MessageService, useValue: mockMessageService}
      ]
    });

    httpTestingControler = TestBed.get(HttpTestingController);
    service = TestBed.get(HeroService);
  });

  describe('getHero', () => {
    it('should call a get with the correct URL', () => {
      service.getHero(4).subscribe();

      const req = httpTestingControler.expectOne('api/heroes/4');
      req.flush({id: 4, name: 'SuperDude', strength: 100});
      httpTestingControler.verify();
    });
  });
});
