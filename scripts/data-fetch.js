async function fetchData() {
    const response = await fetch('data/lotofacil-results.csv');
    const data = await response.text();
    return data;
}
