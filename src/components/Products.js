import React, { useState } from 'react';
import './Products.css';
import mockProducts from './productData';
import Modal from 'react-modal';

function Products() {
  const [products, setProducts] = useState(mockProducts);
  const [newProduct, setNewProduct] = useState({name: '',category: '',price: 0,stock: 0,});
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleAddProduct = () => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: prevProducts.length + 1, ...newProduct },
    ]);
    setNewProduct({ name: '', category: '', price: 0, stock: 0 });
    setAddModalOpen(false);
  };

  const handleEditProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === editingProduct.id ? editingProduct : product
      )
    );
    setEditingProduct(null);
    setEditModalOpen(false);
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };
  
  const handleCancelEdit = () => {
    setEditingProduct(null);
    setEditModalOpen(false);
  };

  return (
    <div className='container'>
      <h1>Products Management</h1>

      {/* ---------------Add Product Modal---------------------- */}
      <Modal isOpen={isAddModalOpen} onRequestClose={() => setAddModalOpen(false)}
        contentLabel="Add Product Modal" className="modal" >
        <h3>Add Product</h3>
        <div>
          <label>Name:</label>
          <input type="text" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })} />
        </div>
        <div>
          <label>Stock:</label>
          <input type="number" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })} />
        </div>
        <div className="formButtons">
          <button onClick={handleAddProduct}>Add</button>
          <button onClick={() => setAddModalOpen(false)}>Cancel</button>
        </div>
      </Modal>

      {/* ------------------- Edit Product Modal -------------------- */}
      <Modal isOpen={isEditModalOpen} onRequestClose={() => setEditModalOpen(false)}
        contentLabel="Edit Product Modal" className="modal">
        <h3>Edit Product</h3>
        <div>
          <label>Name:</label>
          <input type="text" value={editingProduct ? editingProduct.name : ''}
            onChange={(e) => setEditingProduct({...editingProduct,name: e.target.value,})}/>
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={editingProduct ? editingProduct.category : ''}
            onChange={(e) => setEditingProduct({...editingProduct,category: e.target.value,})}/>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={editingProduct ? editingProduct.price : 0}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value),})}/>
        </div>
        <div>
          <label>Stock:</label>
          <input type="number" value={editingProduct ? editingProduct.stock : 0} 
            onChange={(e) => setEditingProduct({...editingProduct,stock: Number(e.target.value),})}/>
        </div>
        <div className="formButtons">
          <button onClick={handleEditProduct}>Update</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      </Modal>

      <div className="action-buttons">
        <button onClick={() => setAddModalOpen(true)}>Add Product</button>
      </div>
{/* ------------------------Main UI------------------------------------- */}
      <div className='outer'>
        <div className='inner'>
          {products.map((product) => (
            <div className="inner-child" key={product.id}>
            <p><b>Product Name:</b> {product.name}</p>
            <p><b>Category Name:</b> {product.category}</p>
            <p><b>Price:</b> {product.price}</p>
            <p><b>Available stock:</b> {product.stock}</p>
            <button className="edit-button" onClick={() => { setEditingProduct(product); setEditModalOpen(true); }}>
                  Edit
            </button>
            <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>
                  Delete
            </button>
            </div>
          ))}
        </div>
      </div>
{/* ------------------------------------------------------------- */}
    </div>
  );
}

export default Products;
