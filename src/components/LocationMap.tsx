"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Props = {
  lat: number;
  lng: number;
  zoom?: number;
  logoSrc?: string;
};

export default function LocationMap({
  lat,
  lng,
  zoom = 14,
  logoSrc = "/images/logo.png",
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [lat, lng],
      zoom,
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    // Custom logo marker — bottom-center of the icon is anchored to the coordinate
    const icon = L.divIcon({
      className: "casabama-logo-marker",
      html: `
        <div style="display:flex;flex-direction:column;align-items:center;">
          <div style="
            width:56px;height:56px;border-radius:9999px;
            background:#fff;border:3px solid #fff;
            box-shadow:0 4px 12px rgba(0,0,0,0.25);
            overflow:hidden;display:flex;align-items:center;justify-content:center;
          ">
            <img src="${logoSrc}" alt="caSabama"
              style="width:100%;height:100%;object-fit:contain;" />
          </div>
          <div style="width:2px;height:14px;background:#44403c;"></div>
          <div style="width:6px;height:6px;border-radius:9999px;background:#44403c;margin-top:-1px;"></div>
        </div>
      `,
      iconSize: [56, 80],
      iconAnchor: [28, 80], // bottom-center sticks to the coordinate
    });

    L.marker([lat, lng], { icon }).addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [lat, lng, zoom, logoSrc]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ background: "#f5f5f4" }}
    />
  );
}
