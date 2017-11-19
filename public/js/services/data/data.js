const list = {
  '1': {
    'name': 'Hotel Sunny Palms',
    'imgUrl': '../images/sunny.jpg',
    'rating': 5,
    'price': 108.00,
    'id': 1
  },
  '2': {
    'name': 'Hotel Snowy Mountains',
    'imgUrl': '../images/snowy.jpg',
    'rating': 4,
    'price': 120.00,
    'id': 2
  },
  '3': {
    'name': 'Hotel Windy Sails',
    'imgUrl': '../images/windy.jpg',
    'rating': 3,
    'price': 110.00,
    'id': 3
  },
  '4': {
    'name': 'Hotel Middle of Nowhere',
    'imgUrl': '../images/nowhere.jpg',
    'rating': 4,
    'price': 199.00,
    'id': 4
  }
};

function getList() {
  return list;
}

function getDetail( id ) {
  return list[ id ];
}

export { getList, getDetail };