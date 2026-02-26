const cvData = {
    skills: {
        title: "Core Skills & Tools",
        nodes: [
            {
                id: 'automation', type: 'trigger', label: 'Automation Platforms', icon: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_aa6efd42db2ea43bcae67a0bede58ca2/make.png', x: 200, y: 300, operations: 'Expert',
                details: '<h2>Workflow Automation</h2><p>Extensive experience cross-connecting platforms, designing resilient architectures, and managing mass data flows.</p><ul><li>Make.com</li><li>Zapier</li><li>n8n</li><li>Activepieces</li><li>Workato</li><li>Boostspace</li></ul>'
            },
            {
                id: 'backend', type: 'action', label: 'Backend Dev', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg', x: 450, y: 150, operations: 'PHP/C#',
                details: '<h2>Backend Engineering</h2><p>Designing robust server-side applications and microservices.</p><ul><li>PHP & Laravel</li><li>ASP.NET MVC & C#</li><li>REST API integrations</li><li>Scripting (Python, Selenium)</li></ul>'
            },
            {
                id: 'frontend', type: 'action', label: 'Frontend Dev', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg', x: 450, y: 450, operations: 'JS',
                details: '<h2>Frontend Interfaces</h2><p>Building responsive and interactive web applications.</p><ul><li>JavaScript / jQuery / AJAX</li><li>HTML5 / CSS3 / Bootstrap</li><li>DataTables integration</li><li>AngularJS</li></ul>'
            },
            {
                id: 'database', type: 'action', label: 'Databases', icon: 'https://cdn-icons-png.flaticon.com/512/2885/2885412.png', x: 700, y: 300, operations: 'SQL',
                details: '<h2>Data Management</h2><p>Designing schemas and ensuring data integrity across high-volume systems.</p><ul><li>MySQL / phpMyAdmin</li><li>SQL Server</li><li>Architecture mapping</li></ul>'
            },
            {
                id: 'devops', type: 'action', label: 'DevOps & Tools', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', x: 950, y: 300, operations: 'AWS/Git',
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
                id: 'job1', type: 'trigger', label: 'Automation Engineer', icon: 'https://cdn-icons-png.flaticon.com/512/3065/3065886.png', x: 100, y: 200, operations: 'Current',
                details: '<h2>Codification (UAE)</h2><p>July 2025 - Present</p><ul><li>Platform automations with Odoo, Slack, Make.com, Google Workspace and other tools.</li><li>Automations with python, php, and selenium.</li><li>Automations maintenance and monitoring.</li></ul>'
            },
            {
                id: 'job2', type: 'action', label: 'Software Engineer', icon: 'https://cdn-icons-png.flaticon.com/512/1218/1218274.png', x: 400, y: 300, operations: '2024-25',
                details: '<h2>The Saltware (PVT) LTD (Sri Lanka)</h2><p>Sept 2024 - July 2025</p><ul><li>Software/web-applications programming</li><li>Bug fixing on web based ERP application</li><li>ASP.NET MVC, C#, JavaScript</li></ul>'
            },
            {
                id: 'job3', type: 'action', label: 'Software Engineer', icon: 'https://cdn-icons-png.flaticon.com/512/912/912214.png', x: 700, y: 200, operations: '2022-24',
                details: '<h2>Imara Software Solutions (Sri Lanka)</h2><p>Aug 2022 - Aug 2024</p><ul><li>Built automation tools with selenium</li><li>Worked with all automation tools like make.com, zapier, activepieces, boostspace, n8n, workato</li><li>Software/web-applications programming</li></ul>'
            }
        ],
        connections: [
            { start: 'job3', end: 'job2' }, // Flows logically backwards in time on right, or forwards on left... Let's map oldest on left to newest on right for workflow feel
            { start: 'job2', end: 'job1' }
        ]
    },
    projects: {
        title: "Major Projects",
        nodes: [
            {
                id: 'proj1', type: 'trigger', label: 'AppraiserPal', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', x: 200, y: 150, operations: '2023',
                details: '<h2>AppraiserPal</h2><p>Web application revolutionizing the property appraisal process with tracking and chat.</p><ul><li>AngularJS, Laravel, MySQL</li><li>AWS EC2 Integration</li></ul>'
            },
            {
                id: 'proj2', type: 'action', label: 'ShopSync Pro', icon: 'https://cdn-icons-png.flaticon.com/512/2933/2933116.png', x: 450, y: 300, operations: '2023',
                details: '<h2>ShopSync Pro</h2><p>Effortlessly migrated a vast inventory of over 3000 products from Rock Safety to Unas.</p><ul><li>PHP Scripts & REST APIs</li><li>JSON/XML transformations</li></ul>'
            },
            {
                id: 'proj3', type: 'action', label: 'StudentConnectX', icon: 'https://cdn-icons-png.flaticon.com/512/1256/1256650.png', x: 200, y: 450, operations: '2023',
                details: '<h2>StudentConnectX</h2><p>Upgraded an existing student forum site from PHPBB 2.0 to PHPBB 3.3.</p><ul><li>MySQL, PhpMyAdmin</li><li>Enhanced search indexing</li></ul>'
            },
            {
                id: 'proj4', type: 'action', label: 'Workflow Automations', icon: 'https://cdn-icons-png.flaticon.com/512/2083/2083213.png', x: 700, y: 150, operations: '2024',
                details: '<h2>Make.com & Zapier Workflows</h2><p>Comprehensive automation project for workflow efficiency.</p><ul><li>WP Recipe plugin & data migration</li><li>Auth.net + Salesforce + QuickBooks sync</li><li>AI NLP integration</li></ul>'
            },
            {
                id: 'proj5', type: 'action', label: 'Trove & ITS ERP', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', x: 700, y: 450, operations: 'Current',
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
                details: '<h2>Foundation in Information Technology</h2><p>University of Colombo School of Computing (UCSC)</p><ul><li>Mathematics</li><li>English Communication Skills</li><li>Information Communication Technology</li></ul>'
            },
            {
                id: 'edu2', type: 'action', label: 'B.I.T', icon: 'https://cdn-icons-png.flaticon.com/512/2231/2231662.png', x: 600, y: 250, operations: '2017-21',
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
                details: '<h2>LinkedIn Profile</h2><p>Platform Automation Engineer @ Codification</p><p>Puttalam District, Sri Lanka</p><ul><li><a href="https://www.linkedin.com/in/sahfas/" target="_blank" style="color:#5200FF;">View Full Profile →</a></li></ul>'
            },
            {
                id: 'rec1', type: 'action', label: 'Ishthiyaque Ahmed', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', x: 100, y: 300, operations: 'Sep 2025',
                details: '<div class="rec-card"><div class="rec-avatar" style="background:#5200FF">IA</div><h2>Ishthiyaque Ahmed (Ishthi)</h2><p class="rec-title">Software Engineer &amp; Automation Strategist | Make, N8N &amp; AI</p><blockquote class="rec-quote">"Sahfas is a talented resource to any employer. During his tenure of career, I found him dynamic and fast learner despite any technology. He is a person who can understand the underpinning technical framework of the working platform or project. I wish him all the best."</blockquote><span class="rec-date">September 30, 2025</span></div>'
            },
            {
                id: 'rec2', type: 'action', label: 'Mohamed Faalil', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', x: 400, y: 350, operations: 'Jul 2025',
                details: '<div class="rec-card"><div class="rec-avatar" style="background:#0078D4">MF</div><h2>Mohamed Faalil</h2><p class="rec-title">Senior Software Engineer @ comAlpine Informationssysteme GmbH</p><blockquote class="rec-quote">"I had the pleasure of working with Sahfas when he joined as an Associate Software Engineer. From the very beginning, he demonstrated a fast learning ability and a deep understanding of technical concepts. Sahfas has developed extensive experience in automation, and his contributions in that area have been truly impressive. His ability to tackle complex problems and deliver reliable solutions makes him stand out as a developer. I highly recommend Sahfas to any organization."</blockquote><span class="rec-date">July 15, 2025</span></div>'
            },
            {
                id: 'rec3', type: 'action', label: 'Rajabdeen Ajmal', icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', x: 700, y: 300, operations: 'May 2025',
                details: '<div class="rec-card"><div class="rec-avatar" style="background:#28a745">RA</div><h2>Rajabdeen Ajmal</h2><p class="rec-title">Senior Technical Lead | Java | Spring Boot | Laravel | Angular | Node.js</p><blockquote class="rec-quote">"It\'s been a pleasure working with Sahfas at Imara Software Solutions, and I\'ve also had the privilege of mentoring him earlier as one of my BIT students. From the classroom to the workplace, his intelligence, dedication, and strong grasp of software development have always stood out. Sahfas consistently demonstrated solid technical skills and a clear understanding of software architecture. I strongly recommend him for any opportunity in software development or beyond."</blockquote><span class="rec-date">May 1, 2025</span></div>'
            }
        ],
        connections: [
            { start: 'rec_source', end: 'rec1' },
            { start: 'rec_source', end: 'rec2' },
            { start: 'rec_source', end: 'rec3' }
        ]
    }
};

let currentSection = 'skills';
let scale = 1;
let translateX = 0;
let translateY = 0;
let isPanning = false;
let startX = 0;
let startY = 0;
let activeNode = null;
let isDraggingNode = false;

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

    // -- Canvas Pan & Zoom Logic --

    function updateTransform() {
        if (interactiveLayer) {
            interactiveLayer.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        }
        if (canvasBackground) {
            canvasBackground.style.backgroundPosition = `${translateX}px ${translateY}px`;
        }
        if (zoomIndicator) {
            zoomIndicator.textContent = `${Math.round(scale * 100)}%`;
        }
    }

    // Logic for fitting nodes perfectly into the view
    function fitToScreen(isClosingPanel = false) {
        const data = cvData[currentSection];
        if (!data || !data.nodes || data.nodes.length === 0) return;

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        data.nodes.forEach(n => {
            if (n.x < minX) minX = n.x;
            if (n.y < minY) minY = n.y;
            if (n.x > maxX) maxX = n.x;
            if (n.y > maxY) maxY = n.y;
        });

        const padding = 100;
        const nodeWidth = 250;
        const nodeHeight = 80;

        minX -= padding;
        minY -= padding;
        maxX += nodeWidth + padding;
        maxY += nodeHeight + padding;

        const contentW = maxX - minX;
        const contentH = maxY - minY;

        const rect = canvas.getBoundingClientRect();
        let availableW = rect.width;

        // If the panel is animating closed, account for the full canvas width
        if (isClosingPanel && detailPanel.classList.contains('open')) {
            availableW += 400;
        }

        const scaleX = availableW / contentW;
        const scaleY = rect.height / contentH;
        let newScale = Math.min(scaleX, scaleY);

        newScale = Math.min(Math.max(0.2, newScale), 1.2);
        scale = newScale;

        const contentCenterX = minX + (contentW / 2);
        const contentCenterY = minY + (contentH / 2);

        translateX = (availableW / 2) - (contentCenterX * scale);
        translateY = (rect.height / 2) - (contentCenterY * scale);

        updateTransform();
    }

    // Centering directly on a specific node
    function centerOnNode(node) {
        const nodeW = 200;
        const nodeH = 64;
        const rect = canvas.getBoundingClientRect();

        let finalWidth = rect.width;
        if (!detailPanel.classList.contains('open')) {
            finalWidth -= 400; // Panel is about to open and take up 400px
        }

        translateX = (finalWidth / 2) - (node.x * scale) - ((nodeW * scale) / 2);
        translateY = (rect.height / 2) - (node.y * scale) - ((nodeH * scale) / 2);

        updateTransform();
    }

    // Zoom Buttons
    function applyZoomOffset(zoomFactor) {
        let newScale = scale * zoomFactor;
        newScale = Math.min(Math.max(0.2, newScale), 3);

        // Zoom to center of the visible canvas instead of cursor
        const rect = canvas.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        translateX = centerX - (centerX - translateX) * (newScale / scale);
        translateY = centerY - (centerY - translateY) * (newScale / scale);
        scale = newScale;
        updateTransform();
    }

    zoomInBtn.addEventListener('click', () => applyZoomOffset(1.2));
    zoomOutBtn.addEventListener('click', () => applyZoomOffset(0.8));
    if (zoomResetBtn) zoomResetBtn.addEventListener('click', () => fitToScreen());

    // Zooming (Mouse Wheel)
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();

        const zoomSensitivity = 0.001;
        const delta = e.deltaY * -zoomSensitivity;
        let newScale = scale * (1 + delta);

        // Clamp scale
        newScale = Math.min(Math.max(0.2, newScale), 3);

        // Calculate point relative to the container to zoom into the cursor
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        translateX = x - (x - translateX) * (newScale / scale);
        translateY = y - (y - translateY) * (newScale / scale);
        scale = newScale;

        updateTransform();
    }, { passive: false });

    // Panning (Mouse Drag on Background)
    canvas.addEventListener('mousedown', (e) => {
        if (e.target.closest('.node-module') || e.target.closest('.detail-panel') || e.target.closest('.sidebar') || e.target.closest('.topbar')) return;

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
            // Calculate real coordinates dividing by current scale
            const newX = (e.clientX - startX) / scale;
            const newY = (e.clientY - startY) / scale;

            activeNode.element.style.left = `${newX}px`;
            activeNode.element.style.top = `${newY}px`;

            // Update data model
            activeNode.data.x = newX;
            activeNode.data.y = newY;

            // Redraw connections in real time
            drawConnections(cvData[currentSection].nodes, cvData[currentSection].connections);
        }
    });

    window.addEventListener('mouseup', () => {
        isPanning = false;
        isDraggingNode = false;
        activeNode = null;
        canvas.style.cursor = 'grab';
    });

    function renderSection(sectionKey) {
        currentSection = sectionKey;
        const data = cvData[sectionKey];

        // Update Title
        if (pageTitle && data.title) {
            pageTitle.textContent = data.title;
        }

        // Clear existing nodes (except background and svg)
        const existingNodes = interactiveLayer.querySelectorAll('.node-module');
        existingNodes.forEach(node => node.remove());

        // Close panel
        detailPanel.classList.remove('open');

        // Reset transform on section switch
        scale = 1;
        translateX = 0;
        translateY = 0;
        updateTransform();

        // Render nodes
        data.nodes.forEach(node => {
            const el = document.createElement('div');
            el.className = 'node-module';
            el.style.left = `${node.x}px`;
            el.style.top = `${node.y}px`;
            el.id = `node-${node.id}`;

            const iconUrl = node.icon || '';
            const opCount = node.operations ? `<div class="node-operation-count">${node.operations}</div>` : '';

            el.innerHTML = `
                ${opCount}
                <div class="node-icon" style="background-image: url('${iconUrl}')"></div>
                <div class="node-label">${node.label}</div>
            `;

            // Node Drag Logic
            el.addEventListener('mousedown', (e) => {
                // Prevent panning
                e.preventDefault();
                e.stopPropagation();

                isDraggingNode = true;
                activeNode = { element: el, data: node };

                // Keep cursor offset relative to the node
                startX = e.clientX - (node.x * scale);
                startY = e.clientY - (node.y * scale);
            });

            // Node Click Logic
            el.addEventListener('click', () => {
                // Prevent click if we were dragging
                if (isDraggingNode) return;

                panelContent.innerHTML = node.details;

                // Open panel first
                detailPanel.classList.add('open');

                // Animate to center the entire diagram inside the newly resized canvas
                // We use a timeout to let the CSS width transition start so rects calculate the new space
                setTimeout(() => fitToScreen(), 10);
            });

            interactiveLayer.appendChild(el);
        });

        drawConnections(data.nodes, data.connections);
    }

    // Draw SVG Connections
    function drawConnections(nodes, connections) {
        svgLayer.innerHTML = ''; // Clear existing
        connections.forEach(conn => {
            const startNode = nodes.find(n => n.id === conn.start);
            const endNode = nodes.find(n => n.id === conn.end);

            if (startNode && endNode) {
                // Node center coordinates
                const startX = startNode.x + 32;
                const startY = startNode.y + 32;
                const endX = endNode.x + 32;
                const endY = endNode.y + 32;

                const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

                // Draw a nice bezier curve
                const ctrl1X = startX + (endX - startX) / 2;
                const ctrl1Y = startY;
                const ctrl2X = startX + (endX - startX) / 2;
                const ctrl2Y = endY;

                const d = `M ${startX} ${startY} C ${ctrl1X} ${ctrl1Y}, ${ctrl2X} ${ctrl2Y}, ${endX} ${endY}`;

                path.setAttribute("d", d);
                path.setAttribute("class", "connection-path");
                svgLayer.appendChild(path);
            }
        });
    }

    // Navigation Click Handlers
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add to clicked
            item.classList.add('active');

            const section = item.getAttribute('data-section');
            if (section && cvData[section]) {
                renderSection(section);
            }
        });
    });

    // Close panel
    closePanelBtn.addEventListener('click', () => {
        if (detailPanel.classList.contains('open')) {
            fitToScreen(true);
        }
        detailPanel.classList.remove('open');
    });

    // Initial draw
    renderSection(currentSection);

    // Auto-fit after a tiny delay to ensure DOM is ready and rects are calculated
    setTimeout(() => fitToScreen(), 50);
});
