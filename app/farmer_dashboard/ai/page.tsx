"use client";
import React, { useState } from "react";
import {
  LayoutGrid,
  BookOpen,
  MessageSquare,
  Settings,
  LogOut,
  AlertTriangle,
  CheckCircle,
  Eye,
  Bookmark,
  Droplets,
  FilePlus,
  BarChart2,
  ShoppingCart,
  User,
  Phone,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { label: "Dashboard", href: "/farmer_dashboard", icon: CheckCircle },
  { label: "My Products", href: "/farmer_dashboard/products", icon: LayoutGrid },
  { label: "Input Request", href: "/farmer_dashboard/requests", icon: FilePlus },
  { label: "AI Tips", href: "/farmer_dashboard/ai", icon: MessageSquare },
  { label: "Market Analytics", href: "/farmer_dashboard/market_analysis", icon: BarChart2 },
  { label: "Message", href: "/messages", icon: Mail },
  { label: "Orders", href: "/orders", icon: ShoppingCart },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Contact", href: "/contact", icon: Phone },
  { label: "Settings", href: "/settings", icon: Settings },
  { label: "Logout", href: "/logout", icon: LogOut },
];

const tips = [
  {
    title: "Maize Planting Tips",
    date: "Jan 15, 2024",
    description:
      "Igihe cy’iterambere rya ibigori ni ukwezi kwa mbere. Kuragiza ubutaka bwawe kandi ushyire ifumbire y’ibinyobwa mbere yo gutera. Menya ko ubutaka bufite ubushyuhe bukwiye.",
    views: 234,
    tags: ["Planting", "Maize"],
    color: "yellow",
    icon: BookOpen,
  },
  {
    title: "Bean Fertilizer Application",
    date: "Jan 14, 2024",
    description:
      "Ibibabi bifite ubushobozi bwo gufata azote mu kirere. Ntushyire ifumbire nyinshi y’azote ariko ushyire phosphorous na potassium. Byongera umusaruro w’ibibabi byawe.",
    views: 189,
    tags: ["Fertilizing", "Beans"],
    color: "green",
    icon: CheckCircle,
  },
  {
    title: "Potato Pest Control",
    date: "Jan 13, 2024",
    description:
      "Reba neza amababi y’ibirayi kugira ngo umenye udukoko duto. Koresha imiti y’ibinyobwa cyangwa ibikoresho by’ibidukikije. Kuragiza ibinyobwa byawe byose kugira ngo utakabije.",
    views: 156,
    tags: ["Pest Control", "Potatoes"],
    color: "orange",
    icon: AlertTriangle,
  },
  {
    title: "Water Management for Maize",
    date: "Jan 12, 2024",
    description:
      "Ibigori bikenera amazi menshi mu gihe cy’iterambere. Menya ko ubutaka bufite ubushyuhe bukwiye kandi utitonze amazi menshi cyane. Koresha uburyo bwo kubika amazi.",
    views: 203,
    tags: ["Irrigation", "Maize"],
    color: "blue",
    icon: Droplets,
  },
];

export default function AiDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b h-16 flex items-center justify-between px-4 sm:px-6 shadow-sm">
        <span className="font-extrabold text-xl sm:text-2xl tracking-tight">
          <span className="text-green-700">Umuhinzi</span>
          <span className="text-black">Link</span>
        </span>
        <button
          aria-label="Toggle menu"
          className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <aside
          className={`bg-white border-r fixed top-0 sm:top-0 left-0 h-screen overflow-y-auto w-56 z-40 transition-transform transform sm:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ paddingTop: "4rem" }} // space for header overlay
        >
          <nav className="flex-1 px-4 py-4 space-y-2">
            {menuItems.map((m, index) => {
              const isActive = m.label === "AI Tips";
              const showDivider = index === 4 || index === 8;
              return (
                <div key={m.label}>
                  <Link href={m.href} className="block">
                    <div
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all text-sm font-medium ${
                        isActive
                          ? "bg-green-600 text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <m.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                      <span>{m.label}</span>
                    </div>
                  </Link>
                  {showDivider && <div className="border-t border-gray-200 my-2 mx-3"></div>}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-5 overflow-auto sm:ml-[13rem] space-y-6 bg-gray-50">
          {/* Search & Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <input
              type="text"
              placeholder="Search Here..."
              className="border border-gray-300 rounded-lg py-2 px-3 text-sm flex-1 min-w-[200px] text-gray-700 bg-white"
            />
            <select className="border border-gray-300 rounded-lg py-2 px-3 text-gray-900 text-sm bg-white">
              <option>By Crop</option>
            </select>
            <select className="border border-gray-300 rounded-lg py-2 px-3 text-gray-900 text-sm bg-white">
              <option>By Date</option>
            </select>
            <select className="border border-gray-300 rounded-lg py-2 px-3 text-gray-900 text-sm bg-white">
              <option>By Category</option>
            </select>
          </div>

          {/* Weather Alert */}
          <div className="rounded-lg shadow-sm mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white flex flex-col sm:flex-row sm:items-center px-6 py-4 justify-between gap-3">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              <span className="font-semibold">Urgent Weather Alert</span>
              <span className="text-sm">
                Imvura nyinshi itegerejwe mu minsi 3 iri imbere. Kuragiza ibigori byawe kandi witonze udukoko.
              </span>
            </div>
            <span className="font-bold text-sm">Now 15:30</span>
          </div>

          {/* Main Content Grid */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tips Section */}
            <div className="flex-1 space-y-4">
              {tips.map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col sm:flex-row items-start gap-4 p-5"
                >
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full ${
                      tip.color === "yellow"
                        ? "bg-yellow-100"
                        : tip.color === "green"
                        ? "bg-green-100"
                        : tip.color === "orange"
                        ? "bg-orange-100"
                        : "bg-blue-100"
                    }`}
                  >
                    <tip.icon
                      className={`w-5 h-5 ${
                        tip.color === "yellow"
                          ? "text-yellow-600"
                          : tip.color === "green"
                          ? "text-green-600"
                          : tip.color === "orange"
                          ? "text-orange-600"
                          : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{tip.title}</span>
                    </div>
                    <div className="text-xs text-gray-500 mb-2">{tip.date}</div>
                    <div className="text-gray-700 text-sm mb-3">{tip.description}</div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tip.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-1 rounded ${
                            tip.color === "yellow"
                              ? "bg-yellow-100 text-yellow-700"
                              : tip.color === "green"
                              ? "bg-green-100 text-green-700"
                              : tip.color === "orange"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 gap-2">
                      <Eye className="w-4 h-4" /> {tip.views} views
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-green-600 self-start sm:self-auto">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-80 flex flex-col gap-6">
              {/* AI Assistant */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-semibold text-gray-900">Ask AI Assistant</span>
                </div>
                <input
                  className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm mb-3 placeholder-gray-500"
                  placeholder="Baza ikibazo cyawe mu Kinyarwanda..."
                />
                <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg w-full text-sm">
                  Send
                </button>
                <div className="text-xs text-gray-500 mt-2">⚪ AI will respond in Kinyarwanda</div>
              </div>

              {/* Saved Tips */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                    <Bookmark className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-semibold text-gray-900">Saved Tips</span>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700 flex-1">Bean Fertilizer</span>
                    <span className="text-xs text-gray-500">Jan 14</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-yellow-100 rounded flex items-center justify-center">
                      <BookOpen className="w-3 h-3 text-yellow-600" />
                    </div>
                    <span className="text-sm text-gray-700 flex-1">Maize Planting</span>
                    <span className="text-xs text-gray-500">Jan 10</span>
                  </div>
                </div>
                <Link href="#" className="text-green-600 text-sm hover:underline">
                  View All Saved Tips
                </Link>
              </div>

              {/* Your Progress */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <div className="font-semibold text-gray-900 mb-4">Your Progress</div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Tips Read This Week</span>
                    <span className="text-lg font-bold text-green-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Tips Bookmarked</span>
                    <span className="text-lg font-bold text-green-600">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">AI Questions Asked</span>
                    <span className="text-lg font-bold text-green-600">15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
