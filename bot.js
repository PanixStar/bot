<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>BlueMarble Smart Bot Menu</title>
    <style>
        /* Modern Dark Theme */
        :root {
            --bg-dark: #0a0a0f;
            --bg-panel: #1a1a2e;
            --bg-card: #16213e;
            --border: #0e3460;
            --text: #e94560;
            --text-muted: #a0a0a0;
            --accent: #00f5ff;
            --success: #39ff14;
            --warning: #ffb020;
            --danger: #ff3860;
            --gradient: linear-gradient(135deg, rgba(233, 69, 96, 0.1), rgba(0, 245, 255, 0.1));
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', 'JetBrains Mono', monospace;
            background: var(--bg-dark);
            color: var(--text);
            padding: 20px;
            min-height: 100vh;
        }

        .main-container {
            max-width: 900px;
            margin: 0 auto;
            background: var(--bg-panel);
            border-radius: 20px;
            border: 2px solid var(--border);
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .header {
            background: var(--gradient);
            padding: 20px;
            border-bottom: 2px solid var(--border);
            text-align: center;
        }

        .header h1 {
            color: var(--accent);
            font-size: 2em;
            text-shadow: 0 0 10px var(--accent);
            margin-bottom: 10px;
        }

        .status-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
        }

        .status-badge {
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            border: 2px solid;
        }

        .status-idle { background: rgba(0, 245, 255, 0.1); border-color: var(--accent); color: var(--accent); }
        .status-scanning { background: rgba(255, 176, 32, 0.1); border-color: var(--warning); color: var(--warning); }
        .status-painting { background: rgba(57, 255, 20, 0.1); border-color: var(--success); color: var(--success); }
        .status-paused { background: rgba(255, 56, 96, 0.1); border-color: var(--danger); color: var(--danger); }

        .content {
            padding: 30px;
        }

        .tab-container {
            display: flex;
            gap: 5px;
            margin-bottom: 30px;
            background: var(--bg-dark);
            padding: 5px;
            border-radius: 15px;
        }

        .tab {
            flex: 1;
            padding: 12px 20px;
            background: transparent;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            border-radius: 10px;
            transition: all 0.3s ease;
            font-weight: bold;
        }

        .tab.active {
            background: var(--accent);
            color: var(--bg-dark);
            box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
        }

        .tab-content {
            display: none;
        }

        .tab-content.active {
            display: block;
        }

        .card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .card h3 {
            color: var(--accent);
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .grid {
            display: grid;
            gap: 15px;
        }

        .grid-2 { grid-template-columns: 1fr 1fr; }
        .grid-3 { grid-template-columns: 1fr 1fr 1fr; }
        .grid-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }

        .btn {
            padding: 12px 20px;
            border: 2px solid var(--border);
            background: var(--bg-dark);
            color: var(--text);
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
            position: relative;
            overflow: hidden;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .btn:active {
            transform: translateY(0);
        }

        .btn-primary { border-color: var(--accent); }
        .btn-primary:hover { background: var(--accent); color: var(--bg-dark); }

        .btn-success { border-color: var(--success); }
        .btn-success:hover { background: var(--success); color: var(--bg-dark); }

        .btn-warning { border-color: var(--warning); }
        .btn-warning:hover { background: var(--warning); color: var(--bg-dark); }

        .btn-danger { border-color: var(--danger); }
        .btn-danger:hover { background: var(--danger); color: white; }

        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        .input-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .input-group label {
            color: var(--text-muted);
            font-size: 14px;
            font-weight: bold;
        }

        .input-group input,
        .input-group select {
            padding: 10px;
            border: 2px solid var(--border);
            background: var(--bg-dark);
            color: var(--text);
            border-radius: 8px;
            outline: none;
            transition: border-color 0.3s ease;
        }

        .input-group input:focus,
        .input-group select:focus {
            border-color: var(--accent);
            box-shadow: 0 0 10px rgba(0, 245, 255, 0.3);
        }

        .checkbox-group {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background: var(--bg-dark);
            border-radius: 8px;
            border: 2px solid var(--border);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .checkbox-group:hover {
            border-color: var(--accent);
        }

        .checkbox-group input[type="checkbox"] {
            width: 18px;
            height: 18px;
            accent-color: var(--accent);
        }

        .progress-container {
            background: var(--bg-dark);
            border-radius: 10px;
            padding: 15px;
            margin: 15px 0;
        }

        .progress-bar {
            width: 100%;
            height: 20px;
            background: var(--border);
            border-radius: 10px;
            overflow: hidden;
            position: relative;
        }

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--success), var(--accent));
            width: 0%;
            transition: width 0.3s ease;
            border-radius: 10px;
        }

        .progress-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 12px;
            font-weight: bold;
            color: white;
            text-shadow: 1px 1px 2px black;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .stat-card {
            background: var(--bg-dark);
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            border: 1px solid var(--border);
        }

        .stat-value {
            font-size: 24px;
            font-weight: bold;
            color: var(--accent);
            margin-bottom: 5px;
        }

        .stat-label {
            font-size: 12px;
            color: var(--text-muted);
            text-transform: uppercase;
        }

        .log-container {
            background: var(--bg-dark);
            border: 1px solid var(--border);
            border-radius: 10px;
            height: 200px;
            overflow-y: auto;
            padding: 15px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
        }

        .log-entry {
            margin-bottom: 5px;
            display: flex;
            gap: 10px;
        }

        .log-time {
            color: var(--text-muted);
            min-width: 60px;
        }

        .log-info { color: var(--accent); }
        .log-success { color: var(--success); }
        .log-warning { color: var(--warning); }
        .log-error { color: var(--danger); }

        .template-preview {
            width: 100%;
            height: 200px;
            background: var(--bg-dark);
            border: 2px dashed var(--border);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-muted);
            margin-bottom: 15px;
        }

        .hotkey-hint {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.8);
            padding: 10px;
            border-radius: 8px;
            font-size: 12px;
            color: var(--text-muted);
        }

        @media (max-width: 768px) {
            .grid-3, .grid-4 { grid-template-columns: 1fr 1fr; }
            .content { padding: 15px; }
            .main-container { margin: 10px; }
        }
    </style>
</head>
<body>
    <div class="main-container">
        <div class="header">
            <h1>🎨 BlueMarble Smart Bot</h1>
            <div class="status-bar">
                <div class="status-badge status-idle" id="status-badge">
                    🟢 IDLE
                </div>
                <div style="color: var(--text-muted); font-size: 12px;">
                    v2.0 | Template Mode
                </div>
            </div>
        </div>

        <div class="content">
            <div class="tab-container">
                <button class="tab active" onclick="switchTab('scanner')">🔍 Smart Scan</button>
                <button class="tab" onclick="switchTab('painter')">🎨 Auto Paint</button>
                <button class="tab" onclick="switchTab('settings')">⚙️ Settings</button>
                <button class="tab" onclick="switchTab('monitor')">📊 Monitor</button>
            </div>

            <!-- Scanner Tab -->
            <div class="tab-content active" id="scanner-tab">
                <div class="card">
                    <h3>🔍 Template Analysis</h3>
                    <div class="template-preview" id="template-preview">
                        Click "Scan Template" to analyze BlueMarble artwork
                    </div>
                    <div class="grid grid-2">
                        <button class="btn btn-primary" onclick="scanTemplate()">
                            🔍 Scan Template
                        </button>
                        <button class="btn btn-warning" onclick="previewMissing()">
                            👁️ Preview Missing
                        </button>
                    </div>
                </div>

                <div class="card">
                    <h3>📊 Analysis Results</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-value" id="total-pixels">0</div>
                            <div class="stat-label">Total Pixels</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="completed-pixels">0</div>
                            <div class="stat-label">Completed</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="missing-pixels">0</div>
                            <div class="stat-label">Missing</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="completion-rate">0%</div>
                            <div class="stat-label">Progress</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3>🎯 Scan Options</h3>
                    <div class="grid grid-2">
                        <div class="checkbox-group">
                            <input type="checkbox" id="prioritize-edges" checked>
                            <label>Prioritize Edge Pixels</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="checkbox" id="skip-detailed" checked>
                            <label>Skip High Detail Areas</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="checkbox" id="team-coordination">
                            <label>Team Coordination Mode</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="checkbox" id="real-time-update" checked>
                            <label>Real-time Updates</label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Painter Tab -->
            <div class="tab-content" id="painter-tab">
                <div class="card">
                    <h3>🎨 Auto Painting Controls</h3>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" id="paint-progress"></div>
                            <div class="progress-text" id="paint-progress-text">Ready to Paint</div>
                        </div>
                    </div>
                    <div class="grid grid-4">
                        <button class="btn btn-success" onclick="startPainting()" id="start-btn">
                            🚀 Start Painting
                        </button>
                        <button class="btn btn-warning" onclick="pausePainting()" id="pause-btn" disabled>
                            ⏸️ Pause
                        </button>
                        <button class="btn btn-primary" onclick="resumePainting()" id="resume-btn" disabled>
                            ▶️ Resume
                        </button>
                        <button class="btn btn-danger" onclick="stopPainting()" id="stop-btn" disabled>
                            ⏹️ Stop
                        </button>
                    </div>
                </div>

                <div class="card">
                    <h3>⚡ Paint Settings</h3>
                    <div class="grid grid-3">
                        <div class="input-group">
                            <label>Speed (CPS)</label>
                            <input type="range" id="speed-slider" min="20" max="200" value="80">
                            <span id="speed-value">80 CPS</span>
                        </div>
                        <div class="input-group">
                            <label>Paint Order</label>
                            <select id="paint-order">
                                <option value="priority">Priority First</option>
                                <option value="bycolor">By Color</option>
                                <option value="scanline">Scanline</option>
                                <option value="random">Random</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label>Batch Size</label>
                            <input type="number" id="batch-size" value="50" min="10" max="200">
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3>🛡️ Safety Features</h3>
                    <div class="grid grid-2">
                        <div class="checkbox-group">
                            <input type="checkbox" id="human-delays" checked>
                            <label>Human-like Delays</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="checkbox" id="anti-detection" checked>
                            <label>Anti-detection Mode</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="checkbox" id="auto-breaks" checked>
                            <label>Auto Break Intervals</label>
                        </div>
                        <div class="checkbox-group">
                            <input type="checkbox" id="conflict-avoidance" checked>
                            <label>Avoid Conflicts</label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Settings Tab -->
            <div class="tab-content" id="settings-tab">
                <div class="card">
                    <h3>⚙️ Bot Configuration</h3>
                    <div class="grid grid-2">
                        <div class="input-group">
                            <label>Cooldown After Depletion (min)</label>
                            <input type="number" id="cooldown-minutes" value="15" min="5" max="60">
                        </div>
                        <div class="input-group">
                            <label>Color Tolerance</label>
                            <input type="range" id="color-tolerance" min="5" max="100" value="30">
                            <span id="tolerance-value">30</span>
                        </div>
                        <div class="input-group">
                            <label>Max Retry Attempts</label>
                            <input type="number" id="max-retries" value="3" min="1" max="10">
                        </div>
                        <div class="input-group">
                            <label>Template Source</label>
                            <select id="template-source">
                                <option value="overlay">Canvas Overlay</option>
                                <option value="reference">Reference Image</option>
                                <option value="url">External URL</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3>💾 Session Management</h3>
                    <div class="grid grid-3">
                        <button class="btn btn-primary" onclick="saveSession()">
                            💾 Save Session
                        </button>
                        <button class="btn btn-warning" onclick="loadSession()">
                            📂 Load Session
                        </button>
                        <button class="btn btn-danger" onclick="clearSession()">
                            🗑️ Clear Session
                        </button>
                    </div>
                    <div class="checkbox-group" style="margin-top: 15px;">
                        <input type="checkbox" id="auto-save" checked>
                        <label>Auto-save Every 50 Pixels</label>
                    </div>
                </div>

                <div class="card">
                    <h3>🎨 Canvas Settings</h3>
                    <div class="grid grid-2">
                        <div class="input-group">
                            <label>Pixel Size</label>
                            <input type="number" id="pixel-size" value="1" min="1" max="10">
                        </div>
                        <div class="input-group">
                            <label>Canvas Selector</label>
                            <input type="text" id="canvas-selector" value=".bluemarble-canvas" placeholder="CSS selector">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Monitor Tab -->
            <div class="tab-content" id="monitor-tab">
                <div class="card">
                    <h3>📊 Real-time Statistics</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-value" id="pixels-painted">0</div>
                            <div class="stat-label">Pixels Painted</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="current-speed">0</div>
                            <div class="stat-label">Current Speed</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="time-elapsed">00:00</div>
                            <div class="stat-label">Time Elapsed</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="eta">--:--</div>
                            <div class="stat-label">ETA</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="errors-count">0</div>
                            <div class="stat-label">Errors</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value" id="success-rate">100%</div>
                            <div class="stat-label">Success Rate</div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3>📝 Activity Log</h3>
                    <div class="log-container" id="activity-log">
                        <div class="log-entry">
                            <span class="log-time">00:00</span>
                            <span class="log-info">Bot initialized successfully</span>
                        </div>
                        <div class="log-entry">
                            <span class="log-time">00:01</span>
                            <span class="log-info">Ready for template scanning</span>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h3>🎯 Performance Metrics</h3>
                    <div class="progress-container">
                        <div style="margin-bottom: 10px; font-weight: bold;">CPU Usage</div>
                        <div class="progress-bar">
                            <div class="progress-fill" id="cpu-usage" style="width: 15%"></div>
                            <div class="progress-text">15%</div>
                        </div>
                    </div>
                    <div class="progress-container">
                        <div style="margin-bottom: 10px; font-weight: bold;">Memory Usage</div>
                        <div class="progress-bar">
                            <div class="progress-fill" id="memory-usage" style="width: 23%"></div>
                            <div class="progress-text">23%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="hotkey-hint">
        <div><strong>Hotkeys:</strong></div>
        <div>P - Pause/Resume</div>
        <div>S - Stop</div>
        <div>Ctrl+S - Save Session</div>
    </div>

    <script>
        // Tab switching functionality
        function switchTab(tabName) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Remove active class from all tabs
            document.querySelectorAll('.tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected tab content
            document.getElementById(tabName + '-tab').classList.add('active');
            
            // Add active class to clicked tab
            event.target.classList.add('active');
        }

        // Bot state management
        let botState = {
            isScanning: false,
            isPainting: false,
            isPaused: false,
            startTime: null,
            pixelsPainted: 0,
            totalPixels: 0,
            missingPixels: 0,
            currentSpeed: 0,
            errors: 0
        };

        // Update status badge
        function updateStatus(status, text) {
            const badge = document.getElementById('status-badge');
            badge.className = `status-badge status-${status}`;
            badge.textContent = text;
        }

        // Log activity
        function logActivity(message, type = 'info') {
            const log = document.getElementById('activity-log');
            const time = new Date().toLocaleTimeString('vi-VN', { hour12: false });
            const entry = document.createElement('div');
            entry.className = 'log-entry';
            entry.innerHTML = `
                <span class="log-time">${time}</span>
                <span class="log-${type}">${message}</span>
            `;
            log.appendChild(entry);
            log.scrollTop = log.scrollHeight;
        }

        // Template scanning functions
        async function scanTemplate() {
            if (botState.isScanning) return;
            
            botState.isScanning = true;
            updateStatus('scanning', '🔍 SCANNING');
            logActivity('Starting template analysis...', 'info');
            
            // Simulate scanning process
            const steps = [
                'Detecting BlueMarble canvas...',
                'Loading template overlay...',
                'Analyzing current canvas state...',
                'Comparing pixel differences...',
                'Building priority queue...',
                'Analysis complete!'
            ];
            
            for (let i = 0; i < steps.length; i++) {
                logActivity(steps[i], 'info');
                await new Promise(resolve => setTimeout(resolve, 800));
            }
            
            // Update statistics (simulated data)
            botState.totalPixels = Math.floor(Math.random() * 5000) + 2000;
            botState.missingPixels = Math.floor(botState.totalPixels * (Math.random() * 0.4 + 0.1));
            const completed = botState.totalPixels - botState.missingPixels;
            const completionRate = ((completed / botState.totalPixels) * 100).toFixed(1);
            
            document.getElementById('total-pixels').textContent = botState.totalPixels.toLocaleString();
            document.getElementById('completed-pixels').textContent = completed.toLocaleString();
            document.getElementById('missing-pixels').textContent = botState.missingPixels.toLocaleString();
            document.getElementById('completion-rate').textContent = completionRate + '%';
            
            document.getElementById('template-preview').innerHTML = `
                <div style="text-align: center;">
                    <div style="color: var(--success); font-size: 18px; margin-bottom: 10px;">✅ Template Analyzed</div>
                    <div style="color: var(--text-muted);">${botState.missingPixels} pixels ready for painting</div>
                </div>
            `;
            
            botState.isScanning = false;
            updateStatus('idle', '🟢 READY');
            logActivity(`Found ${botState.missingPixels} missing pixels (${completionRate}% complete)`, 'success');
        }

        function previewMissing() {
            if (botState.missingPixels === 0) {
                logActivity('No template scanned yet. Please scan first.', 'warning');
                return;
            }
            logActivity(`Highlighting ${botState.missingPixels} missing pixels on canvas`, 'info');
        }

        // Painting control functions
        async function startPainting() {
            if (botState.missingPixels === 0) {
                logActivity('No template scanned. Please scan template first.', 'error');
                return;
            }
            
            botState.isPainting = true;
            botState.startTime = new Date();
            updateStatus('painting', '🎨 PAINTING');
            
            // Update button states
            document.getElementById('start-btn').disabled = true;
            document.getElementById('pause-btn').disabled = false;
            document.getElementById('stop-btn').disabled = false;
            
            logActivity('Started auto painting process', 'success');
            
            // Start painting simulation
            paintingLoop();
        }

        function pausePainting() {
            if (!botState.isPainting || botState.isPaused) return;
            
            botState.isPaused = true;
            updateStatus('paused', '⏸️ PAUSED');
            
            document.getElementById('pause-btn').disabled = true;
            document.getElementById('resume-btn').disabled = false;
            
            logActivity('Painting paused', 'warning');
        }

        function resumePainting() {
            if (!botState.isPainting || !botState.isPaused) return;
            
            botState.isPaused = false;
            updateStatus('painting', '🎨 PAINTING');
            
            document.getElementById('pause-btn').disabled = false;
            document.getElementById('resume-btn').disabled = true;
            
            logActivity('Painting resumed', 'info');
        }

        function stopPainting() {
            botState.isPainting = false;
            botState.isPaused = false;
            updateStatus('idle', '🟢 IDLE');
            
            // Reset button states
            document.getElementById('start-btn').disabled = false;
            document.getElementById('pause-btn').disabled = true;
            document.getElementById('resume-btn').disabled = true;
            document.getElementById('stop-btn').disabled = true;
            
            logActivity('Painting stopped', 'warning');
        }

        // Painting simulation loop
        async function paintingLoop() {
            while
