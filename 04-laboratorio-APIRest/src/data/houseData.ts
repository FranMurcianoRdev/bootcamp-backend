
import { House } from '../models/houseModel';

export const houses: House[] = [
  {
    _id: '10009999',
    listing_url: 'https://www.airbnb.com/rooms/10009999',
    name: 'Horto flat with small garden',
    summary: 'One bedroom + sofa-bed in quiet and bucolic neighbourhood...',
    space: 'Lovely one bedroom + sofa-bed...',
    description: 'One bedroom + sofa-bed...',
    neighborhood_overview: 'This charming ground floor flat...',
    notes: 'There´s a table in the living room...',
    transit: 'Easy access to transport...',
    access: '',
    interaction: 'I´ll be happy to help you...',
    house_rules: 'I just hope the guests treat the space...',
    property_type: 'Apartment',
    room_type: 'Entire home/apt',
    bed_type: 'Real Bed',
    minimum_nights: '2',
    maximum_nights: '1125',
    cancellation_policy: 'flexible',
    last_scraped: new Date('2019-02-11T05:00:00.000Z'),
    calendar_last_scraped: new Date('2019-02-11T05:00:00.000Z'),
    accommodates: 4,
    bedrooms: 1,
    beds: 2,
    number_of_reviews: 0,
    bathrooms: 1.0,
    amenities: [
      "Wifi", "Wheelchair accessible", "Kitchen", "Free parking on premises",
      "Smoking allowed", "Hot tub", "Buzzer/wireless intercom", "Family/kid friendly",
      "Washer", "First aid kit", "Essentials", "Hangers", "Hair dryer", "Iron",
      "Laptop friendly workspace"
    ],
    price: 317.00,
    weekly_price: 1492.00,
    monthly_price: 4849.00,
    cleaning_fee: 187.00,
    extra_people: 0.00,
    guests_included: 1,
    images: {
      thumbnail_url: '',
      medium_url: '',
      picture_url: 'https://a0.muscache.com/im/pictures/5b408b9e-45da-4808-be65-4edc1f29c453.jpg',
      xl_picture_url: ''
    },
    host: {
      host_id: '1282196',
      host_url: 'https://www.airbnb.com/users/show/1282196',
      host_name: 'Ynaie',
      host_location: 'Rio de Janeiro, State of Rio de Janeiro, Brazil',
      host_about: 'I am an artist and traveling is a major part of my life...',
      host_thumbnail_url: 'https://a0.muscache.com/im/pictures/9681e3cc-4af1-4046-b294-2881dffb4ff8.jpg',
      host_picture_url: 'https://a0.muscache.com/im/pictures/9681e3cc-4af1-4046-b294-2881dffb4ff8.jpg',
      host_neighbourhood: 'Jardim Botânico',
      host_is_superhost: false,
      host_has_profile_pic: true,
      host_identity_verified: false,
      host_listings_count: 1,
      host_total_listings_count: 1,
      host_verifications: ['email', 'phone', 'facebook'],
    },
    address: {
      street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
      suburb: 'Jardim Botânico',
      government_area: 'Jardim Botânico',
      market: 'Rio De Janeiro',
      country: 'Brazil',
      country_code: 'BR',
      location: {
        type: 'Point',
        coordinates: [-43.23074991429229, -22.966253551739655],
        is_location_exact: true,
      },
    },
    availability: {
      availability_30: 0,
      availability_60: 0,
      availability_90: 0,
      availability_365: 0,
    },
    review_scores: {},
    reviews: [],
  },

];
