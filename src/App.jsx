import { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api-test-auf5.onrender.com/data")
      .then((res) => res.json()) // Corrected this line
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mx-auto mt-8">
      {data && data.users.map((user) => (
        <div key={user.id} className="mb-8 p-4 border rounded">
          <h2 className="text-2xl font-bold">{user.full_name}</h2>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Age: {user.age}</p>
          <p className="text-gray-600">Address: {user.address.street}, {user.address.city}, {user.address.state} {user.address.postal_code}, {user.address.country}</p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Posts:</h3>
            {user.posts.map((post) => (
              <div key={post.id} className="mt-2">
                <h4 className="text-xl font-medium">{post.title}</h4>
                <p className="text-gray-700">{post.content}</p>
                <p className="text-gray-600">Timestamp: {post.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
