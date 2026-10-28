/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, NavTabId } from './components/Navbar';
import { CountyOverview } from './components/CountyOverview';
import { SchoolMatrix } from './components/SchoolMatrix';
import { SchoolDetailCard } from './components/SchoolDetailCard';
import { EarlyWarningRadar } from './components/EarlyWarningRadar';
import { KidmapStrategyView } from './components/KidmapStrategyView';
import { ImprovementSimulator } from './components/ImprovementSimulator';
import { ReportPrintView } from './components/ReportPrintView';
import { focusSchoolsData } from './data/schoolsData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTabId>('overview');
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>('xiulin');

  const selectedSchool =
    focusSchoolsData.find((s) => s.id === selectedSchoolId) || focusSchoolsData[0];

  const handleSelectSchool = (schoolId: string) => {
    setSelectedSchoolId(schoolId);
    setCurrentTab('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateTab = (tab: NavTabId) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Bar Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleNavigateTab}
        selectedSchoolName={selectedSchool.name}
      />

      {/* Main Content Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentTab === 'overview' && (
          <CountyOverview onNavigate={handleNavigateTab} />
        )}

        {currentTab === 'matrix' && (
          <SchoolMatrix onSelectSchool={handleSelectSchool} />
        )}

        {currentTab === 'detail' && (
          <SchoolDetailCard
            selectedSchoolId={selectedSchoolId}
            onSelectSchool={(id) => setSelectedSchoolId(id)}
          />
        )}

        {currentTab === 'early_warning' && (
          <EarlyWarningRadar onSelectSchool={handleSelectSchool} />
        )}

        {currentTab === 'strategy' && <KidmapStrategyView />}

        {currentTab === 'simulator' && <ImprovementSimulator />}

        {currentTab === 'report' && (
          <ReportPrintView onBack={() => handleNavigateTab('overview')} />
        )}
      </main>

      {/* Subtle, Professional Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 no-print mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>花蓮縣國中教育會考英數學力精進深度分析系統</span>
            <span aria-hidden="true">·</span>
            <span>花蓮縣政府教育處 ＆ 心測中心 KIDMAP 診斷</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://sohofly.github.io/teaching-diagnosis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors hover:underline"
            >
              KIDMAP 作答診斷平台
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNavigateTab('report')}
              className="hover:text-slate-900 transition-colors"
            >
              列印會議簡報
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
