const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/postandget',
{
     useNewUrlParser: true,
     useUnifiedTopology: true
      
}).then( () => {
     console.log('connection successfull');
}).catch( (error) => {
     console.log('connection failed', error);
})


// module.exports = async() => {
//      try {
//           const connectionParams = {
//                useNewUrlParser: true,
//                useCreateIndex: true,
//                useUnifiedTopology: true
//           };
//           await mongoose.connect(process.env.DB,connectionParams);
//           console.log('connected to database');
               
          
//      } catch (error) {
//           console.log('could not connect to database');
//      }
// }




