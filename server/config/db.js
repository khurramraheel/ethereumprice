const mongoose = require('mongoose');
// let localPath = 'mongodb://localhost:27017/ethereum'
// let dbName = 'mongodb+srv://ranausama48:etherumprice@cluster0-zqqr0.mongodb.net/test?retryWrites=true&w=majority'
//  mongoose.connect( dbName, {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })
let path = "mongodb+srv://ethereum1:ethereum123@cluster0-jukcx.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(path, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>{
    console.log('db connected');
    
})
// const mongoose = require('mongoose');

//  mongoose.connect('mmongodb://wajid:wajid1234@ds211168.mlab.com:11168/etheumprice', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })
