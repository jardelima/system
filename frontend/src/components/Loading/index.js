import React from "react";

export default function Loading() {
    return (
        <div className="flex items-center justify-center fixed w-screen h-screen z-10 bg-loading">
            <div className="w-12 h-12 border-4 border-white border-b-green rounded-full inline-block box-border animate-spin relative z-20"></div>
        </div>
    );
}
