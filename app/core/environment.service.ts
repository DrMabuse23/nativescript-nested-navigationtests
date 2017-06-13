import { Injectable } from '@angular/core';

@Injectable()
export class EnvironmentService {
  public api = 'relution/api';
  public apiVersion = 'v1';
  public server = 'https://iot2.relution.io';

  constructor() { }
  /**
   * resolveurl to server
   *
   * @static
   * @param {any} url
   * @returns {string}
   *
   * @memberOf Url
   */
  public resolveUrl(url): string {
    // http, https, file, ./ directly from the app folder
    if (url.indexOf('http') !== -1 || url.indexOf('https') !== -1 || url.indexOf('file') !== -1 || url.indexOf('./') !== -1) {
      console.info(`nothing to do ${url}`);
      return url;
    }
    const prefix = `${this.server}/${this.api}/${this.apiVersion}`

    if (url[0] === '/') {
      console.info(`resolved ${prefix}${url}`);
      return `${prefix}${url}`;
    }
    console.info(`resolved ${prefix}/${url}`);
    return `${prefix}/${url}`;
  }

}
