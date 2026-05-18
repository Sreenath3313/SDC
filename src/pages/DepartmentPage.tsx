import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDepartmentBySlug } from '../data/departments';
import DepartmentAbout from '../components/department/DepartmentAbout';
import DepartmentFaculty from '../components/department/DepartmentFaculty';
import DepartmentStudents from '../components/department/DepartmentStudents';
import DepartmentGallery from '../components/department/DepartmentGallery';
import DepartmentCourseStructure from '../components/department/DepartmentCourseStructure';
import DepartmentProjects from '../components/department/DepartmentProjects';

const sidebarItems = [
    { key: 'about', label: 'About Us', icon: '' },
    { key: 'course', label: 'Course Structure', icon: '' },
    { key: 'program', label: 'Program', icon: '' },
    { key: 'faculty', label: 'Faculty', icon: '' },
    { key: 'students', label: 'Students', icon: '' },
    { key: 'gallery', label: 'Gallery', icon: '' },
];

const DepartmentPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const dept = getDepartmentBySlug(slug || '');
    const [activeTab, setActiveTab] = useState('about');

    if (!dept) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="font-serif text-5xl font-semibold mb-4 text-neutral-dark">
                        Department Not Found
                    </h1>
                    <Link to="/" className="font-semibold text-primary">
                        ← Return to Homepage
                    </Link>
                </div>
            </div>
        );
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return <DepartmentAbout dept={dept} />;
            case 'faculty':
                return <DepartmentFaculty dept={dept} />;
            case 'course':
                return <DepartmentCourseStructure dept={dept} />;
            case 'program':
                return <DepartmentProjects dept={dept} />;
            case 'students':
                return <DepartmentStudents />;
            case 'gallery':
                return <DepartmentGallery dept={dept} />;
            default:
                return <DepartmentAbout dept={dept} />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Top Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-primary/10 bg-white/90">
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex items-center justify-between h-[68px]">
                        <div className="flex items-center gap-4">
                            <Link to="/" className="font-serif text-2xl font-bold text-primary">
                                SRIT
                            </Link>
                            <span className="hidden sm:block w-px h-6 bg-neutral-dark/15" />
                            <span className="hidden sm:block text-sm uppercase text-neutral-dark/60">
                                {dept.code} Department
                            </span>
                        </div>
                        <Link to="/departments" className="inline-flex text-sm sm:text-base font-medium text-primary">
                            ← All Departments
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="pt-[68px] flex">
                {/* Sidebar */}
                <aside className="hidden lg:flex flex-col fixed top-[68px] left-0 bottom-0 w-[270px] z-30 overflow-y-auto bg-white border-r border-primary/10">
                    <div className="px-6 pt-8 pb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase bg-primary/15 text-neutral-dark">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {dept.code}
                        </div>

                        <h2 className="font-serif text-2xl font-semibold mt-4 text-neutral-dark leading-tight">
                            {dept.name}
                        </h2>
                    </div>

                    <div className="mx-6 mb-4 border-t border-neutral-dark/10" />

                    <nav className="px-4 flex-1">
                        <p className="px-3 text-xs uppercase mb-4 text-neutral-dark/50">
                            Menu
                        </p>

                        {sidebarItems.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => setActiveTab(item.key)}
                                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all duration-300 ${
                                    activeTab === item.key 
                                        ? 'bg-primary text-white font-semibold shadow-lg shadow-primary/20' 
                                        : 'bg-transparent text-neutral-dark/90 hover:bg-primary/10 hover:text-primary font-normal'
                                }`}
                            >
                                <span className="text-[15px]">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    {/* Bottom Stats */}
                    <div className="px-6 py-6 mt-auto border-t border-neutral-dark/10">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-lg p-3 bg-primary/10">
                                <p className="text-xs uppercase mb-1 text-neutral-dark/60">Faculty</p>
                                <p className="text-base font-semibold text-primary">{dept.stats.faculty}</p>
                            </div>
                            <div className="rounded-lg p-3 bg-primary/10">
                                <p className="text-xs uppercase mb-1 text-neutral-dark/60">Labs</p>
                                <p className="text-base font-semibold text-primary">{dept.stats.labs}</p>
                            </div>
                            <div className="rounded-lg p-3 bg-primary/10">
                                <p className="text-xs uppercase mb-1 text-neutral-dark/60">Students</p>
                                <p className="text-base font-semibold text-primary">{dept.stats.students}</p>
                            </div>
                            <div className="rounded-lg p-3 bg-primary/10">
                                <p className="text-xs uppercase mb-1 text-neutral-dark/60">Placement</p>
                                <p className="text-base font-semibold text-primary">{dept.stats.placement}</p>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:ml-[270px] min-h-screen">
                    <section className="relative overflow-hidden min-h-[300px] lg:min-h-[400px] flex items-end">
                        <div className="absolute inset-0">
                            <img src={dept.image} alt={dept.fullName} className="w-full h-full object-cover" />
                            {/* Replaced the harsh orange with a premium cinematic dark gradient for text legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </div>
                        <div className="relative z-10 px-4 sm:px-6 py-10 sm:py-12 lg:px-12 lg:py-16 w-full">
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                                {dept.fullName}
                            </h1>
                            <p className="text-white/90 text-lg lg:text-xl mt-4 max-w-3xl font-medium">
                                {dept.tagline}
                            </p>
                        </div>
                    </section>

                    <div className="lg:hidden px-4 sm:px-6 pt-5 sm:pt-6 -mb-2 sm:-mb-4 overflow-x-auto no-scrollbar">
                        <div className="flex gap-2 min-w-max pb-2">
                            {sidebarItems.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => setActiveTab(item.key)}
                                    className={`px-5 py-3 rounded-full text-[14px] font-semibold whitespace-nowrap transition-all duration-300 ${
                                        activeTab === item.key 
                                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                            : 'bg-white text-neutral-600 border border-neutral-200'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="px-4 sm:px-6 py-8 sm:py-10">
                        {renderContent()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DepartmentPage;
