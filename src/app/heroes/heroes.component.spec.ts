import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('HeroComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 55 },
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  });

  describe('Delete', () => {
    it('should remove the indicated hero from heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(component.heroes[2]);

      expect(component.heroes.length).toBe(2);
    });

    it('should call deleteHero', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[1]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[1]);
    });
  });
});
