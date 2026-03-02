const fs = require('fs');
const path = require('path');

const dir = 'app/components';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Slide') && f.endsWith('.tsx') && f !== 'SlideChrome.tsx' && f !== 'SlideReveal.tsx');

for (const file of files) {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Normalize className if it has extra stuff we added
  content = content.replace(/!w-\[1920px\] !h-\[1080px\] !min-w-\[1920px\] !min-h-\[1080px\] !max-w-\[1920px\] !max-h-\[1080px\] shrink-0 /g, '');
  
  // Find <div className="slide-inner..." and make sure it has the inline style
  // Don't replace if style already has width 1920
  if (!content.includes('width: 1920')) {
    content = content.replace(/(className="slide-inner[^"]*")/g, '$1 style={{ width: 1920, height: 1080, minWidth: 1920, minHeight: 1080, maxWidth: 1920, maxHeight: 1080, flexShrink: 0 }}');
  }
  
  fs.writeFileSync(filepath, content);
}
