import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandIndexRoute extends Route {
  @service router;

  redirect(band) {
    (band.description) ? 
      this.router.transitionTo('bands.band.details') :
      this.router.transitionTo('bands.band.songs')
  }
}
