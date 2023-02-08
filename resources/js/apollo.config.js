import Vue from "vue";
import ApolloClient  from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);


const apolloClinet = new ApolloClient({
    uri: 'http://localhost:8000/graphql'
});

export default function createProvider(){
    const apolloProvider = new VueApollo({
        defaultClient: apolloClinet
    })
    return apolloProvider;
}
