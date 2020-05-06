import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'BearerDgJZNagjVLxH2y10NUHTZ623DNfqiQ-2zAekaqV82ZmZO6Je1OHSWeKuSEomABv3YXmX7ZFJ66vY5Wppscc4RKkz3GkSc2wYNPzSknJPrAcvTaeliGVFYuYoMgqxXnYx'

    }
});