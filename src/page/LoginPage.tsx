import React from "react";
import Login from "../module/login";
import { MusicLogo } from "../component/ui/svg";

function LoginPage() {
  return (
    <div className="bg-gray-900 flex items-center justify-center h-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center items-center  mb-6">
          <MusicLogo />
        </div>
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
