module.exports = class Router {
  constructor(req, res, routes) {
    this.res = res;
    this.req = req;
    this.routes = routes;

    this.mapRoutes();
  }

  mapRoutes() {
    const { url } = this.req;

    if (url === '/') {
      return HomeControler().index(res);
    }
  }
};
