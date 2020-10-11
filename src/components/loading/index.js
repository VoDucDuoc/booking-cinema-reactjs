import React from "react";
import { Spinner } from "react-bootstrap";
export default function Loading() {
  return (
    <div className="wrap-spinner">
      <div className="spinner">
        <Spinner animation="border" variant="danger" />
      </div>
    </div>
  );
}
