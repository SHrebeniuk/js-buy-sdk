import Resource from './resource';
import defaultResolver from './default-resolver';

// GraphQL
import metaobjectQuery from './graphql/metaobjectQuery.graphql';

/**
 * The JS Buy SDK metaobject resource
 * @class
 */
class MetaobjectResource extends Resource {

  /**
   * Fetche metaobject by handle on the shop.
   *
   * @example
   * client.metaobject.fetchByHandle().then((metaobject) => {
   *   // Do something with the metaobject
   * });
   *
   * @return {Promise|GraphModel[]} A promise resolving with an array of `GraphModel`s of the metaobject.
   */
  fetchByHandle(handle) {
    return this.graphQLClient
      .send(metaobjectQuery, {handle})
      .then(defaultResolver('metaobject'));
  }
}
export default MetaobjectResource;
