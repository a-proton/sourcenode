"use client";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function Layout({ children }) {
  return (
    <>
      {" "}
      <Provider store={store}>
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8">
            {children}
          </div>
        </div>
      </Provider>
    </>
  );
}