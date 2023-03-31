/**
 *   Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style

    Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
  - Also, Avoid .then()
  More Elegant اكثر اناقة

    Async & Await With Try, Catch, Finally

 */

// async
const getUSData = async () => {
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

    // error case
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }

    const json = await response.json()
    return json;
}

// run
getUSData()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })