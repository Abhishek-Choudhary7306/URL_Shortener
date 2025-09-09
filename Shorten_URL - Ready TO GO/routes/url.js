const express = require('express');
const {handleGenerateNewShortUrl,handleGetAnalytics,handleRedirection} = require('../controllers/url')

const router = express.Router();

router.post('/',handleGenerateNewShortUrl)
router.get('/analytics/:shortId',handleGetAnalytics)
router.get('/:shortId',handleRedirection)

module.exports = router;