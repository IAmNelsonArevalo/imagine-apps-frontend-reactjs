import { ApolloClient, InMemoryCache } from "@apollo/client";

const useGraphql = () => {
    const adminProductsClient = new ApolloClient({
        uri: `${process.env.REACT_APP_API_URL}/graphql/admin/products`,
        cache: new InMemoryCache()
    });

    const authClient = new ApolloClient({
        uri: `${process.env.REACT_APP_API_URL}/graphql/auth`,
        cache: new InMemoryCache()
    });

    return {
        adminProductsClient
    };
}

export default useGraphql;