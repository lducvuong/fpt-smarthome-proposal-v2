export function RoomVisual({ type, active=false }: { type:string; active?:boolean }) {
  return <div className={`room-visual ${type} ${active?'active':''}`} aria-label="Phối cảnh minh họa">
    <div className="window"><span></span><span></span></div><div className="ceiling-light"></div><div className="sofa"></div><div className="table"></div><div className="plant">♧</div><div className="wall-light"></div>
  </div>;
}
