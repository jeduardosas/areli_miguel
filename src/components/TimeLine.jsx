import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'

const TimeLine = () => {
  const protocol = [
    {
      id:1,
      time:'19:00 PM',
      name:'Recepción y Ceremonia Civil',
      icon:'rings_white',
      color:'var(--color_principal)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:2,
      time:'20:00 PM',
      name:'protocolo',
      icon:'drinking_white',
      color:'var(--color_principal)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:3,
      time:'21:00 PM',
      name:'buen provecho',
      icon:'cutlery_white',
      color:'var(--color_principal)',
      textColor:'rgb(218 167 88)'
    },

    {
      id:4,
      time:'22:00 PM',
      name:'hasta que el cuerpo aguante',
      icon:'music_white',
      color:'var(--color_principal)',
      textColor:'rgb(218 167 88)'
    },
  ]
  return (
    <div className='timeline'>
      <h3 className='timeline-title-cont'>Protocolo</h3>
      <VerticalTimeline
      lineColor={'rgb(218 167 88)'}
      >
        {
          protocol.map(item=>(
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work custom-text"
              contentStyle={
                { background: `${item.color}`, 
                  color:`${item.textColor}`, 
                  marginRight:'10px',
                  padding:'10px', 
                  display:'flex',
                  flexDirection:'column', 
                  alignItems:'center', 
                  justifyContent:'center' }}
              contentArrowStyle={
                { borderRight: `7px solid ${item.color}`}}
              date={`${item.time}`}
              dateClassName='custom-date-color'
              iconStyle={
                { background: `${item.color}`, 
                boxShadow:`0 0 0 4px ${item.color}`}} 
              icon={
                <img 
                  src={`/img/icons/${item.icon}.svg`} 
                  alt={`ico-${item.icon}`} className='custom-icon'/>}
            >
            <h3 className="vertical-timeline-element-title timeline-title">{item.name}</h3>
            </VerticalTimelineElement>
          ))
        }

      </VerticalTimeline>
    </div>
  )
}

export default TimeLine