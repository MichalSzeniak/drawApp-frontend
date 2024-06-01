export const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3001/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Fetching data failed: " + error.message);
  }
};

export const addData = async (newData: string) => {
  try {
    const response = await fetch("http://localhost:3001/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: newData }),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Adding data failed: " + error.message);
  }
};
