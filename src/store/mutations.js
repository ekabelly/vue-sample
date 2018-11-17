export default {
    register(state, userId){
        const date = new Date;
        const user = state.users.find(user=>
            user.id == userId
        );
        user.registered = true;
        const registration = {
            userId,
            name: user.name,
            date: date.getMonth() + '/' + date.getDay()
        }
        state.registrations.push(registration);
    },
    unregister(state, {userId}){
        const user = state.users.find(user=>
            user.id == userId);
        user.registered = false;
        const registrationIndex = state.registrations.findIndex(registration=>
            registration.userId == userId);
        state.registrations.splice(state.registrations[registrationIndex], 1);
    },
    users(state, users){
        state.users = users;
    }
}