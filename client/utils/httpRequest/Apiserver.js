import HttpHelper from './httpHelp.js';

export default class ApiServer {
  constructor() {
    this.post = HttpHelper.post;
    this.get = HttpHelper.get;
  }
}
