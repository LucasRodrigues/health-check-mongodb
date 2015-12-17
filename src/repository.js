import MongoClient from 'mongodb';

export default class Repository {

  static test(configuration) {
    return new Promise(resolve => {
      MongoClient.connect(configuration.url, error => {
        if (error) {
          resolve({
            configuration: configuration,
            error: error
          });
        } else {
          resolve({
            configuration: configuration,
            error: null
          });
        }
      });
    });
  }
}
