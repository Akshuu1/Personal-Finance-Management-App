const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd0922aa31dmshe81c8fefd12d849p12c1aOjsnf083b257780d',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  };
  
  export const fetchProperties = async (locationExternalID, filters) => {
    let query = `locationExternalIDs=${locationExternalID}&purpose=for-sale&hitsPerPage=10`;
  
    if (filters.minPrice) query += `&minPrice=${filters.minPrice}`;
    if (filters.maxPrice) query += `&maxPrice=${filters.maxPrice}`;
    if (filters.bedsMin) query += `&roomsMin=${filters.bedsMin}`;
    if (filters.propertyType) query += `&categoryExternalID=${filters.propertyType}`;
  
    const res = await fetch(`https://bayut.p.rapidapi.com/properties/list?${query}`, options);
    const data = await res.json();
    return data?.hits || [];
  };
  