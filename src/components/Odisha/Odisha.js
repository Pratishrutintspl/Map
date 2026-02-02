import React, { useState, useRef } from "react";
import odishaData from "../data/odishaData.js";
import "./OdishaBook.css";

/* ========= MAP PANEL ========= */

function MapPanel() {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const start = useRef({ x: 0, y: 0 });

  const zoomIn = () => setScale(s => Math.min(s + 0.2, 3));
  const zoomOut = () => setScale(s => Math.max(s - 0.2, 0.6));

  const onWheel = (e) => {
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  const onMouseDown = (e) => {
    dragging.current = true;
    start.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    setPos({
      x: e.clientX - start.current.x,
      y: e.clientY - start.current.y
    });
  };

  const stopDrag = () => (dragging.current = false);

  return (
    <div className="mapWrap" onWheel={onWheel}>

      <div className="controls">
        <button onClick={zoomIn} className="btnUI">+</button>
        <button onClick={zoomOut} className="btnUI">−</button>
        <button onClick={() => {setScale(1); setPos({x:0,y:0});}} className="btnUI">
          Reset
        </button>
      </div>

      <div
        className="viewport"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        style={{ cursor: dragging.current ? "grabbing" : "grab" }}
      >
        <img
          src={odishaData.map}
          alt="Odisha Map"
          draggable={false}
          className="mapImg"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`
          }}
        />
      </div>
    </div>
  );
}

/* ========= CONTENT PANEL ========= */

function RightPanel() {
  return (
    <div className="contentWrap">

      <h2 className="stateTitle">{odishaData.name}</h2>

      <p className="stateDesc">
        {odishaData.description}
      </p>

      <div className="infoGrid">

        <div className="infoCard">
          <span>Formation Day</span>
          <strong>{odishaData.formationDay}</strong>
        </div>

        <div className="infoCard">
          <span>Old Names</span>
          <strong>{odishaData.oldNames}</strong>
        </div>

        <div className="infoCard">
          <span>Capital</span>
          <strong>{odishaData.capital}</strong>
        </div>

        <div className="infoCard">
          <span>Blocks</span>
          <strong>{odishaData.Blocks}</strong>
        </div>

        <div className="infoCard">
          <span>Tahasil</span>
          <strong>{odishaData.Tahasil}</strong>
        </div>

      </div>

    </div>
  );
}

 function ContentPanel() {
  const [activeCat, setActiveCat] = useState(null);

  return (
    <div className="readWrap mt-5">

     
      {/* ===== CATEGORY LIST ===== */}
      <h2 className="sectionHead">Study Sections</h2>

      {odishaData.categories.map(cat => (
    <div
      key={cat.id}
      className="sectionRow"
      onClick={() => setActiveCat(cat)}
    >
      {cat.title}
    </div>
  ))}

      {/* ===== READING MODAL ===== */}
      {activeCat && (
  <div className="readModalBg" onClick={() => setActiveCat(null)}>
    <div className="readModal" onClick={e => e.stopPropagation()}>

      <div className="modalHeader">
        <h2>{activeCat.title}</h2>
        <button
          className="closeIconBtn"
          onClick={() => setActiveCat(null)}
        >
          ✕
        </button>
      </div>

      <div className="modalContent">
        {activeCat.items.map((it, i) => (
          <div key={i} className="factCard">
            <div className="factLabel">{it.label || "Fact"}</div>
            <div className="factValue">{it.value}</div>
          </div>
        ))}
      </div>

      <div className="modalFooter">
        <button
          className="closeBtn"
          onClick={() => setActiveCat(null)}
        >
          Close
        </button>
      </div>

    </div>
  </div>
)}


    </div>
  );
}

/* ========= MAIN LAYOUT ========= */

export default function OdishaMapZoom() {
  return (
    <div className="container">
      <div className="row">

        {/* LEFT — MAP */}
        <div className="col-md-6">
          <MapPanel />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="col-md-6">
          <RightPanel />
        </div>
 <div className="col-md-12">
          <ContentPanel />
        </div>
      </div>
    </div>
  );
}
