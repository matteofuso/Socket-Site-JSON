const errorMessage = `
<h2>Impossibile caricare il dati della pagina</h2>
<p>Per ulteriori informazioni, guarda la console.</p>
`;

// Function to fetch and update page content with a callback
async function loadJSON(fileName, callback) {
    try {
        // Fetch the JSON file
        const response = await fetch(fileName);
        
        // Check if the fetch was successful
        if (!response.ok) {
            document.querySelector("main").innerHTML = errorMessage;
            throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
        }

        // Parse the JSON data
        const data = await response.json();

        // Execute the callback with the fetched data
        if (callback && typeof callback === 'function') {
            callback(data);
        }
    } catch (error) {
        console.error("Error updating socket content:", error);
        document.querySelector("main").innerHTML = errorMessage;
    }
}