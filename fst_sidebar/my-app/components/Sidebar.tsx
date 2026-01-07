"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Settings, Menu, ChevronLeft } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', icon: <Home size={22} />, href: '/' },
        { name: 'Profile', icon: <User size={22} />, href: '/profile' },
        { name: 'Settings', icon: <Settings size={22} />, href: '/settings' },
    ];

    return (
        <aside className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
            <div className={styles.header}>
                {isExpanded && <span className={styles.logoText}>CORE</span>}
                <button className={styles.toggleBtn} onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? <ChevronLeft size={20} /> : <Menu size={20} />}
                </button>
            </div>

            <nav className={styles.nav}>
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                        >
                            <span className={styles.icon}>{item.icon}</span>
                            {isExpanded && <span className={styles.label}>{item.name}</span>}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
};

export default Sidebar;