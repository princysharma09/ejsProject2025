const User = require('./models/User');
const bcrypt = require('bcrypt');


async function makeAdmin() {
    try{
        let user = await User.findOne({email:'sprincy620@gmail.com'});
        if(user) {
            console.log("user updated...");
        }else{
         user = new User();
        user.firstName = 'Princy';
        user.lastName = 'Sharma';
        user.email = 'sprincy620@gmail.com';
        let encrytredPassword = bcrypt.hashSync('12345', 10);
        user.password = encrytredPassword;
        user.userType = 'Admin';
        await user.save();
        console.log('User saved sucessfully.....');
        }

    }catch(err){
        console.log(err);
    }
    
}
module.exports = makeAdmin