import React, { useState } from 'react';
import { CONTACT_TRACK_RECORDS } from '../data/portfolioData';

export const ContactProfileScreen: React.FC = () => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = (docName: string) => {
    setDownloadNotice(`${docName} 다운로드가 준비되었습니다.`);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 4000);
  };

  return (
    <main className="flex-grow w-full max-w-[2560px] mx-auto px-6 md:px-12 lg:px-20 pt-[140px] pb-[160px]">
      {/* Toast Feedback */}
      {downloadNotice && (
        <div className="fixed top-24 right-6 z-50 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-xs font-mono px-4 py-3 rounded shadow-lg border border-neutral-700 flex items-center space-x-2 animate-fade-in">
          <span className="material-symbols-outlined text-[16px]">check_circle</span>
          <span>{downloadNotice}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="mb-14 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-200 dark:border-neutral-800 pb-8 gap-4">
          <div className="space-y-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              Studio Dossier &amp; Inquiries
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 uppercase">
              Contact &amp; Profile
            </h1>
          </div>
          <div className="text-left md:text-right">
            <span className="inline-block px-3 py-1 text-[10px] font-medium tracking-[0.15em] uppercase border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
              지명원 / 2024–2025 Edition
            </span>
            <p className="text-[11px] tracking-wide text-neutral-400 dark:text-neutral-500 mt-2">
              ARCHIONE Architectural Practice &amp; Spatial Research
            </p>
          </div>
        </div>
      </div>

      {/* Main 2-Column Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full pt-4">
        {/* Left Column (5 Cols) */}
        <div className="lg:col-span-5 space-y-12 md:space-y-16">
          {/* 01 / Studio Ethos */}
          <section className="space-y-4">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
              01 / Studio Ethos
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 font-light">
              ARCHIONE is an architectural practice and spatial laboratory committed to rigorous minimalist structure, tectonic clarity, and sensory materiality. We interrogate the interplay between monolithic volume, daylight orientation, and programmatic precision across civic buildings, residential galleries, and corporate pavilions.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 font-light">
              공간의 본질과 구축적 절제를 탐구하며, 감각적인 비례와 미니멀한 물성을 바탕으로 지속 가능한 건축적 가치를 구현합니다.
            </p>
          </section>

          {/* 02 / Studio Location */}
          <section className="space-y-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
              02 / Studio Location
            </h2>
            <div className="space-y-4 text-sm font-light text-neutral-700 dark:text-neutral-300">
              <div>
                <p className="font-medium text-neutral-900 dark:text-neutral-100">Seoul Headquarters</p>
                <p className="text-neutral-500 dark:text-neutral-400 mt-1">
                  4F, 88 Dosan-daero 45-gil, Gangnam-gu, Seoul, 06021, Republic of Korea
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">
                  서울특별시 강남구 도산대로45길 88 아키원 빌딩 4층
                </p>
              </div>
              <div className="pt-2">
                <p className="text-xs text-neutral-400 uppercase tracking-wider font-mono">Transit Guide</p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                  Apgujeong Rodeo Station (Suin-Bundang Line, Exit 5) · Walk 6 min<br />
                  Valet parking available at building entrance
                </p>
              </div>
            </div>
          </section>

          {/* 03 / Inquiries & Consultation */}
          <section className="space-y-6 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
              03 / Inquiries &amp; Consultation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-light">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                  Telephone
                </span>
                <span className="font-medium text-neutral-800 dark:text-neutral-200 font-mono">
                  +82 (0)2 548 7720
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                  Facsimile
                </span>
                <span className="font-medium text-neutral-800 dark:text-neutral-200 font-mono">
                  +82 (0)2 548 7725
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                  General Email
                </span>
                <a className="font-medium text-neutral-800 dark:text-neutral-200 hover:underline font-mono" href="mailto:info@archione.com">
                  info@archione.com
                </a>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                  Press &amp; Lecture
                </span>
                <a className="font-medium text-neutral-800 dark:text-neutral-200 hover:underline font-mono" href="mailto:press@archione.com">
                  press@archione.com
                </a>
              </div>
            </div>

            <div className="p-5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
                Project Consultation Notice
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed font-light">
                새로운 프로젝트 기획, 현상설계, 건축/공간 총괄 디렉팅 상담은 사전 예약제로 진행됩니다. 유선 또는 전용 양식을 통해 의뢰서를 접수해 주시면 담당 건축가가 검토 후 회신 드립니다.
              </p>
            </div>
          </section>
        </div>

        {/* Right Column (7 Cols) */}
        <div className="lg:col-span-7 space-y-12">
          {/* 04 / Credentials & Dossier */}
          <section className="space-y-4">
            <div className="flex items-baseline justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
                04 / Credentials &amp; Dossier (지명원)
              </h2>
              <span className="text-[11px] text-neutral-400 font-mono tracking-wider">VER. 2024.11</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
              아키원건축사사무소의 공식 지명원 문서 세트입니다. 회사개요, 건축사 면허 및 등록증명, 조직 체계, 공공 및 민간 실적증명원(건축, 인테리어, 전시파빌리온), 수상 이력을 공인 형식으로 열람 및 다운로드하실 수 있습니다.
            </p>
          </section>

          {/* Download Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors flex flex-col justify-between space-y-6 rounded">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    ARCHIVE DOSSIER
                  </span>
                  <span className="text-[10px] bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-neutral-600 dark:text-neutral-300 uppercase font-mono">
                    PDF · 34.8 MB
                  </span>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
                  2024–2025 Architectural Practice Portfolio &amp; Dossier
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
                  전체 완공작품 도면 및 상세 사진, 공간철학, 수상연보가 수록된 메인 공식 지명원 도록.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] text-neutral-400 font-mono">Updated 2024.10.15</span>
                <button
                  onClick={() => handleDownload('2024–2025 메인 공식 지명원 도록')}
                  className="text-[11px] font-medium tracking-wider uppercase flex items-center gap-1.5 text-neutral-900 dark:text-neutral-100 hover:opacity-60 transition-opacity cursor-pointer font-mono"
                >
                  <span className="material-symbols-outlined text-[15px]">download</span>
                  Download
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-100 transition-colors flex flex-col justify-between space-y-6 rounded">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    CERTIFICATE PACK
                  </span>
                  <span className="text-[10px] bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 text-neutral-600 dark:text-neutral-300 uppercase font-mono">
                    PDF · 8.4 MB
                  </span>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
                  Professional Licenses &amp; Registration Certificates
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-light">
                  건축사업무신고필증, 사업자등록증, 대한건축사협회 정회원 증명원, 전문건설업 면허 사본.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-[10px] text-neutral-400 font-mono">Certified Copies</span>
                <button
                  onClick={() => handleDownload('전문 자격 및 면허 증명원 팩')}
                  className="text-[11px] font-medium tracking-wider uppercase flex items-center gap-1.5 text-neutral-900 dark:text-neutral-100 hover:opacity-60 transition-opacity cursor-pointer font-mono"
                >
                  <span className="material-symbols-outlined text-[15px]">download</span>
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* 05 / Representative Track Record */}
          <section className="space-y-4 pt-6">
            <div className="flex items-baseline justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
                05 / Representative Track Record (실적 요약)
              </h2>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
                2020–2024 Selected Works
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse min-w-[500px]">
                <thead className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 border-b border-neutral-200 dark:border-neutral-800">
                  <tr>
                    <th className="py-2.5 font-normal">Year</th>
                    <th className="py-2.5 font-normal">Project Name</th>
                    <th className="py-2.5 font-normal">Typology</th>
                    <th className="py-2.5 font-normal">Location</th>
                    <th className="py-2.5 font-normal text-right">Scale / Area</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-900 font-light text-neutral-700 dark:text-neutral-300">
                  {CONTACT_TRACK_RECORDS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                      <td className="py-3 font-mono text-neutral-400">{row.year}</td>
                      <td className="py-3 font-medium text-neutral-900 dark:text-neutral-100">
                        {row.projectName}
                      </td>
                      <td className="py-3">{row.typology}</td>
                      <td className="py-3">{row.location}</td>
                      <td className="py-3 text-right font-mono">{row.scaleArea}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* RFP Request Card */}
          <div className="p-6 border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                Request Full Project Dossier or RFP Package
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                발주처 사전 자격심사(PQ)용 맞춤형 지명원 및 세부 견적 포트폴리오를 별도로 송부해 드립니다.
              </p>
            </div>
            <a
              className="px-4 py-2 text-xs font-medium uppercase tracking-wider bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 hover:opacity-80 transition-opacity whitespace-nowrap font-mono"
              href="mailto:project@archione.com?subject=RFP%20Request%20-%20ARCHIONE"
            >
              Request Dossier
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
