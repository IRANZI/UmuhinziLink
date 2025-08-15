"use client";
import { useState } from "react";
import {
  CheckCircle,
  LayoutGrid,
  FilePlus,
  MessageSquare,
  ShoppingCart,
  User,
  Phone,
  Settings,
  LogOut,
  Mail,
  Pencil,
  Trash2,
  Plus,
  Search,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => (
  <span className="font-extrabold text-2xl tracking-tight">
    <span className="text-green-700">Umuhinzi</span>
    <span className="text-black">Link</span>
  </span>
);

const menuItems = [
  { label: "Dashboard", href: "/supplier_dashboard", icon: CheckCircle },
  { label: "My Inputs", href: "/supplier_dashboard/products", icon: LayoutGrid },
  { label: "Farmer Request", href: "/supplier_dashboard/requests", icon: FilePlus },
  { label: "Orders", href: "/supplier_dashboard/orders", icon: ShoppingCart },
  { label: "Message", href: "/supplier_dashboard/message", icon: Mail },
  { label: "Profile", href: "/supplier_dashboard/profile", icon: User },
  { label: "Contact", href: "/supplier_dashboard/contact", icon: Phone },
  { label: "Settings", href: "/supplier_dashboard/settings", icon: Settings },
  { label: "Logout", href: "/logout", icon: LogOut },
];

export default function ProductsPage() {
  const [showForm, setShowForm] = useState(false);
  const [inputs, setInputs] = useState([
    { id: 1, name: "Premium Corn Seeds", category: "Seeds", price: 45.0, stock: 150, status: "In Stock", image: "/corn-seeds.png" },
    { id: 6, name: "Wheat Seeds", category: "Seeds", price: 38.2, stock: 12, status: "Low Stock", image: "/wheat-seeds.png" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    status: "In Stock",
    image: null as File | null,
    imagePreview: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      status: formData.status,
      image: formData.imagePreview || "/placeholder.png",
    };
    setInputs([newItem, ...inputs]);
    setFormData({ name: "", category: "", price: "", stock: "", status: "In Stock", image: null, imagePreview: "" });
    setShowForm(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b h-16 flex items-center justify-between px-8 shadow-sm">
        <Logo />
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Add New Input
        </button>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r flex flex-col">
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item, index) => {
              const isActive = item.label === "My Inputs";
              const Icon = item.icon;
              const showDivider = index === 3 || index === 8;
              return (
                <div key={item.label}>
                  <Link href={item.href} className="block">
                    <div
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all text-sm font-medium ${
                        isActive
                          ? "bg-green-600 text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                  {showDivider && <div className="border-t border-gray-200 my-2 mx-4"></div>}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
          {/* Search */}
          <div className="flex justify-between items-center mb-6 gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search your product..."
                className="w-full bg-white border text-gray-600 border-gray-300 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <button className="bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 px-4 text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer">
                All Categories
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="bg-white border border-gray-300 text-gray-700 rounded-lg py-2.5 px-4 text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer">
                All Stock Levels
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {inputs.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <Image src={item.image} alt={item.name} width={300} height={200} className="object-cover w-full h-full" />
                  </div>
                  <div
                    className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === "In Stock"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Low Stock"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-600">
                      Stock:{" "}
                      <span
                        className={`font-medium ${
                          item.stock === 0
                            ? "text-red-600"
                            : item.stock < 15
                            ? "text-orange-600"
                            : "text-gray-900"
                        }`}
                      >
                        {item.stock}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-md text-sm flex items-center justify-center gap-1 hover:bg-gray-200 transition-colors cursor-pointer">
                      <Pencil className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="bg-red-100 text-red-700 p-2 rounded-md hover:bg-red-200 transition-colors cursor-pointer">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Modal for Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-lg font-bold mb-4">Add New Input</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                placeholder="Category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
                className="border rounded-lg px-3 py-2"
              />
              <input
                type="number"
                placeholder="Price"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
                className="border rounded-lg px-3 py-2"
              />
              <input
                type="number"
                placeholder="Stock"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                required
                className="border rounded-lg px-3 py-2"
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="border rounded-lg px-3 py-2"
              >
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  if (file) {
                    setFormData({
                      ...formData,
                      image: file,
                      imagePreview: URL.createObjectURL(file),
                    });
                  }
                }}
                className="border rounded-lg px-3 py-2"
              />
              {formData.imagePreview && (
                <Image
                  src={formData.imagePreview}
                  alt="Preview"
                  width={200}
                  height={150}
                  className="rounded-md border"
                />
              )}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
