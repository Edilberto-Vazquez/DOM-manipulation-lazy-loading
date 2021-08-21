const getData = async (api: string): Promise<any> => {
  try {
    const response: Response = await fetch(api);
    const data: any = await response.json();
    return data.image;
  } catch (error) {
    console.log("Fetch error: " + error);
  }
};

export default getData;
