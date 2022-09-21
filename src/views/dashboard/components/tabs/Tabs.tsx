import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import './tabs.scss'

export type tabsProps = {
    tabs: object[]
    activeTab: number
    setActiveTab: (tab: number) => void
}

export const Tabs : FC<tabsProps> = ({tabs, activeTab, setActiveTab}) => {

    const style = {
            transform: `translateX(${activeTab * 8.5}rem)`,
            transition: 'transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
        }
    

  return (
    <div className="segmented-control rounded-t-xl">
      {tabs.map((tab : any, index : number) => (
        <Link key={index} to={tab.path} >
            <button 
                style={activeTab === index ? { color: 'var(--primary)' } : {}}
                className="segmented-control__tab"
                onClick={() => setActiveTab(index)}
            >
                {tab.name}
            </button>
        </Link>
        ))}
      
      <div 
      style={style}
      className="segmented-control__color  rounded-t-xl"></div>
    </div>
  )
}
