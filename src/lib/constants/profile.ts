export const PROFILE_INFO = {
  logo: 'Wenjun.w',
  displayName: "Wenjun Wu",
  email: "wunrry@gmail.com",
  cv: "/docs/cv.pdf",
  // slides: "/docs/pivot.pdf",

  about: `
I currently hold dual roles as a **Data Scientist** at Tencent Inc. and a **Researcher** at Galaxy AI Research, with prior industry experience at Baidu Inc.  


&nbsp;


In an academic-industry collaboration capacity, I have been working on a **national-level TBM (Tunnel Boring Machine) research project**; a paper derived from this collaborative work has been submitted and is currently under peer review. Additionally, I have authored over five technical reports that were internally published at Tencent, covering key technical insights and practical implementations relevant to my research domain.    


&nbsp;


Presently, I am seeking admission to **Master's programs for the Spring 2026 intake**. My core research interests focus on the **theory and application of Reinforcement Learning (RL) and Embodied AI**, with a specific emphasis on the design and development of multi-agent systems tailored for Physical AI scenarios—aiming to bridge algorithmic advancements with real-world physical interaction demands.  


&nbsp;


I remain proactive in exploring potential collaborative initiatives and research partnerships. Should you wish to discuss research directions, project collaborations, or my application further, please feel free to contact me via email at wunrry@gmail.com.
`,

  news: `

*[2025.08]* : I gave a talk with a professor from Kyoto University at an internal lecture of Galaxy AI Research [📑 [Slides](/docs/pivot.pdf)].


*[2024.10]* : I have participated in the national-level Tunnel Boring Machine (TBM) research project.

*[2024.07]* : Published an industry [research report](https://t.zsxq.com/XK31S) on the development of LLM-related positions at Galaxy AI Research.

*[2024.07]* : Published a [technical report](https://t.zsxq.com/eQTFD) on LLM evaluation at Galaxy AI Research.


`,
  papers: `
  **On-Going Projects**  : "MATAgent: A Multi-Agent Collaborative Reasoning Framework for TBM Jam Disaster Prediction and Diagnosis." 

As a key contributor to a major academic-industrial partnership on a national-level project, I am developing an AI system to 
prevent catastrophic machine jams—events that can derail multi-billion dollar infrastructure projects. To tackle this, I worked 
with a massive, proprietary industrial dataset, encompassing years of real-world operations from a diverse fleet of TBMs across 
numerous national tunnels. This rich archive includes everything from raw sensor readings and engineers' daily logs to on-site photographs. 
The core challenge is that standard AI can spot unusual data patterns but can't explain *why* they are happening in the physical world, 
making their alerts untrustworthy and vague for engineers.  
My primary innovation was to solve this by teaching the AI what it fundamentally lacked: **physical common sense**. 
I designed a framework that translates the TBM's complex engineering schematics into a form of intuition the AI can use. 
This breakthrough allows the system to move beyond simple pattern-matching and instead conduct intelligent investigations. 
When it detects an anomaly, it can now reason about the potential physical causes and connect the dots between abstract data and the specific hardware at risk—much like 
a seasoned engineer would—to systematically pinpoint the true root of a problem.  
The result is an AI that moves beyond abstract predictions to provide clear, actionable diagnostics that engineers can trust. When tested against our massive, 
real-world dataset, MATAgent demonstrated a dramatic leap in practical performance. It proved **significantly more accurate at both diagnosing the type of fault and 
pinpointing the exact failing component** compared to other advanced AI methods, pioneering a new path for building intelligent systems that 
can operate safely and effectively in high-stakes physical environments.
`,
  talks: `
*[2025.08.30]* : **From Data to Agents: Industry Experience and Research Reflections**,  [📑 [Slides](/docs/pivot.pdf)]

`,


  experiences: `
**Tencent Inc.** (2023 - Present)  
Data Science Leader, Architecture Group, Social Product Department  

**Galaxy AI Research** (2024 - Present)  
Researcher, Worked on National TBM Project  

**Baidu Inc.** (2022 - 2023)  
Data Analyst, Data Middle Office, Global Business Department  

**CSCEC Inc.** (2020 - 2021)  
Technical Engineer, Shanghai Business, the Third Bureau  
`,
  education: `
Undergraduate Student, Hebei University of Technology, Sep. 2016 - Jul. 2020
`,
  misc: `
I love sports, especially basketball and fitness. Whether I'm shooting hoops on the court or working out in the gym, I always feel energized and fulfilled.
`,

} as const;
