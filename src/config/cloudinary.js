const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dghpupmpd',
    api_key: '831985385254665',
    api_secret: '0HGxSrhDzQ8PEJatFOw7dXtihhw',
    secure: true
});

module.exports = cloudinary;