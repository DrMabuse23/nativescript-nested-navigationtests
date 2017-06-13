import { Injectable } from '@angular/core';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import {
  ConnectionBackend,
  Headers,
  Http,
  RequestOptions,
  Response,
} from '@angular/http';

@Injectable()
export class HttpLambdaService extends Http {

  constructor(public backend: ConnectionBackend, public defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  beforeSend(options?: RequestOptions): RequestOptions {
    if (!options) {
      options = new RequestOptions();
      options.headers = new Headers();
    } else if (options && !options.headers) {
      options.headers = new Headers();
    }
    if (options.headers && !options.headers.get('content-type')) {
      options.headers.set('Content-Type', 'application/json');
      options.headers.set('Accept', 'application/json');
    }
    options.withCredentials = true;
    return options;
  }

  req(type: string, url: string, data = null, options?: RequestOptions) {
    options = this.beforeSend(options);
    if (['post', 'patch', 'put'].indexOf(type) !== -1) {
      return super[type](url, data, options);
    }
    return super[type](url, options);
  }
}
