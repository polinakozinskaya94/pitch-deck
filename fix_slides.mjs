import fs from 'fs';
import glob from 'glob';

const files = glob.sync('app/components/Slide*.tsx');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Normalize className if it has extra stuff we added
  content = content.replace(/!w-\[1920px\] !h-\[1080px\] !min-w-\[1920px\] !min-h-\[1080px\] !max-w-\[1920px\] !max-h-\[1080px\] shrink-0 /g, '');
  
  // Find <div className="slide-inner..." and make sure it has the inline style
  // Using a regex to match className="slide-inner <anything>" and inject the style if not present
  content = content.replace(/(className="slide-inner[^"]*")(?!\s*style={{)/g, '$1 style={{ width: 1920, height: 1080, minWidth: 1920, minHeight: 1080, maxWidth: 1920, maxHeight: 1080 }}');
  
  fs.writeFileSync(file, content);
}
