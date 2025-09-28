export const reportApi = async () => {
  const userid = localStorage.getItem("userId");
  const url = `http://localhost:8080/api/recommendations/user/${userid}`;
  // console.log("Fetching report from:", url);

  try {
    const token = localStorage.getItem("token");
    // console.log("Token from localStorage:", token);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log("Response status:", response.status);

    if (!response.ok) {
      // Read the response text for debugging
      const errorText = await response.text();
      console.error("Server error response:", errorText);
      throw new Error(
        `Failed to fetch report: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    // console.log("Fetched data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching report:", error);
    throw error; // Re-throw so the calling code can handle it
  }
};
