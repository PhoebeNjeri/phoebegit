import { Routing} from './routing';

describe('RoutingModule', () => {
  it('should create an instance', () => {

    let routingModule: Routing;

  beforeEach(() => {
    routingModule = new Routing ();
  });

    expect(routingModule).toBeTruthy();
  });
});