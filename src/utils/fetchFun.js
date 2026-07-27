 const fetchFun = async (url) => { // general format of fetch with get request
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json()
}
export default fetchFun