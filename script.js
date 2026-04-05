// ==============================
// CV Data Model
// ==============================
const cvData = {
    skills: {
        title: "Core Skills & Tools",
        nodes: [
            {
                id: 'automation', type: 'trigger', label: 'Automation Platforms', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/make.svg', x: 200, y: 300, operations: 'Expert',
                tooltip: 'Cross-platform workflow automation specialist',
                details: '<h2>Workflow Automation</h2><p>Extensive experience cross-connecting platforms, designing resilient architectures, and managing mass data flows.</p><ul><li>Make.com</li><li>Zapier</li><li>n8n</li><li>Activepieces</li><li>Workato</li><li>Boostspace</li></ul>'
            },
            {
                id: 'backend', type: 'action', label: 'Backend Dev', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', x: 450, y: 150, operations: 'PHP/C#',
                tooltip: 'PHP, Laravel, ASP.NET MVC, REST APIs',
                details: '<h2>Backend Engineering</h2><p>Designing robust server-side applications and microservices.</p><ul><li>PHP & Laravel</li><li>ASP.NET MVC & C#</li><li>REST API integrations</li><li>Scripting (Python, Selenium)</li></ul>'
            },
            {
                id: 'frontend', type: 'action', label: 'Frontend Dev', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', x: 450, y: 450, operations: 'JS',
                tooltip: 'JavaScript, jQuery, Angular, Bootstrap',
                details: '<h2>Frontend Interfaces</h2><p>Building responsive and interactive web applications.</p><ul><li>JavaScript / jQuery / AJAX</li><li>HTML5 / CSS3 / Bootstrap</li><li>DataTables integration</li><li>AngularJS</li></ul>'
            },
            {
                id: 'database', type: 'action', label: 'Databases', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', x: 700, y: 300, operations: 'SQL',
                tooltip: 'MySQL, SQL Server, schema design',
                details: '<h2>Data Management</h2><p>Designing schemas and ensuring data integrity across high-volume systems.</p><ul><li>MySQL / phpMyAdmin</li><li>SQL Server</li><li>Architecture mapping</li></ul>'
            },
            {
                id: 'devops', type: 'action', label: 'DevOps & Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', x: 950, y: 300, operations: 'AWS/Git',
                tooltip: 'AWS, Git/GitHub, Odoo Enterprise',
                details: '<h2>Infrastructure & VCS</h2><p>Deploying code safely and managing team repositories.</p><ul><li>Amazon Web Services (AWS)</li><li>Git / GitHub / CodeCommit</li><li>Odoo Enterprise Resources</li></ul>'
            }
        ],
        connections: [
            { start: 'automation', end: 'backend' },
            { start: 'automation', end: 'frontend' },
            { start: 'backend', end: 'database' },
            { start: 'frontend', end: 'database' },
            { start: 'database', end: 'devops' }
        ]
    },
    experience: {
        title: "Work Experience",
        nodes: [
            {
                id: 'job1', type: 'trigger', label: 'Automation Engineer', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', x: 100, y: 200, operations: 'Current',
                tooltip: 'Codification (UAE) — July 2025+',
                details: '<h2>Codification (UAE)</h2><p>July 2025 - Present</p><ul><li>Platform automations with Odoo, Slack, Make.com, Google Workspace and other tools.</li><li>Automations with python, php, and selenium.</li><li>Automations maintenance and monitoring.</li></ul>'
            },
            {
                id: 'job2', type: 'action', label: 'Software Engineer', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg', x: 400, y: 300, operations: '2024-25',
                tooltip: 'The Saltware (PVT) LTD — Sri Lanka',
                details: '<h2>The Saltware (PVT) LTD (Sri Lanka)</h2><p>Sept 2024 - July 2025</p><ul><li>Software/web-applications programming</li><li>Bug fixing on web based ERP application</li><li>ASP.NET MVC, C#, JavaScript</li></ul>'
            },
            {
                id: 'job3', type: 'action', label: 'Software Engineer', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', x: 700, y: 200, operations: '2022-24',
                tooltip: 'Imara Software Solutions — Sri Lanka',
                details: '<h2>Imara Software Solutions (Sri Lanka)</h2><p>Aug 2022 - Aug 2024</p><ul><li>Built automation tools with selenium</li><li>Worked with all automation tools like make.com, zapier, activepieces, boostspace, n8n, workato</li><li>Software/web-applications programming</li></ul>'
            }
        ],
        connections: [
            { start: 'job3', end: 'job2' },
            { start: 'job2', end: 'job1' }
        ]
    },
    projects: {
        title: "Major Projects",
        nodes: [
            {
                id: 'proj1', type: 'trigger', label: 'AppraiserPal', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', x: 200, y: 150, operations: '2023',
                tooltip: 'Property appraisal web app — Angular + Laravel',
                details: '<h2>AppraiserPal</h2><p>Web application revolutionizing the property appraisal process with tracking and chat.</p><ul><li>AngularJS, Laravel, MySQL</li><li>AWS EC2 Integration</li></ul>'
            },
            {
                id: 'proj2', type: 'action', label: 'ShopSync Pro', icon: 'https://cdn-icons-png.flaticon.com/512/2933/2933116.png', x: 450, y: 300, operations: '2023',
                tooltip: '3000+ product migration via REST APIs',
                details: '<h2>ShopSync Pro</h2><p>Effortlessly migrated a vast inventory of over 3000 products from Rock Safety to Unas.</p><ul><li>PHP Scripts & REST APIs</li><li>JSON/XML transformations</li></ul>'
            },
            {
                id: 'proj3', type: 'action', label: 'StudentConnectX', icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png', x: 200, y: 450, operations: '2023',
                tooltip: 'PHPBB forum upgrade 2.0 → 3.3',
                details: '<h2>StudentConnectX</h2><p>Upgraded an existing student forum site from PHPBB 2.0 to PHPBB 3.3.</p><ul><li>MySQL, PhpMyAdmin</li><li>Enhanced search indexing</li></ul>'
            },
            {
                id: 'proj4', type: 'action', label: 'Workflow Automations', icon: 'https://cdn-icons-png.flaticon.com/512/2083/2083213.png', x: 700, y: 150, operations: '2024',
                tooltip: 'Make.com + Zapier multi-platform flows',
                details: '<h2>Make.com & Zapier Workflows</h2><p>Comprehensive automation project for workflow efficiency.</p><ul><li>WP Recipe plugin & data migration</li><li>Auth.net + Salesforce + QuickBooks sync</li><li>AI NLP integration</li></ul>'
            },
            {
                id: 'proj5', type: 'action', label: 'Trove & ITS ERP', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', x: 700, y: 450, operations: 'Current',
                tooltip: 'Laravel + ASP.NET ERP + Zoho CRM',
                details: '<h2>Trove (Laravel) & ITS ERP (ASP.NET)</h2><p>Current complex systems development involving Zoho CRM integration and ERP system optimization.</p><ul><li>Zoho CRM API</li><li>Web Scraping</li><li>DataTables & Financial dashboards</li></ul>'
            }
        ],
        connections: [
            { start: 'proj1', end: 'proj2' },
            { start: 'proj3', end: 'proj2' },
            { start: 'proj2', end: 'proj4' },
            { start: 'proj2', end: 'proj5' }
        ]
    },
    education: {
        title: "Education & Certifications",
        nodes: [
            {
                id: 'edu1', type: 'trigger', label: 'Foundation in IT', icon: 'https://cdn-icons-png.flaticon.com/512/2231/2231662.png', x: 200, y: 250, operations: '2016',
                tooltip: 'UCSC — Maths, English, ICT',
                details: '<h2>Foundation in Information Technology</h2><p>University of Colombo School of Computing (UCSC)</p><ul><li>Mathematics</li><li>English Communication Skills</li><li>Information Communication Technology</li></ul>'
            },
            {
                id: 'edu2', type: 'action', label: 'B.I.T', icon: 'https://cdn-icons-png.flaticon.com/512/2231/2231662.png', x: 600, y: 250, operations: '2017-21',
                tooltip: 'Bachelor of IT — UCSC',
                details: '<h2>Bachelor of Information Technology</h2><p>University of Colombo School of Computing (UCSC)</p><ul><li>Software and applications development</li><li>Database and network design</li></ul>'
            }
        ],
        connections: [
            { start: 'edu1', end: 'edu2' }
        ]
    },
    recommendations: {
        title: "LinkedIn Recommendations",
        nodes: [
            {
                id: 'rec_source', type: 'trigger', label: 'LinkedIn', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', x: 400, y: 100, operations: '3',
                tooltip: 'View recommendations from colleagues',
                details: '<h2>LinkedIn Profile</h2><p>Platform Automation Engineer @ Codification</p><p>Puttalam District, Sri Lanka</p><ul><li><a href="https://www.linkedin.com/in/sahfas/" target="_blank" style="color:var(--color-primary);">View Full Profile →</a></li></ul>'
            },
            {
                id: 'rec1', type: 'action', label: 'Ishthiyaque Ahmed', icon: '', x: 100, y: 300, operations: 'Sep 2025',
                tooltip: 'Software Engineer & Automation Strategist',
                details: '<div class="rec-card"><div class="rec-avatar">IA</div><h2>Ishthiyaque Ahmed (Ishthi)</h2><p class="rec-title">Software Engineer &amp; Automation Strategist | Make, N8N &amp; AI</p><blockquote class="rec-quote">"Sahfas is a talented resource to any employer. During his tenure of career, I found him dynamic and fast learner despite any technology. He is a person who can understand the underpinning technical framework of the working platform or project. I wish him all the best."</blockquote><span class="rec-date">September 30, 2025</span></div>'
            },
            {
                id: 'rec2', type: 'action', label: 'Mohamed Faalil', icon: '', x: 400, y: 350, operations: 'Jul 2025',
                tooltip: 'Senior Software Engineer @ comAlpine',
                details: '<div class="rec-card"><div class="rec-avatar">MF</div><h2>Mohamed Faalil</h2><p class="rec-title">Senior Software Engineer @ comAlpine Informationssysteme GmbH</p><blockquote class="rec-quote">"I had the pleasure of working with Sahfas when he joined as an Associate Software Engineer. From the very beginning, he demonstrated a fast learning ability and a deep understanding of technical concepts. Sahfas has developed extensive experience in automation, and his contributions in that area have been truly impressive. His ability to tackle complex problems and deliver reliable solutions makes him stand out as a developer. I highly recommend Sahfas to any organization."</blockquote><span class="rec-date">July 15, 2025</span></div>'
            },
            {
                id: 'rec3', type: 'action', label: 'Rajabdeen Ajmal', icon: '', x: 700, y: 300, operations: 'May 2025',
                tooltip: 'Senior Technical Lead | Java, Spring Boot',
                details: '<div class="rec-card"><div class="rec-avatar">RA</div><h2>Rajabdeen Ajmal</h2><p class="rec-title">Senior Technical Lead | Java | Spring Boot | Laravel | Angular | Node.js</p><blockquote class="rec-quote">"It\'s been a pleasure working with Sahfas at Imara Software Solutions, and I\'ve also had the privilege of mentoring him earlier as one of my BIT students. From the classroom to the workplace, his intelligence, dedication, and strong grasp of software development have always stood out. Sahfas consistently demonstrated solid technical skills and a clear understanding of software architecture. I strongly recommend him for any opportunity in software development or beyond."</blockquote><span class="rec-date">May 1, 2025</span></div>'
            }
        ],
        connections: [
            { start: 'rec_source', end: 'rec1' },
            { start: 'rec_source', end: 'rec2' },
            { start: 'rec_source', end: 'rec3' }
        ]
    }
};

// ==============================
// State
// ==============================
let currentSection = 'skills';
let scale = 1;
let translateX = 0;
let translateY = 0;
let isPanning = false;
let startX = 0;
let startY = 0;
let activeNode = null;
let isDraggingNode = false;
let selectedNodeEl = null;

// ==============================
// Global Modal Helpers
// ==============================
function openModal(id) {
    const el = document.getElementById(id);
    if (el) {
        el.style.display = 'flex';
        // Force reflow then add active class for smooth transition
        el.offsetHeight;
        el.classList.add('active');
    }
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) {
        el.classList.remove('active');
        setTimeout(() => { el.style.display = 'none'; }, 300);
    }
}

// ==============================
// Main
// ==============================
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const interactiveLayer = document.getElementById('interactiveLayer');
    const canvasBackground = document.getElementById('canvasBackground');
    const svgLayer = document.getElementById('connectionsLayer');
    const detailPanel = document.getElementById('detailPanel');
    const closePanelBtn = document.getElementById('closePanelBtn');
    const panelContent = document.getElementById('panelContent');
    const pageTitle = document.getElementById('pageTitle');
    const navItems = document.querySelectorAll('.nav-item');
    const zoomIndicator = document.getElementById('zoomIndicator');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const zoomResetBtn = document.getElementById('zoomResetBtn');
    const themeToggle = document.getElementById('themeToggle');
    const heroOverlay = document.getElementById('heroOverlay');
    const heroCta = document.getElementById('heroCta');
    const minimapCanvas = document.getElementById('minimapCanvas');
    const minimapViewport = document.getElementById('minimapViewport');

    // Modal buttons
    document.getElementById('aboutBtn').addEventListener('click', () => openModal('aboutModal'));
    document.getElementById('contactBtn').addEventListener('click', () => openModal('contactModal'));

    // ---- Hero Intro ----
    if (sessionStorage.getItem('heroShown')) {
        heroOverlay.style.display = 'none';
    } else {
        function dismissHero() {
            heroOverlay.classList.add('hidden');
            sessionStorage.setItem('heroShown', '1');
            setTimeout(() => { heroOverlay.style.display = 'none'; }, 800);
        }
        heroCta.addEventListener('click', dismissHero);
        // Also allow clicking the overlay background after 2.5s
        setTimeout(() => heroOverlay.addEventListener('click', (e) => { if (e.target === heroOverlay) dismissHero(); }), 2500);
    }

    // ---- Dark Mode ----
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
        updateMinimap();
    });

    // ---- Transform Helpers ----
    function updateTransform() {
        interactiveLayer.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        canvasBackground.style.backgroundPosition = `${translateX}px ${translateY}px`;
        zoomIndicator.textContent = `${Math.round(scale * 100)}%`;
        updateMinimap();
    }

    function fitToScreen(isClosingPanel = false, isPanelOpening = false) {
        const data = cvData[currentSection];
        if (!data || !data.nodes.length) return;

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        data.nodes.forEach(n => {
            minX = Math.min(minX, n.x); minY = Math.min(minY, n.y);
            maxX = Math.max(maxX, n.x); maxY = Math.max(maxY, n.y);
        });

        const pad = 100, nw = 250, nh = 80;
        minX -= pad; minY -= pad; maxX += nw + pad; maxY += nh + pad;
        const cw = maxX - minX, ch = maxY - minY;
        const rect = canvas.getBoundingClientRect();
        let aw = rect.width;

        // Account for the panel width change during animation
        if (isClosingPanel && detailPanel.classList.contains('open')) aw += 400;
        if (isPanelOpening && !isClosingPanel) aw -= 400;

        // Safety: ensure available width is at least 200px
        aw = Math.max(200, aw);

        scale = Math.min(Math.max(0.2, Math.min(aw / cw, rect.height / ch)), 1.2);
        translateX = (aw / 2) - ((minX + cw / 2) * scale);
        translateY = (rect.height / 2) - ((minY + ch / 2) * scale);
        updateTransform();
    }

    function centerOnNode(node, panelAlreadyOpen) {
        const nodeW = 64, nodeH = 64;
        const rect = canvas.getBoundingClientRect();
        const aw = panelAlreadyOpen ? rect.width : Math.max(200, rect.width - 400);
        const ah = rect.height;

        const targetScale = 1.0;
        const nodeCenterX = node.x + nodeW / 2;
        const nodeCenterY = node.y + nodeH / 2;
        const targetTX = (aw / 2) - (nodeCenterX * targetScale);
        const targetTY = (ah / 2) - (nodeCenterY * targetScale);

        // Animate via JS so particles stay perfectly in sync with connections
        const startTX = translateX, startTY = translateY, startScale = scale;
        const duration = 400;
        const startTime = performance.now();

        function animate(now) {
            const elapsed = now - startTime;
            const t = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic

            translateX = startTX + (targetTX - startTX) * ease;
            translateY = startTY + (targetTY - startTY) * ease;
            scale = startScale + (targetScale - startScale) * ease;
            updateTransform();

            if (t < 1) requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    }

    // ---- Zoom Buttons ----
    function applyZoom(factor) {
        let ns = Math.min(Math.max(0.2, scale * factor), 3);
        const r = canvas.getBoundingClientRect();
        const cx = r.width / 2, cy = r.height / 2;
        translateX = cx - (cx - translateX) * (ns / scale);
        translateY = cy - (cy - translateY) * (ns / scale);
        scale = ns;
        updateTransform();
    }

    zoomInBtn.addEventListener('click', () => applyZoom(1.2));
    zoomOutBtn.addEventListener('click', () => applyZoom(0.8));
    zoomResetBtn.addEventListener('click', () => fitToScreen());

    // Mouse wheel zoom
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        let ns = Math.min(Math.max(0.2, scale * (1 + e.deltaY * -0.001)), 3);
        const r = canvas.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        translateX = x - (x - translateX) * (ns / scale);
        translateY = y - (y - translateY) * (ns / scale);
        scale = ns;
        updateTransform();
    }, { passive: false });

    // ---- Touch Support ----
    let lastTouchDist = 0;

    canvas.addEventListener('touchstart', (e) => {
        if (e.target.closest('.node-module,.zoom-controls,.minimap')) return;
        if (e.touches.length === 2) {
            lastTouchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        } else if (e.touches.length === 1) {
            isPanning = true;
            startX = e.touches[0].clientX - translateX;
            startY = e.touches[0].clientY - translateY;
        }
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (e.touches.length === 2) {
            const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
            let ns = Math.min(Math.max(0.2, scale * (dist / lastTouchDist)), 3);
            const r = canvas.getBoundingClientRect();
            const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2 - r.left;
            const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2 - r.top;
            translateX = cx - (cx - translateX) * (ns / scale);
            translateY = cy - (cy - translateY) * (ns / scale);
            scale = ns;
            lastTouchDist = dist;
            updateTransform();
        } else if (isPanning && e.touches.length === 1) {
            translateX = e.touches[0].clientX - startX;
            translateY = e.touches[0].clientY - startY;
            updateTransform();
        }
    }, { passive: false });

    canvas.addEventListener('touchend', () => { isPanning = false; lastTouchDist = 0; });

    // ---- Mouse Panning ----
    canvas.addEventListener('mousedown', (e) => {
        if (e.target.closest('.node-module,.detail-panel,.sidebar,.topbar,.minimap')) return;
        isPanning = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        canvas.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (isPanning) {
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateTransform();
        }
        if (isDraggingNode && activeNode) {
            activeNode.data.x = (e.clientX - startX) / scale;
            activeNode.data.y = (e.clientY - startY) / scale;
            activeNode.element.style.left = `${activeNode.data.x}px`;
            activeNode.element.style.top = `${activeNode.data.y}px`;
            drawConnections(cvData[currentSection].nodes, cvData[currentSection].connections);
        }
    });

    window.addEventListener('mouseup', () => {
        isPanning = false;
        isDraggingNode = false;
        activeNode = null;
        canvas.style.cursor = 'grab';
    });

    // ---- Render Section ----
    function renderSection(sectionKey) {
        currentSection = sectionKey;
        const data = cvData[sectionKey];
        if (pageTitle && data.title) pageTitle.textContent = data.title;

        interactiveLayer.querySelectorAll('.node-module').forEach(n => n.remove());
        selectedNodeEl = null;
        detailPanel.classList.remove('open');
        scale = 1; translateX = 0; translateY = 0;
        updateTransform();

        data.nodes.forEach((node, idx) => {
            const el = document.createElement('div');
            el.className = 'node-module';
            el.setAttribute('data-section', sectionKey);
            el.style.left = `${node.x}px`;
            el.style.top = `${node.y}px`;
            el.style.animationDelay = `${idx * 0.1}s`;
            el.id = `node-${node.id}`;
            el.setAttribute('tabindex', '0');
            el.setAttribute('role', 'button');
            el.setAttribute('aria-label', `${node.label}`);

            const opCount = node.operations ? `<div class="node-operation-count">${node.operations}</div>` : '';
            const tooltipHtml = node.tooltip ? `<div class="node-tooltip">${node.tooltip}</div>` : '';

            let iconHtml;
            if (node.icon) {
                iconHtml = `<div class="node-icon"><img src="${node.icon}" alt="${node.label}" style="width:100%;height:100%;object-fit:contain;border-radius:50%;"></div>`;
            } else {
                const initials = node.label.split(' ').map(w => w[0]).join('').substring(0, 2);
                iconHtml = `<div class="node-icon" style="display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--accent-recommendations),var(--color-primary));border-radius:50%;color:#fff;font-weight:700;font-size:14px;">${initials}</div>`;
            }

            el.innerHTML = `${opCount}${iconHtml}<div class="node-label">${node.label}</div>${tooltipHtml}`;

            // Drag
            el.addEventListener('mousedown', (e) => {
                e.preventDefault(); e.stopPropagation();
                isDraggingNode = true;
                activeNode = { element: el, data: node };
                startX = e.clientX - (node.x * scale);
                startY = e.clientY - (node.y * scale);
            });

            // Click
            el.addEventListener('click', () => {
                if (isDraggingNode) return;
                if (selectedNodeEl) selectedNodeEl.classList.remove('selected');
                el.classList.add('selected');
                selectedNodeEl = el;
                panelContent.innerHTML = node.details;
                detailPanel.classList.add('open');
                highlightConnections(node.id);
                // Center on node after panel animation completes (single smooth move)
                setTimeout(() => {
                    resizeParticleCanvas();
                    centerOnNode(node, true);
                }, 320);
            });

            // Keyboard
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
            });

            interactiveLayer.appendChild(el);
        });

        drawConnections(data.nodes, data.connections);
        history.replaceState(null, '', `#${sectionKey}`);
    }

    // ---- Connections ----
    function drawConnections(nodes, connections) {
        svgLayer.innerHTML = '';
        connections.forEach((conn, i) => {
            const s = nodes.find(n => n.id === conn.start);
            const e = nodes.find(n => n.id === conn.end);
            if (!s || !e) return;
            const sx = s.x + 32, sy = s.y + 32, ex = e.x + 32, ey = e.y + 32;
            const mx = sx + (ex - sx) / 2;
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", `M ${sx} ${sy} C ${mx} ${sy}, ${mx} ${ey}, ${ex} ${ey}`);
            path.setAttribute("class", "connection-path");
            path.setAttribute("data-start", conn.start);
            path.setAttribute("data-end", conn.end);
            path.style.animationDelay = `${i * 0.15}s, ${i * 0.15}s`;
            svgLayer.appendChild(path);
        });
    }

    function highlightConnections(nodeId) {
        svgLayer.querySelectorAll('.connection-path').forEach(p => {
            const isConnected = p.getAttribute('data-start') === nodeId || p.getAttribute('data-end') === nodeId;
            p.classList.toggle('glow', isConnected);
        });
    }

    // ---- Particle Animation ----
    const particleCanvasEl = document.createElement('canvas');
    particleCanvasEl.id = 'particleCanvas';
    canvas.appendChild(particleCanvasEl);
    const pCtx = particleCanvasEl.getContext('2d');
    let particles = [];
    let animFrameId = null;

    function resizeParticleCanvas() {
        const r = canvas.getBoundingClientRect();
        particleCanvasEl.width = r.width;
        particleCanvasEl.height = r.height;
    }
    resizeParticleCanvas();
    window.addEventListener('resize', resizeParticleCanvas);
    // Also resize when panel transitions end
    detailPanel.addEventListener('transitionend', resizeParticleCanvas);

    class Particle {
        constructor(pathEl) {
            this.pathEl = pathEl;
            this.t = Math.random();
            this.speed = 0.002 + Math.random() * 0.003;
            this.size = 1.5 + Math.random() * 2;
            this.opacity = 0.3 + Math.random() * 0.5;
        }
        update() { this.t += this.speed; if (this.t > 1) this.t = 0; }
        draw(ctx) {
            const len = this.pathEl.getTotalLength();
            const pt = this.pathEl.getPointAtLength(this.t * len);
            const sx = pt.x * scale + translateX;
            const sy = pt.y * scale + translateY;
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const c = isDark ? '139,92,246' : '82,0,255';
            ctx.beginPath();
            ctx.arc(sx, sy, this.size * scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${c},${this.opacity})`;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(sx, sy, this.size * 2.5 * scale, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${c},${this.opacity * 0.15})`;
            ctx.fill();
        }
    }

    function startParticles() {
        if (animFrameId) cancelAnimationFrame(animFrameId);
        setTimeout(() => {
            particles = [];
            svgLayer.querySelectorAll('.connection-path').forEach(p => {
                for (let i = 0; i < 4; i++) particles.push(new Particle(p));
            });
            (function loop() {
                pCtx.clearRect(0, 0, particleCanvasEl.width, particleCanvasEl.height);
                particles.forEach(p => { p.update(); p.draw(pCtx); });
                animFrameId = requestAnimationFrame(loop);
            })();
        }, 100);
    }

    // ---- Mini-Map ----
    function updateMinimap() {
        if (!minimapCanvas) return;
        const data = cvData[currentSection];
        if (!data || !data.nodes.length) return;
        const ctx = minimapCanvas.getContext('2d');
        minimapCanvas.width = 160; minimapCanvas.height = 100;

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        data.nodes.forEach(n => {
            minX = Math.min(minX, n.x); minY = Math.min(minY, n.y);
            maxX = Math.max(maxX, n.x); maxY = Math.max(maxY, n.y);
        });
        const pad = 50;
        minX -= pad; minY -= pad; maxX += 64 + pad; maxY += 64 + pad;
        const rx = maxX - minX || 1, ry = maxY - minY || 1;

        ctx.clearRect(0, 0, 160, 100);
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

        // Connections
        ctx.strokeStyle = isDark ? 'rgba(139,92,246,0.3)' : 'rgba(82,0,255,0.2)';
        ctx.lineWidth = 1;
        data.connections.forEach(c => {
            const s = data.nodes.find(n => n.id === c.start);
            const e = data.nodes.find(n => n.id === c.end);
            if (s && e) {
                ctx.beginPath();
                ctx.moveTo(((s.x + 32 - minX) / rx) * 160, ((s.y + 32 - minY) / ry) * 100);
                ctx.lineTo(((e.x + 32 - minX) / rx) * 160, ((e.y + 32 - minY) / ry) * 100);
                ctx.stroke();
            }
        });

        // Nodes
        const colors = { skills: '#7C3AED', experience: '#2563EB', projects: '#059669', education: '#D97706', recommendations: '#DB2777' };
        const nc = colors[currentSection] || '#5200FF';
        data.nodes.forEach(n => {
            const nx = ((n.x + 32 - minX) / rx) * 160;
            const ny = ((n.y + 32 - minY) / ry) * 100;
            ctx.beginPath(); ctx.arc(nx, ny, 4, 0, Math.PI * 2); ctx.fillStyle = nc; ctx.fill();
            ctx.beginPath(); ctx.arc(nx, ny, 6, 0, Math.PI * 2); ctx.fillStyle = nc + '33'; ctx.fill();
        });

        // Viewport
        const cr = canvas.getBoundingClientRect();
        const vl = (-translateX / scale - minX) / rx * 160;
        const vt = (-translateY / scale - minY) / ry * 100;
        const vw = (cr.width / scale) / rx * 160;
        const vh = (cr.height / scale) / ry * 100;
        minimapViewport.style.left = `${Math.max(0, vl)}px`;
        minimapViewport.style.top = `${Math.max(0, vt)}px`;
        minimapViewport.style.width = `${Math.min(160, vw)}px`;
        minimapViewport.style.height = `${Math.min(100, vh)}px`;
    }

    // ---- Navigation ----
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');
            const s = item.getAttribute('data-section');
            if (s && cvData[s]) { renderSection(s); startParticles(); }
        });
    });

    // Close panel
    closePanelBtn.addEventListener('click', () => {
        const wasOpen = detailPanel.classList.contains('open');
        detailPanel.classList.remove('open');
        if (selectedNodeEl) { selectedNodeEl.classList.remove('selected'); selectedNodeEl = null; }
        svgLayer.querySelectorAll('.connection-path.glow').forEach(p => p.classList.remove('glow'));
        // After panel closes, re-fit and resize particles
        if (wasOpen) {
            fitToScreen(true);
            setTimeout(() => {
                resizeParticleCanvas();
                fitToScreen();
            }, 320);
        }
    });

    // ---- Keyboard Navigation ----
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal('aboutModal');
            closeModal('contactModal');
            if (detailPanel.classList.contains('open')) closePanelBtn.click();
        }
        const step = 50;
        if (e.key === 'ArrowLeft') { translateX += step; updateTransform(); }
        if (e.key === 'ArrowRight') { translateX -= step; updateTransform(); }
        if (e.key === 'ArrowUp') { translateY += step; updateTransform(); }
        if (e.key === 'ArrowDown') { translateY -= step; updateTransform(); }

        const sections = ['skills', 'experience', 'projects', 'education', 'recommendations'];
        const idx = ['1', '2', '3', '4', '5'].indexOf(e.key);
        if (idx !== -1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
            if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
                navItems.forEach(n => n.classList.remove('active'));
                navItems[idx].classList.add('active');
                renderSection(sections[idx]);
                startParticles();
            }
        }
    });

    // ---- URL Hash Routing ----
    window.addEventListener('hashchange', () => {
        const h = location.hash.replace('#', '');
        if (h && cvData[h]) {
            navItems.forEach(n => n.classList.remove('active'));
            const t = document.querySelector(`.nav-item[data-section="${h}"]`);
            if (t) t.classList.add('active');
            renderSection(h);
            startParticles();
        }
    });

    // ---- Initial Render ----
    const hash = location.hash.replace('#', '');
    if (hash && cvData[hash]) {
        navItems.forEach(n => n.classList.remove('active'));
        const t = document.querySelector(`.nav-item[data-section="${hash}"]`);
        if (t) t.classList.add('active');
        renderSection(hash);
    } else {
        renderSection(currentSection);
    }

    setTimeout(() => { fitToScreen(); startParticles(); }, 50);
});
