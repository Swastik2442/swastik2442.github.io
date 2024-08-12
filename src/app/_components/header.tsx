'use client'
 
import { useSelectedLayoutSegments } from 'next/navigation'
import { Alex_Brush } from 'next/font/google'
import { siteTitle } from '../config'

const titleFont =  Alex_Brush({ weight: "400", subsets: ['latin'] });

export default function header() {
  const segments = useSelectedLayoutSegments();
  return (
    <div className="topNames">
        <div className={`leftName ${titleFont.className}`}>
            <strong>{siteTitle}</strong>
        </div>
        <div className="rightName">
            {segments.length > 0 ? segments.at(0) : "pause menu"}
        </div>
    </div>
  )
}
