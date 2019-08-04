export default class PeopleSchema{
  static schema = {
    name: 'People',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      gender: 'string',
      name: 'string',
      login: 'string',
      email: 'string',
      picture: 'string'
    }
  }
}