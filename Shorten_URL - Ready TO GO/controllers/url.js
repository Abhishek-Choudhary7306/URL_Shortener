const {nanoid} = require('nanoid')
const URL = require('../models/url');


async function handleGenerateNewShortUrl(req,res){
     const body = req.body;
     if(!body.url){
        return res.status(400).json({err : "url is required"})
     }

     const existingUrl = await URL.findOne({
        redirectURL: body.url,
        createdBy: req.user._id
     })
     if(existingUrl){
        return res.redirect('/')
     }
    
    const shortID = nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id
    })
//changed to res.redirect
    return res.redirect('/')
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    if(!shortId) return res.status(404).send(`404 Not Found`)

    const found  = await URL.findOne({shortId})
    if(!found) return res.status(404).send(`404 Not Found`)

    return res.json({
        totalClicks : found.visitHistory.length,
        analytics : found.visitHistory
    })
}

async function handleRedirection(req, res) {
  try {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: { timestamp: Date.now() },
        },
      },
      { new: true } 
    );

    if (!entry) {
      return res.status(404).send("Short URL not found");
    }

    return res.redirect(entry.redirectURL);
  } catch (err) {
    console.error("Redirection error:", err);
    return res.status(500).send("Server error");
  }
}


module.exports = {handleGenerateNewShortUrl,handleGetAnalytics,handleRedirection}