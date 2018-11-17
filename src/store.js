import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {id: 1, name: 'Max', registered: false},
            {id: 2, name: 'Anna', registered: false},
            {id: 3, name: 'Chris', registered: false},
            {id: 4, name: 'Sven', registered: false}
        ]
    },
    getters:{
        unregisteredUsers(state){
            return state.users.filter(user => 
                !user.registered)
        },
        registrations(state){
            return state.registrations;
        },
        totalRegistrations(state){
            return state.registrations.length;
        }
    },
    mutations: {
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
        }
    },
    actions: {
        register(context, userId){ //async code here! http requests
            setTimeout(()=>context.commit('register', userId), 1000)
            
        }
    }
});