
Basically, there was an tutorial for making website using google stitch and Anti gravity combined to make and website.

For learning i used this : https://www.youtube.com/watch?v=SK_sSNyJ758

### What is google stitch ? 

Google stitch is an AI-powered UI design tool from Google Labs. It generates responsive user interfaces and frontend for web and mobile apps from text prompts, sketches or wire frames. 

I went with stitch because i am not very creative person in terms of building a good looking site. 

### What is anti gravity ?

Google Anti gravity is an AI-powered integration development environment (IDE) from google. It shifts software development to an "agent-first" approach, where autonomous AI agents powered by Gemini 3 models . which handle planning, coding, debugging and testing complex tasks instead of manual line by line coding.

### Tutorial Info's

Go to google stitch website : https://stitch.withgoogle.com/u/1/?pli=1, As we are going to build a website. switch to web icon. We also have an option to upload files or give url to replicate the design.

![[Pasted image 20260225133210.png]]

If you want to get inspiration for design you can use this site : https://dribbble.com/ or you can use this website also : https://land-book.com/

You can download, if you like and upload to the Google Stitch. After uploading to the Google Stitch, this is the prompt given : 

```
Based on this website right here for this landing page, which is something that I built, I want you to create a UI mock-up for this entire website in the canvas. I want you to create one for the website view for the horizontal view and one for the vertical view for the mobile view, okay.
```

After running this prompt with design, It will give you Desktop design and Mobile design.

![[Pasted image 20260225134158.png]]

The above image is basically, how it is going to work. Stitch MCP exposes functions to Anti gravity and Stitch skills are plug-and-play github modules installed in Anti gravity providing specialised agent abilities.

Open Antigravity and open MCP servers,

![[Pasted image 20260225135144.png]]

The type stitch and then install it. It would ask you for an API key for Stitch. Go to this website(https://stitch.withgoogle.com/settings) and generate one and give. 

Now, we have to install Stitch skills. This is the website : https://github.com/google-labs-code/stitch-skills. You can check out the functions available. Just go to your antigravity terminal and put this (it will list all the skills) :
```
npx skills add google-labs-code/stitch-skills --list
```

If you want to install certain skills : 
```
npx skills add google-labs-code/stitch-skills --skill react:components --global
```

There is something called landing page skill, i found something in the MCP market 

```
npx skillfish add taiyousan15/taisun_agent lp-design
```

After this, he is add the skill as a file to the antigravity prompt box with an prompt : 

```
Right simply, I want you to take a look at our current landing page and try to evaluate it. Try to identify if there are any problems because currently we're trying to give a redesign of our current landing page for our applications. Make sure to read through it and make sure to look at it and try to identify if there are any gaps.
```

After running this it will give an evaluation.md, which we are going to use with the enhance-prompt skill to basically improve the prompt to send to stitch. Prompt for this : 
```
based on the current evaluation for the current re-design of our landing page, can you use the enhance prompt scale to basically enhance the prompts that we've going to pass to Stitch to basically help us to redesign the current landing page based on this evaluation gaps that are missing, right.
```

It will give a detailed prompt. We will give another prompt to make the visuals. prompt:
```
can you take that and, using the stitch MCP, basically create a design 'bookkeepers.cloud' using this prompt and of course put as much information as possible, this is our landing page website. You can use that to pass it to the prompt as well for it to look at the site to see the visuals. If it doesn't have visual, go ahead.
```

This will generate the design in the stitch website, you can review them. Then after review them you can add prompt to add the design to the landing page. You make sure to add the react-components skill to make it fit perfectly inside. for the next prompt you add evalution.md and the react component skill.
```
Evaluation.md I approve the current design for what we have for the current projects. Can you be able to add this into out landing page right now? I'm not sure where it is going to be; maybe below the hero section but i want you to take a look at the current evaluation, try to identify where we should put this component, right where should that be, and be able to plan and be able to add that in. react-components Based on the skill can you make sure to use the skill here to take or translate what we have in out stitch in to our react components inside of our current landing page?
```


## My Website

I am trying to make myself an website. It is going to be a tech blog cum projects portfolio page. Initially, i had an plan to make this. I thought let me vibe code the whole website instead of doing it from scratch.

### Requirements 

- It should have a landing page
- It should have two sub pages (Blog and Projects)
	- Blog and Project sub pages should be like a newsletter format.
- There should be a way to subscribe to the blog
- It should only be dark

### Finalised Stuff

I am using Claude Opus 4.6 for all these prompts.
First, generate the designs through google stitch. Then go to antigravity terminal and put this command: 
```
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

This will setup the project, then go to the agent and enter this prompt : 
```
I have a fresh Next.js project set up with TypeScript, Tailwind CSS, and next-themes. I need you to restructure the folder to match this architecture for a personal tech portfolio and blog website for a Data Engineer:

src/
├── app/
│   ├── layout.tsx         # Main layout with ThemeProvider integration
│   ├── page.tsx           # Landing Page
│   ├── blog/
│   │   └── page.tsx       # Blog listing page in newsletter style
│   └── projects/
│       └── page.tsx       # Projects listing page in newsletter style
├── components/
│   ├── ui/                # Base UI elements like buttons and cards
│   ├── Header.tsx         # Navigation bar with dark/light theme toggle using lucide-react
│   └── Footer.tsx         # Footer with social links
└── lib/                   # Utility functions and shared data

Please do the following:
1. Create all the missing folders and files based on the structure above
2. Set up next-themes ThemeProvider in layout.tsx and wrap the entire app with it
3. Build the Header component with navigation links to /, /blog and /projects and a working dark/light mode toggle using lucide-react icons
4. Build a basic Footer component with placeholder social links
5. Add placeholder content to page.tsx, blog/page.tsx and projects/page.tsx so all three pages render without errors
6. Make sure everything compiles cleanly with npm run build
```


After this once try to check `npm run dev`, If it works congrats.

Now, we install the lp-design and install in Antigravity. Put this command in the terminal : 
```
npx skillfish add taiyousan15/taisun_agent lp-design
```

Now, in the agent prompt add the lp-design skill and put this prompt : 
```
Take a look at our current Next.js project for a Data Engineer personal tech portfolio and blog website. We have three pages — landing page, blog and projects. Evaluate each page, identify any design gaps or missing sections compared to a modern portfolio, and generate an evaluation.md file summarising all findings.
```

The above prompt will generate the evaluation.md, which really shocked me got so much insight. Then attach the evaluation.md and enter this prompt : 
```
Based on the evaluation.md, use the Stitch MCP to pull in the designs we created in Google Stitch for our Data Engineer portfolio website. The design covers the landing page, blog page and projects page in both desktop and mobile views with dark and light theme variants. Use the evaluation gaps to guide which parts of the Stitch design to prioritise.
```

Then, install this skill also : 
```
npx skills add google-labs-code/stitch-skills --skill react:components --global
```

Attach evaluation.md and react-components skill and run the prompt : 
```
I approve the Stitch designs. Using the react-components skill, translate the Stitch designs for the landing page, blog page and projects page into actual React components inside our existing Next.js project. Follow these rules:

1. Use our existing Tailwind CSS and next-themes setup for dark/light mode
2. Use lucide-react for any icons
3. Use the cn() utility from lib/utils.ts for class merging
4. Place new components inside src/components/ and ui elements inside src/components/ui/
5. Update app/page.tsx, app/blog/page.tsx and app/projects/page.tsx to use the new components
6. Make sure it compiles cleanly with npm run build
```

Re-run use the skills and mcp till your desired output is reached.

The base website is done but i feel it is still has some basic stuff left to be done. There are still some stuff to be done yet. What i think we need :
- Newsletter subscription module
- Blog and Project Structure
- Correct Content in the website
- Logo Addition
- Link addition

The above are in context to the website, we do also need these to be done : 
- Deployment
- CI/CD

### Some UI websites

- https://21st.dev/community/components
- https://reactbits.dev/get-started/index

### What we did today (Session 2)

In this session, we took the base website and refined it with custom UI components from 21st.dev and reactbits. Here are the prompts and components used:

#### 1. Spline 3D Hero Section

Replaced the flat hero with an interactive 3D Spline scene. Component from 21st.dev:

```
You are given a task to integrate an existing React component in the codebase...
[splite.tsx component + spotlight dependency + shadcn/card]
Install: @splinetool/react-spline, @splinetool/runtime, framer-motion
```

Prompt to Antigravity:
```
replace this for the top landing page
```

This gave us a split-screen hero — headline + CTAs on the left, interactive 3D robot on the right, with a blue spotlight glow effect.

#### 2. Animated Pill Navigation (NavHeader)

Replaced static nav links with an animated hover-cursor pill navigation. Component from reactbits:

```
You are given a task to integrate an existing React component...
[nav-header.tsx with framer-motion cursor animation]
Install: framer-motion
```

Prompt to Antigravity:
```
for header in all the pages
```

This gives us a rounded pill nav bar where a blue cursor slides to whichever link you hover, using spring physics.

#### 3. Blog Article Cards (Landing Page)

Added rich article cards with arrow animation on the landing page. Component from 21st.dev:

```
You are given a task to integrate an existing React component...
[blogs.tsx with ArrowRight animation + Image component]
```

Prompt to Antigravity:
```
Blog and project preview in landing page
```

#### 4. ArticleCard (Blog & Projects Pages)

Replaced the basic card layout with a premium blog-post-card component. From 21st.dev:

```
You are given a task to integrate an existing React component...
[blog-post-card.tsx with shadcn Card/Badge using class-variance-authority]
Install: class-variance-authority
```

Prompt to Antigravity:
```
inside the blog page and project page
```

#### 5. Layout Refinements

After the components were in, we refined the layout:

```
do the same for the landing page also like the before and in the blog and projects page remove the subsections like latest, engineering, tutorial such in both pages and add search on blog. Also add for blog and project page add numbers down to shift and see other blogs
```

This removed filter tabs, added search bars to both blog and projects, and kept numbered pagination.

#### 6. Coming Soon + Content Folders

Cleared all mock data and set up markdown content infrastructure:

```
remove all the blogs and project and put coming soon also make folders where i can add md files as blogs and projects the same. make sure you make some room for images for .md files
```

This created:
- `content/blog/` — add `.md` blog posts here
- `content/projects/` — add `.md` project posts here
- `public/images/blog/` and `public/images/projects/` — for images
- `_template.md` files with frontmatter examples
- "Coming Soon" placeholder on all pages with 🚀 icon

#### 7. Newsletter + Social Links

Moved newsletter subscription to the top of the site and added real social links:

```
Newsletter subscription module - How does it actively store and send mails regarding the new blogs and project - I need the newsletter option to be in the top of the website, instead of down

in/ntejha -- linkedin
@ntejha04 - twitter (X)
dev.tejha@gmail.com - email
```

#### 8. Final Cleanup

```
remove the resources section in the landing page below
when they press contact me, it has to go to gmail
then in empty placeholder of subscribe dont show my dev.tejha
```

### Still TODO

- [x] Newsletter backend (connect to Buttondown / Resend / ConvertKit)
- [ ] Deployment (Vercel / Cloudflare Pages)
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Logo / favicon
- [ ] Markdown content reader (gray-matter + next-mdx-remote)
- [ ] Write actual blog posts and project pages
- [ ] SEO meta tags per page
- [ ] Analytics (Plausible / Umami)
