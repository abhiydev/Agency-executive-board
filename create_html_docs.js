const fs = require('fs');
const path = require('path');

// Helper to wrap Markdown/Text content into standalone executive HTML with Print-to-PDF & Slide CSS
function generateExecutiveHTML(title, subtitle, contentMarkdown) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | KamiyTech Executive Operating System</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-primary: #0B0F19;
            --bg-card: #111827;
            --accent-cyan: #00F0FF;
            --accent-indigo: #6366F1;
            --text-primary: #F9FAFB;
            --text-secondary: #9CA3AF;
            --border-color: #1F2937;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Inter', sans-serif;
            background-color: #0B0F19;
            color: #E5E7EB;
            line-height: 1.6;
            padding: 40px 20px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            background: #111827;
            border: 1px solid #1F2937;
            border-radius: 12px;
            padding: 50px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
        }

        .header {
            border-bottom: 2px solid #1F2937;
            padding-bottom: 30px;
            margin-bottom: 40px;
        }

        .company-logo {
            font-family: 'Outfit', sans-serif;
            font-size: 28px;
            font-weight: 800;
            color: #00F0FF;
            letter-spacing: -0.5px;
            margin-bottom: 8px;
        }

        .doc-title {
            font-family: 'Outfit', sans-serif;
            font-size: 32px;
            font-weight: 700;
            color: #FFFFFF;
            margin-bottom: 8px;
        }

        .doc-subtitle {
            font-size: 14px;
            color: #9CA3AF;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        h1, h2, h3, h4 {
            font-family: 'Outfit', sans-serif;
            color: #F9FAFB;
            margin-top: 30px;
            margin-bottom: 15px;
        }

        h2 { font-size: 22px; border-bottom: 1px solid #1F2937; padding-bottom: 8px; color: #00F0FF; }
        h3 { font-size: 18px; color: #818CF8; }

        p, li { margin-bottom: 12px; color: #D1D5DB; font-size: 15px; }
        ul, ol { padding-left: 20px; }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 14px;
        }

        th, td {
            padding: 12px 15px;
            border: 1px solid #1F2937;
            text-align: left;
        }

        th {
            background-color: #1F2937;
            color: #00F0FF;
            font-weight: 600;
        }

        tr:nth-child(even) { background-color: #161E2E; }

        blockquote {
            border-left: 4px solid #00F0FF;
            background: #161E2E;
            padding: 15px 20px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }

        code {
            background: #1F2937;
            color: #38BDF8;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 13px;
        }

        pre {
            background: #0D1117;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 20px 0;
            border: 1px solid #30363D;
        }

        .footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #1F2937;
            font-size: 12px;
            color: #6B7280;
            display: flex;
            justify-content: space-between;
        }

        /* PRINT STYLES - Optimized for Save as PDF */
        @media print {
            body { background: #FFFFFF; color: #111827; padding: 0; }
            .container { border: none; box-shadow: none; padding: 20px; max-width: 100%; }
            .doc-title { color: #111827; }
            h2 { color: #4F46E5; border-bottom-color: #E5E7EB; }
            th { background-color: #F3F4F6; color: #111827; }
            tr:nth-child(even) { background-color: #F9FAFB; }
            blockquote { background: #F3F4F6; border-left-color: #4F46E5; color: #1F2937; }
            code { background: #F3F4F6; color: #1F2937; }
            .footer { border-top-color: #E5E7EB; color: #9CA3AF; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="company-logo">KAMIYTECH</div>
            <div class="doc-title">${title}</div>
            <div class="doc-subtitle">${subtitle}</div>
        </div>
        <div class="content">
            ${contentMarkdown}
        </div>
        <div class="footer">
            <span>KamiyTech Executive Operating System (EOS)</span>
            <span>Confidential & Proprietary</span>
        </div>
    </div>
</body>
</html>`;
}

console.log('HTML generator helper ready.');
