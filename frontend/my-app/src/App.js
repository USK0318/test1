import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './comp/ProductList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8001/user/');
        setUsers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div>
      <style>
        {`
          body {
            background-color: #f8f9fa;
          }

          .card {
            background-color: #e3f2fd;
            border: none;
            border-radius: 15px;
          }

          .card-title {
            background-color: #1e88e5;
            color: white;
            padding: 10px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            margin: 0;
          }

          .list-group-item {
            background-color: #bbdefb;
          }

          .container {
            margin-top: 50px;
          }
        `}
      </style>
      <div className="container">
        <h1 className="text-center">Users</h1>
        <div className="row">
          {users.map((user) => (
            <div key={user._id} className="col-md-4 mb-4">
              <div className="card">
                <h2 className="card-title">{user.name}</h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><b>Email:</b> {user.email}</li>
                  <li className="list-group-item"><b>Phone:</b> {user.phone}</li>
                  <li className="list-group-item"><b>Password:</b> <b>**********</b></li>
                  <li className="list-group-item"><b>Cart:</b> {user.cart.length} items</li>
                  <li className="list-group-item"><b>Orders:</b> {user.orders.length} orders</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductList />
    </div>
  );
};

export default App;
