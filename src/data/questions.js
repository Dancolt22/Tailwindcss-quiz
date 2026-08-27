/* ============================================================
   QUESTION BANK — 160 questions covering the full Tailwind course
   (40 questions per section, drawing 30 per section practice run)
   ============================================================ */

export const QUIZ_SECTIONS = [
  {
    id: "all",
    name: "All Chapters (1–25)",
    chapterRange: "1–25",
    description: "Complete Tailwind Exam — 40 Qs randomly selected from 160 Bank",
    startChapter: 1,
    endChapter: 25,
    quizLength: 40,
    poolSize: 160,
  },
  {
    id: "sec1",
    name: "Chapters 1–6: Fundamentals & Core Setup",
    chapterRange: "1–6",
    description: "Intro, Setup, Core Ideas, Colors, Typography, Spacing — 30 Qs from 40 Pool",
    startChapter: 1,
    endChapter: 6,
    quizLength: 30,
    poolSize: 40,
  },
  {
    id: "sec2",
    name: "Chapters 7–12: Layout & Visual Styles",
    chapterRange: "7–12",
    description: "Sizing, Flexbox, CSS Grid, Backgrounds, Borders, Shadows — 30 Qs from 40 Pool",
    startChapter: 7,
    endChapter: 12,
    quizLength: 30,
    poolSize: 40,
  },
  {
    id: "sec3",
    name: "Chapters 13–18: States, Responsive & FX",
    chapterRange: "13–18",
    description: "Hover/Focus States, Mobile-First, Dark Mode, Animations — 30 Qs from 40 Pool",
    startChapter: 13,
    endChapter: 18,
    quizLength: 30,
    poolSize: 40,
  },
  {
    id: "sec4",
    name: "Chapters 19–25: Advanced, Config & Production",
    chapterRange: "19–25",
    description: "Positioning, Z-Index, Custom Config, @apply, Plugins, Best Practices — 30 Qs from 40 Pool",
    startChapter: 19,
    endChapter: 25,
    quizLength: 30,
    poolSize: 40,
  },
];

export function getQuestionsBySection(sectionId) {
  const section = QUIZ_SECTIONS.find((s) => s.id === sectionId);
  if (!section || section.id === "all") {
    return QUESTION_BANK;
  }
  return QUESTION_BANK.filter(
    (q) => q.chapter >= section.startChapter && q.chapter <= section.endChapter
  );
}

export const QUESTION_BANK = [
  // SECTION 1: CHAPTERS 1 - 6 (40 Questions total)
  // 1. What is TailwindCSS?
  { id: 1, chapter: 1, q: "What are Tailwind's small, single-purpose classes called?", options: ["Utility classes", "Component classes", "Atomic mixins", "Style blocks"], answer: 0, explain: "Tailwind styles elements using tiny, single-purpose classes called utility classes, e.g. bg-blue-500 or px-5." },
  { id: 2, chapter: 1, q: "In the traditional CSS approach, where do you usually write your styles?", options: ["Directly in HTML", "In a separate CSS file", "In a JSON config", "Inline in JavaScript"], answer: 1, explain: "The old way writes CSS rules in a separate .css file, which grows into a hard-to-manage mess as a project scales." },
  { id: 3, chapter: 1, q: "Which of these is NOT listed as a reason to use Tailwind?", options: ["Speed", "Consistency", "No naming problem", "Automatic SEO optimization"], answer: 3, explain: "The guide lists speed, consistency, no naming problem, and small final size — not SEO optimization." },
  { id: 4, chapter: 1, q: "What happens to unused CSS in a Tailwind project?", options: ["It's automatically removed", "It's minified only", "It's kept for later use", "It has to be deleted manually"], answer: 0, explain: "Tailwind automatically removes unused CSS, keeping the final stylesheet small and fast to load." },
  { id: 5, chapter: 1, q: "How many things does each Tailwind utility class do?", options: ["Three", "Two", "One", "As many as needed"], answer: 2, explain: "Each Tailwind class does ONE thing — e.g. px-5 only adds horizontal padding." },

  // 2. Setting Up Tailwind
  { id: 6, chapter: 2, q: "Which setup method is described as quick but not recommended for production?", options: ["The CDN method", "The npm method", "The CLI method", "The PostCSS-only method"], answer: 0, explain: "The CDN method is great for learning but isn't recommended for real production projects." },
  { id: 7, chapter: 2, q: "What does CDN stand for, as explained in the guide?", options: ["Central Development Node", "Content Delivery Network", "Cascading Design Notation", "Client Data Network"], answer: 1, explain: "A CDN (Content Delivery Network) is a network of servers that deliver files from the server closest to the user." },
  { id: 8, chapter: 2, q: "Which command installs Tailwind along with PostCSS and Autoprefixer for the npm setup?", options: ["npm install tailwind-cli", "npm install -D tailwindcss@3 postcss autoprefixer", "npm create tailwind-app", "npm install @tailwindcss/forms"], answer: 1, explain: "npm install -D tailwindcss@3 postcss autoprefixer installs Tailwind plus its PostCSS dependencies as dev dependencies." },
  { id: 9, chapter: 2, q: "Which command generates tailwind.config.js and postcss.config.js?", options: ["npx tailwindcss build", "npx tailwindcss init -p", "npm run tailwind:init", "npx create-tailwind"], answer: 1, explain: "npx tailwindcss init -p generates both tailwind.config.js and postcss.config.js." },
  { id: 10, chapter: 2, q: "What does the --watch flag do in the Tailwind build command?", options: ["Minifies the CSS once", "Auto-rebuilds the CSS whenever files change", "Deletes old output files", "Opens the browser automatically"], answer: 1, explain: "--watch tells Tailwind to automatically rebuild output.css every time you save your HTML or CSS." },

  // 3. How Tailwind Works
  { id: 11, chapter: 3, q: "Tailwind class names generally follow which naming pattern?", options: ["{value}-{property}", "{property}-{value}", "{state}-{property}", "{color}-{property}"], answer: 1, explain: "Tailwind classes follow {property}-{value}, e.g. text-lg or bg-red-500." },
  { id: 12, chapter: 3, q: "On Tailwind's default spacing scale, what does the number 4 equal?", options: ["4px", "8px", "16px", "24px"], answer: 2, explain: "On the spacing scale, 4 maps to 16px (1rem) — used in classes like p-4 or mt-4." },
  { id: 13, chapter: 3, q: "What does the class mt-4 do?", options: ["Adds margin-top of 16px", "Adds margin-top of 4px", "Adds max-width of 4rem", "Adds padding-top of 16px"], answer: 0, explain: "mt-4 sets margin-top to 4 on the spacing scale, which equals 16px (1rem)." },
  { id: 14, chapter: 3, q: "On the spacing scale, what does the number 8 equal?", options: ["24px", "32px", "40px", "48px"], answer: 1, explain: "The number 8 on Tailwind's spacing scale equals 32px." },
  { id: 15, chapter: 3, q: "What does the class w-full set an element's width to?", options: ["Auto width", "50% width", "100% width", "The viewport width"], answer: 2, explain: "w-full sets width to 100% of its parent container." },

  // 4. Colors
  { id: 16, chapter: 4, q: "Tailwind color utility classes generally follow which pattern?", options: ["{shade}-{color}-{property}", "{property}-{color}-{shade}", "{color}-{shade}-{property}", "{property}-{shade}"], answer: 1, explain: "Color classes follow {property}-{color}-{shade}, e.g. text-blue-700 or bg-red-500." },
  { id: 17, chapter: 4, q: "Tailwind's color shades range from which numbers?", options: ["10 to 100", "50 to 950", "100 to 1000", "0 to 500"], answer: 1, explain: "Shades go from 50 (very light) to 950 (very dark)." },
  { id: 18, chapter: 4, q: "Which of these is NOT one of Tailwind's listed color families?", options: ["Teal", "Cyan", "Crimson", "Rose"], answer: 2, explain: "The guide lists families like teal, cyan, and rose — 'crimson' is not one of Tailwind's named color families." },
  { id: 19, chapter: 4, q: "What does the class bg-transparent do?", options: ["Makes the background 50% see-through", "Removes the background color entirely", "Adds a white background", "Adds a gradient background"], answer: 1, explain: "bg-transparent gives an element a fully transparent (see-through) background." },
  { id: 20, chapter: 4, q: "Which class would give an element a light green background (shade 100)?", options: ["bg-green-900", "bg-green-500", "bg-green-100", "bg-lime-950"], answer: 2, explain: "Lower shade numbers like 100 are lighter, so bg-green-100 gives a light green background." },

  // 5. Typography
  { id: 21, chapter: 5, q: "Which class sets font size to the 'base'/normal 16px size?", options: ["text-sm", "text-base", "text-lg", "text-md"], answer: 1, explain: "text-base is the normal/base font size at 16px." },
  { id: 22, chapter: 5, q: "font-bold corresponds to which numeric font weight?", options: ["400", "500", "600", "700"], answer: 3, explain: "font-bold maps to a numeric weight of 700." },
  { id: 23, chapter: 5, q: "Which class centers text horizontally?", options: ["text-middle", "text-center", "items-center", "justify-center"], answer: 1, explain: "text-center is the text-alignment utility for centering text." },
  { id: 24, chapter: 5, q: "Which text-transform class forces ALL text to uppercase?", options: ["capitalize", "uppercase", "normal-case", "tracking-wide"], answer: 1, explain: "uppercase transforms all text to uppercase regardless of the original casing." },
  { id: 25, chapter: 5, q: "Which line-height class gives the loosest spacing (2)?", options: ["leading-normal", "leading-relaxed", "leading-loose", "leading-snug"], answer: 2, explain: "leading-loose sets the loosest line-height value, 2." },
  { id: 26, chapter: 5, q: "Which font-family class is best suited for displaying code?", options: ["font-serif", "font-sans", "font-mono", "font-display"], answer: 2, explain: "font-mono applies a monospace font, ideal for code." },

  // 6. Spacing
  { id: 27, chapter: 6, q: "Which class adds padding only to the left and right sides?", options: ["py-4", "px-4", "p-4", "pl-4"], answer: 1, explain: "px-4 adds horizontal padding (left + right) only." },
  { id: 28, chapter: 6, q: "What is mx-auto commonly used for?", options: ["Adding vertical margin", "Centering an element horizontally", "Removing all margin", "Adding a negative margin"], answer: 1, explain: "mx-auto sets left/right margin to auto, which centers a block-level element horizontally." },
  { id: 29, chapter: 6, q: "Which class adds vertical spacing between a group of stacked child elements?", options: ["gap-y-4", "space-y-4", "my-4", "divide-y-4"], answer: 1, explain: "space-y-4 adds vertical spacing between sibling elements inside a container." },
  { id: 30, chapter: 6, q: "Which class creates a negative top margin, pulling an element upward?", options: ["mt-0", "-mt-4", "mt-4", "top-4"], answer: 1, explain: "-mt-4 applies a negative top margin, pulling the element up." },
  { id: 31, chapter: 6, q: "Which class sets padding of 32px on all sides?", options: ["p-4", "p-6", "p-8", "p-16"], answer: 2, explain: "p-8 corresponds to 32px of padding on all sides." },

  // Section 1 expansion questions (Ch 1 - 6)
  { id: 121, chapter: 1, q: "Why does utility-first CSS prevent file size bloat as projects grow?", options: ["CSS files grow linearly with every new feature", "You re-use existing utility classes everywhere instead of writing new CSS rules", "Tailwind deletes unused HTML elements", "Utility classes compress images"], answer: 1, explain: "Reusing existing utility classes keeps the output CSS file from growing larger when adding new UI features." },
  { id: 122, chapter: 2, q: "Which CSS directive in input.css imports Tailwind's utility classes?", options: ["@import utilities;", "@tailwind utilities;", "@layer helper;", "@include utilities;"], answer: 1, explain: "@tailwind utilities; injects all of Tailwind's utility classes into your input CSS file." },
  { id: 123, chapter: 3, q: "On Tailwind's default spacing scale, what is the px equivalent of p-12?", options: ["24px", "36px", "48px", "60px"], answer: 2, explain: "The spacing scale value 12 equals 48px (3rem)." },
  { id: 124, chapter: 3, q: "Which class sets a fixed width of 64 (16rem / 256px)?", options: ["w-64", "width-64", "max-w-64", "min-w-64"], answer: 0, explain: "w-64 sets element width to 256px (16rem)." },
  { id: 125, chapter: 4, q: "How do you apply 75% opacity to text-red-500 using Tailwind's color opacity modifier?", options: ["text-red-500-75", "text-red-500/75", "text-red-500:75", "text-red-500 opacity-75"], answer: 1, explain: "Tailwind allows inline color opacity using the slash modifier, e.g. text-red-500/75." },
  { id: 126, chapter: 4, q: "Which class changes an element's border color to dark slate?", options: ["border-slate-800", "stroke-slate-800", "outline-slate-800", "color-slate-800"], answer: 0, explain: "border-slate-800 sets the border color to shade 800 of the slate palette." },
  { id: 127, chapter: 5, q: "Which class sets text to italic style?", options: ["font-italic", "italic", "text-italic", "style-italic"], answer: 1, explain: "The italic class applies font-style: italic." },
  { id: 128, chapter: 5, q: "Which tracking utility class applies the widest letter-spacing?", options: ["tracking-tight", "tracking-normal", "tracking-wide", "tracking-widest"], answer: 3, explain: "tracking-widest applies the maximum positive letter-spacing (0.1em)." },
  { id: 129, chapter: 6, q: "What does the class space-x-6 do?", options: ["Adds horizontal padding inside all items", "Adds horizontal margin between child elements", "Adds vertical margin above children", "Adds space only around the outer container"], answer: 1, explain: "space-x-6 adds horizontal spacing (margin-left) between sibling elements." },


  // SECTION 2: CHAPTERS 7 - 12 (40 Questions total)
  // 7. Sizing
  { id: 32, chapter: 7, q: "Which class sets an element's width to 50%?", options: ["w-1/3", "w-1/2", "w-full", "w-2/3"], answer: 1, explain: "w-1/2 sets the width to 50% of its parent." },
  { id: 33, chapter: 7, q: "Which class sets an element's height to 100% of the viewport height?", options: ["h-full", "h-screen", "h-auto", "h-64"], answer: 1, explain: "h-screen sets height to 100% of the viewport height." },
  { id: 34, chapter: 7, q: "Approximately how wide is max-w-md?", options: ["384px", "448px", "512px", "576px"], answer: 1, explain: "max-w-md caps the max width at 448px." },
  { id: 35, chapter: 7, q: "Which class sets an element's width to 100% of the viewport width?", options: ["w-full", "w-screen", "w-auto", "max-w-full"], answer: 1, explain: "w-screen sets width to 100% of the viewport width, as opposed to w-full which is 100% of the parent." },
  { id: 36, chapter: 7, q: "Which class combination centers a content box while capping its width?", options: ["flex justify-center", "max-w-4xl mx-auto", "w-full text-center", "items-center h-screen"], answer: 1, explain: "max-w-4xl mx-auto caps the element's width and centers it horizontally." },

  // 8. Flexbox
  { id: 37, chapter: 8, q: "Which class stacks flex children vertically instead of side by side?", options: ["flex-row", "flex-wrap", "flex-col", "flex-none"], answer: 2, explain: "flex-col changes the flex direction so children stack vertically." },
  { id: 38, chapter: 8, q: "Which class distributes flex items with space BETWEEN them?", options: ["justify-around", "justify-between", "justify-evenly", "justify-center"], answer: 1, explain: "justify-between places equal space between items, with no space at the outer edges." },
  { id: 39, chapter: 8, q: "Which class vertically centers items along the cross-axis of a flex container?", options: ["justify-center", "items-center", "content-center", "self-center"], answer: 1, explain: "items-center aligns flex children along the cross-axis (vertically, in a row layout)." },
  { id: 40, chapter: 8, q: "Which class allows flex children to wrap onto multiple lines?", options: ["flex-nowrap", "flex-wrap", "flex-col", "flex-grow"], answer: 1, explain: "flex-wrap lets items wrap onto the next line instead of overflowing." },
  { id: 41, chapter: 8, q: "Which class makes a flex item grow to fill all remaining space?", options: ["flex-none", "shrink-0", "flex-1", "grow-0"], answer: 2, explain: "flex-1 makes an item grow and shrink as needed to fill remaining space." },
  { id: 42, chapter: 8, q: "Which class prevents a flex item from shrinking?", options: ["shrink-0", "grow", "flex-1", "flex-none"], answer: 0, explain: "shrink-0 stops an item from shrinking below its natural size." },

  // 9. CSS Grid
  { id: 43, chapter: 9, q: "Which class creates a grid with 3 equal columns?", options: ["grid-rows-3", "grid-cols-3", "col-span-3", "grid-flow-3"], answer: 1, explain: "grid-cols-3 divides the grid container into 3 equal-width columns." },
  { id: 44, chapter: 9, q: "Which class makes a grid item span 2 columns?", options: ["grid-cols-2", "span-2", "col-span-2", "cols-2"], answer: 2, explain: "col-span-2 makes an item stretch across 2 grid columns." },
  { id: 45, chapter: 9, q: "Which class sets a horizontal-only gap between grid columns?", options: ["gap-4", "gap-y-6", "gap-x-6", "space-x-6"], answer: 2, explain: "gap-x-6 sets the horizontal gap only, independent of the vertical gap." },
  { id: 46, chapter: 9, q: "Which base class turns a container into a CSS Grid layout?", options: ["flex", "grid", "table", "columns"], answer: 1, explain: "The grid class enables CSS Grid display on a container." },
  { id: 47, chapter: 9, q: "In the responsive Card Grid example, how many columns are used on large (lg) screens?", options: ["1", "2", "3", "4"], answer: 2, explain: "The example uses grid-cols-1 md:grid-cols-2 lg:grid-cols-3, so large screens show 3 columns." },

  // 10. Backgrounds
  { id: 48, chapter: 10, q: "Which class creates a gradient going from left to right?", options: ["bg-gradient-to-t", "bg-gradient-to-r", "bg-gradient-to-b", "bg-gradient-to-l"], answer: 1, explain: "bg-gradient-to-r creates a gradient flowing left-to-right." },
  { id: 49, chapter: 10, q: "Which class makes a background image cover its entire container?", options: ["bg-contain", "bg-cover", "bg-center", "bg-fill"], answer: 1, explain: "bg-cover scales a background image so it fully covers the element." },
  { id: 50, chapter: 10, q: "Which keyword adds a middle color stop to a gradient?", options: ["mid-", "via-", "between-", "stop-"], answer: 1, explain: "The via- prefix (e.g. via-orange-400) adds a middle color to a gradient." },
  { id: 51, chapter: 10, q: "Which class stops a background image from tiling/repeating?", options: ["bg-repeat", "bg-no-repeat", "bg-once", "bg-single"], answer: 1, explain: "bg-no-repeat prevents the background image from repeating across the element." },

  // 11. Borders & Rounded Corners
  { id: 52, chapter: 11, q: "Which class turns an element into a full circle or pill shape?", options: ["rounded-lg", "rounded-2xl", "rounded-full", "rounded-3xl"], answer: 2, explain: "rounded-full applies maximum border-radius, producing a circle (with equal width/height) or a pill." },
  { id: 53, chapter: 11, q: "Which class applies a 2px border width?", options: ["border", "border-2", "border-4", "border-0"], answer: 1, explain: "border-2 sets the border width to 2px." },
  { id: 54, chapter: 11, q: "Which class creates a dashed border style?", options: ["border-solid", "border-dotted", "border-dashed", "border-double"], answer: 2, explain: "border-dashed gives the border a dashed line style." },
  { id: 55, chapter: 11, q: "To make a perfect circle with rounded-full, what else is required?", options: ["A dark background color", "Equal width and height", "A border of at least 4px", "The 'block' display class"], answer: 1, explain: "rounded-full only forms a true circle when width and height are equal, e.g. w-16 h-16." },
  { id: 56, chapter: 11, q: "Which class rounds only the top-left corner of an element?", options: ["rounded-t-lg", "rounded-tl-lg", "rounded-tr-lg", "rounded-l-lg"], answer: 1, explain: "rounded-tl-lg rounds just the top-left corner." },

  // 12. Shadows
  { id: 57, chapter: 12, q: "Which class adds an inset (inner) shadow?", options: ["shadow-lg", "shadow-inner", "shadow-2xl", "shadow-none"], answer: 1, explain: "shadow-inner applies an inset shadow instead of a drop shadow." },
  { id: 58, chapter: 12, q: "Which class removes any shadow from an element?", options: ["shadow-0", "shadow-sm", "shadow-none", "shadow-off"], answer: 2, explain: "shadow-none removes any box-shadow." },
  { id: 59, chapter: 12, q: "What does shadow-lg shadow-blue-500/50 produce?", options: ["A large blue shadow at 50% opacity", "A large shadow with 50% blur", "A small blue border", "A blue background at 50% opacity"], answer: 0, explain: "The color/opacity syntax colors the shadow blue and sets its opacity to 50%." },
  { id: 60, chapter: 12, q: "Which combination creates a shadow that grows when the element is hovered?", options: ["shadow hover:shadow-xl", "hover:shadow-none", "shadow-xl active:shadow", "shadow-inner hover:shadow-inner"], answer: 0, explain: "Pairing a base shadow with hover:shadow-xl makes the shadow grow larger on hover." },

  // Section 2 expansion questions (Ch 7 - 12)
  { id: 130, chapter: 7, q: "Which class prevents an element from exceeding 100% of its parent's width?", options: ["max-w-full", "w-full", "min-w-full", "max-w-screen"], answer: 0, explain: "max-w-full sets max-width: 100%, preventing overflow outside its parent container." },
  { id: 131, chapter: 7, q: "Which class sets height to 100% of the parent container?", options: ["h-auto", "h-full", "h-screen", "min-h-full"], answer: 1, explain: "h-full sets height: 100% relative to the parent element." },
  { id: 132, chapter: 8, q: "Which class aligns flex items at the baseline of their text?", options: ["items-start", "items-baseline", "justify-baseline", "content-baseline"], answer: 1, explain: "items-baseline aligns flex children along their text baseline." },
  { id: 133, chapter: 8, q: "What does justify-evenly do in a Flexbox container?", options: ["Distributes items so spacing between any two items and edges is equal", "Distributes items with space only between them", "Pushes items to opposite ends", "Centers all items in the container"], answer: 0, explain: "justify-evenly ensures equal spacing around and between all flex items." },
  { id: 134, chapter: 9, q: "Which class makes a grid item span across all available columns?", options: ["col-span-full", "grid-cols-full", "col-full", "col-span-4"], answer: 0, explain: "col-span-full causes an element to stretch across all grid columns." },
  { id: 135, chapter: 9, q: "Which class sets vertical-only spacing between grid rows?", options: ["gap-x-4", "gap-y-4", "space-y-4", "row-gap-4"], answer: 1, explain: "gap-y-4 sets the row gap specifically in CSS Grid or Flexbox." },
  { id: 136, chapter: 10, q: "Which class sets background-attachment to fixed for parallax scrolling effects?", options: ["bg-scroll", "bg-fixed", "bg-local", "bg-static"], answer: 1, explain: "bg-fixed keeps background images fixed relative to the viewport during page scroll." },
  { id: 137, chapter: 10, q: "Which class sets the ending color of a gradient to dark violet?", options: ["to-violet-900", "via-violet-900", "from-violet-900", "stop-violet-900"], answer: 0, explain: "The to- prefix specifies the final color stop of a CSS gradient." },
  { id: 138, chapter: 11, q: "Which class sets border radius to extra large (0.75rem / 12px)?", options: ["rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl"], answer: 2, explain: "rounded-xl applies border-radius: 0.75rem (12px)." },
  { id: 139, chapter: 11, q: "Which class removes the focus outline default on interactive controls?", options: ["outline-none", "border-none", "shadow-none", "ring-0"], answer: 0, explain: "outline-none suppresses default browser focus outline styles." },
  { id: 140, chapter: 12, q: "Which class applies a soft medium box-shadow?", options: ["shadow-sm", "shadow-md", "shadow-lg", "shadow-xl"], answer: 1, explain: "shadow-md adds a medium drop shadow." },


  // SECTION 3: CHAPTERS 13 - 18 (40 Questions total)
  // 13. States & Pseudo-Classes
  { id: 61, chapter: 13, q: "What is the general pattern for applying state-based utility classes?", options: ["{utility-class}:{state}", "{state}:{utility-class}", "{state}-{utility-class}", "state({utility-class})"], answer: 1, explain: "State variants follow {state}:{utility-class}, e.g. hover:bg-blue-700." },
  { id: 62, chapter: 13, q: "Which pseudo-class prefix applies styles while an element is actively being clicked?", options: ["hover:", "focus:", "active:", "visited:"], answer: 2, explain: "active: styles apply while the element is being pressed/clicked." },
  { id: 63, chapter: 13, q: "What does the 'group' + 'group-hover:' pattern allow?", options: ["Styling only the hovered element itself", "Hovering a parent to trigger styles on its children", "Grouping multiple hover states into one class", "Disabling hover on children"], answer: 1, explain: "Adding 'group' to a parent lets group-hover: on children react when the parent is hovered." },
  { id: 64, chapter: 13, q: "Which prefix lets one sibling element's state affect another sibling (e.g. a checkbox affecting a label)?", options: ["sibling:", "peer:", "adjacent:", "group:"], answer: 1, explain: "peer: classes (combined with a 'peer' class on the sibling) let one element's state style another." },
  { id: 65, chapter: 13, q: "Which class reduces opacity specifically on a disabled button?", options: ["hover:opacity-50", "disabled:opacity-50", "focus:opacity-50", "active:opacity-50"], answer: 1, explain: "disabled:opacity-50 applies reduced opacity only when the element has the disabled attribute." },
  { id: 66, chapter: 13, q: "Which pair of classes styles alternating rows in a list?", options: ["first: and last:", "odd: and even:", "hover: and focus:", "before: and after:"], answer: 1, explain: "odd: and even: target alternating elements, useful for striped rows." },

  // 14. Responsive Design
  { id: 67, chapter: 14, q: "Tailwind's responsive design approach is described as ___-first.", options: ["Desktop", "Tablet", "Mobile", "Print"], answer: 2, explain: "Tailwind is mobile-first: base styles target mobile, and prefixes override at larger screens." },
  { id: 68, chapter: 14, q: "Which breakpoint prefix activates at a minimum width of 768px?", options: ["sm:", "md:", "lg:", "xl:"], answer: 1, explain: "md: applies at 768px and up, targeting tablets." },
  { id: 69, chapter: 14, q: "Which breakpoint prefix activates at 1024px and up?", options: ["md:", "lg:", "xl:", "2xl:"], answer: 1, explain: "lg: targets laptops starting at 1024px." },
  { id: 70, chapter: 14, q: "Which class combination hides an element on mobile but shows it on large screens?", options: ["block lg:hidden", "hidden lg:block", "lg:hidden block", "hidden md:hidden"], answer: 1, explain: "hidden lg:block hides the element by default, then shows it (block) at the lg breakpoint and up." },
  { id: 71, chapter: 14, q: "Which listed breakpoint has the highest minimum width (1536px)?", options: ["lg:", "xl:", "2xl:", "3xl:"], answer: 2, explain: "2xl: is the largest listed breakpoint, starting at 1536px." },

  // 15. Dark Mode
  { id: 72, chapter: 15, q: "Which prefix enables dark-mode-specific styling?", options: ["night:", "dark:", "theme-dark:", "shade:"], answer: 1, explain: "Prefixing a class with dark: applies it only in dark mode." },
  { id: 73, chapter: 15, q: "With the 'media' dark mode strategy, what determines dark mode?", options: ["A manual toggle class", "The user's OS/system setting", "The time of day", "A cookie value"], answer: 1, explain: "The 'media' strategy automatically follows the user's operating system preference." },
  { id: 74, chapter: 15, q: "With the 'class' dark mode strategy, how do you activate dark mode?", options: ["Add 'dark' as a class on the <html> tag", "Set a CSS variable", "Add a meta tag", "Import a dark.css file"], answer: 0, explain: "With the class strategy, you manually add the 'dark' class to the <html> element to enable dark mode." },
  { id: 75, chapter: 15, q: "Which JavaScript method is used in the guide's example to toggle dark mode?", options: ["classList.add('dark')", "classList.toggle('dark')", "classList.remove('dark')", "setAttribute('dark', true)"], answer: 1, explain: "classList.toggle('dark') on the <html> element switches dark mode on and off." },

  // 16. Transitions & Animations
  { id: 76, chapter: 16, q: "Which class enables smooth transitions on common properties?", options: ["animate", "transition", "duration", "ease"], answer: 1, explain: "The transition class enables smooth transitions on commonly-animated properties." },
  { id: 77, chapter: 16, q: "Which class sets a transition duration of 300ms?", options: ["duration-150", "duration-300", "delay-300", "ease-300"], answer: 1, explain: "duration-300 sets the transition's duration to 300 milliseconds, described as the default feel." },
  { id: 78, chapter: 16, q: "Which easing function is described as starting fast and ending slow, feeling most natural?", options: ["ease-linear", "ease-in", "ease-out", "ease-in-out"], answer: 2, explain: "ease-out starts fast and ends slow, which the guide calls the most natural feel." },
  { id: 79, chapter: 16, q: "Which class pauses a transition before it starts?", options: ["duration-150", "delay-150", "ease-in", "transition-delay"], answer: 1, explain: "delay-150 makes the transition wait 150ms before it begins." },
  { id: 80, chapter: 16, q: "Which built-in animation class makes an element spin continuously?", options: ["animate-bounce", "animate-ping", "animate-spin", "animate-pulse"], answer: 2, explain: "animate-spin continuously rotates an element, often used for loading spinners." },
  { id: 81, chapter: 16, q: "Which built-in animation class creates a radar-blip 'pinging' effect?", options: ["animate-ping", "animate-pulse", "animate-bounce", "animate-spin"], answer: 0, explain: "animate-ping creates an expanding, fading ping effect like a radar blip." },

  // 17. Transforms
  { id: 82, chapter: 17, q: "According to the guide, what do transforms NOT do?", options: ["Change how an element looks", "Push or affect the layout of other elements", "Move an element visually", "Work with the hover state"], answer: 1, explain: "Transforms are purely visual — they move or resize an element without pushing other elements in the layout." },
  { id: 83, chapter: 17, q: "Which class rotates an element by 45 degrees?", options: ["rotate-45", "skew-45", "rotate-90", "translate-45"], answer: 0, explain: "rotate-45 rotates the element 45 degrees clockwise." },
  { id: 84, chapter: 17, q: "Which class moves an element upward (negative Y direction)?", options: ["translate-y-4", "-translate-y-4", "translate-x-4", "-translate-x-4"], answer: 1, explain: "-translate-y-4 moves the element up by translating it negatively on the Y axis." },
  { id: 85, chapter: 17, q: "Which class scales an element up to 110% of its size?", options: ["scale-90", "scale-100", "scale-110", "scale-125"], answer: 2, explain: "scale-110 scales an element up to 110% of its original size." },
  { id: 86, chapter: 17, q: "Which class tilts/skews an element horizontally?", options: ["skew-y-3", "skew-x-6", "rotate-6", "translate-x-6"], answer: 1, explain: "skew-x-6 applies a horizontal skew transform." },

  // 18. Opacity & Visibility
  { id: 87, chapter: 18, q: "Which class hides an element visually but keeps its space in the layout?", options: ["hidden", "invisible", "opacity-0", "display-none"], answer: 1, explain: "invisible hides the element but still reserves its layout space, unlike 'hidden'." },
  { id: 88, chapter: 18, q: "Which class completely removes an element from the layout (display: none)?", options: ["invisible", "opacity-0", "hidden", "collapse"], answer: 2, explain: "hidden sets display: none, fully removing the element from the layout flow." },
  { id: 89, chapter: 18, q: "Which class sets an element's opacity to 50%?", options: ["opacity-25", "opacity-50", "opacity-75", "opacity-90"], answer: 1, explain: "opacity-50 sets the element to 50% opacity." },
  { id: 90, chapter: 18, q: "Which class turns a container into a flex container?", options: ["block", "inline-block", "flex", "grid"], answer: 2, explain: "The flex class sets display: flex, turning the element into a flex container." },

  // Section 3 expansion questions (Ch 13 - 18)
  { id: 141, chapter: 13, q: "Which prefix applies styles when an element receives keyboard or click focus?", options: ["hover:", "focus:", "active:", "target:"], answer: 1, explain: "focus: applies utility styles when an element gains focus." },
  { id: 142, chapter: 13, q: "What does focus-within: do?", options: ["Styles an element when it or any of its descendants has focus", "Styles an element only when double-clicked", "Styles an element when focused by mouse only", "Styles child elements when parent is hovered"], answer: 0, explain: "focus-within: applies when the element itself or any element inside it receives focus." },
  { id: 143, chapter: 14, q: "What is the minimum width for Tailwind's xl breakpoint?", options: ["1024px", "1280px", "1440px", "1536px"], answer: 1, explain: "The xl breakpoint triggers at min-width 1280px." },
  { id: 144, chapter: 14, q: "In mobile-first design, what screen sizes does text-base md:text-xl affect?", options: ["text-xl on mobile, text-base on medium screens", "text-base on mobile (<768px), text-xl on 768px and up", "text-xl only on desktop screens above 1280px", "text-base on desktop, text-xl on mobile"], answer: 1, explain: "text-base sets font size on mobile up to 767px; md:text-xl overrides it to text-xl at 768px and wider." },
  { id: 145, chapter: 15, q: "In dark mode, how do you set background to slate-900 while keeping light background white?", options: ["bg-white dark:bg-slate-900", "bg-slate-900 dark:bg-white", "dark(bg-slate-900)", "theme-dark:bg-slate-900"], answer: 0, explain: "bg-white sets the default light background, and dark:bg-slate-900 overrides it in dark mode." },
  { id: 146, chapter: 15, q: "Which Tailwind config property switches dark mode from OS media query to HTML class strategy?", options: ["darkMode: 'class'", "theme.darkMode: true", "darkMode: 'media'", "darkStrategy: 'html'"], answer: 0, explain: "Setting darkMode: 'class' in tailwind.config.js enables class-based dark mode toggling." },
  { id: 147, chapter: 16, q: "Which class makes a transition take 500 milliseconds?", options: ["duration-500", "delay-500", "transition-500", "ease-500"], answer: 0, explain: "duration-500 sets transition duration to 500ms." },
  { id: 148, chapter: 16, q: "Which animation class creates a gentle fading pulsation?", options: ["animate-spin", "animate-ping", "animate-pulse", "animate-bounce"], answer: 2, explain: "animate-pulse makes an element smoothly fade in and out repeatedly." },
  { id: 149, chapter: 17, q: "Which class flips an element horizontally?", options: ["-scale-x-100", "rotate-180", "flip-x", "skew-x-180"], answer: 0, explain: "-scale-x-100 mirrors an element horizontally." },
  { id: 150, chapter: 18, q: "What is the key difference between opacity-0 and pointer-events-none?", options: ["opacity-0 hides elements visually, while pointer-events-none lets mouse clicks pass through", "opacity-0 removes elements from layout while pointer-events-none hides text", "Both do the exact same thing", "pointer-events-none is deprecated in Tailwind 3"], answer: 0, explain: "opacity-0 renders an element invisible but still clickable; pointer-events-none disables interaction so clicks pass through." },


  // SECTION 4: CHAPTERS 19 - 25 (40 Questions total)
  // 19. Positioning
  { id: 91, chapter: 19, q: "Which position value is the default for every element?", options: ["relative", "static", "absolute", "fixed"], answer: 1, explain: "static is the default positioning, following the normal document flow." },
  { id: 92, chapter: 19, q: "Which position type keeps an element fixed on screen even while scrolling?", options: ["relative", "sticky", "fixed", "static"], answer: 2, explain: "fixed positioning keeps the element in place relative to the viewport even during scrolling." },
  { id: 93, chapter: 19, q: "Which position type scrolls normally until it hits a threshold, then sticks in place?", options: ["absolute", "sticky", "fixed", "relative"], answer: 1, explain: "sticky elements scroll normally until reaching a defined threshold, then stick." },
  { id: 94, chapter: 19, q: "Which class makes an element fill its parent completely (top/right/bottom/left all 0)?", options: ["inset-0", "absolute-full", "fill-parent", "cover-0"], answer: 0, explain: "inset-0 sets top, right, bottom, and left all to 0, filling the positioned parent." },
  { id: 95, chapter: 19, q: "Absolute positioning places an element relative to what?", options: ["The browser viewport always", "The nearest positioned ancestor", "Its immediate sibling", "The document body only"], answer: 1, explain: "An absolutely positioned element is placed relative to its nearest ancestor that has a position set (e.g. relative)." },

  // 20. Z-Index & Overflow
  { id: 96, chapter: 20, q: "Among the listed z-index classes, which puts an element on the topmost layer?", options: ["z-10", "z-20", "z-40", "z-50"], answer: 3, explain: "Of the listed values (z-0 through z-50), z-50 is the highest and sits on top." },
  { id: 97, chapter: 20, q: "Which overflow class always shows a scrollbar, even if content fits?", options: ["overflow-auto", "overflow-hidden", "overflow-scroll", "overflow-visible"], answer: 2, explain: "overflow-scroll always displays a scrollbar, regardless of whether the content overflows." },
  { id: 98, chapter: 20, q: "Which overflow class hides any content that extends outside the box?", options: ["overflow-visible", "overflow-hidden", "overflow-auto", "overflow-clip-none"], answer: 1, explain: "overflow-hidden clips and hides content that overflows the container's bounds." },
  { id: 99, chapter: 20, q: "Which class enables horizontal scrolling only?", options: ["overflow-y-auto", "overflow-x-auto", "overflow-auto", "overflow-scroll-x"], answer: 1, explain: "overflow-x-auto adds a scrollbar for horizontal overflow only." },

  // 21. Custom Configuration
  { id: 100, chapter: 21, q: "Which file lets you customize Tailwind's default design system?", options: ["postcss.config.js", "tailwind.config.js", "package.json", "input.css"], answer: 1, explain: "tailwind.config.js is where you customize colors, spacing, fonts, breakpoints, and more." },
  { id: 101, chapter: 21, q: "What effect does using theme.extend have on Tailwind's default values?", options: ["It replaces all defaults", "It keeps all defaults and adds new values", "It disables all defaults", "It only affects colors"], answer: 1, explain: "extend keeps every default Tailwind value and simply adds your custom ones alongside them." },
  { id: 102, chapter: 21, q: "What happens if you define values under 'theme' directly (without 'extend')?", options: ["Nothing changes", "It merges with the defaults", "It replaces all the default values", "It only applies to that one file"], answer: 2, explain: "Defining values directly under theme (skipping extend) removes and replaces Tailwind's defaults entirely." },
  { id: 103, chapter: 21, q: "Where would you add a custom color named 'brand' so it keeps Tailwind's defaults intact?", options: ["theme.colors", "theme.extend.colors", "plugins.colors", "content.colors"], answer: 1, explain: "Adding it under theme.extend.colors keeps all default colors and adds 'brand' alongside them." },
  { id: 104, chapter: 21, q: "In the guide's example, what generates a usable class like font-heading?", options: ["A custom plugin", "A custom fontFamily entry under theme.extend", "The @apply directive", "A content path change"], answer: 1, explain: "Adding a 'heading' key under theme.extend.fontFamily makes font-heading available as a class." },

  // 22. Reusing Styles with @apply
  { id: 105, chapter: 22, q: "What does @apply let you do?", options: ["Add a plugin dynamically", "Extract repeated utility classes into a reusable CSS class", "Apply dark mode automatically", "Merge two config files"], answer: 1, explain: "@apply lets you bundle a group of utility classes into a single reusable class, like .btn-primary." },
  { id: 106, chapter: 22, q: "Inside which directive block should custom component classes using @apply typically be defined?", options: ["@layer utilities", "@layer base", "@layer components", "@layer plugins"], answer: 2, explain: "The guide defines reusable classes like .btn-primary and .card inside an @layer components block." },
  { id: 107, chapter: 22, q: "According to the guide's tip, how often should @apply be used?", options: ["As often as possible, replacing all utilities", "Sparingly, only for components repeated many times", "Only inside JavaScript files", "Never, it's deprecated"], answer: 1, explain: "The guide advises using @apply sparingly, since Tailwind's whole point is utility classes." },
  { id: 108, chapter: 22, q: "Where are @apply rules written?", options: ["Directly in HTML class attributes", "In a CSS file (like input.css)", "In tailwind.config.js", "In package.json"], answer: 1, explain: "@apply rules are written inside a CSS file, such as input.css, not in HTML." },

  // 23. Tailwind Plugins
  { id: 109, chapter: 23, q: "Which official plugin automatically makes article/blog content look beautifully styled?", options: ["@tailwindcss/forms", "@tailwindcss/typography", "@tailwindcss/aspect-ratio", "@tailwindcss/container-queries"], answer: 1, explain: "The Typography plugin adds the 'prose' classes that automatically style article-like content." },
  { id: 110, chapter: 23, q: "Which plugin resets default browser form styling for consistent form design?", options: ["@tailwindcss/typography", "@tailwindcss/forms", "@tailwindcss/line-clamp", "@tailwindcss/aspect-ratio"], answer: 1, explain: "The Forms plugin resets browser default form styles so you can style forms consistently." },
  { id: 111, chapter: 23, q: "Which class gives an element a 16:9 aspect ratio?", options: ["aspect-square", "aspect-video", "aspect-wide", "aspect-16-9"], answer: 1, explain: "aspect-video applies a 16:9 ratio, ideal for video embeds." },
  { id: 112, chapter: 23, q: "Which class gives an element a 1:1 (square) aspect ratio?", options: ["aspect-square", "aspect-video", "aspect-even", "aspect-1"], answer: 0, explain: "aspect-square applies a 1:1 aspect ratio." },

  // 24. Real Project — Landing Page
  { id: 113, chapter: 24, q: "In the Luminary landing page example, which classes make the navbar stick to the top above other content?", options: ["relative top-0", "fixed top-0 ... z-50", "sticky bottom-0", "absolute inset-0"], answer: 1, explain: "fixed top-0 left-0 right-0 with a high z-index (z-50) keeps the navbar pinned above scrolling content." },
  { id: 114, chapter: 24, q: "What effect does bg-white/80 combined with backdrop-blur-md create on the navbar?", options: ["A solid opaque navbar", "A frosted-glass translucent navbar", "A fully transparent, blur-free navbar", "A dark-mode-only navbar"], answer: 1, explain: "Partial opacity (/80) plus backdrop-blur-md produces a frosted-glass translucent effect." },
  { id: 115, chapter: 24, q: "Which classes create the gradient text effect on 'not harder' in the hero headline?", options: ["text-white bg-blue-600", "text-transparent bg-clip-text bg-gradient-to-r", "text-gradient bg-blue-600", "bg-clip-border text-blue-600"], answer: 1, explain: "Making the text transparent and clipping a gradient background to the text shape creates gradient text." },

  // 25. Tips, Tricks & Best Practices
  { id: 116, chapter: 25, q: "Which VS Code extension gives autocomplete and hover previews for Tailwind classes?", options: ["Prettier", "Tailwind CSS IntelliSense", "ESLint", "Live Server"], answer: 1, explain: "The Tailwind CSS IntelliSense extension provides autocomplete, hover previews, and error highlighting." },
  { id: 117, chapter: 25, q: "Which tool automatically sorts your Tailwind classes into a consistent order?", options: ["tailwind-sort", "prettier-plugin-tailwindcss", "eslint-plugin-tailwind", "postcss-sort-classes"], answer: 1, explain: "The prettier-plugin-tailwindcss package automatically sorts Tailwind classes on save." },
  { id: 118, chapter: 25, q: "How do you apply a one-off custom value that isn't in Tailwind's default scale?", options: ["Use a !important flag", "Use square brackets, e.g. w-[350px]", "Write inline CSS only", "Edit tailwind.config.js every time"], answer: 1, explain: "Arbitrary values in square brackets, like w-[350px] or bg-[#ff6b6b], let you use one-off custom values." },
  { id: 119, chapter: 25, q: "According to Tip 5 ('Don't Over-Engineer'), what should you generally avoid?", options: ["Using utility classes directly", "Building a complex component system you don't need", "Testing responsive design", "Using the Tailwind docs"], answer: 1, explain: "The guide warns against over-engineering — most of the time, writing utility classes directly is enough." },
  { id: 120, chapter: 25, q: "Which class combination centers content both vertically and horizontally across the full screen?", options: ["flex items-center justify-center min-h-screen", "grid place-self-center", "text-center mx-auto", "absolute inset-0 flex"], answer: 0, explain: "flex items-center justify-center min-h-screen is the go-to pattern for full-screen centering." },

  // Section 4 expansion questions (Ch 19 - 25)
  { id: 151, chapter: 19, q: "Which position value is relative to an element's normal position in document flow?", options: ["static", "relative", "absolute", "fixed"], answer: 1, explain: "relative keeps the element in normal flow while serving as a positioning context for absolute children." },
  { id: 152, chapter: 19, q: "Which class centers an absolute element horizontally when paired with left-1/2?", options: ["-translate-x-1/2", "-translate-y-1/2", "mx-auto", "items-center"], answer: 0, explain: "left-1/2 -translate-x-1/2 is the classic utility combo to perfectly center an absolute element horizontally." },
  { id: 153, chapter: 20, q: "Which class prevents text from wrapping onto a new line?", options: ["whitespace-nowrap", "overflow-hidden", "truncate", "text-clip"], answer: 0, explain: "whitespace-nowrap forces text to stay on a single line." },
  { id: 154, chapter: 20, q: "Which combination truncates overflowing text with an ellipsis (...)?", options: ["truncate", "text-ellipsis overflow-hidden whitespace-nowrap", "Both of the above are valid", "whitespace-normal"], answer: 2, explain: "truncate is a convenience utility that sets overflow-hidden, text-ellipsis, and whitespace-nowrap." },
  { id: 155, chapter: 21, q: "Which array in tailwind.config.js tells Tailwind where your HTML and template files are located?", options: ["files", "content", "templates", "purge"], answer: 1, explain: "The content array lists paths to all files containing Tailwind class names." },
  { id: 156, chapter: 21, q: "How do you add custom spacing values while retaining all default spacing scale values?", options: ["Inside theme.spacing", "Inside theme.extend.spacing", "Inside plugins.spacing", "Inside corePlugins.spacing"], answer: 1, explain: "Placing additions under theme.extend retains all built-in defaults." },
  { id: 157, chapter: 22, q: "Why should you avoid overuse of @apply for custom component classes?", options: ["It increases CSS bundle size and loses key benefits of utility-first CSS", "It makes JavaScript run slower", "It breaks Tailwind's dark mode", "It causes HTML to render invalidly"], answer: 0, explain: "Overusing @apply reproduces traditional CSS maintainability problems and grows your CSS bundle." },
  { id: 158, chapter: 23, q: "Which utility class provided by @tailwindcss/typography auto-styles markdown/article text?", options: ["prose", "article", "typography", "markdown"], answer: 0, explain: "The prose class adds beautiful typographic defaults to raw HTML or markdown." },
  { id: 159, chapter: 24, q: "Which class creates a translucent backdrop filter effect?", options: ["backdrop-blur-md", "blur-md", "opacity-50", "filter-blur"], answer: 0, explain: "backdrop-blur-md applies a backdrop blur filter to content behind the element." },
  { id: 160, chapter: 25, q: "Which arbitrary value class applies an exact custom top margin of 17px?", options: ["mt-[17px]", "mt-17px", "mt-(17px)", "margin-top-[17px]"], answer: 0, explain: "Tailwind's arbitrary value syntax uses square brackets, e.g. mt-[17px]." },
];
