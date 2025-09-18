// --- DOM ELEMENTS ---
const generateBtn = document.getElementById('generateBtn');
const assignmentsTab = document.getElementById('tab-assignments');
const rulesTab = document.getElementById('tab-rules');
const assignmentsPanel = document.getElementById('assignments-panel');
const rulesPanel = document.getElementById('rules-panel');
const resultsDiv = document.getElementById('results');
const rulesContainer = document.getElementById('rules-container');
const germanThemeBtn = document.getElementById('theme-german-btn');
const sovietThemeBtn = document.getElementById('theme-soviet-btn');

// --- THEME DATA ---
const themes = {
    german: {
        headerIcon: `<svg class="h-16 w-16 text-gray-400 mb-2" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M42.5 0H57.5V42.5H100V57.5H57.5V100H42.5V57.5H0V42.5H42.5V0Z"/></svg>`,
        headerTitle: 'HIGH COMMAND CONSOLE',
        headerSubtitle: 'Assigning command structure for the Ostfront.',
        headerTitleColor: 'text-yellow-300',
        sectors: ['Heeresgruppe Nord', 'Heeresgruppe Mitte', 'Heeresgruppe Süd'],
        specialRoles: ['Oberkommando', 'Logistikkommando', 'Luftwaffenkommando'],
        roleDetails: {
            'Oberkommando': { title: "Oberkommando", description: "Supreme Commander of the Operation.", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>`, color: "text-yellow-300", borderColor: "#f6e05e" },
            'Logistikkommando': { title: "Logistikkommando", description: "Commander of Reinforcements and Supply.", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M8 6a2 2 0 100-4 2 2 0 000 4zM6 18a2 2 0 100-4 2 2 0 000 4zM2 6a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zM2 12a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zm-5-3a1 1 0 00-1 1v1h2v-1a1 1 0 00-1-1zm3 0a1 1 0 00-1 1v1h2v-1a1 1 0 00-1-1zM2 18a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"/></svg>`, color: "text-orange-400", borderColor: "#f6ad55" },
            'Luftwaffenkommando': { title: "Luftwaffenkommando", description: "Commander of the Air Fleet.", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>`, color: "text-cyan-400", borderColor: "#4fd1c5" },
            'Heeresgruppe': { title: "Heeresgruppe", ruleTitle: 'Heeresgruppe (Sector Command)', description: 'Commander of a designated front sector.', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-400" fill="currentColor" viewBox="0 0 512 512"><path d="M495.4 181.3l-105-39.4C374.3 133.2 360 120.3 360 104V0H152v104c0 16.3-14.3 29.2-30.4 27.9l-105 39.4C7.3 185.2 0 198.8 0 212.4v87.2c0 13.6 7.3 27.2 16.6 31.1l105 39.4c16.1 6 30.4 18.9 30.4 35.2V512h208V405.3c0-16.3 14.3-29.2 30.4-27.9l105-39.4c9.3-3.9 16.6-17.5 16.6-31.1V212.4c0-13.6-7.3-27.2-16.6-31.1z"/></svg>`, color: 'text-green-400'},
            'Heeresgruppe Nord': { title: "Heeresgruppe Nord", description: "Commander of the Northern Front." },
            'Heeresgruppe Mitte': { title: "Heeresgruppe Mitte", description: "Commander of the Central Front." },
            'Heeresgruppe Süd': { title: "Heeresgruppe Süd", description: "Commander of the Southern Front." },
        }
    },
    soviet: {
        headerIcon: `<svg class="h-16 w-16 text-red-500 mb-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>`,
        headerTitle: 'STAVKA HIGH COMMAND',
        headerSubtitle: 'Assigning command structure for the Motherland.',
        headerTitleColor: 'text-red-500',
        sectors: ['Northern Front', 'Central Front', 'Southern Front'],
        specialRoles: ['Stavka Representative', 'Chief of the Rear', 'VVS Command'],
        roleDetails: {
            'Stavka Representative': { title: "Stavka Representative", description: "Supreme Commander of the Operation.", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2.5a.5.5 0 00-.5.5v3.54a1.5 1.5 0 01-.836 1.332L6.44 9.44a.5.5 0 00.107.894l2.28.374a1.5 1.5 0 011.172 1.173l.373 2.28a.5.5 0 00.894.106l1.623-2.724a1.5 1.5 0 011.332-.836H17a.5.5 0 00.5-.5V6.5a.5.5 0 00-.5-.5h-3.54a1.5 1.5 0 01-1.332-.836L9.904 2.44a.5.5 0 00-.894-.106L6.286 4.96a1.5 1.5 0 01-1.173 1.173l-2.28.374a.5.5 0 00-.106.894l2.724 1.623a1.5 1.5 0 01.836 1.332V17a.5.5 0 001 0v-3.54a1.5 1.5 0 01.836-1.332l2.724-1.623a.5.5 0 00.106-.894l-2.28-.374a1.5 1.5 0 01-1.172-1.173l-.373-2.28a.5.5 0 00-.894-.106L8.377 9.96a1.5 1.5 0 01-1.332.836H3a.5.5 0 00-.5.5v3.54a.5.5 0 001 0V11h3.54a1.5 1.5 0 011.332.836l1.623 2.724a.5.5 0 00.894.106l2.724-1.623a1.5 1.5 0 01.836-1.332L17.5 10a.5.5 0 000-1l-3.54-.001a1.5 1.5 0 01-1.332-.836L10.904 5.44a.5.5 0 00-.894.106l-1.623 2.724a1.5 1.5 0 01-1.332.836H3.5a.5.5 0 000 1h3.54a1.5 1.5 0 011.332.836l1.623 2.724a.5.5 0 00.894.106l2.724-1.623a1.5 1.5 0 01.836-1.332V17.5a.5.5 0 001 0v-3.54a1.5 1.5 0 01.836-1.332l2.724-1.623a.5.5 0 00.106-.894l-2.28-.374a1.5 1.5 0 01-1.172-1.173L13 6.643a1.5 1.5 0 011.332-.836H18a.5.5 0 000-1h-3.668a1.5 1.5 0 01-1.332-.836L11.377 1.24a.5.5 0 00-.894.106L8.86 3.97a1.5 1.5 0 01-1.332.836H3.5a.5.5 0 000 1h3.668a1.5 1.5 0 011.332.836L10.123 9.36a.5.5 0 00.894-.106L12.64 6.53a1.5 1.5 0 011.332-.836H17.5a.5.5 0 000-1z" clip-rule="evenodd"/></svg>`, color: "text-yellow-300", borderColor: "#f6e05e" },
            'Chief of the Rear': { title: "Chief of the Rear", description: "Commander of Logistics and Supply.", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M8 6a2 2 0 100-4 2 2 0 000 4zM6 18a2 2 0 100-4 2 2 0 000 4zM2 6a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zM2 12a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zm-5-3a1 1 0 00-1 1v1h2v-1a1 1 0 00-1-1zm3 0a1 1 0 00-1 1v1h2v-1a1 1 0 00-1-1zM2 18a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z"/></svg>`, color: "text-orange-400", borderColor: "#f6ad55" },
            'VVS Command': { title: "VVS Command", description: "Commander of the Air Force.", icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>`, color: "text-cyan-400", borderColor: "#4fd1c5" },
            'Front Command': { title: "Front Command", ruleTitle: 'Front Command (Sector Command)', description: 'Commander of a designated front.', icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-400" fill="currentColor" viewBox="0 0 512 512"><path d="M495.4 181.3l-105-39.4C374.3 133.2 360 120.3 360 104V0H152v104c0 16.3-14.3 29.2-30.4 27.9l-105 39.4C7.3 185.2 0 198.8 0 212.4v87.2c0 13.6 7.3 27.2 16.6 31.1l105 39.4c16.1 6 30.4 18.9 30.4 35.2V512h208V405.3c0-16.3 14.3-29.2 30.4-27.9l105-39.4c9.3-3.9 16.6-17.5 16.6-31.1V212.4c0-13.6-7.3-27.2-16.6-31.1z"/></svg>`, color: 'text-green-400'},
            'Northern Front': { title: "Northern Front", description: "Commander of the Northern Front." },
            'Central Front': { title: "Central Front", description: "Commander of the Central Front." },
            'Southern Front': { title: "Southern Front", description: "Commander of the Southern Front." },
        }
    }
};
let currentTheme = 'german';

// --- FUNCTIONS ---
function setTheme(themeName) {
    currentTheme = themeName;
    const theme = themes[themeName];
    
    // Update Body Class
    document.body.className = document.body.className.replace(/theme-\w+/g, `theme-${themeName}`);

    // Update Header
    document.getElementById('header-icon-container').innerHTML = theme.headerIcon;
    const headerTitle = document.getElementById('header-title');
    headerTitle.textContent = theme.headerTitle;
    headerTitle.className = `text-5xl md:text-6xl font-bold header-font tracking-wider ${theme.headerTitleColor}`;
    document.getElementById('header-subtitle').textContent = theme.headerSubtitle;

    // Update Theme Buttons
    if (themeName === 'german') {
        germanThemeBtn.classList.add('bg-gray-600', 'text-white');
        germanThemeBtn.classList.remove('bg-transparent', 'text-gray-400');
        sovietThemeBtn.classList.add('bg-transparent', 'text-gray-400');
        sovietThemeBtn.classList.remove('bg-gray-600', 'text-white');
    } else {
        sovietThemeBtn.classList.add('bg-gray-600', 'text-white');
        sovietThemeBtn.classList.remove('bg-transparent', 'text-gray-400');
        germanThemeBtn.classList.add('bg-transparent', 'text-gray-400');
        germanThemeBtn.classList.remove('bg-gray-600', 'text-white');
    }
    
    // Update UI elements and clear results
    updateRulesTab();
    clearResults();
    switchTab('assignments');
}

function updateRulesTab() {
    rulesContainer.innerHTML = '';
    const themeRoles = themes[currentTheme].roleDetails;
    const specialRoles = themes[currentTheme].specialRoles;
    
    // Order: special roles first, then sector command
    const ruleOrder = [...specialRoles, themeRoles.Heeresgruppe ? 'Heeresgruppe' : 'Front Command'];

    ruleOrder.forEach(key => {
        const role = themeRoles[key];
        const ruleDiv = document.createElement('div');
        ruleDiv.className = 'flex items-start gap-4 p-4 rounded-lg bg-gray-800/50';
        
        const title = role.ruleTitle || role.title;

        let rulesList = '';
        if (key === 'Oberkommando' || key === 'Stavka Representative') {
           rulesList = `<li>You are the supreme commander. You have the final say on the grand strategy.</li><li>You can veto any strategic move proposed by a sector commander.</li><li>Your primary job is to coordinate the fronts, not fight every battle.</li>`;
        } else if (key === 'Logistikkommando' || key === 'Chief of the Rear') {
            rulesList = `<li>You are in charge of the requisition of all new battalions on the strategic map.</li><li>You decide which units to buy, but you should listen to requests from front commanders.</li><li>If supplies are short, you decide who gets priority.</li>`;
        } else if (key === 'Luftwaffenkommando' || key === 'VVS Command') {
            rulesList = `<li>You command the Air Force. You have sole and absolute authority to commit air assets to any battle.</li><li>Sector commanders must request air support from you. It is your choice to grant or deny it.</li>`;
        } else if (key === 'Heeresgruppe' || key === 'Front Command') {
            rulesList = `<li>Each player is assigned one sector.</li><li>You are the primary commander for all tactical battles initiated in your sector.</li><li>You decide troop movements in your sector. The supreme commander can veto your orders.</li>`;
        }

        ruleDiv.innerHTML = `
            <div class="flex-shrink-0 mt-1">${role.icon}</div>
            <div>
                <h3 class="text-xl font-bold ${role.color}">${title}</h3>
                <ul class="list-disc list-inside text-gray-300 mt-2 space-y-1">${rulesList}</ul>
            </div>
        `;
        rulesContainer.appendChild(ruleDiv);
    });
}

function clearResults() {
    resultsDiv.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const placeholder = document.createElement('div');
        placeholder.className = 'card rounded-xl p-6 flex flex-col items-center justify-center text-center h-48 border-t-4 border-gray-600';
        placeholder.innerHTML = `<p class="text-gray-400">Awaiting Orders...</p>`;
        resultsDiv.appendChild(placeholder);
    }
}

function switchTab(activeTab) {
    if (activeTab === 'assignments') {
        assignmentsTab.classList.add('active');
        rulesTab.classList.remove('active');
        assignmentsPanel.classList.remove('hidden');
        rulesPanel.classList.add('hidden');
    } else {
        rulesTab.classList.add('active');
        assignmentsTab.classList.remove('active');
        rulesPanel.classList.remove('hidden');
        assignmentsPanel.classList.add('hidden');
    }
}

function assignRoles() {
    const player1 = document.getElementById('player1').value.trim() || 'Player 1';
    const player2 = document.getElementById('player2').value.trim() || 'Player 2';
    const player3 = document.getElementById('player3').value.trim() || 'Player 3';
    let players = [player1, player2, player3];

    const theme = themes[currentTheme];
    const sectors = theme.sectors;
    const specialRoles = theme.specialRoles;
    const roleDetails = theme.roleDetails;
    
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex, newArray = [...array];
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
        }
        return newArray;
    };

    let shuffledPlayers = shuffle(players);
    let shuffledSectors = shuffle(sectors);
    let shuffledSpecialRoles = shuffle(specialRoles);
    let assignments = {};
    players.forEach(p => assignments[p] = []);

    for (let i = 0; i < players.length; i++) {
        assignments[shuffledPlayers[i]].push(shuffledSectors[i], shuffledSpecialRoles[i]);
    }

    resultsDiv.innerHTML = ''; 

    players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'card rounded-xl p-6 flex flex-col items-center text-center';

        const playerRoles = [...new Set(assignments[player])]; 
        let primarySpecialRole = playerRoles.find(role => specialRoles.includes(role));

        card.style.borderTop = `4px solid ${roleDetails[primarySpecialRole]?.borderColor || '#4A5568'}`;

        playerRoles.sort((a, b) => {
            if (specialRoles.includes(a) && !sectors.includes(b)) return -1;
            if (sectors.includes(a) && specialRoles.includes(b)) return 1;
            return 0;
        });
        
        let rolesHTML = '';
        playerRoles.forEach(roleKey => {
            const role = roleDetails[roleKey];
            
            // Determine the base role for icons and colors (e.g., Heeresgruppe for Heeresgruppe Nord)
            let baseRole = role; // Default to the specific role itself (works for special roles)
            if (sectors.includes(roleKey)) {
                // If it's a sector role, find the generic sector definition for the icon/color
                const genericSectorKey = themes[currentTheme].roleDetails.Heeresgruppe ? 'Heeresgruppe' : 'Front Command';
                baseRole = roleDetails[genericSectorKey];
            }

            if (!role || !baseRole) return; // Safety check to prevent errors

            rolesHTML += `
                <div class="flex flex-col items-center w-full mb-4 last:mb-0">
                    <div class="flex items-center gap-3">
                        ${baseRole.icon}
                        <h3 class="text-xl font-bold ${baseRole.color}">${role.title}</h3>
                    </div>
                    <p class="text-gray-300 text-sm mt-2">${role.description}</p>
                </div>
            `;
        });

        card.innerHTML = `
            <h2 class="text-2xl font-semibold mb-6">${player}</h2>
            <div class="flex flex-col justify-start items-center h-full w-full">${rolesHTML}</div>
        `;
        resultsDiv.appendChild(card);
    });
    
    switchTab('assignments');
}

// --- EVENT LISTENERS ---
generateBtn.addEventListener('click', assignRoles);
assignmentsTab.addEventListener('click', () => switchTab('assignments'));
rulesTab.addEventListener('click', () => switchTab('rules'));
germanThemeBtn.addEventListener('click', () => setTheme('german'));
sovietThemeBtn.addEventListener('click', () => setTheme('soviet'));

// --- INITIALIZATION ---
setTheme('german');
