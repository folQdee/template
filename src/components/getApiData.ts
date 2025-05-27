export async function getApiData(url: string): Promise<any | undefined> {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Ошибка сервера: " + response.status);
      return await response.json();
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      return undefined;
    }
  }
  