const searchModel = require('../model/searchModel')

class SearchController {

    index (req , res) {
        res.render('search');
        
        
    }
    hihi(req , res){
        searchModel.find({}, function (err, Searchs) {
            if(!err){res.json(Searchs);
            console.log('OK');
            }
            else res.status(400).json({ERR:'LOi'});
          });
    }

}
module.exports = new SearchController;