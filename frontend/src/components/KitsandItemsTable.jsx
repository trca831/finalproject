import { useEffect, useState } from 'react';
import { API_URL } from '../constants';

const KitsAndItemsTable = () => {
  const [kitsData, setKitsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch kit items for a given kit ID
  const fetchKitItems = async (kitId, token) => {
    const response = await fetch(`${API_URL}/kits/${kitId}/kit_items`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error(`Failed to fetch items for kit ${kitId}`);
    return await response.json();
  };

  // Fetch all kits and their respective items
  const fetchAllKitsAndItems = async (token) => {
    const kitsResponse = await fetch(`${API_URL}/kits`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!kitsResponse.ok) throw new Error('Failed to fetch kits');

    const kits = await kitsResponse.json();
    
    const kitsWithItems = await Promise.all(
      kits.map(async (kit) => {
        const items = await fetchKitItems(kit.id, token); // Fetch items for each kit
        return { ...kit, items }; // Combine kit data with its items
      })
    );
    return kitsWithItems;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('jwt'); 
        if (!token) {
          throw new Error("No authentication token found");
        }

        
        const kitsWithItems = await fetchAllKitsAndItems(token);
        setKitsData(kitsWithItems); // Store kits with their items in state

      } catch (err) {
        setError(err.message); // Handle errors
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>All Kits and Kit Items</h3>
      {kitsData.length > 0 ? (
        <table className='table-striped table-bordered table-hover'>
          <thead>
            <tr>
              <th>Kit ID</th>
              <th>Kit Name</th>
              <th>KitItem ID</th> {/* New column for KitItem ID */}
              <th>Kit Item Name</th>
              <th>Kit Item Description</th>
            </tr>
          </thead>
          <tbody>
          {kitsData.map(kit => (
              <tr key={kit.id}>
                <td>{kit.id}</td>
                <td>{kit.name}</td>
                <td colSpan={3}>
                  <table className='table-striped table-bordered'>
                    <tbody>
                      {kit.items.map(item => (
                        <tr key={item.id}>
                          <td>{item.id}</td> {/* KitItem ID */}
                          <td>{item.name}</td> {/* KitItem Name */}
                          <td>{item.description}</td> {/* KitItem Description */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No kits available</p>
      )}
    </div>
  );
};

export default KitsAndItemsTable;

