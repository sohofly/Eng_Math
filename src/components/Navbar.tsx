import React from 'react';
import { FileText, Printer, Sparkles, AlertCircle } from 'lucide-react';

export type NavTabId = 'overview' | 'matrix' | 'detail' | 'early_warning' | 'strategy' | 'simulator' | 'report';

interface NavbarProps {
  currentTab: NavTabId;
  onSelectTab: (tab: NavTabId) => void;
  selectedSchoolName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, selectedSchoolName }) => {
  const navItems: { id: NavTabId; label: string }[] = [
    { id: 'overview', label: '全縣總覽與差距' },
    { id: 'matrix', label: '13校多維矩陣' },
    { id: 'detail', label: selectedSchoolName ? `學校診斷：${selectedSchoolName}` : '個別學校診斷' },
    { id: 'early_warning', label: '116會考預警雷達' },
    { id: 'strategy', label: '八大精進策略與KIDMAP' },
    { id: 'simulator', label: '政策成效模擬器' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('overview')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap block group-hover:text-blue-600 transition-colors">
                花蓮縣國中學力精進數據分析
              </span>
            </button>
            <span className="hidden xl:inline text-xs text-slate-400">·</span>
            <span className="hidden xl:inline text-xs text-slate-500 font-medium whitespace-nowrap">
              英數重點學校工作會議
            </span>
          </div>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 overflow-x-auto py-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onSelectTab('report')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                currentTab === 'report'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>會議彙整與列印</span>
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Horizontal Navigation Scroll */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-100 scrollbar-none">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
