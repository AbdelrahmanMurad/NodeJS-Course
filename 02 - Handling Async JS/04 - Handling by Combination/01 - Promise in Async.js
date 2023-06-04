/**
 * Async\Await usually returns a promise => .then().catch(), if you dont want to use .then().catch(), you can handle it by: 
 *  1 - Promise inside the Async fn. (now we will take this)
 *  2 - Callback inside the Async fn. 
 */

const getProductsFromAPI = async () => {
    const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    //fetch return promise
    console.log(fetchPromise);

    //so this is promise in async
    fetchPromise.then((response) => {
        console.log(`Received response: ${response.status}`);
    });

    console.log("Started request…");
}
getProductsFromAPI();
// we did not use .then().catch() by calling, we use it inside async fn