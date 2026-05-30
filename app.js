// app.js – QuickKey Enhanced (100 shortcuts)
(function () {
  'use strict';

  // ─── SHORTCUT DATA (100 shortcuts across 6 categories) ──────
  const SHORTCUTS = [
    // ── Windows 11 (10) ──────────────────────────────────────
    { id: 'win1',  category: 'Windows 11', title: 'Snap Window Left',       keys: ['Win', '←'],        description: 'Snap active window to the left half' },
    { id: 'win2',  category: 'Windows 11', title: 'Snap Window Right',      keys: ['Win', '→'],        description: 'Snap active window to the right half' },
    { id: 'win3',  category: 'Windows 11', title: 'Task View',              keys: ['Win', 'Tab'],      description: 'Open virtual desktops & timeline' },
    { id: 'win4',  category: 'Windows 11', title: 'Widgets Panel',          keys: ['Win', 'W'],        description: 'Open the widgets board' },
    { id: 'win5',  category: 'Windows 11', title: 'Quick Settings',         keys: ['Win', 'A'],        description: 'Open action center / quick settings' },
    { id: 'win6',  category: 'Windows 11', title: 'Notification Center',    keys: ['Win', 'N'],        description: 'Open the notification panel' },
    { id: 'win7',  category: 'Windows 11', title: 'Lock Screen',            keys: ['Win', 'L'],        description: 'Lock your PC immediately' },
    { id: 'win8',  category: 'Windows 11', title: 'Run Dialog',             keys: ['Win', 'R'],        description: 'Open the Run command dialog' },
    { id: 'win9',  category: 'Windows 11', title: 'Emoji Picker',           keys: ['Win', '.'],        description: 'Open emoji & symbol picker' },
    { id: 'win10', category: 'Windows 11', title: 'Maximize / Restore',     keys: ['Win', '↑'],        description: 'Maximize or restore the active window' },

    // ── VS Code (10) ──────────────────────────────────────────
    { id: 'code1',  category: 'VS Code', title: 'Command Palette',      keys: ['Ctrl', 'Shift', 'P'],  description: 'Show all available commands' },
    { id: 'code2',  category: 'VS Code', title: 'Toggle Terminal',      keys: ['Ctrl', '`'],           description: 'Open / close the integrated terminal' },
    { id: 'code3',  category: 'VS Code', title: 'Quick Open File',      keys: ['Ctrl', 'P'],           description: 'Jump to any file quickly' },
    { id: 'code4',  category: 'VS Code', title: 'Format Document',      keys: ['Shift', 'Alt', 'F'],   description: 'Format the entire file' },
    { id: 'code5',  category: 'VS Code', title: 'Multi-cursor',         keys: ['Alt', 'Click'],        description: 'Add a cursor at each click position' },
    { id: 'code6',  category: 'VS Code', title: 'Select All Occurrences', keys: ['Ctrl', 'Shift', 'L'], description: 'Select every instance of the current selection' },
    { id: 'code7',  category: 'VS Code', title: 'Go to Definition',     keys: ['F12'],                 description: 'Jump to the symbol\'s definition' },
    { id: 'code8',  category: 'VS Code', title: 'Rename Symbol',        keys: ['F2'],                  description: 'Rename a variable across all files' },
    { id: 'code9',  category: 'VS Code', title: 'Toggle Line Comment',  keys: ['Ctrl', '/'],           description: 'Comment or uncomment the current line' },
    { id: 'code10', category: 'VS Code', title: 'Move Line Up/Down',    keys: ['Alt', '↑/↓'],          description: 'Move the current line up or down' },

    // ── Chrome (8) ────────────────────────────────────────────
    { id: 'chr1', category: 'Chrome', title: 'New Tab',              keys: ['Ctrl', 'T'],         description: 'Open a new tab' },
    { id: 'chr2', category: 'Chrome', title: 'Reopen Closed Tab',    keys: ['Ctrl', 'Shift', 'T'], description: 'Restore the last closed tab' },
    { id: 'chr3', category: 'Chrome', title: 'Bookmark This Page',   keys: ['Ctrl', 'D'],         description: 'Add current page to bookmarks' },
    { id: 'chr4', category: 'Chrome', title: 'Open History',         keys: ['Ctrl', 'H'],         description: 'Show your browsing history' },
    { id: 'chr5', category: 'Chrome', title: 'Open Downloads',       keys: ['Ctrl', 'J'],         description: 'View downloaded files' },
    { id: 'chr6', category: 'Chrome', title: 'Focus Address Bar',    keys: ['Ctrl', 'L'],         description: 'Select the URL bar' },
    { id: 'chr7', category: 'Chrome', title: 'Hard Reload',          keys: ['Ctrl', 'Shift', 'R'], description: 'Force refresh ignoring cache' },
    { id: 'chr8', category: 'Chrome', title: 'Developer Tools',      keys: ['F12'],               description: 'Open browser dev tools' },

    // ── Excel (10) ────────────────────────────────────────────
    { id: 'xl1',  category: 'Excel', title: 'AutoSum',               keys: ['Alt', '='],           description: 'Insert a SUM formula automatically' },
    { id: 'xl2',  category: 'Excel', title: 'Insert Chart',          keys: ['Alt', 'F1'],          description: 'Create a chart from selected data' },
    { id: 'xl3',  category: 'Excel', title: 'Flash Fill',            keys: ['Ctrl', 'E'],          description: 'Auto-fill by recognising patterns' },
    { id: 'xl4',  category: 'Excel', title: 'Format Cells Dialog',   keys: ['Ctrl', '1'],          description: 'Open the Format Cells dialog' },
    { id: 'xl5',  category: 'Excel', title: 'Select Entire Column',  keys: ['Ctrl', 'Space'],      description: 'Select the whole column' },
    { id: 'xl6',  category: 'Excel', title: 'Select Entire Row',     keys: ['Shift', 'Space'],     description: 'Select the whole row' },
    { id: 'xl7',  category: 'Excel', title: 'New Workbook',          keys: ['Ctrl', 'N'],          description: 'Create a new Excel workbook' },
    { id: 'xl8',  category: 'Excel', title: 'Enter Array Formula',   keys: ['Ctrl', 'Shift', 'Enter'], description: 'Confirm a formula as an array formula' },
    { id: 'xl9',  category: 'Excel', title: 'Name Manager',          keys: ['Ctrl', 'F3'],         description: 'Open the Name Manager dialog' },
    { id: 'xl10', category: 'Excel', title: 'Absolute Reference',    keys: ['F4'],                 description: 'Toggle between relative and absolute references' },

    // ── Photoshop (7) ─────────────────────────────────────────
    { id: 'ps1', category: 'Photoshop', title: 'Free Transform',     keys: ['Ctrl', 'T'],          description: 'Transform the selected layer' },
    { id: 'ps2', category: 'Photoshop', title: 'Deselect',           keys: ['Ctrl', 'D'],          description: 'Remove the current selection' },
    { id: 'ps3', category: 'Photoshop', title: 'Merge Visible',      keys: ['Ctrl', 'Shift', 'E'], description: 'Merge all visible layers' },
    { id: 'ps4', category: 'Photoshop', title: 'Invert Selection',   keys: ['Ctrl', 'Shift', 'I'], description: 'Invert the active selection' },
    { id: 'ps5', category: 'Photoshop', title: 'Flatten Image',      keys: ['Ctrl', 'Shift', 'F'], description: 'Flatten all layers to background' },
    { id: 'ps6', category: 'Photoshop', title: 'Levels',             keys: ['Ctrl', 'L'],          description: 'Open the Levels adjustment dialog' },
    { id: 'ps7', category: 'Photoshop', title: 'Content-Aware Fill', keys: ['Shift', 'F5'],        description: 'Fill selection using content-aware technology' },

    // ── Word (5) ──────────────────────────────────────────────
    { id: 'wd1', category: 'Word', title: 'Navigation Pane',         keys: ['Ctrl', 'F'],          description: 'Open the Find / Navigation pane' },
    { id: 'wd2', category: 'Word', title: 'Insert Hyperlink',        keys: ['Ctrl', 'K'],          description: 'Insert or edit a hyperlink' },
    { id: 'wd3', category: 'Word', title: 'Apply Heading 1',         keys: ['Ctrl', 'Alt', '1'],   description: 'Format selection as Heading 1' },
    { id: 'wd4', category: 'Word', title: 'Track Changes',           keys: ['Ctrl', 'Shift', 'E'], description: 'Toggle Track Changes on or off' },
    { id: 'wd5', category: 'Word', title: 'Word Count',              keys: ['Ctrl', 'Shift', 'G'], description: 'Open the Word Count dialog' },

    // ── Windows 11 – NEW (10) ────────────────────────────────
    { id: 'win11', category: 'Windows 11', title: 'Virtual Desktop Left',    keys: ['Ctrl', 'Win', '←'],       description: 'Switch to the virtual desktop on the left' },
    { id: 'win12', category: 'Windows 11', title: 'Virtual Desktop Right',   keys: ['Ctrl', 'Win', '→'],       description: 'Switch to the virtual desktop on the right' },
    { id: 'win13', category: 'Windows 11', title: 'New Virtual Desktop',     keys: ['Ctrl', 'Win', 'D'],       description: 'Create a new virtual desktop' },
    { id: 'win14', category: 'Windows 11', title: 'Close Virtual Desktop',   keys: ['Ctrl', 'Win', 'F4'],      description: 'Close the current virtual desktop' },
    { id: 'win15', category: 'Windows 11', title: 'Settings',                keys: ['Win', 'I'],               description: 'Open Windows Settings' },
    { id: 'win16', category: 'Windows 11', title: 'File Explorer',           keys: ['Win', 'E'],               description: 'Open File Explorer' },
    { id: 'win17', category: 'Windows 11', title: 'Clipboard History',       keys: ['Win', 'V'],               description: 'Open clipboard history panel' },
    { id: 'win18', category: 'Windows 11', title: 'Minimize All Windows',    keys: ['Win', 'M'],               description: 'Minimize all open windows' },
    { id: 'win19', category: 'Windows 11', title: 'Screen Snip',             keys: ['Win', 'Shift', 'S'],      description: 'Open Snipping Tool for a screenshot' },
    { id: 'win20', category: 'Windows 11', title: 'Connect Display',         keys: ['Win', 'P'],               description: 'Choose a display / projection mode' },

    // ── VS Code – NEW (10) ───────────────────────────────────
    { id: 'code11', category: 'VS Code', title: 'Split Editor',           keys: ['Ctrl', '\'],              description: 'Split the editor vertically' },
    { id: 'code12', category: 'VS Code', title: 'Close Editor',           keys: ['Ctrl', 'W'],               description: 'Close the active editor tab' },
    { id: 'code13', category: 'VS Code', title: 'Reopen Closed Editor',   keys: ['Ctrl', 'Shift', 'T'],      description: 'Reopen the last closed editor tab' },
    { id: 'code14', category: 'VS Code', title: 'Find in Files',          keys: ['Ctrl', 'Shift', 'F'],      description: 'Search across all files in the workspace' },
    { id: 'code15', category: 'VS Code', title: 'Replace in Files',       keys: ['Ctrl', 'Shift', 'H'],      description: 'Find and replace across all files' },
    { id: 'code16', category: 'VS Code', title: 'Toggle Sidebar',         keys: ['Ctrl', 'B'],               description: 'Show or hide the activity sidebar' },
    { id: 'code17', category: 'VS Code', title: 'Peek Definition',        keys: ['Alt', 'F12'],              description: 'Peek the definition inline without navigating' },
    { id: 'code18', category: 'VS Code', title: 'Add Selection Below',    keys: ['Ctrl', 'Alt', '↓'],        description: 'Add a cursor on the line below' },
    { id: 'code19', category: 'VS Code', title: 'Fold Region',            keys: ['Ctrl', 'Shift', '['],      description: 'Collapse / fold the current code block' },
    { id: 'code20', category: 'VS Code', title: 'Unfold Region',          keys: ['Ctrl', 'Shift', ']'],      description: 'Expand / unfold the current code block' },

    // ── Chrome – NEW (7) ────────────────────────────────────
    { id: 'chr9',  category: 'Chrome', title: 'Next Tab',              keys: ['Ctrl', 'Tab'],          description: 'Switch to the next tab' },
    { id: 'chr10', category: 'Chrome', title: 'Previous Tab',          keys: ['Ctrl', 'Shift', 'Tab'], description: 'Switch to the previous tab' },
    { id: 'chr11', category: 'Chrome', title: 'Close Tab',             keys: ['Ctrl', 'W'],            description: 'Close the current tab' },
    { id: 'chr12', category: 'Chrome', title: 'New Window',            keys: ['Ctrl', 'N'],            description: 'Open a new browser window' },
    { id: 'chr13', category: 'Chrome', title: 'Incognito Window',      keys: ['Ctrl', 'Shift', 'N'],   description: 'Open a new incognito window' },
    { id: 'chr14', category: 'Chrome', title: 'Zoom In',               keys: ['Ctrl', '+'],            description: 'Zoom in on the page' },
    { id: 'chr15', category: 'Chrome', title: 'Reset Zoom',            keys: ['Ctrl', '0'],            description: 'Reset page zoom to 100%' },

    // ── Excel – NEW (8) ──────────────────────────────────────
    { id: 'xl11', category: 'Excel', title: 'Insert Row / Column',    keys: ['Ctrl', 'Shift', '+'],     description: 'Insert a new row or column' },
    { id: 'xl12', category: 'Excel', title: 'Delete Row / Column',    keys: ['Ctrl', '-'],              description: 'Delete the selected row or column' },
    { id: 'xl13', category: 'Excel', title: 'Fill Down',              keys: ['Ctrl', 'D'],              description: 'Fill the selection downward' },
    { id: 'xl14', category: 'Excel', title: 'Fill Right',             keys: ['Ctrl', 'R'],              description: 'Fill the selection to the right' },
    { id: 'xl15', category: 'Excel', title: 'Toggle Bold',            keys: ['Ctrl', 'B'],              description: 'Bold the selected cells' },
    { id: 'xl16', category: 'Excel', title: 'Apply Currency Format',  keys: ['Ctrl', 'Shift', '$'],     description: 'Format selected cells as currency' },
    { id: 'xl17', category: 'Excel', title: 'Apply Percentage Format',keys: ['Ctrl', 'Shift', '%'],     description: 'Format selected cells as percentage' },
    { id: 'xl18', category: 'Excel', title: 'Go to Last Cell',        keys: ['Ctrl', 'End'],            description: 'Jump to the last used cell in the sheet' },

    // ── Photoshop – NEW (8) ──────────────────────────────────
    { id: 'ps8',  category: 'Photoshop', title: 'New Layer',           keys: ['Ctrl', 'Shift', 'N'],    description: 'Create a new blank layer' },
    { id: 'ps9',  category: 'Photoshop', title: 'Duplicate Layer',     keys: ['Ctrl', 'J'],             description: 'Duplicate the selected layer' },
    { id: 'ps10', category: 'Photoshop', title: 'Curves',              keys: ['Ctrl', 'M'],             description: 'Open the Curves adjustment dialog' },
    { id: 'ps11', category: 'Photoshop', title: 'Hue / Saturation',    keys: ['Ctrl', 'U'],             description: 'Open the Hue/Saturation dialog' },
    { id: 'ps12', category: 'Photoshop', title: 'Step Backward',       keys: ['Ctrl', 'Alt', 'Z'],      description: 'Undo multiple steps in history' },
    { id: 'ps13', category: 'Photoshop', title: 'Zoom to Fit',         keys: ['Ctrl', '0'],             description: 'Fit the canvas to the screen' },
    { id: 'ps14', category: 'Photoshop', title: 'Fill Layer',          keys: ['Alt', 'Backspace'],      description: 'Fill layer with foreground color' },
    { id: 'ps15', category: 'Photoshop', title: 'Save for Web',        keys: ['Ctrl', 'Shift', 'Alt', 'S'], description: 'Export optimised image for web' },

    // ── Word – NEW (7) ───────────────────────────────────────
    { id: 'wd6',  category: 'Word', title: 'Apply Heading 2',          keys: ['Ctrl', 'Alt', '2'],      description: 'Format selection as Heading 2' },
    { id: 'wd7',  category: 'Word', title: 'Apply Heading 3',          keys: ['Ctrl', 'Alt', '3'],      description: 'Format selection as Heading 3' },
    { id: 'wd8',  category: 'Word', title: 'Insert Page Break',        keys: ['Ctrl', 'Enter'],         description: 'Insert a manual page break' },
    { id: 'wd9',  category: 'Word', title: 'Non-Breaking Space',       keys: ['Ctrl', 'Shift', 'Space'], description: 'Insert a non-breaking space' },
    { id: 'wd10', category: 'Word', title: 'Increase Indent',          keys: ['Alt', 'Shift', '→'],     description: 'Increase the paragraph indent level' },
    { id: 'wd11', category: 'Word', title: 'Decrease Indent',          keys: ['Alt', 'Shift', '←'],     description: 'Decrease the paragraph indent level' },
    { id: 'wd12', category: 'Word', title: 'Show / Hide Formatting',   keys: ['Ctrl', 'Shift', '8'],    description: 'Toggle display of formatting marks' },

  ];  // ← end of SHORTCUTS array

  // ─── CATEGORY META (icon, accent color) ─────────────────────
  const CAT_META = {
    'All':        { icon: '✦', accent: 'var(--accent-all)' },
    'Windows 11': { icon: '⊞', accent: 'var(--accent-windows)' },
    'VS Code':    { icon: '{}', accent: 'var(--accent-vscode)' },
    'Chrome':     { icon: '◎', accent: 'var(--accent-chrome)' },
    'Excel':      { icon: '▦', accent: 'var(--accent-excel)' },
    'Photoshop':  { icon: '⬡', accent: 'var(--accent-photoshop)' },
    'Word':       { icon: '≡', accent: 'var(--accent-word)' },
  };

  const CATEGORIES = [...new Set(SHORTCUTS.map(s => s.category))];

  // ─── STATE ──────────────────────────────────────────────────
  const state = {
    currentCategory: 'All',
    searchQuery: '',
    favorites: [],
    viewMode: 'grid', // 'grid' | 'list'
  };

  // ─── DOM REFS ────────────────────────────────────────────────
  const DOM = {};

  // ─── STORAGE ────────────────────────────────────────────────
  function loadState() {
    try {
      state.favorites = JSON.parse(localStorage.getItem('qk_favorites') || '[]');
      state.viewMode  = localStorage.getItem('qk_view') || 'grid';
    } catch (_) { /* ignore */ }
  }

  function persist() {
    try {
      localStorage.setItem('qk_favorites', JSON.stringify(state.favorites));
      localStorage.setItem('qk_view', state.viewMode);
    } catch (_) { /* ignore */ }
  }

  // ─── FILTERING ───────────────────────────────────────────────
  function fuzzyMatch(text, query) {
    if (!query) return true;
    const t = text.toLowerCase();
    const q = query.toLowerCase().trim();
    let qi = 0;
    for (let i = 0; i < t.length && qi < q.length; i++) {
      if (t[i] === q[qi]) qi++;
    }
    return qi === q.length;
  }

  function filterShortcuts() {
    let list = SHORTCUTS.filter(s => {
      if (state.currentCategory !== 'All' && s.category !== state.currentCategory) return false;
      if (state.searchQuery) {
        const haystack = [s.title, s.description, s.keys.join(' '), s.category].join(' ');
        return fuzzyMatch(haystack, state.searchQuery);
      }
      return true;
    });

    return list.sort((a, b) => {
      const af = state.favorites.includes(a.id) ? 1 : 0;
      const bf = state.favorites.includes(b.id) ? 1 : 0;
      return bf - af;
    });
  }

  // ─── ESCAPE HTML ─────────────────────────────────────────────
  function esc(str) {
    return String(str).replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
    );
  }

  // ─── COPY TO CLIPBOARD ───────────────────────────────────────
  function copyShortcut(shortcut, btn) {
    const text = shortcut.keys.join(' + ');

    function onSuccess() {
      btn.classList.add('copied');
      btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12"><path d="M1.5 6l3 3 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`;
      showToast();
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = copyIcon();
      }, 1500);
    }

    function fallbackCopy() {
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        onSuccess();
      } catch (_) { /* copy unavailable */ }
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(onSuccess).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
  }

  function copyIcon() {
    return `<svg width="12" height="12" viewBox="0 0 14 14" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M2 10V2.5A1.5 1.5 0 013.5 1H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  }

  function showToast() {
    DOM.toast.classList.add('show');
    clearTimeout(DOM._toastTimer);
    DOM._toastTimer = setTimeout(() => DOM.toast.classList.remove('show'), 1600);
  }

  // ─── RENDER CATEGORIES ───────────────────────────────────────
  function renderCategories() {
    if (!DOM.categoryList) return;
    DOM.categoryList.innerHTML = '';

    const allCategories = ['All', ...CATEGORIES];
    allCategories.forEach(cat => {
      const meta  = CAT_META[cat] || { icon: '·', accent: '#888' };
      const count = cat === 'All' ? SHORTCUTS.length : SHORTCUTS.filter(s => s.category === cat).length;
      const btn   = document.createElement('button');
      btn.className = 'category-pill' + (state.currentCategory === cat ? ' active' : '');
      btn.setAttribute('data-category', cat);
      btn.setAttribute('aria-pressed', String(state.currentCategory === cat));
      btn.setAttribute('aria-label', `${cat} shortcuts`);
      btn.innerHTML = `
        <span class="cat-icon">${esc(meta.icon)}</span>
        <span class="cat-label">${esc(cat === 'All' ? 'All Apps' : cat)}</span>
        <span class="cat-count">${count}</span>
      `;
      btn.addEventListener('click', () => {
        if (state.currentCategory === cat) return;
        state.currentCategory = cat;
        renderCategories();
        renderShortcuts();
      });
      DOM.categoryList.appendChild(btn);
    });
  }

  // ─── TOGGLE FAVORITE ─────────────────────────────────────────
  function toggleFavorite(id) {
    const idx = state.favorites.indexOf(id);
    if (idx > -1) state.favorites.splice(idx, 1);
    else state.favorites.push(id);
    persist();
    renderShortcuts();
  }

  // ─── RENDER SHORTCUTS ────────────────────────────────────────
  function renderShortcuts() {
    if (!DOM.shortcutGrid) return;

    const filtered = filterShortcuts();
    DOM.shortcutGrid.innerHTML = '';

    // Update count badge
    if (DOM.visibleCount) DOM.visibleCount.textContent = filtered.length;

    // Apply view mode class
    DOM.shortcutGrid.className = 'shortcut-grid' + (state.viewMode === 'list' ? ' list-view' : '');

    if (filtered.length === 0) {
      DOM.shortcutGrid.innerHTML = `
        <div class="empty-state">
          <span class="empty-state-icon">⌨</span>
          <div class="empty-state-title">No shortcuts found</div>
          <div class="empty-state-sub">Try a different search term or category</div>
        </div>`;
      return;
    }

    // Group by category when showing All + no search
    const shouldGroup = state.currentCategory === 'All' && !state.searchQuery.trim();

    if (shouldGroup) {
      // Render with category dividers
      const grouped = {};
      filtered.forEach(s => {
        if (!grouped[s.category]) grouped[s.category] = [];
        grouped[s.category].push(s);
      });

      CATEGORIES.forEach(cat => {
        if (!grouped[cat]) return;
        const meta = CAT_META[cat] || { icon: '·' };
        // Divider
        const div = document.createElement('div');
        div.className = 'category-divider';
        div.innerHTML = `
          <span class="cat-divider-icon">${esc(meta.icon)}</span>
          <span class="cat-divider-label">${esc(cat)}</span>
          <span class="cat-divider-line"></span>`;
        DOM.shortcutGrid.appendChild(div);

        // Cards
        grouped[cat].forEach(s => DOM.shortcutGrid.appendChild(createCard(s)));
      });
    } else {
      filtered.forEach(s => DOM.shortcutGrid.appendChild(createCard(s)));
    }
  }

  function createCard(shortcut) {
    const isFav    = state.favorites.includes(shortcut.id);
    const meta     = CAT_META[shortcut.category] || { accent: '#888' };

    const card = document.createElement('div');
    card.className = 'shortcut-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('data-id', shortcut.id);
    card.style.setProperty('--card-accent', meta.accent);

    // Build keys HTML — use + separator glyphs
    const keysHtml = shortcut.keys
      .map((k, i) => {
        const sep = i < shortcut.keys.length - 1
          ? `<span class="key-sep">+</span>`
          : '';
        return `<kbd>${esc(k)}</kbd>${sep}`;
      })
      .join('');

    card.innerHTML = `
      <div class="shortcut-info">
        <span class="shortcut-title">${esc(shortcut.title)}</span>
        <span class="shortcut-desc">${esc(shortcut.description)}</span>
      </div>
      <div class="card-right">
        <div class="keys">${keysHtml}</div>
        <button class="copy-btn" title="Copy shortcut" aria-label="Copy ${esc(shortcut.keys.join(' + '))}">
          ${copyIcon()}
        </button>
        <button class="favorite-btn ${isFav ? 'active' : ''}"
          data-id="${esc(shortcut.id)}"
          aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
          ${isFav ? '★' : '☆'}
        </button>
      </div>
    `;

    // Copy button
    card.querySelector('.copy-btn').addEventListener('click', e => {
      e.stopPropagation();
      copyShortcut(shortcut, e.currentTarget);
    });

    // Favorite button
    card.querySelector('.favorite-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleFavorite(shortcut.id);
    });

    return card;
  }

  // ─── SEARCH ──────────────────────────────────────────────────
  function handleSearch(e) {
    state.searchQuery = e.target.value;
    updateClearBtn();
    renderShortcuts();
  }

  function clearSearch() {
    DOM.searchInput.value = '';
    state.searchQuery = '';
    updateClearBtn();
    renderShortcuts();
    DOM.searchInput.focus();
  }

  function updateClearBtn() {
    DOM.clearSearch.classList.toggle('visible', state.searchQuery.length > 0);
  }

  // ─── VIEW TOGGLE ─────────────────────────────────────────────
  function setViewMode(mode) {
    state.viewMode = mode;
    persist();
    DOM.viewGrid.classList.toggle('active', mode === 'grid');
    DOM.viewGrid.setAttribute('aria-pressed', String(mode === 'grid'));
    DOM.viewList.classList.toggle('active', mode === 'list');
    DOM.viewList.setAttribute('aria-pressed', String(mode === 'list'));
    renderShortcuts();
  }

  // ─── EVENTS ──────────────────────────────────────────────────
  function bindEvents() {
    DOM.searchInput.addEventListener('input', handleSearch);
    DOM.searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape' && state.searchQuery) clearSearch();
    });
    DOM.clearSearch.addEventListener('click', clearSearch);

    DOM.viewGrid.addEventListener('click', () => setViewMode('grid'));
    DOM.viewList.addEventListener('click', () => setViewMode('list'));

    // Global: / or Ctrl+K → focus search
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault(); DOM.searchInput.focus();
      } else if (e.key === '/' && document.activeElement !== DOM.searchInput) {
        e.preventDefault(); DOM.searchInput.focus();
      }
    });
  }

  // ─── INIT ─────────────────────────────────────────────────────
  function init() {
    DOM.categoryList  = document.getElementById('categoryList');
    DOM.shortcutGrid  = document.getElementById('shortcutGrid');
    DOM.searchInput   = document.getElementById('searchInput');
    DOM.clearSearch   = document.getElementById('clearSearch');
    DOM.visibleCount  = document.getElementById('visibleCount');
    DOM.toast         = document.getElementById('copyToast');
    DOM.viewGrid      = document.getElementById('viewGrid');
    DOM.viewList      = document.getElementById('viewList');

    loadState();
    bindEvents();
    renderCategories();
    renderShortcuts();
    updateClearBtn();

    // Restore view mode buttons
    setViewMode(state.viewMode);

    // URL param handlers
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('search') === 'true') {
        DOM.searchInput.focus();
      }
      if (params.get('practice') === 'true') {
        DOM.searchInput.placeholder = 'Practice mode – search a shortcut…';
        DOM.searchInput.focus();
      }
    } catch (_) {}

    // Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {});
      });
    }

    console.log('QuickKey v3.2.0 — 100 shortcuts loaded');
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

  // Public API
  window.QuickKey = {
    getState: () => ({ ...state }),
    getShortcuts: () => [...SHORTCUTS],
    resetFavorites: () => { state.favorites = []; persist(); renderShortcuts(); },
  };
})();
