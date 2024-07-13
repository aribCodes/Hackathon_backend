const whiteList=['http://localhost:5173']

const corsConfig = {
    origin : function(origin, callback) {
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }else{
            callback(new Error('cors error'))
        }
    }
}

module.exports={
    corsConfig
}