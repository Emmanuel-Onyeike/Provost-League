/**
 * MIKOKO LEAGUE - Command Center Core Script
 * Single-Engine Mobile & Desktop Integration
 */

// 1. SELECTORS
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const mainDisplay = document.getElementById('mainDisplay'); 
const greetingElement = document.getElementById('greeting');
const viewTitle = document.getElementById('viewTitle');

// 2. DYNAMIC GREETING LOGIC
function setGreeting() {
    const hour = new Date().getHours();
    let welcome;

    if (hour >= 5 && hour < 12) welcome = "Good morning";
    else if (hour >= 12 && hour < 17) welcome = "Good afternoon";
    else if (hour >= 17 && hour < 21) welcome = "Good evening";
    else welcome = "Good night";

    if (greetingElement) {
        greetingElement.innerText = `${welcome}, User`;
    }
}

// 3. MOBILE MENU TOGGLES (single sidebar)
if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full'); // Slide in/out
        overlay.classList.toggle('hidden');           // Show/hide overlay
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    });
}


// 4. CONTENT REPOSITORY
const contentData = {
    'Overview': `
    <div class="space-y-6 md:space-y-10 animate-in fade-in zoom-in duration-500">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
                <h3 class="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white">Clinical <span class="text-purple-500">Center</span></h3>
                <p class="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Node: PROVOST_CORE_01 // Status: <span class="text-blue-400 italic">Winter Hibernation</span>
                </p>
            </div>
            <div class="w-full md:w-auto text-left md:text-right bg-purple-500/5 p-3 rounded-2xl border border-purple-500/10">
                <p class="text-[9px] text-gray-500 font-mono uppercase tracking-widest">Resumption Protocol</p>
                <div id="syncStatus" class="text-[11px] text-purple-400 font-black flex items-center md:justify-end gap-2 italic">
                    <i class="fas fa-snowflake animate-spin-slow"></i>
                    <span id="countdownTimer">MID-SEASON 2026 // JAN RELOAD</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div class="lg:col-span-2 space-y-6">
                <div class="bg-gradient-to-br from-purple-600/10 via-transparent to-transparent border border-white/10 rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-6">
                        <i class="fas fa-ribbon text-purple-500/20 text-7xl rotate-12 group-hover:rotate-0 transition-transform duration-700"></i>
                    </div>
                    
                    <div class="relative z-10">
                        <span class="px-4 py-1.5 bg-purple-600 text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-purple-600/20">Operational Break</span>
                        <h2 class="text-2xl md:text-4xl font-black italic text-white uppercase mt-6 tracking-tighter leading-tight">
                            Christmas <span class="text-purple-500">Recess</span> <br>Initiated.
                        </h2>
                        <p class="text-gray-400 text-xs md:text-sm mt-4 max-w-md font-medium leading-relaxed">
                            The Provost Cup has entered a scheduled maintenance phase for the holidays. Mid-season fixtures will resume with high-intensity synchronization in <span class="text-white font-bold">2026</span>.
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-6 bg-[#0c0c0e] border border-white/5 rounded-[2rem] hover:border-purple-500/30 transition-all group">
                        <div class="w-10 h-10 bg-purple-600/10 rounded-xl flex items-center justify-center mb-4 border border-purple-500/20 group-hover:bg-purple-600 group-hover:text-white transition-all text-purple-500">
                            <i class="fas fa-stethoscope text-sm"></i>
                        </div>
                        <h4 class="text-white font-black text-xs uppercase tracking-widest mb-2">Team Diagnostics</h4>
                        <p class="text-[10px] text-gray-500 uppercase leading-relaxed font-bold italic">
                            "Diagnostic tools locked until 2026 roster updates are finalized."
                        </p>
                    </div>
                    <div class="p-6 bg-[#0c0c0e] border border-white/5 rounded-[2rem] hover:border-purple-500/30 transition-all group">
                        <div class="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center mb-4 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-500">
                            <i class="fas fa-vials text-sm"></i>
                        </div>
                        <h4 class="text-white font-black text-xs uppercase tracking-widest mb-2">Clinical Market</h4>
                        <p class="text-[10px] text-gray-500 uppercase leading-relaxed font-bold italic">
                            "Transfer portal for Medical & Nursing units opening in Jan."
                        </p>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-[#08080a] border border-white/10 rounded-[2.5rem] p-8 h-[450px] md:h-[550px] flex flex-col shadow-2xl">
                    <h4 class="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8 flex items-center shrink-0">
                        <span class="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse shadow-[0_0_8px_#7c3aed]"></span> Activity Logs
                    </h4>
                    
                    <div class="flex-1 overflow-y-auto pr-2 space-y-8 custom-scrollbar">
                        <div class="relative pl-6 border-l border-purple-500/30">
                            <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-purple-600 rounded-full border-2 border-[#08080a]"></div>
                            <p class="text-[10px] text-purple-400 font-black uppercase italic tracking-widest">System Notice // Dec 2025</p>
                            <p class="text-xs text-white mt-2 font-bold uppercase leading-tight">Holiday Suspension Active</p>
                            <p class="text-[10px] text-gray-500 mt-2 leading-relaxed uppercase">
                                All clinical matches are on hold. Players are advised to maintain fitness levels for the 2026 restart.
                            </p>
                        </div>

                        <div class="relative pl-6 border-l border-white/10">
                            <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-zinc-800 rounded-full border-2 border-[#08080a]"></div>
                            <p class="text-[10px] text-gray-500 font-black uppercase italic tracking-widest">Update // 2026 Resumption</p>
                            <p class="text-xs text-gray-300 mt-2 font-bold uppercase leading-tight">Mid-Season Gear Up</p>
                            <p class="text-[10px] text-gray-600 mt-2 leading-relaxed uppercase">
                                Schedules for the Nursing vs Medicine cross-sector clashes are being drafted.
                            </p>
                        </div>

                        <div class="relative pl-6 border-l border-white/5 opacity-40">
                            <div class="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-zinc-900 rounded-full border-2 border-[#08080a]"></div>
                            <p class="text-[10px] text-gray-700 font-black uppercase italic tracking-widest">Archive // Sector Analysis</p>
                            <p class="text-[10px] text-gray-700 mt-2 leading-relaxed uppercase italic">
                                Historical data synchronization complete. No further logs for 2025.
                            </p>
                        </div>
                    </div>

                    <button class="w-full mt-8 py-4 bg-purple-600/10 hover:bg-purple-600 hover:text-white text-purple-400 text-[10px] uppercase font-black tracking-widest rounded-2xl transition-all duration-300 border border-purple-500/20 shadow-lg" onclick="updateView('News')">
                        View Bulletin Archive
                    </button>
                </div>
            </div>

        </div>
    </div>`,




   'Standings': `
    <div class="space-y-6 md:space-y-8 animate-in pb-10">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <h3 class="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white">Provost <span class="text-purple-500">Standings</span></h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold">Clinical Sector // 06 Team Protocol</p>
            </div>
            <div class="bg-purple-600/5 border border-purple-500/10 px-5 py-3 rounded-2xl">
                <p class="text-[9px] md:text-[10px] text-gray-400 uppercase font-bold tracking-widest flex items-center gap-2">
                    <i class="fas fa-microscope text-purple-500"></i> Current Phase: <span class="text-white font-black">Group Stage Analysis</span>
                </p>
            </div>
        </div>

        <div class="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <table class="w-full text-left border-separate border-spacing-y-2 min-w-[600px] md:min-w-full">
                <thead>
                    <tr class="text-gray-500 uppercase text-[9px] tracking-[0.2em] font-black">
                        <th class="pb-2 pl-4">Pos</th>
                        <th class="pb-2">Clinical Unit</th>
                        <th class="pb-2 text-center">MP</th>
                        <th class="pb-2 text-center text-green-500">W</th>
                        <th class="pb-2 text-center text-yellow-500">D</th>
                        <th class="pb-2 text-center text-red-500">L</th>
                        <th class="pb-2 text-center hidden md:table-cell">GF</th>
                        <th class="pb-2 text-center hidden md:table-cell">GA</th>
                        <th class="pb-2 text-center">GD</th>
                        <th class="pb-2 text-right pr-4 text-purple-500">Pts</th>
                    </tr>
                </thead>
                <tbody class="text-gray-300 font-bold uppercase italic text-xs">
                    ${[
                        { rank: 1, name: "MED-200", mp: 2, w: 2, d: 0, l: 0, gf: 4, ga: 1, gd: "+3", pts: 6 },
                        { rank: 2, name: "NUR-100", mp: 2, w: 1, d: 1, l: 0, gf: 6, ga: 3, gd: "+3", pts: 4 },
                        { rank: 3, name: "MED-100", mp: 1, w: 1, d: 0, l: 0, gf: 2, ga: 0, gd: "+2", pts: 3 },
                        { rank: 4, name: "NUR-200", mp: 2, w: 0, d: 0, l: 2, gf: 3, ga: 6, gd: "-3", pts: 0 },
                        { rank: 5, name: "MED-300", mp: 2, w: 0, d: 0, l: 2, gf: 0, ga: 3, gd: "-3", pts: 0 },
                        { rank: 6, name: "MED-400", mp: 1, w: 0, d: 0, l: 1, gf: 0, ga: 4, gd: "-4", pts: 0 }
                    ].map((team, index) => `
                        <tr class="bg-white/[0.02] border border-white/5 hover:bg-purple-600/[0.05] transition-all group">
                            <td class="py-5 pl-4 rounded-l-2xl border-y border-l border-white/5 font-mono text-gray-500">
                                ${(team.rank).toString().padStart(2, '0')}
                            </td>
                            <td class="py-5 border-y border-white/5">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 bg-purple-600/10 border border-purple-500/20 rounded-lg flex items-center justify-center text-[10px] font-black text-purple-400 group-hover:scale-110 transition-transform">
                                        ${team.name.charAt(0)}
                                    </div>
                                    <span class="tracking-tighter text-white text-sm">${team.name}</span>
                                </div>
                            </td>
                            <td class="py-5 text-center border-y border-white/5 font-mono">${team.mp}</td>
                            <td class="py-5 text-center border-y border-white/5 font-mono text-green-500/80">${team.w}</td>
                            <td class="py-5 text-center border-y border-white/5 font-mono text-yellow-500/80">${team.d}</td>
                            <td class="py-5 text-center border-y border-white/5 font-mono text-red-500/80">${team.l}</td>
                            <td class="py-5 text-center border-y border-white/5 font-mono hidden md:table-cell text-gray-500">${team.gf}</td>
                            <td class="py-5 text-center border-y border-white/5 font-mono hidden md:table-cell text-gray-500">${team.ga}</td>
                            <td class="py-5 text-center border-y border-white/5 font-mono ${team.gd.startsWith('+') ? 'text-blue-400' : 'text-orange-500'}">${team.gd}</td>
                            <td class="py-5 text-right pr-4 rounded-r-2xl border-y border-r border-white/5 font-black text-white text-sm">
                                ${team.pts}
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="mt-8 p-6 bg-purple-600/5 border border-purple-500/10 rounded-[2rem] relative overflow-hidden group hover:bg-purple-600/10 transition-colors">
            <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <i class="fas fa-heart-pulse text-5xl text-purple-500"></i>
            </div>
            <p class="text-[10px] text-purple-400 uppercase font-black tracking-widest flex items-center gap-2">
                <i class="fas fa-dna animate-pulse"></i> Statistical Summary
            </p>
            <p class="text-xs text-gray-400 mt-3 leading-relaxed uppercase font-bold italic">
                <span class="text-white">MED-200</span> maintains clinical dominance with a perfect record. 
                <br class="hidden md:block"> 
                All data nodes are synced with the <span class="text-purple-500 underline">2025 Mid-Season Archive</span>.
            </p>
        </div>
    </div>`,




    
   'Live': `
    <div class="flex flex-col items-center justify-center min-h-[500px] text-center p-6 animate-in fade-in zoom-in duration-700">
        <div class="relative w-40 h-40 mb-10 flex items-center justify-center">
            <div class="absolute inset-0 bg-purple-600/5 rounded-full animate-ping"></div>
            <div class="absolute inset-4 border border-dashed border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
            <div class="absolute inset-8 border border-purple-500/10 rounded-full"></div>
            
            <div class="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl rotate-12 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.4)] group">
                <i class="fas fa-heart-pulse text-white -rotate-12 text-2xl animate-pulse"></i>
            </div>

            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a78bfa]"></div>
        </div>

        <div class="space-y-3">
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-white">Frequency <span class="text-purple-500">Silent</span></h3>
            <div class="flex items-center justify-center gap-3">
                <span class="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                <p class="text-gray-500 font-bold text-[10px] uppercase tracking-[0.4em]">Monitoring Provost Frequencies</p>
                <span class="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
            </div>
        </div>

        <div class="flex items-center gap-1.5 h-6 mt-10">
            <div class="w-1.5 bg-purple-600/20 rounded-full h-2 animate-[pulse_1s_ease-in-out_infinite]"></div>
            <div class="w-1.5 bg-purple-600/40 rounded-full h-4 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
            <div class="w-1.5 bg-purple-600/60 rounded-full h-6 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
            <div class="w-1.5 bg-purple-500 rounded-full h-3 animate-[pulse_1.8s_ease-in-out_infinite]"></div>
            <div class="w-1.5 bg-purple-600/60 rounded-full h-6 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
            <div class="w-1.5 bg-purple-600/40 rounded-full h-4 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
            <div class="w-1.5 bg-purple-600/20 rounded-full h-2 animate-[pulse_1s_ease-in-out_infinite]"></div>
        </div>

        <div class="mt-12 w-full max-w-[340px] md:max-w-md p-8 bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
            
            <p class="text-[11px] md:text-xs text-gray-400 uppercase leading-relaxed font-bold italic">
                The <span class="text-white">Clinical Live Stream</span> is currently in holiday hibernation. 
                Real-time surgical tracking and score synchronization will resume in the <span class="text-purple-500">2026 Mid-Season Phase</span>.
            </p>
            
            <div class="mt-6 pt-6 border-t border-white/5 flex flex-col items-center gap-2">
                <p class="text-[9px] text-gray-600 uppercase tracking-widest font-black">Resumption Protocol: Active</p>
                <span class="px-4 py-1 bg-purple-600/10 border border-purple-500/20 rounded-full text-purple-400 text-[8px] font-black uppercase tracking-tighter">
                    Status: Waiting for Jan 2026
                </span>
            </div>
        </div>
    </div>`,



   

'Upcoming': `
    <div class="space-y-8 animate-in pb-10">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 px-2">
            <div>
                <h3 class="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white">Match <span class="text-purple-500">Schedules</span></h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1 flex items-center gap-2">
                    <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Status: Mid-Season Recess // 2026 Protocol
                </p>
            </div>
            <div class="px-5 py-2 bg-purple-600/10 border border-purple-500/20 rounded-full">
                <span class="text-[9px] text-purple-400 font-black uppercase tracking-widest">Post-Christmas Phase</span>
            </div>
        </div>

        <div class="grid gap-4">
            ${[
                { id: 1, home: "MED-100", away: "MED-400", time: "JAN 2026", venue: "NIL" },
                { id: 2, home: "NUR-100", away: "MED-300", time: "JAN 2026", venue: "NIL" },
                { id: 3, home: "MED-200", away: "NUR-200", time: "JAN 2026", venue: "NIL" },
                { id: 4, home: "NUR-100", away: "MED-100", time: "JAN 2026", venue: "NIL" },
            ].map((match) => `
                <div class="p-5 md:p-8 bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] transition-all hover:border-purple-500/30 group relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 w-32 h-32 bg-purple-600/5 rounded-full blur-3xl group-hover:bg-purple-600/10 transition-all"></div>
                    
                    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                        <div class="flex items-center flex-1">
                            <div class="hidden md:flex w-12 h-12 bg-purple-600/5 rounded-2xl border border-purple-500/10 items-center justify-center text-[10px] font-black text-purple-500 mr-6 italic uppercase">
                                Unit ${match.id}
                            </div>
                            <div class="flex items-center justify-between flex-1 md:justify-start md:gap-10">
                                <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-left">
                                    <span class="text-white font-black text-base md:text-xl uppercase italic tracking-tighter">${match.home}</span>
                                    <span class="text-[8px] text-gray-600 font-bold uppercase md:hidden tracking-widest">Home Unit</span>
                                </div>
                                
                                <div class="px-3 py-1 bg-white/5 rounded-lg border border-white/5">
                                    <span class="text-purple-500 font-black italic text-[10px] md:text-xs">VS</span>
                                </div>

                                <div class="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-right md:text-left">
                                    <span class="text-white font-black text-base md:text-xl uppercase italic tracking-tighter">${match.away}</span>
                                    <span class="text-[8px] text-gray-600 font-bold uppercase md:hidden tracking-widest text-right">Away Unit</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-row items-center justify-between lg:justify-end gap-4 pt-5 lg:pt-0 border-t border-white/5 lg:border-none">
                            <div class="text-left lg:text-right lg:mr-6">
                                <span class="block text-[11px] text-purple-400 font-black uppercase tracking-[0.2em] italic">${match.time}</span>
                                <span class="block text-[8px] text-gray-500 font-mono uppercase tracking-tighter">Arena: ${match.venue}</span>
                            </div>
                            
                            <div class="flex gap-2">
                                <button onclick="openFixtureDetails(${match.id}, '${match.home}', '${match.away}', '${match.time}', '${match.venue}')" 
                                    class="flex-1 md:flex-none px-5 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all">
                                    Inquiry
                                </button>
                                <button onclick="broadcastPush('${match.home}', '${match.away}')" 
                                    class="w-12 h-12 lg:w-auto lg:px-5 bg-purple-600/10 hover:bg-purple-600 text-purple-500 hover:text-white border border-purple-500/20 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                                    <i class="fas fa-satellite-dish"></i> 
                                    <span class="hidden lg:inline">Sync</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>`,




  'Stats': `
    <div class="space-y-8 animate-in pb-10">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 px-2">
            <div>
                <h3 class="text-3xl font-black italic uppercase tracking-tighter text-white">Surgical <span class="text-purple-500">Analytics</span></h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1 italic">
                    Sector: Clinical Performance // Status: <span class="text-purple-400">Recess Calibration</span>
                </p>
            </div>
            <div class="hidden md:block">
                <span class="px-4 py-1.5 bg-purple-600/5 border border-purple-500/10 rounded-full text-[10px] text-purple-400 font-bold uppercase tracking-widest">
                    Last Updated: Dec 20, 2025
                </span>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div class="bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div class="p-6 border-b border-white/5 bg-gradient-to-r from-purple-600/10 to-transparent flex justify-between items-center">
                    <h4 class="text-white font-black uppercase italic tracking-tighter text-sm flex items-center gap-3">
                        <i class="fas fa-syringe text-purple-500"></i> Golden Boot Race
                    </h4>
                    <span class="text-[9px] text-purple-400 font-mono font-black uppercase tracking-widest">Metric: Goals</span>
                </div>
                <div class="p-4">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="text-[9px] text-gray-600 uppercase tracking-[0.2em] font-black border-b border-white/5">
                                <th class="py-4 pl-4 font-normal">Rank</th>
                                <th class="py-4 font-normal">Clinical Operator</th>
                                <th class="py-4 font-normal text-right pr-4">GF</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-white/[0.02]">
                            ${[1, 2, 3, 4].map(i => `
                                <tr class="group hover:bg-purple-600/[0.03] transition-colors">
                                    <td class="py-5 pl-4">
                                        <span class="text-xs font-mono font-bold ${i === 1 ? 'text-purple-500' : 'text-gray-500'}">0${i}</span>
                                    </td>
                                    <td class="py-5">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 bg-purple-600/5 rounded-lg border border-purple-500/10 flex items-center justify-center group-hover:border-purple-500/40 transition-all">
                                                <i class="fas fa-user-md text-[10px] text-purple-400"></i>
                                            </div>
                                            <div>
                                                <p class="text-[11px] text-white font-black uppercase italic tracking-tighter">Awaiting_Sync</p>
                                                <p class="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Unit TBD</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-5 pr-4 text-right">
                                        <span class="text-xs text-white font-black italic">--</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div class="p-6 border-b border-white/5 bg-gradient-to-r from-blue-600/10 to-transparent flex justify-between items-center">
                    <h4 class="text-white font-black uppercase italic tracking-tighter text-sm flex items-center gap-3">
                        <i class="fas fa-stethoscope text-blue-500"></i> Clinical Playmakers
                    </h4>
                    <span class="text-[9px] text-blue-400 font-mono font-black uppercase tracking-widest">Metric: Assists</span>
                </div>
                <div class="p-4">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="text-[9px] text-gray-600 uppercase tracking-[0.2em] font-black border-b border-white/5">
                                <th class="py-4 pl-4 font-normal">Rank</th>
                                <th class="py-4 font-normal">Provider / Node</th>
                                <th class="py-4 font-normal text-right pr-4">AST</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-white/[0.02]">
                            ${[1, 2, 3, 4].map(i => `
                                <tr class="group hover:bg-blue-600/[0.03] transition-colors">
                                    <td class="py-5 pl-4">
                                        <span class="text-xs font-mono font-bold ${i === 1 ? 'text-blue-500' : 'text-gray-500'}">0${i}</span>
                                    </td>
                                    <td class="py-5">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 bg-blue-600/5 rounded-lg border border-blue-500/10 flex items-center justify-center group-hover:border-blue-500/40 transition-all">
                                                <i class="fas fa-clipboard-list text-[10px] text-blue-400"></i>
                                            </div>
                                            <div>
                                                <p class="text-[11px] text-white font-black uppercase italic tracking-tighter">Awaiting_Sync</p>
                                                <p class="text-[9px] text-gray-600 font-bold uppercase tracking-widest">Unit TBD</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-5 pr-4 text-right">
                                        <span class="text-xs text-white font-black italic">--</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="p-6 bg-[#0a0a0c] border border-white/5 rounded-[2rem] group hover:border-purple-600/30 transition-all shadow-xl">
        <div class="flex justify-between items-start mb-6">
            <div class="w-10 h-10 bg-purple-600/10 rounded-xl flex items-center justify-center border border-purple-500/10 transition-colors group-hover:bg-purple-600/20">
                <i class="fas fa-file-medical text-purple-500"></i>
            </div>
            <span class="text-[9px] text-gray-600 font-black uppercase tracking-widest">Behavioral</span>
        </div>
        <h5 class="text-white font-bold text-xs uppercase tracking-widest mb-1">Clinic Cards</h5>
        <p class="text-3xl font-black italic text-white tracking-tighter italic">00 <span class="text-[10px] text-gray-600 not-italic ml-1">TOTAL</span></p>
    </div>

    <div class="p-6 bg-[#0a0a0c] border border-white/5 rounded-[2rem] group hover:border-blue-500/30 transition-all shadow-xl">
        <div class="flex justify-between items-start mb-6">
            <div class="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center border border-blue-500/10 transition-colors group-hover:bg-blue-600/20">
                <i class="fas fa-shield-virus text-blue-500"></i>
            </div>
            <span class="text-[9px] text-gray-600 font-black uppercase tracking-widest">Defense</span>
        </div>
        <h5 class="text-white font-bold text-xs uppercase tracking-widest mb-1">Sterile Sheets</h5>
        <p class="text-3xl font-black italic text-white tracking-tighter italic">01 <span class="text-[10px] text-gray-600 not-italic ml-1">TOTAL</span></p>
    </div>

    <div class="p-6 bg-[#0a0a0c] border border-white/5 rounded-[2rem] group hover:border-green-500/30 transition-all shadow-xl">
        <div class="flex justify-between items-start mb-6">
            <div class="w-10 h-10 bg-green-600/10 rounded-xl flex items-center justify-center border border-green-500/10 transition-colors group-hover:bg-green-600/20">
                <i class="fas fa-chart-line text-green-500"></i>
            </div>
            <span class="text-[9px] text-gray-600 font-black uppercase tracking-widest">Efficiency</span>
        </div>
        <h5 class="text-white font-bold text-xs uppercase tracking-widest mb-1">Payload Ratio</h5>
        <p class="text-3xl font-black italic text-white tracking-tighter italic">1.50 <span class="text-[10px] text-gray-600 not-italic ml-1">G/G</span></p>
    </div>

        </div>
    </div>`,



    
   'Highlights': `
    <div class="space-y-8 animate-in pb-10 px-2 md:px-0">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h3 class="text-3xl font-black italic uppercase tracking-tighter text-white">Surgical <span class="text-purple-500">Archives</span></h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-purple-400 italic font-black">Archive Offline</span></p>
            </div>
            <div class="px-4 py-2 bg-purple-600/10 border border-purple-500/20 rounded-full flex items-center gap-2">
                <span class="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span>
                <span class="text-[9px] text-purple-400 font-black uppercase tracking-widest">Calibration Phase</span>
            </div>
        </div>

        <div class="relative aspect-video bg-[#0a0a0c] rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 overflow-hidden group shadow-2xl">
            <div class="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(124,58,237,0)_50%,rgba(124,58,237,0.25)_50%),linear-gradient(90deg,rgba(124,58,237,0.06),rgba(139,92,246,0.02),rgba(124,58,237,0.06))] bg-[length:100%_4px,4px_100%]"></div>
            
            <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div class="relative mb-8">
                    <div class="absolute inset-0 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
                    <div class="relative w-20 h-20 md:w-24 md:h-24 bg-purple-600/10 rounded-full flex items-center justify-center border border-purple-500/20 shadow-inner">
                        <i class="fas fa-microscope text-purple-500 text-3xl"></i>
                    </div>
                </div>
                
                <div class="space-y-3">
                    <p class="text-white font-black italic uppercase tracking-[0.3em] text-sm md:text-base leading-tight">No Clinical Footage Detected</p>
                    <p class="text-gray-600 text-[10px] font-mono uppercase tracking-widest max-w-[250px] mx-auto">
                        System deployment required for VOD synchronization // Phase 2026
                    </p>
                </div>
            </div>
        </div>

        <div class="relative p-8 md:p-12 bg-gradient-to-b from-purple-600/[0.03] to-transparent border border-white/5 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group transition-all">
            <i class="fas fa-vial absolute -right-6 -bottom-6 text-9xl text-white/[0.03] -rotate-12 group-hover:rotate-0 transition-transform duration-700"></i>
            
            <div class="relative z-10 flex flex-col items-center text-center">
                <div class="mb-6 px-4 py-1.5 bg-purple-600/10 border border-purple-500/20 rounded-full">
                    <span class="text-[9px] text-purple-400 font-black uppercase tracking-[0.2em]">Deployment Protocol: Locked</span>
                </div>
                
                <h4 class="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-4">Upload Clinical <span class="text-purple-500">Highlights</span></h4>
                <p class="text-gray-500 text-xs uppercase tracking-widest max-w-md mx-auto leading-relaxed font-medium">
                    In the upcoming 2026 update, units will be authorized to upload match clips directly to the 
                    <span class="text-white italic">Provost Data Stream</span>.
                </p>

                <div class="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <div class="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] text-gray-600 font-black uppercase tracking-[0.2em] cursor-not-allowed flex items-center justify-center gap-3">
                        <i class="fas fa-folder-open text-xs"></i> Select Tissue Sample
                    </div>
                    <div class="px-10 py-5 bg-purple-600/10 border border-purple-500/20 rounded-2xl text-[10px] text-purple-500/40 font-black uppercase tracking-[0.2em] cursor-not-allowed flex items-center justify-center gap-3">
                        <i class="fas fa-upload text-xs"></i> Inject to Stream
                    </div>
                </div>

                <div class="mt-12 pt-6 border-t border-white/5 w-full max-w-sm">
                    <div class="flex justify-between items-center text-[9px] text-gray-700 font-mono uppercase tracking-tighter">
                        <span>Access Level: Restricted</span>
                        <span class="text-purple-900/40 font-black italic">PROVOST_SYS_V2</span>
                    </div>
                </div>
            </div>

            <div class="absolute inset-0 bg-[#08080a]/60 backdrop-blur-[3px] pointer-events-none"></div>
        </div>
    </div>`,



    
  'News': `
    <div class="space-y-8 animate-in pb-20 px-2 md:px-0">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
                <h3 class="text-3xl font-black italic uppercase tracking-tighter text-white">News <span class="text-purple-500">Hub</span></h3>
                <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-purple-400">Clinical Protocol // Authority Broadcast</span></p>
            </div>
            <span class="text-[10px] text-gray-600 font-mono uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">Sync: 20.12.2025</span>
        </div>

        <div class="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-purple-500/20 bg-[#0a0a0c] group shadow-2xl">
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="relative h-[220px] lg:h-full bg-zinc-900 overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent z-10"></div>
                    <div class="absolute inset-0 flex items-center justify-center text-purple-600/10 group-hover:scale-110 transition-transform duration-1000">
                         <i class="fas fa-holly-berry text-9xl"></i>
                    </div>
                    <div class="absolute top-6 left-6 z-20 flex flex-col gap-2">
                        <span class="px-4 py-1.5 bg-purple-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg animate-pulse">Merry Christmas</span>
                        <span class="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full border border-white/10">Resuming 2026</span>
                    </div>
                </div>

                <div class="p-8 md:p-12 flex flex-col justify-center relative">
                    <div class="absolute top-0 right-0 p-8 opacity-5">
                        <i class="fas fa-tree text-6xl text-purple-500"></i>
                    </div>
                    <span class="text-[10px] text-purple-500 font-black uppercase mb-4 tracking-[0.3em]">Holiday Announcement</span>
                    <h4 class="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white leading-[0.9] mb-6">
                        Clinical Recess <br><span class="text-purple-500">Season Continued</span>
                    </h4>
                    <p class="text-gray-400 text-[12px] md:text-sm uppercase leading-relaxed font-bold tracking-wide mb-8">
                        To all clinical units and medical personnel: Have a <span class="text-white">Merry Christmas and a powerful New Year</span>. The 2025/2026 campaign is only on a pause. We return stronger in January to conclude the protocol.
                    </p>
                    <div class="flex flex-col gap-4">
                        <div class="w-full md:w-max px-8 py-4 bg-purple-600/10 border border-purple-500/30 text-purple-400 text-[10px] font-black uppercase tracking-widest rounded-2xl flex items-center gap-3">
                            <i class="fas fa-calendar-check"></i> Resumption: January 2026
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border border-purple-500/20 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group">
            <div class="absolute -right-10 -bottom-10 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                <i class="fas fa-handshake-angle text-[15rem]"></i>
            </div>
            <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4">
                    <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-[8px] font-black uppercase tracking-widest rounded-md border border-blue-500/20">Joint Operations</span>
                    <span class="text-[10px] text-gray-500 font-black uppercase tracking-[0.4em]">Intelligence Report</span>
                </div>
                <h4 class="text-2xl md:text-3xl font-black italic text-white uppercase mt-2 mb-6 tracking-tighter">Provost vs <span class="text-purple-500">Elite League</span> Clash</h4>
                <p class="text-gray-400 text-xs md:text-sm font-bold uppercase leading-relaxed mb-8 max-w-2xl italic">
                    Conversations are currently undergoing between the <span class="text-white underline decoration-purple-500">Elite League Coordinators</span> and the Provost administration. A potential "Cross-Sector Clash" is being discussed. While still in the negotiation phase, this would be the ultimate test for clinical readiness.
                </p>
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span class="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Status: Discussion in progress</span>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 hover:border-purple-600/30 transition-all group relative overflow-hidden">
                <div class="w-12 h-12 bg-purple-600/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
                    <i class="fas fa-user-shield text-purple-500 text-lg"></i>
                </div>
                <span class="text-[9px] text-purple-500 font-black uppercase tracking-widest">Official Oversight</span>
                <h5 class="text-white font-black uppercase italic tracking-tighter text-xl mt-2 mb-4">Planning Committee</h5>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${['TOGA', 'HASSAN', 'UGO', 'ONANA', 'ZUBBY', 'DIVINE', 'DERRICK'].map(name => `
                        <span class="px-2 py-1 bg-white/5 border border-white/10 rounded text-[8px] text-gray-500 font-bold uppercase tracking-tighter">${name}</span>
                    `).join('')}
                </div>
                <p class="text-gray-500 text-[10px] font-bold uppercase leading-relaxed">
                    Decisions and medical directives from this group remain the <span class="text-white">Only Official Source</span> for the Provost Cup sector.
                </p>
            </div>

            <div class="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 hover:border-purple-600/30 transition-all group relative overflow-hidden">
                <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                    <i class="fas fa-credit-card text-white text-lg"></i>
                </div>
                <span class="text-[9px] text-gray-400 font-black uppercase tracking-widest">Financial Sync</span>
                <h5 class="text-white font-black uppercase italic tracking-tighter text-xl mt-2 mb-4">Registration Terminal</h5>
                <p class="text-gray-500 text-[10px] font-bold uppercase leading-relaxed mb-6">
                    Franchise ownership (₦4,000) and Player registration (₦2,000) nodes remain active. Secure your slots now before the 2026 resumption.
                </p>
                <div class="pt-4 border-t border-white/5 flex justify-between items-center">
                    <span class="text-[9px] text-gray-600 font-mono uppercase italic">Ref: Mikoko Terminal</span>
                    <i class="fas fa-lock text-[10px] text-purple-900/40"></i>
                </div>
            </div>
        </div>
    </div>`,



    
    
   'Goals Leaderboard': `
<div class="space-y-8 animate-in">
    <div class="flex flex-col lg:flex-row gap-8">
        
        <div class="lg:w-1/3">
            <div class="relative group overflow-hidden bg-gradient-to-br from-red-600/20 to-transparent border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center sticky top-8">
                <div class="absolute top-6 left-6 px-4 py-1 bg-red-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-red-600/20">
                    Player of the Week
                </div>
                
                <div class="w-40 h-40 md:w-48 md:h-48 bg-zinc-900 rounded-full mb-6 border-4 border-red-500/30 overflow-hidden relative shadow-2xl">
                    <div class="absolute inset-0 flex items-center justify-center text-gray-700 italic">
                        <i class="fas fa-user-ninja text-6xl"></i>
                    </div>
                </div>

                <h3 class="text-3xl font-black text-white uppercase tracking-tighter italic leading-tight">NIL <span class="text-red-500">NIL</span></h3>
                <p class="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-2 italic">Awaiting Selection // Striker</p>
                
                <div class="flex gap-4 md:gap-8 mt-8 w-full justify-center">
                    <div class="text-center">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">Goals</span>
                    </div>
                    <div class="text-center border-x border-white/10 px-4 md:px-8">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">Assists</span>
                    </div>
                    <div class="text-center">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">MVP</span>
                    </div>
                </div>
                
                <div class="mt-8 w-full pt-6 border-t border-white/5">
                    <span class="text-[9px] text-gray-600 font-mono uppercase">Node Status: STANDBY</span>
                </div>
            </div>
        </div>

        <div class="lg:w-2/3 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 flex flex-col">
            <h3 class="text-xl font-black text-white mb-8 uppercase italic tracking-tighter flex items-center">
                <i class="fas fa-fire text-red-600 mr-3 animate-pulse"></i> Top Scorers
            </h3>
            
            <div class="space-y-3" id="goalsListContainer">
                <div class="flex text-[9px] uppercase font-black text-gray-600 px-4 mb-2 tracking-[0.2em]">
                    <div class="w-12 text-center">Pos</div>
                    <div class="flex-grow">Player Identification</div>
                    <div class="w-12 text-right">G</div>
                </div>

                ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `
                    <div class="flex items-center p-4 bg-white/[0.03] rounded-[1.5rem] border border-white/5 group hover:border-red-600/30 transition-all ${i > 6 ? 'hidden extra-players animate-in' : ''}">
                        <div class="w-12 font-black italic text-sm ${i <= 3 ? 'text-red-600' : 'text-gray-600'} text-center">${i < 10 ? '0' + i : i}</div>
                        <div class="flex-grow flex items-center space-x-4 px-2">
                            <div class="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center relative">
                                <i class="fas fa-user text-[10px] text-gray-600"></i>
                                ${i <= 5 ? '<i class="fas fa-star absolute -top-1 -right-1 text-[8px] text-yellow-500 animate-pulse"></i>' : ''}
                            </div>
                            <div class="flex flex-col">
                                <span class="text-xs font-black text-white uppercase tracking-tighter group-hover:text-red-600 transition-colors">Pending_Roster</span>
                                <span class="text-[8px] text-gray-600 font-bold uppercase tracking-widest italic">Awaiting Assignment</span>
                            </div>
                        </div>
                        <div class="w-12 text-right font-black italic text-white group-hover:scale-125 transition-transform">0</div>
                    </div>
                `).join('')}
            </div>

            <button id="toggleGoalsBtn" onclick="toggleFullLeaderboard()" class="w-full mt-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                View Full Player Stats (Top 10)
            </button>
        </div>

    </div>
</div>`,

  'Assists Leaderboard': `
<div class="space-y-8 animate-in">
    <div class="flex flex-col lg:flex-row gap-8">
        
        <div class="lg:w-1/3">
            <div class="relative group overflow-hidden bg-gradient-to-br from-blue-600/20 to-transparent border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center text-center sticky top-8">
                <div class="absolute top-6 left-6 px-4 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-600/20">
                    Playmaker of the Week
                </div>
                
                <div class="w-40 h-40 md:w-48 md:h-48 bg-zinc-900 rounded-full mb-6 border-4 border-blue-500/30 overflow-hidden relative shadow-2xl">
                    <div class="absolute inset-0 flex items-center justify-center text-gray-700 italic">
                        <i class="fas fa-magic-wand-sparkles text-6xl"></i>
                    </div>
                </div>

                <h3 class="text-3xl font-black text-white uppercase tracking-tighter italic leading-tight">NIL <span class="text-blue-500">NIL</span></h3>
                <p class="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-2 italic">Awaiting Selection // Midfield Node</p>
                
                <div class="flex gap-4 md:gap-8 mt-8 w-full justify-center">
                    <div class="text-center">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">Assists</span>
                    </div>
                    <div class="text-center border-x border-white/10 px-4 md:px-8">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">Key Passes</span>
                    </div>
                    <div class="text-center">
                        <span class="block text-2xl font-black text-white">0</span>
                        <span class="text-[9px] text-gray-500 uppercase font-black tracking-widest">MVP</span>
                    </div>
                </div>
                
                <div class="mt-8 w-full pt-6 border-t border-white/5">
                    <span class="text-[9px] text-gray-600 font-mono uppercase">Vision Status: ANALYZING</span>
                </div>
            </div>
        </div>

        <div class="lg:w-2/3 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 flex flex-col">
            <h3 class="text-xl font-black text-white mb-8 uppercase italic tracking-tighter flex items-center">
                <i class="fas fa-wand-magic-sparkles text-blue-500 mr-3 animate-pulse"></i> Playmaker Rankings
            </h3>
            
            <div class="space-y-3" id="assistsListContainer">
                <div class="flex text-[9px] uppercase font-black text-gray-600 px-4 mb-2 tracking-[0.2em]">
                    <div class="w-12 text-center">Pos</div>
                    <div class="flex-grow">Creative Node</div>
                    <div class="w-12 text-right">A</div>
                </div>

                ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `
                    <div class="flex items-center p-4 bg-white/[0.03] rounded-[1.5rem] border border-white/5 group hover:border-blue-600/30 transition-all ${i > 6 ? 'hidden extra-assists animate-in' : ''}">
                        <div class="w-12 font-black italic text-sm ${i <= 3 ? 'text-blue-500' : 'text-gray-600'} text-center">${i < 10 ? '0' + i : i}</div>
                        <div class="flex-grow flex items-center space-x-4 px-2">
                            <div class="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center relative">
                                <i class="fas fa-brain text-[10px] text-gray-600"></i>
                                ${i <= 5 ? '<i class="fas fa-certificate absolute -top-1 -right-1 text-[8px] text-blue-400 animate-pulse"></i>' : ''}
                            </div>
                            <div class="flex flex-col">
                                <span class="text-xs font-black text-white uppercase tracking-tighter group-hover:text-blue-500 transition-colors">Pending_Roster</span>
                                <span class="text-[8px] text-gray-600 font-bold uppercase tracking-widest italic">Awaiting Pass Data</span>
                            </div>
                        </div>
                        <div class="w-12 text-right font-black italic text-white group-hover:scale-125 transition-transform">0</div>
                    </div>
                `).join('')}
            </div>

            <button id="toggleAssistsBtn" onclick="toggleAssistsLeaderboard()" class="w-full mt-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                View Full Playmaker Stats (Top 10)
            </button>
        </div>

    </div>
</div>`,

'Player Selection': `
<div class="space-y-8 animate-in fade-in duration-500">
    <div class="bg-zinc-900/80 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
        <h3 class="text-2xl font-black text-white uppercase italic tracking-tighter mb-6">Player Registration</h3>
        <div class="flex flex-col md:flex-row gap-4">
            <input type="text" id="playerNameInput" placeholder="ENTER FULL LEGAL NAME..." 
                class="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm font-bold text-red-600 focus:outline-none focus:border-red-600 transition-all">
            <button onclick="registerPlayer()" 
                class="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-black uppercase italic rounded-2xl transition-all shadow-lg shadow-red-600/20">
                Register Entry
            </button>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 bg-[#070707] border border-white/5 rounded-[2.5rem] p-6">
            <h4 class="text-[10px] uppercase font-black text-gray-500 tracking-widest mb-6">Live Registry Status</h4>
            <div id="playerListContainer" class="space-y-3">
                <p class="text-gray-600 text-xs italic">Waiting for new registrations...</p>
            </div>
        </div>
        
        <div class="bg-zinc-900/30 border border-white/5 rounded-[2.5rem] p-6">
            <h4 class="text-[10px] uppercase font-black text-gray-500 tracking-widest mb-4">League Capacity</h4>
            <div class="space-y-4" id="teamCapacityList">
                </div>
        </div>
    </div>
</div>`,

'Team Selection': `
<div class="space-y-8 animate-in fade-in duration-500">
    <div class="bg-red-600/10 border border-red-600/20 p-6 rounded-[2rem]">
        <h3 class="text-white font-black uppercase italic">Admin Assignment Terminal</h3>
        <p class="text-gray-500 text-[10px] font-bold uppercase mt-1">Select a pending player to assign to a tactical unit.</p>
    </div>

    <div id="adminAssignmentGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        </div>
</div>`,
   
'Transfer Market': `
<div class="space-y-8 animate-in pb-12">
    <div class="flex justify-between items-end">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Market Terminal</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-yellow-500 italic">Standby Mode</span></p>
        </div>
        <div class="hidden md:flex items-center gap-3">
            <span class="text-[9px] text-gray-600 font-mono uppercase">Node: MKK-TRNSFR-03</span>
            <div class="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
        </div>
    </div>

    <div class="relative p-10 md:p-20 bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col items-center justify-center text-center">
        <div class="absolute inset-0 opacity-20 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2)_0%,transparent_70%)]"></div>
            <i class="fas fa-chart-line absolute -left-10 -bottom-10 text-[25rem] text-white/5 -rotate-12"></i>
        </div>

        <div class="relative z-10 max-w-2xl">
            <div class="w-24 h-24 bg-red-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-10 rotate-12 shadow-[0_0_50px_rgba(220,38,38,0.3)] border-4 border-black">
                <i class="fas fa-hand-holding-usd text-4xl -rotate-12"></i>
            </div>
            
            <h4 class="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none mb-6">
                Market Opening <br>
                <span class="text-red-600">Jan 18, 2026</span>
            </h4>

            <div class="inline-block px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
                <span class="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em]">Stay Tuned Managers</span>
            </div>

            <p class="text-sm md:text-lg text-gray-400 font-bold uppercase leading-relaxed tracking-wide mb-10">
                "Make your <span class="text-white">money worth the buy</span> and your <span class="text-red-600">pocket worth the sale</span>. Build a dynasty or cash out—the choice is yours."
            </p>

            <div class="flex flex-wrap justify-center gap-4">
                <div class="px-5 py-3 bg-red-600/10 border border-red-600/30 rounded-2xl">
                    <span class="block text-[8px] text-red-500 font-black uppercase mb-1">Buy Logic</span>
                    <span class="text-xs text-white font-black uppercase italic">Value Driven</span>
                </div>
                <div class="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl">
                    <span class="block text-[8px] text-gray-500 font-black uppercase mb-1">Sell Logic</span>
                    <span class="text-xs text-white font-black uppercase italic">Profit Focus</span>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] group hover:border-red-600/30 transition-all">
            <i class="fas fa-user-check text-red-600 mb-4"></i>
            <h5 class="text-white font-black uppercase italic text-sm mb-2">Verified Units</h5>
            <p class="text-[10px] text-gray-500 font-bold uppercase leading-relaxed">Only managers who have secured their franchise slots (₦4,000) can participate in the open market.</p>
        </div>

        <div class="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] group hover:border-red-600/30 transition-all">
            <i class="fas fa-coins text-red-600 mb-4"></i>
            <h5 class="text-white font-black uppercase italic text-sm mb-2">Trade Protocol</h5>
            <p class="text-[10px] text-gray-500 font-bold uppercase leading-relaxed">Direct player-to-player swaps and cash-plus-player deals will be facilitated by the Committee.</p>
        </div>

        <div class="p-8 bg-zinc-900/50 border border-white/5 rounded-[2rem] group hover:border-red-600/30 transition-all">
            <i class="fas fa-file-contract text-red-600 mb-4"></i>
            <h5 class="text-white font-black uppercase italic text-sm mb-2">Finalization</h5>
            <p class="text-[10px] text-gray-400 font-bold uppercase leading-relaxed italic">"Everything regarding the league collectively comes from the Committee."</p>
        </div>
    </div>
</div>`,
    
   'Mikoko Payment': `
<div class="space-y-8 animate-in pb-12">
    <div class="flex justify-between items-end">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Financial Node</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-green-500">Payment Channels Active</span></p>
        </div>
        <i class="fas fa-file-invoice-dollar text-red-600 opacity-20 text-3xl"></i>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-6 bg-red-600/10 border border-red-600/20 rounded-3xl">
            <span class="text-[9px] text-red-600 font-black uppercase tracking-widest">Franchise Fee</span>
            <h4 class="text-2xl font-black text-white italic uppercase">₦4,000</h4>
            <p class="text-[10px] text-gray-400 font-bold uppercase mt-1">To Own, Name, & Coach a Team</p>
        </div>
        <div class="p-6 bg-white/5 border border-white/10 rounded-3xl">
            <span class="text-[9px] text-gray-400 font-black uppercase tracking-widest">Player Fee</span>
            <h4 class="text-2xl font-black text-white italic uppercase">₦2,000</h4>
            <p class="text-[10px] text-gray-400 font-bold uppercase mt-1">To Register for the Draft Pool</p>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="p-8 bg-zinc-900/50 border border-white/10 rounded-[2.5rem] relative overflow-hidden">
            <div class="relative z-10">
                <span class="text-[9px] text-red-600 font-black uppercase tracking-[0.2em]">Transfer Protocol</span>
                <h4 class="text-xl font-black text-white italic mt-2 mb-6 uppercase tracking-tighter">Account Information</h4>
                
                <div class="space-y-4">
                    <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p class="text-[9px] text-gray-500 uppercase font-bold">Bank Name</p>
                        <p class="text-lg text-white font-black italic uppercase">OPAY</p>
                    </div>
                     <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p class="text-[9px] text-gray-500 uppercase font-bold">Account Name</p>
                        <p class="text-lg text-white font-black italic uppercase">IBEKU TOCHUKWU</p>
                    </div>
                    <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                        <p class="text-[9px] text-gray-500 uppercase font-bold">Account Number</p>
                        <p class="text-2xl text-red-600 font-mono font-black tracking-tighter">7062959301</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative p-8 bg-[#0a0a0a] border border-red-600/20 rounded-[2.5rem] flex flex-col justify-center overflow-hidden">
            <div class="relative z-10">
                <div class="w-12 h-12 bg-red-600/10 border border-red-600/30 rounded-xl flex items-center justify-center mb-6">
                    <i class="fas fa-paper-plane text-red-600"></i>
                </div>
                <h4 class="text-white font-black uppercase italic text-xl tracking-tighter mb-4">Verification Steps</h4>
                <ul class="space-y-4">
                    <li class="flex gap-4">
                        <span class="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center font-black">1</span>
                        <p class="text-[10px] text-gray-400 font-bold uppercase leading-relaxed">Transfer the exact fee (₦2,000 or ₦4,000) to the account provided.</p>
                    </li>
                    <li class="flex gap-4">
                        <span class="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center font-black">2</span>
                        <p class="text-[10px] text-gray-400 font-bold uppercase leading-relaxed">Capture a clear screenshot of the successful transaction receipt.</p>
                    </li>
                    <li class="flex gap-4">
                        <span class="w-5 h-5 rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center font-black">3</span>
                        <p class="text-[10px] text-white font-black uppercase leading-relaxed">Send the receipt directly to <span class="text-red-600">TOGA's DM</span> for manual validation.</p>
                    </li>
                </ul>
                
                <div class="mt-8 pt-6 border-t border-white/5">
                    <p class="text-[9px] text-gray-600 font-mono uppercase italic">Note: Only payments verified by the Planning Committee are valid.</p>
                </div>
            </div>
        </div>
    </div>
</div>`,
   'Team Lab': `
<div class="space-y-8 animate-in pb-12">
    <div class="flex justify-between items-end">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Tactical Lab</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-yellow-500 italic">Integration Pending</span></p>
        </div>
        <i class="fas fa-flask text-red-600 opacity-20 text-3xl"></i>
    </div>

    <div class="relative p-10 md:p-20 bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col items-center justify-center text-center">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,transparent_70%)]"></div>
            <div class="absolute inset-10 border-2 border-white/5 rounded-full"></div>
            <div class="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5"></div>
        </div>

        <div class="relative z-10 max-w-md">
            <div class="w-20 h-20 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <i class="fas fa-microchip text-red-600 text-3xl animate-pulse"></i>
            </div>
            
            <h4 class="text-2xl font-black text-white italic uppercase tracking-tighter mb-4">
                Digital Board <br>
                <span class="text-red-600">Offline</span>
            </h4>

            <p class="text-[11px] text-gray-500 font-bold uppercase leading-relaxed tracking-widest mb-10">
                The interactive tactical suite is currently being synchronized with the MIKOKO Main Node. Manual drag-and-drop formations and shareable links will be <span class="text-white">available in the next update</span>.
            </p>

            <div class="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
                <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span class="text-[9px] text-gray-400 font-black uppercase tracking-[0.2em]">Check back after Season 03 Protocol Initialization</span>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50">
        <div class="p-6 bg-zinc-900/50 border border-dashed border-white/10 rounded-3xl flex items-center gap-6">
            <div class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                <i class="fas fa-layer-group text-gray-600"></i>
            </div>
            <div>
                <p class="text-[9px] text-red-600 font-black uppercase tracking-widest">Upcoming</p>
                <p class="text-xs text-white font-bold uppercase">Dynamic 5-11 Man Logic</p>
            </div>
        </div>
        <div class="p-6 bg-zinc-900/50 border border-dashed border-white/10 rounded-3xl flex items-center gap-6">
            <div class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                <i class="fas fa-camera text-gray-600"></i>
            </div>
            <div>
                <p class="text-[9px] text-red-600 font-black uppercase tracking-widest">Upcoming</p>
                <p class="text-xs text-white font-bold uppercase">Tactical Screenshot Export</p>
            </div>
        </div>
    </div>
</div>`,
    
   'Pure Stream': `
<div class="space-y-8 animate-in pb-12">
    <div class="flex justify-between items-end">
        <div>
            <h3 class="text-3xl font-black italic uppercase tracking-tighter text-red-600">Pure Stream</h3>
            <p class="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-zinc-600">Signal Offline</span></p>
        </div>
        <i class="fas fa-satellite text-red-600 opacity-20 text-3xl"></i>
    </div>

    <div class="relative aspect-video bg-[#0a0a0a] rounded-[3rem] border border-white/5 overflow-hidden group">
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicGLeU/giphy.gif')] bg-cover"></div>
        
        <div class="absolute inset-0 flex flex-col items-center justify-center z-10 text-center p-6">
            <div class="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 relative">
                <i class="fas fa-video-slash text-gray-600 text-2xl"></i>
                <div class="absolute inset-0 rounded-full border-2 border-red-600/20 animate-ping"></div>
            </div>
            
            <h4 class="text-white font-black uppercase italic tracking-widest text-lg mb-2">Broadcasting Protocol Locked</h4>
            <p class="text-gray-500 text-[10px] font-bold uppercase max-w-xs leading-relaxed">
                Visual downlink is currently disabled. High-definition match streams and highlight reels will be <span class="text-red-600">deployed in the next update</span>.
            </p>
        </div>

        <div class="absolute bottom-8 left-8 right-8 flex justify-between items-center z-20 opacity-20">
            <div class="flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-gray-600"></div>
                <span class="text-[8px] text-gray-400 font-black uppercase tracking-widest">Feed: MKK-LIVE-NULL</span>
            </div>
            <div class="flex gap-4">
                <div class="w-8 h-1 bg-white/10 rounded-full"></div>
                <div class="w-12 h-1 bg-white/10 rounded-full"></div>
            </div>
        </div>
    </div>

    <div class="p-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-6">
            <div class="w-12 h-12 bg-red-600/10 rounded-2xl flex items-center justify-center text-red-600">
                <i class="fas fa-clock"></i>
            </div>
            <div>
                <h5 class="text-white font-black uppercase italic text-sm">Synchronizing Media Node</h5>
                <p class="text-[10px] text-gray-500 font-bold uppercase mt-1">Estimated Arrival: Season 03 Kick-off</p>
            </div>
        </div>
        <div class="px-6 py-2 border border-white/10 rounded-full">
            <span class="text-[9px] text-gray-400 font-black uppercase tracking-widest">Protocol: 0.8.2-BETA</span>
        </div>
    </div>
</div>`,

    
'Messages': `
<div class="space-y-6 animate-in pb-12 px-1 md:px-0">
    <div class="flex justify-between items-end px-2 md:px-0">
        <div>
            <h3 class="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-red-600">Comms Center</h3>
            <p class="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Status: <span class="text-green-500 italic">Encrypted Connection Stable</span></p>
        </div>
        <i class="fas fa-shield-alt text-red-600 opacity-20 text-2xl md:text-3xl"></i>
    </div>

    <div class="bg-zinc-900/50 border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-10 min-h-[450px] md:min-h-[500px] flex flex-col relative overflow-hidden">
        
        <div class="space-y-8 flex-1 relative z-10">
            <div class="flex gap-2 md:gap-4 max-w-[95%] md:max-w-2xl">
                <div class="w-8 h-8 rounded-lg bg-red-600 flex-shrink-0 flex items-center justify-center shadow-lg shadow-red-600/20">
                    <i class="fas fa-robot text-white text-[10px]"></i>
                </div>
                <div class="bg-white/5 border border-white/10 p-3 md:p-5 rounded-2xl rounded-tl-none">
                    <span class="text-[7px] md:text-[9px] text-red-600 font-black uppercase tracking-widest block mb-1">System Admin // TOGA</span>
                    <p class="text-[10px] md:text-xs text-gray-300 font-bold uppercase leading-snug md:leading-relaxed">
                        Welcome to Season 03. All Team Owners must DM their receipts for <span class="text-white">Franchise Naming Rights</span>.
                    </p>
                    <div class="flex justify-between items-center mt-3 border-t border-white/5 pt-2">
                         <span class="text-[6px] md:text-[8px] text-gray-600 font-mono uppercase">SENT: 18.12.2025</span>
                         <i class="fas fa-check-double text-[8px] text-red-600 opacity-40"></i>
                    </div>
                </div>
            </div>

            <div class="flex gap-2 md:gap-4 max-w-[95%] md:max-w-2xl ml-auto flex-row-reverse">
                <div class="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex-shrink-0 flex items-center justify-center">
                    <i class="fas fa-users text-white text-[10px]"></i>
                </div>
                <div class="bg-red-600/10 border border-red-600/20 p-3 md:p-5 rounded-2xl rounded-tr-none text-right">
                    <span class="text-[7px] md:text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">League Committee</span>
                    <p class="text-[10px] md:text-xs text-gray-300 font-bold uppercase leading-snug md:leading-relaxed">
                        Registration for the draft pool is at ₦2,000. Have your ID ready for Jan 18th.
                    </p>
                    <div class="flex justify-between flex-row-reverse items-center mt-3 border-t border-red-600/10 pt-2">
                        <span class="text-[6px] md:text-[8px] text-gray-600 font-mono uppercase">SENT: 18.12.2025</span>
                        <i class="fas fa-shield text-[8px] text-gray-600"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-auto pt-6">
            <div class="bg-black/60 rounded-[1.5rem] border border-dashed border-white/10 p-4 md:p-8 text-center">
                <div class="inline-flex items-center gap-2 mb-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                    <h5 class="text-white font-black uppercase italic text-[9px] md:text-[11px] tracking-widest">Broadcast Only Mode</h5>
                </div>
                <p class="text-gray-600 text-[8px] md:text-[9px] font-bold uppercase leading-tight">
                    Direct messaging enabled in <span class="text-red-600">v2.0 Update</span>.
                </p>
            </div>
        </div>
    </div>

    <div class="py-2 text-center">
        <p class="text-[6px] md:text-[8px] text-gray-700 uppercase font-black tracking-[0.4em]">MIKOKO SECURE UPLINK // NO UNAUTHORIZED ACCESS</p>
    </div>
</div>`,
};

/**
 * MIKOKO LEAGUE FULL SYSTEM SCRIPT
 * Version: 7.0 (Franchise Naming Protocol)
 */

// --- 1. GLOBAL DATABASE STATE (8 TEAMS - DEFAULT NIL) ---
let players = JSON.parse(localStorage.getItem('mikoko_players')) || [];
let teams = JSON.parse(localStorage.getItem('mikoko_teams')) || [
    { id: '01A', name: "NIL", members: [] },
    { id: '02B', name: "NIL", members: [] },
    { id: '03C', name: "NIL", members: [] },
    { id: '04D', name: "NIL", members: [] },
    { id: '05E', name: "NIL", members: [] },
    { id: '06I', name: "NIL", members: [] },
    { id: '07M', name: "NIL", members: [] },
    { id: '08R', name: "NIL", members: [] }
];

const MAX_SQUAD_SIZE = 10;
const TOTAL_SLOTS = 80; 
const ADMIN_PASSCODE = "123789";

// --- 2. MASTER UI CONTROLLER ---
function updateView(title) {
    const viewTitle = document.getElementById('viewTitle');
    if (viewTitle) viewTitle.innerText = title;

    const allLinks = document.querySelectorAll('.sidebar-item');
    allLinks.forEach(link => {
        link.classList.remove('active');
        const span = link.querySelector('span');
        if (span && span.innerText.trim() === title) link.classList.add('active');
    });

    const mainDisplay = document.getElementById('mainDisplay');
    if (mainDisplay) {
        mainDisplay.style.opacity = '0';
        
        setTimeout(() => {
            if (title === 'Player Selection' || title === 'Team Selection') {
                renderLeagueSystem(title);
            } else {
                mainDisplay.innerHTML = (typeof contentData !== 'undefined' && contentData[title]) 
                    ? contentData[title] 
                    : `<div class="p-10 text-center"><h2 class="text-white font-black italic">${title}</h2><p class="text-gray-500 text-xs mt-2">DATA NODE OFFLINE</p></div>`;
            }
            
            mainDisplay.style.opacity = '1';
            startSystemSync(); 
        }, 200);
    }

    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (window.innerWidth < 768 && sidebar && !sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('-translate-x-full');
        if (overlay) overlay.classList.add('hidden');
    }
}

// --- 3. DATA & SYSTEM SYNC ---
function startSystemSync() {
    const ids = {
        'stat-total-players': players.length,
        'stat-confirmed-players': players.filter(p => p.status === 'Confirmed').length,
        'stat-pending-players': players.filter(p => p.status === 'Pending').length
    };

    Object.entries(ids).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.innerText = val;
    });

    const timerElement = document.getElementById('countdownTimer');
    if (timerElement) {
        const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        timerElement.innerText = `SYNCING: ${d}D ${h}H ${m}M ${s}S`;
    }
}

// --- 4. ADMIN AUTH ---
function openAuthPortal() {
    const portal = document.getElementById('adminAuthPortal');
    const input = document.getElementById('adminPassInput');
    if (!portal) return;
    input.value = "";
    portal.classList.remove('hidden');
    setTimeout(() => {
        portal.classList.remove('opacity-0');
        input.focus();
    }, 10);
}

function closeAuthPortal() {
    const portal = document.getElementById('adminAuthPortal');
    if (portal) {
        portal.classList.add('opacity-0');
        setTimeout(() => portal.classList.add('hidden'), 500);
    }
    updateView('Overview');
}

function verifyAdminAccess() {
    const input = document.getElementById('adminPassInput').value;
    if (input === ADMIN_PASSCODE) {
        const portal = document.getElementById('adminAuthPortal');
        portal.classList.add('opacity-0');
        setTimeout(() => {
            portal.classList.add('hidden');
            executeAdminRender();
        }, 500);
    } else {
        showGlobalAlert("fas fa-exclamation-triangle", "Auth Failed", "Invalid Credentials.");
        closeAuthPortal();
    }
}

// --- 5. RENDER SYSTEM PAGES ---
function renderLeagueSystem(mode) {
    const mainDisplay = document.getElementById('mainDisplay');

    if (mode === 'Team Selection') {
        openAuthPortal();
        return;
    }

    if (mode === 'Player Selection') {
        const pending = players.filter(p => p.status === 'Pending');
        const active = players.filter(p => p.status === 'Confirmed');

        mainDisplay.innerHTML = `
            <div class="space-y-8 animate-in pb-10">
                <div class="bg-zinc-900/80 p-6 md:p-8 rounded-[2rem] border border-white/5">
                    <h3 class="text-white font-black uppercase italic mb-4">Registration Terminal</h3>
                    <div class="flex flex-col md:flex-row gap-4">
                        <input type="text" id="playerNameInput" placeholder="ENTER PLAYER NAME..." class="flex-1 bg-black/60 border border-white/10 rounded-2xl px-6 py-4 text-red-500 font-mono focus:outline-none focus:border-red-600">
                        <button onclick="registerPlayer()" class="px-10 py-4 bg-red-600 text-white font-black uppercase italic rounded-2xl hover:bg-white hover:text-red-600 transition-all">Register</button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="border border-white/5 rounded-[2.5rem] p-6 bg-black/40">
                        <h4 class="text-yellow-500 font-black uppercase text-[10px] mb-4 tracking-widest">Awaiting Assignment (${pending.length})</h4>
                        <div class="space-y-2 overflow-y-auto max-h-[450px] custom-scrollbar pr-2">
                            ${pending.map(p => `<div class="p-4 bg-white/5 rounded-2xl flex justify-between items-center"><span class="text-white font-bold text-xs uppercase">${p.name}</span><i class="fas fa-clock text-yellow-500/20 text-xs"></i></div>`).join('') || '<p class="text-zinc-800 text-center py-10 font-black uppercase italic">No Pending Units</p>'}
                        </div>
                    </div>
                    <div class="border border-white/5 rounded-[2.5rem] p-6 bg-black/40">
                        <h4 class="text-emerald-500 font-black uppercase text-[10px] mb-4 tracking-widest">Active Roster (${active.length})</h4>
                        <div class="space-y-2 overflow-y-auto max-h-[450px] custom-scrollbar pr-2">
                            ${active.map(p => `<div class="p-4 bg-white/5 rounded-2xl flex justify-between items-center"><span class="text-white font-bold text-xs uppercase">${p.name}</span><span class="text-[8px] text-zinc-500 font-black uppercase border border-white/5 px-2 py-1 rounded italic">${p.team}</span></div>`).join('') || '<p class="text-zinc-800 text-center py-10 font-black uppercase italic">Roster Empty</p>'}
                        </div>
                    </div>
                </div>
            </div>`;
    }
}

function executeAdminRender() {
    const mainDisplay = document.getElementById('mainDisplay');
    const firstPending = players.find(p => p.status === 'Pending');

    mainDisplay.innerHTML = `
        <div class="space-y-8 animate-in pb-20">
            <div class="bg-red-600/10 border border-red-600/20 p-6 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-4 backdrop-blur-md">
                <div>
                    <h3 class="text-white font-black uppercase italic">Franchise Admin Terminal</h3>
                    <p class="text-[9px] text-red-500 font-bold uppercase tracking-widest">Elite-8 Control Module</p>
                </div>
                <div class="bg-black/50 px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3">
                    <span class="text-[9px] text-gray-500 uppercase font-black">Next In Queue:</span>
                    <span class="text-xs text-white font-bold italic uppercase">${firstPending ? firstPending.name : 'NO PENDING'}</span>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                ${teams.map(t => `
                    <div class="flex flex-col h-[400px] bg-zinc-900/50 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-red-600/30 transition-all">
                        <div class="p-5 pb-2">
                            <div class="flex justify-between items-start">
                                <h4 class="text-white font-black italic uppercase text-sm truncate ${t.name === 'NIL' ? 'text-gray-600' : 'text-white'}">${t.name}</h4>
                                <button onclick="renameTeam('${t.id}')" class="text-[10px] text-red-600 hover:text-white"><i class="fas fa-pen"></i></button>
                            </div>
                            <p class="text-[9px] text-red-600 font-bold uppercase tracking-widest mt-1">${t.members.length}/10 UNITS</p>
                        </div>

                        <div class="flex-1 overflow-y-auto px-5 py-2 custom-scrollbar space-y-2">
                            ${t.members.map(m => `
                                <div class="flex justify-between items-center p-3 bg-white/[0.03] border border-white/5 rounded-xl group/item">
                                    <p class="text-[9px] text-zinc-300 font-mono uppercase font-bold">${m}</p>
                                    <button onclick="firePlayer('${m}', '${t.id}')" class="text-red-600 opacity-0 group-hover/item:opacity-100 transition-all">
                                        <i class="fas fa-trash-alt text-[10px]"></i>
                                    </button>
                                </div>`).join('') || '<div class="h-full flex flex-col items-center justify-center opacity-10 gap-2"><i class="fas fa-shield-blank text-2xl"></i><span class="text-[8px] font-black uppercase italic">Empty Slot</span></div>'}
                        </div>

                        <div class="p-5 pt-2 mt-auto">
                            <button onclick="assignPlayerToTeam(${firstPending ? firstPending.id : null}, '${t.id}')" 
                                class="w-full py-4 rounded-xl text-[9px] font-black uppercase transition-all 
                                ${firstPending && t.members.length < MAX_SQUAD_SIZE ? 'bg-red-600 text-white shadow-lg' : 'bg-white/5 text-gray-600 cursor-not-allowed'}">
                                ${firstPending ? (t.members.length < MAX_SQUAD_SIZE ? 'Assign' : 'Full') : 'Queue Empty'}
                            </button>
                        </div>
                    </div>`).join('')}
            </div>
        </div>`;
}

// --- 6. CORE LOGIC ---
function saveLeagueData() {
    localStorage.setItem('mikoko_players', JSON.stringify(players));
    localStorage.setItem('mikoko_teams', JSON.stringify(teams));
    startSystemSync();
}

function renameTeam(teamId) {
    const team = teams.find(t => t.id === teamId);
    const newName = prompt("ENTER NEW FRANCHISE NAME:", team.name === "NIL" ? "" : team.name);
    
    if (newName && newName.trim() !== "") {
        const oldName = team.name;
        team.name = newName.trim().toUpperCase();
        
        // Update all players currently in this team
        players.forEach(p => {
            if (p.team === oldName) p.team = team.name;
        });

        saveLeagueData();
        executeAdminRender();
        showGlobalAlert("fas fa-id-card", "Franchise Branded", `Team ${teamId} is now ${team.name}`);
    }
}

function registerPlayer() {
    const nameInput = document.getElementById('playerNameInput');
    if (!nameInput || !nameInput.value.trim()) return;

    if (players.length >= TOTAL_SLOTS) {
        showGlobalAlert("fas fa-exclamation-circle", "Network Full", "League capacity has been reached.");
        return;
    }

    players.push({ id: Date.now(), name: nameInput.value.trim(), status: 'Pending', team: 'Unassigned' });
    saveLeagueData();
    showGlobalAlert("fas fa-hourglass-half", "Entry Logged", "Awaiting Admin Assignment.");
    nameInput.value = "";
    renderLeagueSystem('Player Selection'); 
}

function assignPlayerToTeam(playerId, teamId) {
    if (!playerId) return;
    const team = teams.find(t => t.id === teamId);
    const player = players.find(p => p.id === playerId);
    
    if (team.name === "NIL") {
        showGlobalAlert("fas fa-lock", "Access Denied", "Purchase franchise to unlock team assignment.");
        return;
    }

    if (team.members.length >= MAX_SQUAD_SIZE) {
        showGlobalAlert("fas fa-users", "Squad Full", "Max capacity reached.");
        return;
    }

    player.status = 'Confirmed';
    player.team = team.name;
    team.members.push(player.name);
    
    saveLeagueData();
    executeAdminRender();
    showGlobalAlert("fas fa-check-double", "Unit Deployed", `${player.name} joined ${team.name}.`);
}

function firePlayer(playerName, teamId) {
    const team = teams.find(t => t.id === teamId);
    const player = players.find(p => p.name === playerName);
    team.members = team.members.filter(m => m !== playerName);
    if (player) { player.status = 'Pending'; player.team = 'Unassigned'; }
    saveLeagueData();
    executeAdminRender();
}

function showGlobalAlert(icon, title, message) {
    const overlay = document.getElementById('globalAlert');
    if (!overlay) return;
    document.getElementById('alertIcon').innerHTML = `<i class="${icon} text-red-600 text-5xl"></i>`;
    document.getElementById('alertTitle').innerText = title;
    document.getElementById('alertMessage').innerText = message;
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => overlay.classList.add('opacity-0', 'pointer-events-none'), 3000);
}

// --- 7. INITIALIZATION ---
window.onload = () => {
    startSystemSync();
    updateView('Overview');
};
/**
 * MIKOKO LEAGUE - DEDICATED LEADERBOARD ENGINE
 * Handles Expansion and Display for Goals & Assists
 */

// --- 1. GOALS LEADERBOARD FUNCTIONS ---
function toggleFullLeaderboard() {
    const extraRows = document.querySelectorAll('.extra-players');
    const btn = document.getElementById('toggleGoalsBtn');
    
    // Check if currently hidden
    const isHidden = extraRows[0].classList.contains('hidden');
    
    if (isHidden) {
        extraRows.forEach(row => {
            row.classList.remove('hidden');
            row.classList.add('flex'); // Ensure flex layout remains
        });
        btn.innerText = "Collapse Rankings";
    } else {
        extraRows.forEach(row => {
            row.classList.add('hidden');
            row.classList.remove('flex');
        });
        btn.innerText = "View Full Player Stats (Top 10)";
    }
}

// --- 2. ASSISTS LEADERBOARD FUNCTIONS ---
function toggleAssistsLeaderboard() {
    const extraRows = document.querySelectorAll('.extra-assists');
    const btn = document.getElementById('toggleAssistsBtn');
    
    // Check if currently hidden
    const isHidden = extraRows[0].classList.contains('hidden');
    
    if (isHidden) {
        extraRows.forEach(row => {
            row.classList.remove('hidden');
            row.classList.add('flex');
        });
        btn.innerText = "Collapse Rankings";
    } else {
        extraRows.forEach(row => {
            row.classList.add('hidden');
            row.classList.remove('flex');
        });
        btn.innerText = "View Full Playmaker Stats (Top 10)";
    }
}

// --- 3. DATA SYNC (Optional: Syncs names if data exists) ---
function syncLeaderboardData() {
    // If you want these to pull from your player database automatically
    if (typeof players !== 'undefined' && players.length > 0) {
        // This is where you would map your players into the HTML rows
        // If you prefer to keep them static for now, this can stay empty
    }
}



/// for the team lab
// --- TACTICAL LAB ENGINE ---

function initTacticalLab() {
    const bench = document.getElementById('playerBench');
    const matchType = document.getElementById('matchType').value;
    if(!bench) return;

    bench.innerHTML = '';
    // Always provide 12 units for the coach to choose from
    for(let i = 1; i <= 12; i++) {
        const playerDot = document.createElement('div');
        playerDot.id = `tactical-player-${i}`;
        playerDot.draggable = true;
        playerDot.ondragstart = dragPlayer;
        playerDot.className = "w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-[10px] text-white font-black cursor-move border-2 border-white/20 shadow-lg";
        playerDot.innerText = i;
        bench.appendChild(playerDot);
    }
}

function allowDrop(ev) { ev.preventDefault(); }

function dragPlayer(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dropPlayer(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const player = document.getElementById(data);
    const dropZone = document.getElementById('dropZone');
    
    // Calculate position relative to the pitch
    const rect = dropZone.getBoundingClientRect();
    const x = ((ev.clientX - rect.left) / rect.width) * 100;
    const y = ((ev.clientY - rect.top) / rect.height) * 100;

    player.style.position = 'absolute';
    player.style.left = `${x}%`;
    player.style.top = `${y}%`;
    player.style.transform = 'translate(-50%, -50%)';
    
    dropZone.appendChild(player);
}

function applyFormation(type) {
    const players = Array.from(document.querySelectorAll('[id^="tactical-player-"]'));
    const dropZone = document.getElementById('dropZone');
    
    if(type === 'clear') {
        initTacticalLab();
        return;
    }

    // Basic coordinate logic for formations
    const formations = {
        '4-4-2': [
            {t:90, l:50}, // GK
            {t:70, l:20}, {t:70, l:40}, {t:70, l:60}, {t:70, l:80}, // DEF
            {t:40, l:20}, {t:40, l:40}, {t:40, l:60}, {t:40, l:80}, // MID
            {t:15, l:40}, {t:15, l:60} // ATT
        ]
    };

    const coords = formations[type] || [];
    coords.forEach((pos, i) => {
        if(players[i]) {
            players[i].style.position = 'absolute';
            players[i].style.left = `${pos.l}%`;
            players[i].style.top = `${pos.t}%`;
            players[i].style.transform = 'translate(-50%, -50%)';
            dropZone.appendChild(players[i]);
        }
    });
}

function saveTacticalMap() {
    const pitch = document.getElementById('tacticalPitch');
    // Note: requires <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    html2canvas(pitch).then(canvas => {
        const link = document.createElement('a');
        link.download = `Mikoko-Tactics-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        link.click();
        showGlobalAlert("fas fa-file-download", "Tactics Exported", "Saved to your device gallery.");
    });
}

function generateTacticalLink() {
    const teamName = document.getElementById('tacticalTeamName').value || "Unnamed Squad";
    const shareUrl = window.location.href.split('?')[0] + "?view=TeamLab&team=" + btoa(teamName);
    
    navigator.clipboard.writeText(shareUrl);
    showGlobalAlert("fas fa-link", "Link Generated", "Share this link with your squad group.");
}

///// for the upcoming
// --- FIXTURE MODAL ENGINE ---
function openFixtureDetails(id, home, away, time, venue) {
    const modal = document.getElementById('fixtureModal');
    const content = document.getElementById('modalContent');
    
    // Set Modal Data
    document.getElementById('modalTeamName').innerHTML = `${home} <span class="text-red-600">vs</span> ${away}`;
    
    // You can customize this info per ID if you want specific referees/weather
    const detailsHTML = `
        <div class="space-y-4 text-left mt-6">
            <div class="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p class="text-[8px] text-red-600 uppercase font-black mb-1 tracking-widest">Protocol ID</p>
                <p class="text-xs text-white font-bold uppercase">MKK-S03-0${id}</p>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <div class="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p class="text-[8px] text-gray-500 uppercase font-black mb-1 tracking-widest">Venue</p>
                    <p class="text-[10px] text-white font-bold uppercase">${venue}</p>
                </div>
                <div class="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p class="text-[8px] text-gray-500 uppercase font-black mb-1 tracking-widest">Kick-off</p>
                    <p class="text-[10px] text-white font-bold uppercase">${time} WAT</p>
                </div>
            </div>
            <div class="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p class="text-[8px] text-gray-500 uppercase font-black mb-1 tracking-widest">Match Officials</p>
                <p class="text-[10px] text-gray-400 font-bold uppercase">Automated AI System // Ref: ALPHA-0${id}</p>
            </div>
        </div>
    `;

    // Inject and Show
    const detailContainer = document.querySelector('#fixtureModal .space-y-4');
    if(detailContainer) detailContainer.outerHTML = detailsHTML;
    
    modal.classList.remove('pointer-events-none', 'opacity-0');
    content.classList.remove('scale-95');
}

function closeFixtureModal() {
    const modal = document.getElementById('fixtureModal');
    const content = document.getElementById('modalContent');
    modal.classList.add('opacity-0', 'pointer-events-none');
    content.classList.add('scale-95');
}

// --- PUSH NOTIFICATION ENGINE ---
function broadcastPush(home, away) {
    // Show a global alert (You can use your globalAlert ID if it exists)
    const alertBox = document.getElementById('globalAlert');
    const alertTitle = document.getElementById('alertTitle');
    const alertMsg = document.getElementById('alertMessage');

    alertTitle.innerText = "SATELLITE UPLINK ACTIVE";
    alertMsg.innerText = `Push Notification Sent: ${home} vs ${away} is now confirmed for Matchday 01.`;
    
    // Add visual feedback to button
    event.currentTarget.innerHTML = '<i class="fas fa-check"></i> <span>Sent</span>';
    event.currentTarget.classList.add('bg-green-600', 'text-white');

    // Show Alert
    alertBox.classList.remove('opacity-0', 'pointer-events-none');
    
    // Hide after 3 seconds
    setTimeout(() => {
        alertBox.classList.add('opacity-0', 'pointer-events-none');
    }, 3000);
}