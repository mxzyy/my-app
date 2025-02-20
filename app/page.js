async function getData() {
  const API_URL = "http://10.253.128.13:5000/data1";
  try {
    const res = await fetch(API_URL, {mode: "cors"});
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log("Data received:", data); // Debug data
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
 }
 
 export default async function Main() {
  const models = await getData();
  console.log(models);
  if (!Array.isArray(models)) {
    console.error("Data is not an array:", models);
    return <div>Error loading data</div>;
  }
 
  return (
    <div className="mx-8 mt-3 w-[92rem] h-[50rem] rounded-md">
      {models.map((model) => (
        <div key={model.model_id} className="p-4 border rounded-md mb-4 bg-sidebar">
          <h2 className="text-xl font-bold">{model.name}</h2>
          <p>Category: {model.category}</p>
          <p>Developer: {model.developer}</p>
          <p>Accuracy: {model.accuracy}</p>
          <p>Description: {model.description}</p>
          <p>Version: {model.version}</p>
          <p>Open Source: {model.is_open_source ? "Yes" : "No"}</p>
          <p>Created: {new Date(model.created_at).toLocaleDateString()}</p>
          <p>Updated: {new Date(model.updated_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
 }