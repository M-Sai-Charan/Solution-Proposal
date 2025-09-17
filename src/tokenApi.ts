const getAuthToken = async (): Promise<string | null> => {
  const existingToken = sessionStorage.getItem("authToken");
  if (existingToken) {
    return existingToken;
  }

  try {
    const responseToken = await fetch(
      "http://tsv.innooscan1.nlogx-dev.lnsystems.int:8480/auth/realms/netlineops/protocol/openid-connect/token",
      {
        method: "POST",
        body: "scope=openid&grant_type=password&username=NETLINE&password=NETLINE&client_id=NETLINE_ONE&client_secret=NETLINE_ONE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!responseToken.ok) {
      throw new Error("Failed to fetch token");
    }

    const data = await responseToken.json();
    const token = data.access_token;
    sessionStorage.setItem("authToken", token);

    return token;
  } catch (error) {
    console.log("Error fetching token:", error);
    return null;
  }
};

export default getAuthToken;