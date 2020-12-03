import React from "react";
import { Link } from "react-router-dom";

export const TopNav = () => {
    return (
        <div>
            <Link to="/">Home</Link><br/>
            <Link to="/lofi">Lofi</Link>
        </div>
    );
}