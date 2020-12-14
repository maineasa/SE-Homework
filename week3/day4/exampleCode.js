let hotelCalifornia = {
    name: 'Hotel California',
    location: 'California',
    rating: 4,
    vacancies: true,
    tags: [
        'pink champagne',
        'wine',
        'lovely',
        'can\'t leave'
    ],
    rooms: [{
            'roomNumber': 102,
            'size': 'Queen Double',
            'price': 55,
            'booked': true
        },
        {
            'roomNumber': 202,
            'size': 'King Suite',
            'price': 68,
            'booked': false
        },
        {
            'roomNumber': 404,
            'size': 'Queen Double',
            'booked': false
        }
    ]
};
console.log(hotelCalifornia);