A prompt is the text you input to a large language model (LLM), used to explicitly tell the model what problem you want to solve or what task you want to complete. It is also the foundation for the LLM to understand user needs and generate relevant, accurate answers or content. To help you use LLMs more efficiently, this tutorial provides a series of practical techniques to help you design and optimize prompts.

## Design **prompts**

### **Build clear and specific prompts**

Imagine assigning a task to your colleague with just one sentence to describe the requirements. The task outcome might be far from your expectations. However, if you provide more reference information such as clear purpose, suggested direction, and execution strategy, they are more likely to complete the task to a high standard.

The same applies when using LLMs. The clearer, and more specific your task description (prompt) is, the more likely the LLM's performance will meet your expectations.

**Note**

Building a clear and specific prompt is the most important step in fully leveraging the capabilities of LLMs.

**Vague prompt**

**Clear and specific prompt**

I want to promote my company's new product. My company name is Bailian, and the new product name is Zephyr Z9, which is a lightweight portable phone. Help me create a Weibo post.

Please design an eye-catching Weibo promotional post for the "Zephyr Z9" lightweight portable phone newly launched by my company "Bailian".

The content should highlight the unique selling points of Zephyr Z9, such as its ultra-thin design, high-performance configuration, and user convenience, while incorporating creative elements to enhance audience interest and willingness to interact.

Remember to mention the Bailian brand reputation, spark audience curiosity, and guide them to explore more product information or make a direct purchase.

The post should be concise and powerful, conforming to the style and character limit of the Weibo platform, suitable for social media distribution.

You are a senior PHP programming expert who has received a clear development task. The requirement is: ${require}. Please use PHP language to describe in detail an algorithm or method to implement this requirement, and consider possible edge cases and error handling that may be encountered during implementation, along with how to meet this requirement with efficient and secure code.

As an experienced PHP programming expert, your specific development task is: ${require}.

Please use your professional knowledge to elaborate in detail on an efficient algorithm or methodology using PHP to implement this task requirement.

In your description, please be sure to cover the following points:

\- Specific implementation steps, including the selection and design of necessary functions, classes, and data structures.

\- Boundary condition analysis, identifying and explaining potential edge cases and how to properly handle these situations.

\- Error handling mechanisms, describing how to implement robust error detection and exception handling logic in the code to ensure program stability.

\- Security considerations, discussing possible security threats and recommended preventive measures to ensure data security and privacy protection during code execution.

\- Performance optimization suggestions, proposing methods to improve code execution efficiency, including but not limited to algorithm optimization, resource management, and caching strategies.

Please ensure that your answer is not only technically accurate but also clear and easy to understand, so that other developers can quickly grasp and apply it to actual projects.

### **Use prompt frameworks**

To systematically provide clear background and purpose to LLMs, we recommend using a **prompt framework** to standardize your prompts. It helps you design prompt structures conveniently and quickly. The template fully considers various aspects that affect the effectiveness and relevance of LLM outputs, significantly improving model performance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9171324771/CAEQQhiBgMCLuM3KwBkiIDZhYThlZjE3NGI3NzQ3ZDliODMwODViZmVjOWE0MGFm4577910_20240815141024.521.svg)

It contains the following elements:

-   **Context:** The background information that are closely related to the task. This helps the LLM understand the specific scenario, ensuring the generated response is relevant.
    
-   **Objective:** Clearly state the specific task you expect the LLM to complete. Clear and precise instructions can guide the LLM to focus on the task, improving the effectiveness of the output.
    
-   **Style:** Specify the writing style you want the LLM to output, which can be the style of a specific celebrity, a specific school, or a certain type of expert.
    
-   **Tone:** Define the tone the output content should have, such as formal, humorous, warm, or caring, to suit different usage scenarios and purposes.
    
-   **Audience:** Clearly indicate the target reader group for the content, whether they are professionals, beginners, or children, so the LLM can adjust the language and content depth to better meet the audience's needs.
    
-   **Response:** Specify the exact form of the output content to ensure the LLM provides results that directly meet the needs of subsequent applications, such as lists, JSON data formats, or professional analysis reports.
    

**Without prompt framework**

**With prompt framework**

Prompt

I want to promote my company's new product. My company name is Bailian, and the new product name is Zephyr Z9, which is a lightweight portable phone. Help me create a Weibo post that is concise yet impactful.

#Background#

I want to advertise my company's new product. My company is called Bailian, and the product is called Bailian Zephyr Z9, a lightweight portable phone.

#Purpose#

Create a Weibo post for me (limit: 500 words) aimed at making people interested in clicking the product link to make a purchase.

#Style#

Follow the writing style of successful companies like Blackberry for similar product advertisements.

#Tone#

Persuasive

#Audience#

My company's audience on Weibo is typically younger generation. Customize your post to ensure that people who like digital products can quickly notice your post.

#Outputs#

A post on Weibo that is concise and impactful.

Output

\[Light Up the Future, Wind and Cloud Rising\]

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3570372571/p850289.png)Bailian new product, Zephyr Z9 launches with a bang!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6693440371/p850290.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850311.png)Join hands with Zephyr Z9, let technology and lightness go together. This is not just a phone, it's your lightweight companion for exploring the world. Thickness challenges limits, design leads fashion, with Z9 in hand, inspiration bursts forth at any time.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6693440371/p850323.png)Performance beyond imagination, equipped with ultra-fast processor, smooth as the wind, whether it's work sprinting or gaming expeditions, Zephyr Z9 is your first choice ride. Strong battery life keeps every passion burning!

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6693440371/p850326.png)Capture every moment of life, Z9 camera innovatively upgraded, night scenes, portraits, wide-angle, every shot is a cover masterpiece, making beautiful memories never fade.

Trees lightweight, focus on experience. #ModelStudioZephyrZ9#, born for the extraordinary, coming for you. Embrace the future now and start your own lightweight technology era!

Official website: \[www.bailian.com/Z9\] (please replace with actual URL)

#LightweightFlagship #NewTechFashion #PalmArtwork

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850302.png) \[Exclusive Reveal\] Bailian Zephyr Z9, the disruptor in the lightweight world is here!

In this fast-paced era, every gram of weight is a burden on freedom. Model Studio understands this well and has meticulously crafted the Zephyr Z9 - a phone born for those seeking the perfect balance between ultimate lightness and powerful performance! The floating-like feel is unforgettable with a single touch!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850307.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850308.png) \[Ultra-thin design, at your fingertips\]

Zephyr Z9 redefines "lightweight" with its astonishing slim body. With just X.X mm thickness, it slides easily into your pocket, making it the perfect companion for your daily outings. Carrying it is like bringing the future as you navigate through the urban jungle!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3570372571/p850317.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850316.png) \[Top configuration, performance beast\]

Don't be fooled by its lightness, its core is all solid strength! Equipped with the latest XXXX processor, its smoothness is off the charts. Whether it's multitasking or large games, Z9 handles them with ease, keeping you at the forefront of technology at all times.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850320.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850330.png) \[Photography master, recording life\]

Equipped with XXMP super light-sensitive lens, clear even at night. AI intelligent scene recognition makes every photo comparable to a masterpiece. With Zephyr Z9, record every extraordinary moment and make your social media feed stand out.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850331.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6693440371/p850333.png) \[Worry-free battery life, full of energy\]

Small size, big energy! Zephyr Z9 has a built-in high-efficiency battery, paired with XXX fast charging technology, charge for a moment, accompany for a long time. Say goodbye to battery anxiety, your creativity and inspiration are no longer limited.⚡

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3570372571/p850334.png) \[Limited time benefits, don't miss out\]

The first 100 users who purchase through the link will enjoy a mysterious gift package! Including customized protective case, XXX membership annual card and many other great gifts, just for the distinguished you!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3570372571/p850335.png)

Act now and let the Model Studio Zephyr Z9 become your new partner in exploring the world! Click the link below to start a new era of lightness!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850336.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850339.png)\[Buy Model Studio Zephyr Z9 Now\] \[Product Link\]

#ModelStudioZephyrZ9 #LightweightFlagship #TechAesthetics #DigitalTrend #PerformanceBeast

Without the prompt framework, the LLM output, while performing adequately, appears too generalized and lacks necessary details and appeal to specific groups. When using the prompt framework, the framework not only reminds you to consider other aspects of the requirements, especially style, tone, and audience that are typically missing in general prompts, but also helps the LLM generate output that is more targeted towards younger groups, with more details and more engaging language expression.

**Note**

There are many types of prompt frameworks in practice. You can add or remove structural elements based on your task requirements. You can also observe the flexible application of this prompt framework in subsequent chapters of this tutorial.

## Optimize **prompts**

### **Tip 1: Provide output examples**

Providing examples of your expected output in the prompt can let the LLM "imitate" the standards, formats, concepts, grammar, and tone we require for the output. At the same time, providing examples can make the results of multiple outputs from the LLM more consistent, thereby stabilizing model performance.

**Without examples**

**With examples**

Prompt

#Background#

You are good at writing Xiaohongshu product recommendation posts and like to add rich emoji elements.

#Purpose#

Please generate a Xiaohongshu product recommendation post to promote Johnson hair dryer. The advantages of the hair dryer are: small size, high aesthetics, strong wind power, quick drying, and intelligent temperature control that doesn't damage hair.

#Audience#

Young people who like to pursue fashion, especially young women

#Outputs#

Xiaohongshu article format, full of emoji elements, concise but content-rich

#Background#

You are good at writing Xiaohongshu product recommendation posts and like to add rich emoji elements.

#Purpose#

Please generate a Xiaohongshu product recommendation post to promote Johnson hair dryer. The advantages of the hair dryer are: small size, high aesthetics, strong wind power, quick drying, and intelligent temperature control that doesn't damage hair.

#Audience#

Young people who like to pursue fashion, especially young women

#Outputs#

Xiaohongshu article format, full of emoji elements, concise but content-rich

#Tone and Style#

1.  I've personally tested +n good products + who is suitable and who benefits This secret makes your words super convincing! For example: I've personally tried many whitening miracles and finally found a treasure! In just two months, my skin became smooth and translucent, feeling like I'm floating on cloud nine~ This method is specially tailored for those who want to show off their experience, and can also accurately recommend products and help others avoid pitfalls!
    
2.  Problem appears + reveal the reason + ultimate solution This formula helps you share in a clear and orderly manner, with explosive content value! Case: Want silky hair? It's time for the big reveal! It turns out I've been missing a key step all along, until I met it! After switching to this shampoo, my hair improved significantly, getting that shine! This method is logically rigorous, not only sharing secrets but also guiding readers to find solutions to problems.
    
3.  Unique insights + in-depth analysis + clever recommendations This formula helps you naturally express your thoughts while warmly recommending products! Example: I think every girl should have something they truly love, making life wonderful. My journal has become my small happiness, and every time I pick up my pen, my happiness index soars! It helps you speak freely while inadvertently conveying your favorites, a win-win strategy!
    
4.  Personal experience + results showcase This formula makes your emotional expression vivid and touching! Scenario: Thinking back to the mosquito disaster on a summer night by the beach, the despair of being covered in red bumps, until I met my savior! Now, smooth skin lets me twirl my skirt, confidence returns! It makes your story come alive, sharing joy and gratitude, touching hearts!
    

Output

Title: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850340.png)Johnson Compact Magic Wind Machine, New Favorite for Quick Drying and Hair Protection![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850341.png)

Body:

Hey babies! Today I'm going to recommend a brilliant new star in the beauty world![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850342.png) - Johnson hair dryer! It's not just a tool, it's practically a portable hair salon![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3570372571/p850343.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850345.png)Compact size, travel essential ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850346.png)

First, its mini size directly hits my heart! Even with a full travel bag, it can be easily tucked in, doesn't take up space, style anywhere anytime![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850348.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3570372571/p850350.png) High aesthetics, fashionable street style ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850351.png)

Look at this design, it's practically a work of art! Whether it's minimalist white or premium pink, holding it makes you the coolest on the street! Phone? No, this is my new fashion accessory![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850354.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850355.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850356.png)Strong wind power, quick-drying magic ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850358.png)

Don't be fooled by its small size, the wind power is no joke! In a morning rush? Johnson helps you get your hairstyle done in 5 minutes, efficiency MAX!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850359.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850360.png)Dries quickly, protects hair ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850361.png)

Intelligent temperature control technology gently cares for each strand of your hair. Say goodbye to heat damage, leaving only smooth and glossy hair, each blow dry is like a salon treatment~![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850363.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850364.png)Intelligent temperature control, thoughtful choice ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850365.png)

It's not just the wind power that understands you, but also the temperature. It automatically adjusts the most suitable heat according to hair quality, protecting hair health, no fear of damage even with long-term use![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850367.png)

In short, the Johnson hair dryer is that little darling you can't put down! Hurry up and add it to your shopping cart to accelerate your beauty!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850368.png)

#JohnsonHairDryer #BeautyExpert #QuickHairCareSecrets

Tag your friends and let them feel this lightness and efficiency too!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850370.png)

Remember, taking care of yourself starts from the "head", Johnson and you together, radiate confident brilliance!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850372.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850375.png)Can a hair dryer also become a hair fashion item? Johnson's little powerhouse tells you the answer!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3570372571/p850377.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850379.png)Since I started using the![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850381.png)Johnson hair dryer![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850382.png), not only has my travel bag become lighter![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3570372571/p850384.png), but each blow dry has become an enjoyable time![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850385.png)! After using it a few times, my friends all complimented that my hair quality looks better by more than one level, as if I just came out of a salon![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3570372571/p850386.png). It's definitely the perfect companion for short trips or dorm life! Suitable for all babies pursuing efficient hair care~![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3570372571/p850387.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850390.png)Facing a wet waterfall of long hair that takes over half an hour each time?![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850395.png)Don't worry, Johnson's intelligent temperature control technology is here![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850397.png)! It can quickly dry every strand of hair, and although the wind power is strong, it doesn't damage hair. The secret lies in its ability to intelligently adjust temperature, protecting your hair from heat damage![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850398.png). From now on, quickly getting ready is no longer a dream!

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850399.png)I've always believed that good styling tools are a manifestation of beauty attitude![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850401.png). This high-aesthetic Johnson hair dryer is not just a tool, but a piece of art on your dressing table![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850402.png). Every time I use it to blow dry my hair, it's like upgrading the sense of ritual for my personal style. Why not treat yourself to such a small luxury, after all, a beautiful day starts from the head!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850403.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850404.png)Remember that time I received a last-minute dinner invitation![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850405.png), hurriedly coming out of the gym with hair still dripping with sweat. Just when I was anxious, thankfully the Johnson hair dryer came to the emergency rescue! I quickly blew my wet messy hair into neat submission, and when I walked into the banquet hall, I was full of confidence![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850411.png), as if I had just had a high-end salon treatment. Thanks to this compact yet powerful beauty tool, my beauty is no longer limited by time!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850412.png)

Come and add this fashionable little powerhouse of the hair dryer world to your shopping cart!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850413.png)Let's be women like the wind, elegant and efficient, shining from the head every day!![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570372571/p850414.png)

#JohnsonHairDryer #HighAestheticBeautyTool #IntelligentHairCareNewExperience #QuickDryingNoDamage #FashionEssential

In the preceding comparison, the LLM learns the examples and writes recommendation posts accordingly.

### Tip 2: Set steps for tasks

For many complex tasks, reminding the LLM how to complete the task is essential.

#### **Provide task steps to solve math problems**

Math problem:

It's Sunday and Timmy is walking to his grandparents' house. Timmy starts walking at exactly 8:00 AM. He walks at a speed of 50 meters per minute. After 12 minutes, Timmy's father realizes that Timmy forgot his homework and decides to catch up with him on his bicycle. Timmy's father rides at a speed of 200 meters per minute. Once he catches up with Timmy, he decides to take Timmy on the bicycle for the rest of the journey. The distance Timmy travels by bicycle is 5 times the distance he walked. At what time do Timmy and his father arrive at the grandparents' house? (The answer is 8:36.)

Prompt (telling the LLM how to complete the task by adding `#Task Steps#`):

```
#Background#
It's Sunday again, and Timmy is going to his grandparents' house as usual. Timmy sets off on foot at 8:00 AM. Timmy walks at a speed of 50 meters per minute.
After walking for 12 minutes, Timmy's father discovers that Timmy forgot to bring his homework, so he rides a bicycle to catch up with Timmy. Timmy's father rides at a speed of 200 meters per minute.
After catching up with Timmy, his father decides to take Timmy on the bicycle. The distance Timmy travels by bicycle is 5 times the distance he walks.
#Purpose#
What time does Timmy arrive at his grandparents' house?
#Task Steps#
1. First calculate the time and distance Timmy has moved when his father catches up with him.
2. Then calculate the remaining distance to his grandparents' house and the time needed.
3. Finally calculate the time Timmy arrives at his grandparents' house.
```

**Output (The LLM clearly obtained the task steps from the prompt and generated the correct result based on the specified steps):**

```
To answer this question, we first need to solve it step by step based on the given information.

Step 1: Calculate the time and distance Timmy has moved when his father catches up with him
Timmy walks at a speed of 50 meters per minute.
When his father sets off (i.e., after Timmy has walked for 12 minutes), Timmy has already walked 12×50=600 meters.
From this moment, Timmy continues to move forward at a speed of 50 meters per minute, while his father chases at a speed of 200 meters per minute.
Let's say it takes t minutes from when Timmy's father starts chasing until he catches up with Timmy, then we have the equation: [200t = 50t + 600] (the left side is the father's total distance, the right side is the distance Timmy walks in the same time plus the initial 600-meter lead)
Solving this equation: [150t = 600] [t = 4] minutes. This means it took the father 4 minutes to catch up with Timmy.
In these 4 minutes, Timmy walked another 4×50=200 meters.
Therefore, when his father caught up with him, Timmy had walked a total of 600+200=800 meters.
Step 2: Calculate the remaining distance to his grandparents' house and the time needed
According to the problem, "the distance Timmy travels by bicycle is 5 times the distance he walks", which can be understood as the distance from where the father caught up with Timmy to the grandparents' house is 5 times the previous walking distance (800 meters), i.e., 800×5=4000 meters.
Since they are now traveling by bicycle at a speed of 200 meters per minute, the time needed to reach the grandparents' house is 4000/200=20 minutes.
Step 3: Finally calculate the time Timmy arrives at his grandparents' house
Timmy set off at 8:00 AM.
By the time his father caught up with him, a total of 12+4=16 minutes had passed.
Adding the 20 minutes needed to cycle to the grandparents' house, the total time taken is 16+20=36 minutes.
Therefore, Timmy will arrive at his grandparents' house 36 minutes after setting off, which is 8:00+36 minutes = 8:36 AM.
```

### Tip 3: **Use separators to distinguish units**

When constructing complex prompts, using specific separators to define different content units. This can significantly enhance the LLM's ability to correctly parse the prompt. As task complexity increases, the reasonable use of separators becomes more important.

For separators, use unique character combinations that are rare in natural language text, such as: `###`, `===`, `>>>`. These special symbol sequences have no fixed rules; the key is that they are highly recognizable, ensuring the model can clearly distinguish these symbols as boundary markers for content areas, rather than ordinary punctuation or grammatical components in the text.

**Without separators**

**With separators**

Prompt

Please briefly summarize the following movie review.

Once spirited and energetic, Zhang Zhiqiang deviated from his original life trajectory under the pressure of life, becoming "derailed" in middle age. A momentary impulsive decision instantly transformed him from his family's "small pride" into society's "marginal figure". However, he never anticipated that this was merely the starting point of his middle-aged life journey. A series of unexpected events came like a sudden storm, forcing him to face himself anew. When the burden of life truly weighed on his shoulders, he chose to become a delivery man, starting afresh from a new beginning. Gao Zhilei, traversing the city streets and alleys, met like-minded companions along the way. During their time together, he deeply experienced the warmth and coldness of human relationships, gradually finding his lost courage and beliefs on this challenging "reverse path", redefining a new direction for his life.

Please briefly summarize the following movie review.

###

Once spirited and energetic, Zhang Zhiqiang deviated from his original life trajectory under the pressure of life, becoming "derailed" in middle age. A momentary impulsive decision instantly transformed him from his family's "small pride" into society's "marginal figure".

###

However, he never anticipated that this was merely the starting point of his middle-aged life journey. A series of unexpected events came like a sudden storm, forcing him to face himself anew.

When the burden of life truly weighed on his shoulders, he chose to become a delivery man, starting afresh from a new beginning. Gao Zhilei, traversing the city streets and alleys, met like-minded companions along the way.

###

During their time together, he deeply experienced the warmth and coldness of human relationships, gradually finding his lost courage and beliefs on this challenging "reverse path", redefining a new direction for his life.

###

Output

The movie tells a story of midlife crisis, where protagonist Zhang Zhiqiang deviates from his normal life path due to life pressures. After experiencing a series of challenges, he becomes a delivery man and, with the help of new friends, regains his courage and beliefs, finding a new direction in life. The film showcases growth and self-redemption in adversity.

Protagonist Zhang Zhiqiang faces life difficulties in middle age, and an impulsive decision causes his social status to plummet.

Subsequently, facing numerous challenges, he takes a job as a delivery man to start over, establishing deep friendships with colleagues during this process, and regaining his courage and beliefs through hardships.

Finally, amid difficulties and challenges, he finds new meaning and direction for his life.

The output using separators shows a notable improvement. **The LLM not only understood the logical relationship between the three paragraphs but also correctly identified the separators and generated three strongly related summaries based on the separated paragraphs.**

### Tip 4: **Guide the model to "think"**

For complex tasks involving logical reasoning and contextual learning, simple prompt techniques may not meet task requirements. However, you can **guide the model to generate reasoning processes** or **break down complex tasks and reason step by step**, allowing the model to generate more reasoning evidence before producing the result.

Here we first introduce **Chain of Thought (COT)**, a relatively simple method to use that can significantly improve the reasoning of LLMs in complex scenarios.

Task purpose: **Parse a complex JSON structure**

```
#Background#
JSON input:
{"web-app": {
  "servlet": [   
    {
      "servlet-name": "cofaxEmail",
      "servlet-class": "org.cofax.cds.EmailServlet",
      "init-param": {
      "mailHost": "mail1",
      "mailHostOverride": "mail2"}},
    {
      "servlet-name": "cofaxTools",
      "servlet-class": "org.cofax.cms.CofaxToolsServlet",
      "init-param": {
        "templatePath": "toolstemplates/",
        "log": 1,
        "logLocation": "/usr/local/tomcat/logs/CofaxTools.log",
        "logMaxSize": ""}}],
  "servlet-mapping": {
    "cofaxEmail": "/cofaxutil/aemail/*",
    "cofaxTools": "/tools/*"},
 
  "taglib": {
    "taglib-uri": "cofax.tld",
    "taglib-location": "/WEB-INF/tlds/cofax.tld"}}}

#Purpose#
Based on the JSON, determine if it fully meets the following requirements:
1. Does each servlet have init-param
2. Are all elements in servlet-mapping matched in servlet
3. Does the cofaxTools servlet have three parameters starting with "log", and is the "log" parameter less than 10
```

**Without CoT**

**With CoT**

```
#Outputs#
If all requirements are met, only output "Requirements met", otherwise only output "Requirements not met".
```

```
#Outputs#
First output the thinking and judgment process for each requirement.
If all requirements are met, then output "Requirements met", otherwise output "Requirements not met".
```

Requirements not met

First, let's analyze the given JSON data step by step to determine if it meets all the mentioned requirements.

#### **Thinking process**

1.  **Check if each servlet has init-param**
    
    -   The `cofaxEmail` servlet has `init-param`, containing "mailHost" and "mailHostOverride".
        
    -   The `cofaxTools` servlet also has `init-param`, containing "templatePath", "log", "logLocation", and "logMaxSize".
        
    
    **Conclusion**: Each servlet has `init-param`, meeting requirement 1.
    
2.  **Check if all elements in servlet-mapping are matched in servlet**
    
    -   There are two elements in `servlet-mapping`: `cofaxEmail` and `cofaxTools`.
        
    -   In the `servlet` definitions, there are also exactly these two servlet names defined: `cofaxEmail` and `cofaxTools`.
        
    
    **Conclusion**: All elements in `servlet-mapping` can be found in `servlet`, meeting requirement 2.
    
3.  **Check if the cofaxTools servlet has three parameters starting with "log", and if the "log" parameter is less than 10**
    
    -   In the `cofaxTools` servlet's `init-param`, parameters starting with "log" are: "log" (value 1), "logLocation" (value "/usr/local/tomcat/logs/CofaxTools.log"), and theoretically "logMaxSize" (although its value is empty, the problem seems to focus more on the prefix rather than the content of the value).
        
    -   Among these, the value of "log" is 1, which is indeed less than 10.
        
    
    **Conclusion**: Although there might be ambiguity about whether "logMaxSize" counts as a valid parameter starting with "log" (since it doesn't have an actual value), based on the most direct interpretation, we can consider that it meets the condition of having at least three parameters starting with "log", and the explicitly specified "log" parameter value is 1, which is less than 10. Therefore, it generally meets requirement 3, although the handling of "logMaxSize" might vary depending on specific circumstances.
    

#### **Output**

Based on the above analysis, although there might be room for interpretation regarding the handling of "logMaxSize", the main conditions are basically met. Therefore, if there are no strict requirements for "logMaxSize" (for example, not requiring it to have a valid value less than 10), then it can be considered that overall the **Requirements met**. If there are specific value requirements for "logMaxSize", then further clarification would be needed before making a decision. But under standard interpretation, the answer should be: "Requirements met".

In addition to CoT, another practical method to inspire LLMs to "think" is **Prompt Chaining**. Prompt Chaining guides the "thinking" direction through multi-round conversations, leading the LLM to start with simple tasks and gradually complete complex reasoning along a designed "thinking" path.

Although Prompt Chaining is more complex to construct compared to Chain of Thought, it **performs better and has higher accuracy**. It is particularly suitable for tasks that are logically complex but can be broken down according to fixed patterns.

#### **Prompt Chaining example**

Math problem:

It's Sunday again, and Timmy is going to his grandparents' house as usual. Timmy sets off on foot at 8:00 AM. Timmy walks at a speed of 50 meters per minute. After walking for 12 minutes, Timmy's father discovers that Timmy forgot to bring his homework, so he rides a bicycle to catch up with Timmy. Timmy's father rides at a speed of 200 meters per minute. After catching up with Timmy, his father decides to take Timmy on the bicycle. The distance Timmy travels by bicycle is 5 times the distance he walks. What time do Timmy and his father arrive at his grandparents' house? (Timmy arrives at his grandparents' house at 8:36 AM)

Input 1 (math problem + first simple question):

```
#Background#
It's Sunday again, and Timmy is going to his grandparents' house as usual. Timmy sets off on foot at 8:00 AM. Timmy walks at a speed of 50 meters per minute.
After walking for 12 minutes, Timmy's father discovers that Timmy forgot to bring his homework, so he rides a bicycle to catch up with Timmy. Timmy's father rides at a speed of 200 meters per minute.
After catching up with Timmy, his father decides to take Timmy on the bicycle. The distance Timmy travels by bicycle is 5 times the distance he walks.

#Purpose#
Calculate when Timmy is caught up by his father and how far he has walked at that point?
```

**Output 1 (LLM's answer to the first simple question):**

```
First, let's calculate how far Timmy has walked before his father catches up with him.
Timmy's speed is 50 meters per minute, and he has been walking for 12 minutes, so the distance he has already walked is:
50 meters/minute × 12 minutes = 600 meters
Next, let's calculate the relative speed between Timmy and his father when his father starts chasing him. His father's cycling speed is 200 meters per minute, while Timmy continues to walk at 50 meters per minute. Therefore, his father's speed relative to Timmy is:
200 meters/minute - 50 meters/minute = 150 meters/minute
To catch up with Timmy, his father needs to cover the 600 meters that Timmy initially walked. At a relative speed of 150 meters/minute, the time it takes for his father to catch up with Timmy is:
600 meters / 150 meters/minute = 4 minutes
This means that his father caught up with Timmy 4 minutes after starting to chase, for a total of 12 minutes (the time Timmy had already been walking) + 4 minutes (the time his father spent chasing) = 16 minutes.
Now, let's calculate how far Timmy has walked when he is caught up. Timmy walked 600 meters in the first 12 minutes, and in the 4 minutes after his father started chasing, Timmy walked another:
50 meters/minute × 4 minutes = 200 meters
So, Timmy has walked a total of:
600 meters + 200 meters = 800 meters
In conclusion, Timmy is caught up by his father at 8:16 AM, and he has walked 800 meters at that point.
```

Input 2 (second question, gradually deepening):

```
#Purpose#
Calculate how much further Timmy needs to travel by bicycle to reach his grandparents' house?
```

**Output 2 (LLM's answer to the second question):**

```
According to the problem, the distance Timmy travels by bicycle is 5 times the distance he walks. Timmy has walked 800 meters when his father catches up with him, so the distance he will travel by bicycle is:
800 meters × 5 = 4000 meters
```

Input 3 (final complex question):

```
#Purpose#
What time does Timmy arrive at his grandparents' house?
```

**Output 3 (correct answer based on previous questions):**

```
To calculate when Timmy arrives at his grandparents' house, we need to first determine the time it takes for Timmy to travel by bicycle after being picked up.
The total distance Timmy travels by bicycle is 4000 meters, and his father's cycling speed is 200 meters per minute. Therefore, the time it takes for Timmy to travel by bicycle is:
4000 meters / 200 meters/minute = 20 minutes
Timmy has already spent 16 minutes from departure until being caught up by his father (i.e., departing at 8:00, caught up at 8:16), plus the 20 minutes spent traveling by bicycle, for a total time of:
16 minutes + 20 minutes = 36 minutes
So, Timmy will arrive at his grandparents' house 36 minutes after departing at 8:00 AM, which is:
8:00 AM + 36 minutes = 8:36 AM
Therefore, Timmy will arrive at his grandparents' house at 8:36 AM.
```

Other methods to guide the "thinking" of LLMs include Tree of Thoughts (ToT) and Boosting of Thoughts.

## Prompt testing and iteration

Generating the optimal prompt is an iterative process that requires constant trial and adjustment of various methods. The entire prompt engineering optimization process can be summarized as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9171324771/CAEQQhiBgIDMvqXKwBkiIDA3MzFkYzg0YzFiYzQ3ZTZhNTI1MDkwODU5NGIyODUw4789852_20241122171352.128.svg)

Additionally, it's worth noting that besides carefully designed prompts, user feedback and corrections are also key factors. Even after prompt optimization is complete, continuously receiving feedback in the online environment and making corresponding adjustments is necessary to help the model better understand and meet user needs.

## Optimization case: Guide AI assistant to output multilingual content for a multinational company

Background: User reported that qwen-turbo cannot consistently answer English questions in English.

Optimization points:

1.  The structure of the prompt before optimization was relatively loose, and the `## Limitations` section was redundant. Therefore, the prompt framework provided in this tutorial was used to reformat and split the content of the `## Limitations` section into the correct locations.
    
2.  The `${documents}` section is a long passage that is not appropriate to place within a sentence. It should be marked and separated using delimiters as an important content block.
    

**Before optimization**

**After optimization**

\# Role

You are an efficient HR AI assistant, specifically responsible for answering company internal questions about policies, attendance systems, annual leave arrangements, and other related issues. You have the ability to quickly and accurately parse company policy documents and provide clear and concise explanations to colleagues.

\## Skills

\### Skill 1: Policy Interpretation

\- \*\*Task\*\*: Accurately interpret company policy documents and provide clear, concise policy explanations to colleagues.

\- Quickly locate relevant policy clauses and answer specific policy implementation details.

\- Ensure that the explanations are easy to understand and comply with the company's official regulations.

\### Skill 2: Attendance Q&A

\- Answer all questions related to employee attendance, including clock-in rules, handling of late arrivals and early departures, leave procedures, etc.

\- Provide specific attendance operation guidelines and suggestions for handling special situations.

\### Skill 3: Annual Leave Management Consultation

\- Explain in detail the annual leave application conditions, accumulation rules, validity period, and approval process.

\- Assist in calculating employee annual leave balance and provide vacation planning suggestions.

\## Tools and Resources

\- \*\*Knowledge Base Access\*\*: Directly parse company policy documents and related regulations in \`${documents}\` to ensure the authority and timeliness of answers.

\- If the question is in English, please use your understanding of its Chinese meaning to search the knowledge base, and then respond in English (please note that punctuation marks in the response should be in English format! Especially character U+2019 "'", please replace it with "'" ).

\## Limitations

\- Responses must only use standard ASCII character set, do not use Chinese quotation marks, full-width commas, or other full-width punctuation marks!!!

\- Respond in the same language as the user's question, for example, if the user uses Chinese, answer in Chinese; if the user uses English, answer in English.

\- Limited to answering questions within the scope of company policies, attendance systems, annual leave, and other human resource management areas.

\- Do not involve queries of personal privacy data, protect employee information security.

\- When encountering questions not covered or unclear in the knowledge base, guide the inquirer to contact the Human Resources Department for further assistance.

#Background#

You are an efficient HR AI assistant for a multinational company, specifically responsible for answering company internal questions about policy interpretation, attendance Q&A, and annual leave management consultation. You have the ability to quickly and accurately parse company policy documents. Below are the company policy documents:

\======

\`${documents}\`

\======

#Purpose#

1.  User questions are limited to the three categories of company policy interpretation, attendance Q&A, and annual leave management consultation.
    
2.  When questions are within scope but not covered or unclear in the knowledge base, guide users to contact the Human Resources Department for further assistance.
    
3.  Answer the three types of questions according to the following requirements:
    
    1.  Policy interpretation
        
        1.  Accurately interpret company policy documents and provide clear, concise policy explanations to users.
            
        2.  Quickly locate relevant policy clauses and answer specific policy implementation details.
            
        3.  Ensure that the explanations are easy to understand and comply with the company's official regulations.
            
    2.  Attendance Q&A
        
        \- Answer all questions related to employee attendance, including clock-in rules, handling of late arrivals and early departures, leave procedures, etc.
        
        \- Provide specific attendance operation guidelines and suggestions for handling special situations.
        
    3.  Annual leave management consultation
        
        \- Explain in detail the annual leave application conditions, accumulation rules, validity period, and approval process.
        
        \- Assist in calculating employee annual leave balance and provide vacation planning suggestions.
        
4.  Do not involve queries of personal privacy data, protect employee information security.
    

#Multilingual requirements#

\- If the question is not in Chinese, translate the question into Chinese to search the knowledge base.

\- The content retrieved from the knowledge base should also be converted to the language of the question when outputting.

#Outputs#

1\. Only use standard ASCII character set for output responses.

2\. The language of the output content should be the same as the language of user input.
