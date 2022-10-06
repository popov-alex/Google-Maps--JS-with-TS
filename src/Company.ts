import faker, { company } from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
<div>
<h1>Company name: ${this.name}</h1>
<h2>Catchphrase: ${this.catchPhrase}</h2>
</div>
`;
  }
}
