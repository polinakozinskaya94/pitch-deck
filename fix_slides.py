import glob
import re

for filepath in glob.glob("app/components/Slide*.tsx"):
    with open(filepath, "r") as f:
        content = f.read()
    
    # 1. Clean up my previous sed mess
    content = content.replace('!w-[1920px] !h-[1080px] !min-w-[1920px] !min-h-[1080px] !max-w-[1920px] !max-h-[1080px] shrink-0 ', '')
    
    # 2. Find the slide-inner div and inject style.
    # Some slides might already have style={{...}}
    # Instead of regex, let's just create an inner-most fixed container.
    # Actually, simpler: replace `className="slide-inner` with `className="slide-inner"` and just ensure it has inline styles by modifying the globals.css to be ABSOLUTELY forced, and removing Next.js caching.
    
    with open(filepath, "w") as f:
        f.write(content)
