

async function getData() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(API_URL, {mode: "cors"});
  if (!res.ok) console.log("error");
  return (await res.json());
}


export default async function Main() {
  const models = await getData();

  // useEffect(() => {
    
  //   const fetchData = async () => {
  //     console.log(API_URL);
  //     try {
  //       const response = await fetch(API_URL, {mode: "cors"});
  //       console.log("Raw response:", response); // Cek response mentah

  //       const data = await response.json();
  //       setModels(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       console.error("Error type:", error.name);
  //       console.error("Error message:", error.message);
  //     }
  //   };

  //   fetchData();
  // }, [API_URL]);

  return (
    <div className="mx-8 mt-3 w-[92rem] h-[50rem] rounded-md ">
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
