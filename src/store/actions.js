import Axios from "axios";

export default {
    register(context, userId){ //async code here! http requests
        setTimeout(()=>context.commit('register', userId), 1000)
    },
    fetchUsers(context){
        Axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            const users = res.data.map(user=>{
                user.registered = false;
                return user;
            });
            console.log(users);
            context.commit('users', users);
        });
    }
}