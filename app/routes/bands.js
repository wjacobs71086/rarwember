import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Band from 'rarwe/models/band';
import Song from 'rarwe/models/song';

export default class BandsRoute extends Route {
  @service catalog;

  model() {
    let blackDog = new Song({
      title: 'Black Dog',
      rating: 3,
    });

    let yellowLedbetter = new Song({
      title: 'Yellow Ledbetter',
      rating: 2,
    });

    let pretender = new Song({
      title: 'The Pretender',
      rating: 5,
    });

    let daughter = new Song({
      title: 'Daughter',
      rating: 2,
    });

    let ledZeppelin = new Band({
      id: 'led-zeppelin',
      name: 'Led Zeppelin',
      songs: [blackDog],
    });

    let pearlJam = new Band({
      id: 'pearl-jam',
      name: 'Pearl Jam',
      songs: [yellowLedbetter, daughter],
    });

    let fooFighters = new Band({
      id: 'foo-fighters',
      name: 'The Foo Fighters',
      songs: [pretender],
    });

    this.catalog.add('band', ledZeppelin);
    this.catalog.add('band', pearlJam);
    this.catalog.add('band', fooFighters);

    blackDog.band = ledZeppelin;
    yellowLedbetter.band = pearlJam;
    daughter.band = pearlJam;
    pretender.band = fooFighters;

    this.catalog.add('song', blackDog);
    this.catalog.add('song', yellowLedbetter);
    this.catalog.add('song', daughter);
    this.catalog.add('song', pretender);

    return this.catalog.bands;
  }
}
