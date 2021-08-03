import React, { Component, useState, useEffect } from "react";
import "./loading.css";

const MiniLoading = () => {
  return (
    <div className="flex justify-center mt-40">
      <div className="loading">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </div>
  );
};

export default MiniLoading;
