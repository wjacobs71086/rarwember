import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Song from 'rarwe/models/song';

export default class BandsRoute extends Route {
  @service catalog;
  
  model() {
    return this.catalog.fetchAll('bands');
  }
    
}

