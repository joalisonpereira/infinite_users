import React from 'realm';

import PeopleSchema from '~/schemas/PeopleSchema';

export default function getRealm(){
  return React.open({
    schema: [PeopleSchema]
  })
}