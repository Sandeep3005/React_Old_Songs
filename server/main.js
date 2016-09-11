import { Meteor } from 'meteor/meteor';
import { Accounts } from "meteor/accounts-base"

Meteor.startup(() => {
    let totalCount  = Meteor.users.find().count();
    console.log(totalCount);
		if(totalCount === 0)
		{
      let email       = "admin@email.com";
      let password = "pass123";
      let username = "Sandeep";
      
      Accounts.createUser({
            email: email,
            password: password,
            profile: {
                    username: username,
                    role:"Admin"
                }
        });
    }
});
