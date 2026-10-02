'use client';
import { useState } from 'react';
import { RoomVisual } from './RoomVisual';

const rooms = [
  ['Phòng khách','living'],['Bếp & bàn ăn','kitchen'],['Phòng master','master']
] as const;

export function InteractiveDemo(){
  const [room,setRoom]=useState(0); const [scenario,setScenario]=useState<'home'|'sleep'|'away'>('home'); const [light,setLight]=useState(true); const [curtain,setCurtain]=useState(true);
  const scenarioText={home:'Bật nhóm đèn tiếp khách, mở rèm theo lớp đã chốt.',sleep:'Tắt đèn chính, giữ đèn ngủ đã chọn; đóng rèm master.',away:'Tắt các nhóm đèn đã chọn và đóng rèm phòng khách/master; camera tiếp tục quan sát.'};
  return <div className="demo-grid"><div className="demo-stage"><RoomVisual type={rooms[room][1]} active={light}/><div className="demo-badge">PHỐI CẢNH MINH HỌA</div><div className="demo-state">{light?'Đèn đang bật':'Đèn đang tắt'} · {curtain?'Rèm đang mở':'Rèm đang đóng'}</div></div>
    <div className="demo-panel"><div className="tabs">{rooms.map((r,i)=><button key={r[0]} className={room===i?'selected':''} onClick={()=>setRoom(i)}>{r[0]}</button>)}</div>
      <div className="scenario-row">{[['home','☀ Về nhà'],['sleep','☾ Đi ngủ'],['away','↗ Ra ngoài']].map(([k,l])=><button key={k} className={scenario===k?'scenario active':''} onClick={()=>{setScenario(k as typeof scenario); setLight(k==='home'); setCurtain(k==='home')}}>{l}</button>)}</div>
      <div className="control-card"><div className="control-title"><b>{rooms[room][0]}</b><span className="status">● {light?'Đang bật':'Đang tắt'}</span></div><p>{scenarioText[scenario]}</p><div className="control-actions"><button onClick={()=>setLight(v=>!v)}>💡 {light?'Tắt đèn':'Bật đèn'}</button><button onClick={()=>setCurtain(v=>!v)}>▤ {curtain?'Đóng rèm':'Mở rèm'}</button><button onClick={()=>{setLight(true);setCurtain(true);setScenario('home')}}>↺ Đặt lại</button></div></div>
      <div className="mini-note">Mô phỏng chỉ thay đổi giao diện, không điều khiển thiết bị thật. Các model, vị trí và khả năng gán ngữ cảnh cần xác nhận theo công trình.</div>
    </div></div>
}
