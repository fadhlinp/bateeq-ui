import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {RestService} from '../rest-service';

const serviceUri = 'http://bateeq-inventory-api.au-syd.mybluemix.net/v1/merchandisers/docs/efr-pk-pba';
const serviceUriDraft = 'http://bateeq-inventory-api.au-syd.mybluemix.net/v1/merchandisers/docs/efr-pk-pba/draft';
const serviceUriStorages = 'http://bateeq-inventory-api.au-syd.mybluemix.net/v1/inventories/storages';
const serviceSearch = 'http://bateeq-inventory-api.au-syd.mybluemix.net/v1/core/module';
const serviceUriInventories = 'http://bateeq-inventory-api.au-syd.mybluemix.net/v1/inventories/storages/578dd0860b0aea003ebf0fda/inventories'; // storeid pusat barang baru didatabase development: 578dd0860b0aea003ebf0fda


export class Service extends RestService {

  constructor(http, aggregator) {
    super(http, aggregator);
  }

  search(keyword) {
    return super.get(serviceUri);
  }

  getById(id) {
    var endpoint = `${serviceUri}/${id}`;
    return super.get(endpoint);
  }

  getDataByIdVariant(id) {
    var endpoint = `${serviceUriInventories}/${id}`;
    return super.get(endpoint);
  }

  create(data) {
    var endpoint = `${serviceUri}`;
    return super.post(endpoint, data);
  }

  getAllStorageById(id) {
    var endpoint = `${serviceUriStorages}/${id}`;
    return super.get(endpoint);
  }

  getByCode(code) {
    var endpoint = `${serviceSearch}?keyword=${code}`;
    return super.get(endpoint);
  }

  delete(data) {
    var endpoint = `${serviceUriDraft}/${data._id}`;
    return super.delete(endpoint, data);
  }
}
