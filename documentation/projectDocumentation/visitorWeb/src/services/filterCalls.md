getFilteredRestos
-----------------

```java
export const getFilteredRestos = async (body: any) => {
    try {
        const response = await axios({
            method: 'POST',
            url: baseUrl,
            data: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error in getFilteredRestos: ${error}`);
        throw error;
    }
}
```