Use **structured prompt formulas** to improve the quality and artistic expression of AI-generated videos.

Scenarios:

-   [Text-to-video API reference](/help/en/model-studio/text-to-video-api-reference)
    
-   [Image-to-video (first frame) API reference](/help/en/model-studio/image-to-video-api-reference/)
    
-   [Image-to-video (first and last frames) API reference](/help/en/model-studio/image-to-video-by-first-and-last-frame-api-reference)
    
-   [Reference-to-video API reference](/help/en/model-studio/wan-video-to-video-api-reference)
    

## **Prompt formulas**

A prompt describes the visual content and motion in a video. More accurate and detailed descriptions produce higher-quality videos.

## **Basic formula**

Simple, flexible prompts produce imaginative videos for creative exploration.

**Prompt = Entity + Scene + Motion**

**Entity:** The main subject of the video. It can be a person, animal, plant, object, or an imaginary object.

**Scene:** The environment where the entity is located. It includes the background and foreground and can be a real or imaginary setting.

**Motion:** The specific movement of the entity and other elements in the scene. This can range from a still scene to slight, large, local, or overall movement.

## Advanced formula

Add richer, more detailed descriptions to the basic formula to enhance texture, vividness, and narrative quality.

**Prompt = Entity (description) + Scene (description) + Motion (description) + Aesthetic control + Stylization**

**Entity description:** Describes the details of the entity's appearance. You can list adjectives or short phrases. For example, "a young Miao girl with black hair in ethnic costume" or "a celestial fairy from another world, dressed in tattered yet magnificent clothes, with a pair of strange wings made of debris from ruins on her back."

**Scene description:** Describes the details of the entity's environment. You can list adjectives or short phrases.

**Motion description:** Describes the details of the motion, including its amplitude, speed, and effect. For example, "swaying violently," "moving slowly," or "shattering the glass."

**Aesthetic control:** Includes light source, lighting environment, shot size, camera angle, lens, and camera movement. For common cinematic terms, see the prompt dictionary below.

**Stylization:** Describes the visual style of the video. For example, "cyberpunk," "line art illustration," or "wasteland style." For common styles, see the prompt dictionary below.

## Image-to-video formula

The image defines the entity, scene, and style—describe the desired motion and camera movements.

**Prompt = Motion + Camera movement**

**Motion description:** Describe the movement of elements in the image, such as people running or animals waving. You can use adjectives such as "quickly" or "slowly" to control the speed and intensity of the motion.

**Camera movement:** If you have specific requirements for camera movement, you can use prompts such as "camera pushes in" or "camera moves left." If you want the camera to remain still, you can use "fixed camera" to emphasize this.

## Sound formula (Wan 2.5/2.6)

Add descriptions for voices, sound effects, and background music to your prompts for sound control.

**Prompt = Entity + Scene + Motion + Sound description (voice/sound effect/background music)**

**Sound description:** Describes the sound elements in the video and their changes over time. This guides the sound content and atmosphere to match the visual narrative precisely. This includes three main categories: human voice, sound effects, and background music (BGM).

**Voice = Character's lines + Emotion + Tone + Speed + Timbre + Accent**

> Example: A man is doing a stand-up comedy routine. He says, **"Study hard and make progress every day,"** in a relaxed tone, at a moderate speed, with a clear voice, in American English.

**Sound effect = Source material + Action + Ambient sound**

> Example: A small glass ball falls from a table onto a wooden floor, making a "thud" sound in a quiet indoor environment.

**Background music = Background music/score + Style**

> Example: On a rainy night, a spooky, narrow corridor has a window at the end, with suspenseful background music.

## Reference-to-video formula (Wan 2.6)

Generate videos by referencing a character (person, cartoon, pet, or prop) from an input video—their appearance, motion, and voice timbre.

**Prompt = Character + Action + Lines + Scene**

**Character:** Reference the main character using an identifier such as character1. You can reference up to three characters at the same time. Each character can be referenced multiple times in the prompt to precisely control their behavior.

**Action:** Describe the motion of the character or other elements. This includes static states, changes in expression and emotion, body movements, external actions, and displacement.

**Lines:** The character's spoken content. This supports a single character speaking or a dialogue between multiple characters.

**Scene:** The environment where the character is located. It includes the background and foreground and can be a real or imaginary setting.

**Example**: This is a whimsical fairytale scene. character1 is jumping and playing on the grass. character2 is playing the piano under a nearby apple tree. An apple falls on character2's head. character1 points at character2 and says happily, "You're going to become a scientist!".

> In this example, the reference video for character1 is a rabbit, and the reference video for character2 is a dog. Each reference video contains only a single character.

## Multi-shot formula (Wan 2.6)

Generate coherent multi-shot narrative videos with precise control over shot structure, camera position, and duration. Key elements remain consistent across shots.

**Prompt = Overall description + Shot number + Timestamp + Shot content**

**Overall description:** Briefly summarize the entire video content. State the story's theme, narrative style, main emotion, or core event. This helps the AI grasp the overall narrative direction.

**Shot number:** Assign a number to each shot to distinguish the sequence of different scenes or segments in the video. This helps organize the video structure clearly.

**Timestamp:** Specify the time range for each shot in the video. This ensures that the shot content corresponds to the video timeline and improves generation accuracy.

**Shot content:** Describe the specific behavior of the main character or object in each shot. This includes actions, speech, expressions, and posture. You can follow the general prompt writing style for a single shot.

**Example:**

This story is a short play about giving up and regaining hope, told from a third-person perspective.

Shot 1 \[0–3 s\] A boy sits alone in a corner of a playground, looking down at a letter in his hand. He sighs softly, his eyes filled with confusion.

Shot 2 \[4–6 s\] Hard cut transition, fixed camera position, focusing on the boy's eyes, which are glistening with tears, showing loss and helplessness.

Shot 3 \[7–10 s\] Hard cut transition, the scene changes to a simple classroom. A girl with a gentle and firm gaze, dressed in plain clothes, walks over to the boy with a warm and determined smile to comfort him.

## **Prompt optimization techniques**

##### **1\. Automatic optimization: Enable the prompt\_extend parameter**

Enable the `prompt_extend` parameter when calling the API. The system optimizes short, general prompts automatically (e.g., "A kitten plays with a snowball in the snow").

##### **2\. Generate prompts using prompt formulas**

For precise control over image details, style, or complex dynamics, write prompts using structured formulas.

Alternatively, provide formulas as system messages to an LLM like qwen-plus to generate prompts.

**Example: Use the sound formula to optimize a prompt**

> For more code examples, see [Text generation overview](/help/en/model-studio/text-generation).

**Input example**

```
import os
from openai import OpenAI

try:
    client = OpenAI(
        # The API keys for the Singapore and Beijing regions are different. To get an API key, see https://www.alibabacloud.com/help/en/model-studio/get-api-key
        # If you have not configured the environment variable, replace the following line with your Model Studio API key: api_key="sk-xxx",
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        # The following is the URL for the Singapore region. If you use a model in the Beijing region, replace the URL with: https://dashscope.aliyuncs.com/compatible-mode/v1
        base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
    )

    completion = client.chat.completions.create(
        # For a list of models, see https://www.alibabacloud.com/help/en/model-studio/models
        model="qwen-plus",
        messages=[
            {"role": "system", "content": "You are a prompt optimization assistant. The prompt formula is: Prompt = Entity + Scene + Motion + Sound description (voice/sound effect/background music)\nSound description: Describes the sound elements in the video and their changes over time. It guides the sound content and atmosphere to match the visual narrative precisely. It mainly includes three categories: human voice, sound effects, and BGM.\nVoice = Character's lines + Emotion + Tone + Speed + Timbre + Accent\nExample: A man is doing a stand-up comedy routine. He says, \"Study hard and make progress every day,\" in a relaxed tone, at a moderate speed, with a clear voice, in American English.\nSound effect = Source material + Action + Ambient sound\nExample: A small glass ball falls from a table onto a wooden floor, making a \"thud\" sound in a quiet indoor environment.\nBackground music = Background music/score + Style\nExample: On a rainy night, a spooky, narrow corridor has a window at the end, with suspenseful background music."},
            {"role": "user", "content": "A kitten plays with a snowball in the snow"},
        ],
    )
    print(completion.choices[0].message.content)
    # To view the full response, uncomment the following line
    # print(completion.model_dump_json())
except Exception as e:
    print(f"Error message: {e}")
    print("For more information, see the document: https://www.alibabacloud.com/help/en/model-studio/error-code")
```

**Output example**

```
Entity: A fluffy kitten  
Scene: A snow-covered yard on a winter morning. The snow is thick and soft. There are frosted branches and a small snowman in the distance.  
Motion: The kitten rolls up a snowball with its front paws, clumsily pushing it forward. Suddenly, the snowball breaks apart, and the kitten jumps back in surprise. It then curiously approaches, sneezes, does a somersault, and continues to play by nudging the snowball with its head.  
Sound description:  
- Voice: None  
- Sound effects: The soft "crunch, crunch" of the kitten's paws on the snow; the "swish" of the snowball rolling; the "crack" as the snowball breaks; the kitten's cute, crisp "achoo!" sneeze; the "rustle" of snow falling as it tumbles.  
- Background music: A light and warm piano score with a nursery rhyme style. The rhythm is playful, like a small animal frolicking, creating a whimsical winter atmosphere.  

Full prompt:  
A fluffy kitten plays with a snowball in a snowy yard on a winter morning. It rolls up a snowball with its front paws, clumsily pushing it forward. The snowball suddenly breaks, and the kitten jumps back in surprise, sneezes, then curiously approaches and finally plays by nudging the snowball with its head and tumbling around. Sound effects include the "crunch" of paws on snow, the "swish" of the rolling snowball, the "crack" of it breaking, the kitten's "achoo!" sneeze, and the "rustle" of falling snow. The background music is a light, warm, nursery-rhyme-style piano score, creating a warm and adorable winter atmosphere.
```

## **Sound generation**

To generate videos with synchronized audio, describe human voices, ambient sounds, and other elements that match the video's visuals.

> The following video effects were all generated using Wan 2.5 Preview.

### **Voice**

**Type**

**Prompt example**

**Video effect**

**Single speaker**

**Single speaker**,low angle shot, wide shot, daylight from large window, soft lighting, warm colors, center composition. A classical-faced female model with voluminous, flowing auburn hair is framed within an oversized ornate golden picture frame adorned with fresh yellow wildflowers such as rapeseed blooms. She wears a pale yellow dress embellished with shimmering circular yellow sequins and translucent lace long gloves. Her right hand rests on the edge of the frame while her left hand extends forward, fingertips pressing against an invisible barrier, creating a subtle tension in her fingers and forearm. The background inside the frame dissolves into a hazy, sky-like mist. Captured with a wide-angle lens that curves the perspective slightly, the foreground wildflowers blur at the edges, enhancing the surreal effect of the figure emerging from or trapped within the artwork. Sunlight streams through a high window, casting soft, even illumination across her face and the gilded frame, highlighting the texture of petals and fabric. **Ambient audio: gentle orchestral strings swell faintly in the background. She whispers, "Is this freedom… or just another kind of frame?"**

**Group conversation**

**Group conversation**,warm colors, daylight from large window, soft lighting, medium shot, center composition. A vintage wood-paneled dining room features dark wooden walls and a large window revealing lush green plants outside. Sunlight streams in through the window, casting gentle side lighting across the scene. The dining table is laden with roasted ham, fresh bread, grapes, silver cutlery, and a gleaming tea pot. A Caucasian man on the left wears a dark suit with a white shirt and black vest, his expression serious and focused as he speaks deliberately, forming clear lip movements. Across from him, a Caucasian woman with short brown hair sits in a dark dress adorned with delicate floral patterns, her calm face tinged with melancholy, eyes slightly downcast in quiet contemplation. Their hands rest lightly on the table, unmoving. **The man speaks in a low tone: "We can't keep pretending everything is unchanged." The woman exhales softly, then murmurs, "But what if forgetting hurts more than remembering?"**

**Timbre**

Moonlight, soft lighting, side lighting, medium close-up shot, center composition. Inside a cozy children's bedroom, pale silver moonlight streams through the window, casting gentle shadows across the wooden floor. A young Caucasian girl, around 6 years old, sits curled up against a fluffy pillow, wearing a pastel pink pajama set with tiny star patterns. She tightly embraces an oversized brown teddy bear, her small face buried momentarily in its soft fur before she pulls back slightly to whisper with **innocent tenderness: "Don't be afraid, I'll protect you."** Her wide eyes glisten faintly in the dim light, filled with sincerity and quiet courage. The camera holds steady at eye level, **capturing the delicate movement of her lips as she speaks again, voice barely above a breath: "I'm here." Faint ambient sounds of a creaking house and distant crickets fill the silence,** while a soft wind rustles the sheer curtains near the window.

**Singing**

Surreal style, medium full shot, daylight, clear sky light, soft lighting, side lighting, warm tones, center composition.

Two young Caucasian female models are situated in a lush, rolling green grassland, set against a backdrop of a pure blue sky adorned with fluffy, picturesque white clouds. In the foreground, a woman in her twenties, with fair, freckled skin, wears a sky-blue knitted vest. Her slightly curly brown hair is wrapped in a light blue headscarf. She lies on her side on the soft grass, her right hand gently supporting her cheek, and her left arm naturally extended. Her clear eyes look directly at the camera, a slight smile playing on her lips. A gentle breeze brushes her hair and clothing.

Behind her, another young woman leans against a giant, cartoon-style pink mushroom with white dots. A burgundy crocheted headband encircles her hair, and she wears a yellow camisole paired with a flowing white long skirt, its hem gently swaying in the wind. Her eyes are closed, her expression serene and content, as if deeply immersed in a sunlit dream. The mushroom's surface is smooth and saturated in color, resembling a prop from a fairy tale.

**The scene is accompanied by gentle folk guitar music. The foreground woman softly hums: "Follow the light, where the wild flowers grow," her voice clear and soft. In the background, bird calls and the distant rustling of leaves filter through, adding to the sense of natural tranquility.**

### **Sound effects**

**Type**

**Prompt example**

**Video effect**

**Footsteps**

Steampunk style, dusk, mixed light (gaslight and neon intertwined), side light, cool tones with an orange-red glow, medium full shot, center composition. The camera pushes in slowly, revealing a dark, narrow railway alley in a Victorian city. The bluestone pavement reflects a damp glimmer, and thick fog slowly flows, winding around rusty copper pipes and steam valves. A group of retro-styled robots marches through, emitting small puffs of steam from their joints. **Footsteps, the rhythmic "clatter" of metal feet hitting the ground**. In the deep background, a giant gear-shaped building rises, its facade covered with intersecting transmission rods and pressure gauges. A radio tower stands on top, continuously emitting pale blue electric arcs. The neon sign "WAN" flickers in the fog, **accompanied by a low-frequency electrical hum.**

**Knocking**

Low angle, medium shot, balanced composition. Cool tones, dim lighting, with only a faint side backlight from a distant streetlamp.

A lonely private investigator, a middle-aged Caucasian man, wears a trench coat with the collar turned up and a fedora that hides his sharp, wary eyes. He stands at the end of a narrow, dark alley, in front of a weathered, peeling wooden door with faded gray-green paint. Rain-soaked cobblestones glisten under the dim, swaying light from the alley entrance.

The detective raises his right hand and **knocks on the door** with the knuckle of his index finger in a precise rhythm: two light taps, followed by a heavy one, repeated three times. After each set of knocks, he pauses, tilting his head slightly to listen, his jaw tight and his expression serious.

**Object falling**

Top-down angle, top shot, soft light, daylight, center composition, cool tones.

In a medium close-up shot, a hand holds a white ping-pong ball between the thumb and index finger over the center of a wooden table. The ball is released and falls vertically under gravity. **It hits the tabletop with a crisp tap,** then bounces back up to a height lower than its starting point. This action repeats: each bounce has slightly less force, **accompanied by a progressively fainter crisp tapping sound.** The background consists of blurred indoor elements-the faint describes of a desk lamp and a bookshelf. As the process continues, the ball's vertical motion gradually diminishes until it finally comes to rest on the table. **A rhythmic tapping sound is precisely synchronized with each bounce.**

**Impact sound**

Low angle, medium close-up shot, daylight, soft light, center composition, cool tones.

A small red toy car is parked at the top of a smooth cardboard ramp tilted at 30 degrees. Its surface reflects a slight sheen under the diffused indoor light. The end of the ramp abruptly stops at a vertical white wall.

After being released, the toy car begins to slide down slowly, accelerating smoothly along the ramp. Its plastic wheels roll silently on the smooth surface of the cardboard. Upon reaching the bottom, **the toy car's front bumper hits the wall with a sharp tap, producing a short, crisp impact sound**. The collision causes the front hood to dent slightly, just enough to show damage. The momentum reverses, and the toy car bounces backward, rolling a short distance of about 20 cm before finally stopping on the flat ground.

**Fire burning**

Close-up, side light, daylight, cool tones transitioning to warm tones, center composition, soft light. A block of pure, flawless ice occupies the center of the frame, with tiny air bubbles frozen inside and frost condensed on its surface, crystal clear. Suddenly, a flame erupts from the center of the ice core. The orange-red light gradually spreads. The ice does not melt but transforms into hot charcoal and lava textures as if through a material conversion. The flame consumes the ice from the inside out, turning from transparent to opaque, with black charcoal and crimson intertwined, sparks flying, and light and shadow dancing. Finally, the entire block of ice turns into a blazing fire, still maintaining its original cubic shape. The background is a deep blue sky with a gentle breeze, and fine frost dust floats in the air. **The crackling sound of the fire burning** is mixed with a low hum.

**Game sound effects**

8-bit pixel style, top-down view. The screen shows a maze-like dungeon shrouded in darkness. Only a bright pixelated light circle around a silver-armored knight illuminates a certain area, as if the light source is a faint magic lamp hovering above his head, creating a center composition. The knight, dressed in shiny silver armor and holding a longsword, moves forward steadily. Each step is a frame-by-frame animation, and the ground shakes slightly as his feet land. As he moves through the narrow passages, the ink-like darkness is dispelled frame by frame, and new paths and rooms appear with a pixelated fade-in effect. When he steps on a hidden pressure plate, a distant stone wall makes a "clank" sound effect and slowly slides open with pixel-style mechanical animation, revealing a secret room with a enormous treasure chest. **The background sound is a low, looping 8-bit adventure music, interspersed with occasional dripping water and echoing footsteps. The moment the treasure chest opens, a golden light bursts out, accompanied by a crisp "ding!" sound effect.**

**Electronic sound effects**

**Glitch sound**, VHS glitch aesthetic, CRT scanline effect, tilted angle, medium shot, symmetrical composition. The lighting is a soft mix of neon and screen light, with warm tones.

A cyber dancer emerges from 80s retro VHS noise, in a dimly lit underground arcade surrounded by old game machines and flickering monitors. This humanoid creature has chrome limbs, glowing red optical sensors, and exposed mechanical joints that flicker with electric blue light.

As the beat starts, it begins a series of precise and stiff movements-arms suddenly folding into sharp angles, head rotating 180 degrees, one leg unnaturally extending forward-its movements mimicking the stuttering effect of an analog tape. Each movement triggers a visual glitch transition: the image distorts into rolling snow noise, then switches to the next pose through a horizontal CRT scanline wipe. Behind it, neon pink and cyan lights reflect off the polished metal surfaces.

**The audio is retro synth-wave music with a steady electronic pulse. Background sound effects include the low hum of old electronic devices, occasional clicks of a tape rewinding, and distorted radio chatter in the distance.**

**ASMR**

**ASMR**, a black knife moves from right to left, cutting into a white, fluffy, cloud-like object placed on a light-colored wooden cutting board. The cloud deforms upon contact with the knife, its surface splitting, and a part of its structure is cut off and displaced. Light smoke continuously rises from the edges of the cloud. After the cut is complete, the knife stops, and the cloud is divided into two parts, with one side collapsing. **The process is accompanied by a slight 'hiss' and the sound of airflow from sublimating dry ice.**

**Animal sounds**

Backlight, soft light, wide-angle lens, center composition.

In the frame, a middle-aged bald man wearing a well-tailored dark charcoal long coat walks slowly in a vast, open wilderness with his back to the camera. The hem of his coat flutters in the wind. He is surrounded by a large flock of plump, pure white sheep. They part smoothly in front of him and close behind him like a living river.

The dry, earth-toned grass slopes gently under a pale blue sky, stretching to the horizon. The gloomy daylight is evenly scattered, enveloping the entire scene. The air is quiet, with only the slight rustle of the sheep's wool as they move and the sound of bleating in the distance. As he moves forward, a sheep on his left lifts its head and lets out a soft **"baa"**.

**Keyboard sounds**

A hand presses keys on a keyboard made of various cookies and candies. Each time a fingertip lands, the corresponding cookie keycap slightly depresses and then quickly springs back, **simultaneously producing a crisp 'click-clack' sound that combines the crispness of a cookie with the sharp feedback of a mechanical keyboard.** The surface of the coffee ripples slightly, and the light and shadow on the table and cup sway gently. The coffee cup occasionally makes a very faint 'gurgle' sound. The fingers continue to press different keycaps in a continuous, steady rhythm.

### **Ambient sound**

**Type**

**Prompt example**

**Video effect**

**Natural environment**

Daylight, warm tones, side light, close-up shot, center composition.

A young woman with wavy chestnut hair, wearing a light blue slip dress with delicate lace trim, stands gracefully in a sun-drenched garden. Her slender fingertips gently pinch the edge of a pink rose petal and slowly pluck it from the flower in a smooth, unhurried motion. The camera focuses closely on her hand and the flower, capturing every subtle movement-the slight tremor of her fingertips, the gentle separation of the petal from the stem.

Her face is softly out of focus, her eyes lowered, her expression serene and focused, her lips slightly parted. Behind her, a lush field of blooming flowers-peonies, daisies, and lavender-blurs into a gradient of green and soft colors. The sunlight casts soft highlights on her skin and the fabric of her dress, creating a natural glow.

There is no dialogue or human voice; **ambient sounds include the gentle rustling of leaves, the chirping of distant birds, and the sound of the breeze blowing through the petals.**

**Urban environment**

Tilt-shift lens, medium shot, balanced composition.

A Chicago "L" train glides smoothly on elevated tracks, weaving through a dense urban canyon. Morning sunlight pours down from the sky, bringing a soft, directional light to the scene that highlights the metallic sheen of the train cars while casting a gentle shadow over the adjacent skyscrapers.

The train remains in sharp focus, like a meticulously crafted miniature model, with the **wheels clattering on the tracks** as it navigates a curved section, gradually approaching a station. The passengers inside the cars are blurred into soft shapes with faint motion trails; the surrounding buildings are blurred into a dreamlike bokeh, their windows shimmering with warm and cool tones. The camera pans horizontally at track level, creating a seamless tracking motion that enhances the visual illusion of a miniature world.

**Background sound effects include the rhythmic rumble of the train, the distant hum of the city, the occasional screech of brakes, and muffled announcements from the public address system.**

**Specific space**

Rim light, backlight, low contrast, cool tones, low saturation, medium full shot, long-focus lens. Against a space background, an astronaut in a white spacesuit floats slowly in the deep blackness of space. The helmet's surface reflects the faint light of distant stars, and their calm face is vaguely visible inside the visor. They are holding an old film camera steady with their right hand and gently adjusting the focus ring with their left. They press the shutter, aiming at the Earth, with a steady and focused motion. The Earth hangs in the upper right of the frame, a complete sphere wrapped in a blue atmosphere, glowing softly in the darkness. The camera pushes in slightly, and the astronaut's body leans back slightly with the force of the push, their posture weightless and natural. In the background, the Milky Way stretches across the void like a misty band of light, and a few stars twinkle slowly. A meteor streaks by in the distance, leaving a brief trail of light. **Background sound content: very low-frequency cosmic background radiation white noise, with intermittent, slight "click" deformation sounds from the spacecraft's metal structure due to temperature differences.**

### **Background music**

**Type**

**Prompt example**

**Video effect**

**Emotional music**

Felt style, soft light, daylight, medium shot, center composition.

**Warm and happy atmospheric music**. A whimsical, rainbow-colored yarn bridge spans across a fabric landscape, its strands slowly winding and unwinding in a rhythmic motion. The bridge is made of thick, felted wool with stitched seams, and each arch seems to pulsate gently as if alive. A small car decorated with buttons, with wheels sewn from black thread and oval plastic buttons for headlights, drives smoothly across the bridge. As the car passes, tiny spring-like passengers made of coiled red and yellow yarn pop up from hidden crevices in the bridge, bouncing gently a few times. Each spring passenger has two black bead eyes and a stitched smile. The background is a quilted cotton sky, adorned with embroidered clouds and hand-sewn stars.

**The soundtrack is soft acoustic guitar music and the subtle rustle of fabric. Whenever a spring passenger pops up, it is followed by a gentle giggle: "Eee!"** The camera remains still, capturing the clear details of the entire scene.

**Beat-synced music**

**Beat-synced music**, disco ball reflected light, artificial light, soft light, side light, warm tones, medium shot, center composition, low-angle shot. An anthropomorphic character with a cat head, part calico and part white, stands in the center of a yellow stage. He wears a well-tailored white suit with black circular patterns on the lapels and fluffy white gloves on his hands. He raises his right arm and bends his left elbow to the rhythm, his legs crossed in a classic 70s dance pose. The cat's eyes are bright, its whiskers twitch slightly, and its ears twitch to the beat. Above, multiple rotating disco balls scatter light spots throughout the space. The background is a black-and-white checkerboard wall and giant vintage speakers. The floor is a dance floor made of red, blue, and purple panels that extends into the distance. **As the funk music starts, with a clear drum beat and a groovy bassline, he hums: "I'm the king of the night, groove under the light, meow like a cat but I dance like a man-yeah!"** As the light and shadow flow, colored light spots dance on the surface of his suit. The background sound is a mix of crowd cheers and retro synthesizer melodies.

**Light music**

Stop-motion animation, medium shot, symmetrical composition. The lighting is a mix of cool and warm tones, with the light source coming from real paper lanterns and moonlight filtering through translucent rice paper, supplemented by soft side light.

The entire scene is a minimalist two-dimensional world made of multiple layers of paper. Below, blue and green folded paper waves ripple gently. A small, delicate white origami boat with clear creases moves steadily through the shifting shadows. Suddenly, black paper-cut tentacles slowly extend from the depths, and a giant paper octopus appears, its matte surface seeming to swallow the light. Then, under the soft moonlight filtering through a translucent vellum sky, schools of glowing paper jellyfish float rhythmically, their edges cleverly backlit. **The background music is a quiet piano melody**, occasionally accompanied by crisp chimes, together creating a serene and magical atmosphere.

## **Cinematic aesthetic control**

Writing prompts with specific dimensions improves video controllability and expressiveness in those areas.

> The following video effects were all generated using Wan 2.2.

### **Light source type**

**Type**

**Prompt example**

**Video effect**

**Daylight**

Rim light, low contrast, medium close-up, **daylight**, left-heavy composition, clean single shot, warm tones, soft light, clear sky light, side light, daytime. A young girl sits in a field of tall grass with two fluffy donkeys standing behind her. The girl is about 11 or 12 years old, wearing a simple floral dress with her hair in two braids, and has an innocent smile on her face. She sits cross-legged, gently touching the wildflowers beside her. The donkeys are sturdy, with their ears pricked up, curiously looking toward the camera. Sunlight bathes the field, creating a warm and natural scene.

**Firelight**

**Firelight**, over-the-shoulder shot. A man in a white shirt and brown vest stands in front of a fireplace, looking at a person to the right of the camera.

**Overcast light**

Medium-focus, soft light, low contrast, rim light, low-angle shot, **overcast light**, low saturation, medium close-up, clean single shot, cool tones, center composition. A low-angle shot captures a close-up of a man outdoors. He is wearing black clothes, a gray sweater, a white shirt, and a black tie. He looks at the camera and moves forward. Behind him is a brown building with windows that have yellow lights inside. In front is a black door. The camera moves forward. On the right side of the camera, a blurred black object sways back and forth. The background is black.

**Clear sky light**

Sunset, warm tones, medium shot, low saturation, daylight, side light, **clear sky light**. In a kitchen, a Caucasian man is preparing food. In a medium close-up, eye-level shot, he is wearing a white shirt and a black tie, standing at a table with a blue cup, a jar of sugar, and other condiment bottles. He scoops some sugar from the jar into the cup. The blurred background is a wall with floral wallpaper, on which hangs a white cabinet filled with various items. Sunlight streams in through the window.

### **Light type**

**Type**

**Prompt example**

**Video effect**

**Soft light**

Sunset, **soft light**, side light, rim light, warm tones, low saturation, center composition, medium close-up, eye-level shot. A couple stands next to a yellow taxi in a half-length shot. The man wears a beige trench coat with the collar slightly raised, his hands in his pockets, smiling, and leaning slightly forward. The woman wears a green beret with a matching dress and lace gloves, elegantly linking arms with the man and leaning slightly toward him. In the background, the silhouettes of retro-style buildings are faintly visible. Two green streetlights cast a warm glow. In the distance, a police officer in a classic uniform stands straight, enhancing the realism of the urban scene. Light comes from the right side of the frame, creating a soft rim light on the characters' silhouettes. The overall tone is golden-yellow, creating a natural and warm atmosphere.

**Hard light**

**Hard light**, side light, medium shot, low saturation, high contrast, medium-focus, eye-level shot of a man's close-up. He is wearing a striped shirt and sitting at a wooden table with some folders and a red telephone on it. His arms are crossed over his chest, and his head is resting against the wall. His eyes are closed, and his mouth is slightly open as he speaks. In the foreground, there is a blurred figure. The background is a dark wooden wall with a painting and other decorations. The whole scene gives a quiet, contemplative feeling.

**Side light**

Rim light, **side light**, soft light, medium close-up, dusk, sunset, center composition, warm tones, low saturation, long-focus lens. A woman with fluffy brown curly hair stands elegantly in front of a magnificent stained-glass window. She wears a flowing white long dress, her hair neatly combed back. Her soft facial contours are gently illuminated by the colorful light filtering through the window. The woman is talking to someone off-screen, but a hint of sadness flashes in her eyes, adding a layer of depth to her mysterious temperament. The background is dim, with strong light and shadow contrast, further highlighting the tension of the character's emotions. The stained glass casts colorful light and shadow under the setting sun, enhancing the artistic and atmospheric feel of the overall image.

**High contrast**

**High contrast**, high saturation, short-side composition, sunset, medium-focus, soft light, backlight, warm tones, rim light, medium close-up, daylight, clear sky light. A close-up of a Caucasian woman wearing a yellow plaid dress and earrings. As the low-angle camera rises, the woman looks up, her eyes filled with tears, looking ahead and speaking. In the blurred background is a white brick wall with a painting on it. Below is a wooden cabinet with a vase and a desk lamp, and next to it is a chair. On the left is a brown cabinet with a desk lamp on it, and behind it is an open door with sunlight shining in from outside.

### **Time of day**

**Type**

**Prompt example**

**Video effect**

**Daytime**

Sunrise, **daytime**, soft light, side light, rim light, medium close-up, center composition, warm tones. A Caucasian woman sits on a large white bed, wearing a blue and white plaid cotton top. Her hair is messy and fluffy, with natural golden-brown waves. Her face shows a slight tiredness, and she looks softly toward the camera, as if in conversation. Sunlight streams into the room through light beige curtains, casting soft light and shadow on the bedsheets and walls. White iron railings surround the window, enhancing the quiet and warm indoor atmosphere. The camera focuses on the woman's upper body, with the background blurred to highlight her emotions and the subtle interaction with the environment.

**Night**

Practical light, high saturation, mixed light, **night**, top light, soft light, full shot, symmetrical composition, wide-angle. In dim lighting, an eye-level shot captures a full view of two people sitting at a table talking. The man on the left is wearing a green sweater and white pants, looking intently at the woman on the right. The woman is wearing a striped shirt and blue jeans, holding a book or folder. Their surroundings are filled with a retro atmosphere, with old-fashioned furniture, a chandelier, and curtains in the background. There are also some items on the table.

**Dawn**

**Dawn**, firelight, left-heavy composition, cool tones, low contrast, top-down shot. In the video, the camera slowly pushes in, focusing on the archer's eyes and arrow. The archer is wearing outdoor clothing, their eyes focused. As their fingers release the bowstring, the arrow quickly leaves the bow. The camera continues to push in, capturing the focused expression on the archer's face and the precise moment the arrow begins to move. The background is a simple outdoor scene with trees and grass.

### **Shot size**

**Type**

**Prompt example**

**Video effect**

**Close-up**

An eye-level **close-up** of a man's face. He has blue eyes and a bald head. His face is covered in sweat. He stares at the camera, then lowers his head. White English subtitles "My little Max..." appear at the bottom of the screen. The background is blurred and indistinct. The camera moves up for a top-down close-up of the back of the man's head.

**Close shot**

Rim light, **close shot**, daylight, soft light, low saturation, center composition, daytime. In an eye-level shot, three figures compose the frame. In the center is a boy in a red school uniform, about 15 or 16 years old, with slightly curly blond hair, defined features, and a focused expression. He first looks to the left, then quickly turns his head to the right, and then looks back to the left, his lips opening and closing as if in conversation. His movements are natural and smooth, his eyes changing with the turn of his head. On the right is the blurred face of a woman, only half of her face is visible, about in her thirties, her expression indistinct. The background is a classroom environment, with the walls covered in black and white photo frames. The figures of several students in red school uniforms are faintly visible. In the foreground, a blurred figure quickly passes in front of the frame, creating a sense of dynamism. The lighting is soft and even, and the overall tone is neutral, highlighting the frame's layers and details.

**Wide-angle**

Center composition, **wide-angle**, extreme full shot, backlight, establishing shot, practical light, warm tones. In a sunlit Roman square, actors in togas argue around a marble table. The camera slowly moves to the right, capturing their intense discussion and gestures. In the background, a horse-drawn carriage slowly passes over the cobblestone street, making a creaking sound. A historian's voiceover narrates the political tensions of the time, blending history with a modern perspective. The actors in the frame have serious expressions and natural movements, as if it were a real historical reenactment.

### **Composition**

**Type**

**Prompt example**

**Video effect**

**Center composition**

Soft light, warm hue, medium close-up, **center composition**, dusk, clear daylight, rim light. The camera slowly pushes in for a close-up on the face of a distinguished elderly gentleman. He has striking, long, silver-white hair and a well-groomed, flowing beard. He wears a tailored dark suit with a matching tie. He looks elegant. Soft, warm light envelopes his face. It creates a gentle rim light, like dusk sunlight through a window. His expression is pensive. He gazes into the distance, lost in thought or memory. The background is blurred. This highlights his weathered, wise, and calm face. Every wrinkle seems to tell an untold story.

**Right/Left-weighted composition**

Over-the-shoulder shot, close-up, medium focal length, soft light, low contrast, **left-weighted composition**, overcast light, clean single shot. A straight-on close-up shows a woman walking in an outdoor garden. She wears a light-colored outfit. Her hair is in a netted bun. Her expression is focused and pensive. She looks into the distance. Her head turns slightly, as if observing her surroundings. The background is a manicured garden with neat hedges and a distant sculpture. The scene feels calm and peaceful, perhaps at a country estate.

### **Lens**

#### **Lens focal length**

**Size**

**Prompt example**

**Video effect**

**Long-focus**

Close shot, soft light, daylight, side light, clear sky light, clean single shot, **long-focus lens**, cool tones, center composition. An eye-level close-up of a man's face. He is wearing a black suit and a white shirt with a red tie. His hair is graying, and his eyes are deep-set, with two wrinkles in the eye sockets. His lips are tightly closed, his expression serious and focused. The background is blurry, but it can be seen that it is an indoor environment, possibly an office or a conference room. There is a window behind the man, and the outside world can be seen through the glass.

**Ultra-wide-angle fisheye**

Balanced composition, top light, warm tones, low contrast, **ultra-wide-angle fisheye**, group shot. A group of Caucasian men and women gather around a circular hole in a white wall, looking down. In a close-up, low-angle shot, their expressions vary, showing surprise, curiosity, and excitement. One of them is holding a brown paper bag and opening it. He is wearing black clothes and has golden hair. The others are gathered around him, their faces illuminated by the light, appearing very clear. The wall in the background is white, creating a sharp contrast with the people.

#### **Camera angle**

**Type**

**Prompt example**

**Video effect**

**Over-the-shoulder angle**

Two-shot, long-focus, warm tones, **over-the-shoulder shot**, high contrast, soft light, daylight, daytime, close shot, center composition. A girl sits by a window. In an eye-level view, she is wearing a red and black striped sweater with a blue turtleneck underneath. Her short golden hair hangs smoothly behind her ears. She looks gently at the person off-camera with a slight smile, her expression natural and friendly. Her hands are gently folded on the table, where an open book and a white ceramic cup with steam rising from it are placed. The background is blurred, with soft daylight streaming in through the window. Faint warm yellow lights and scattered red decorations are visible, creating a cozy atmosphere.

**High-angle**

**High-angle shot**, daylight, ultra-wide-angle fisheye, clean single shot, mixed tones, daytime. A top-down close-up of a man sitting in the back seat of an orange taxi. He is wearing a black jacket and a gray sweater. His gaze is directed out the car window, his expression serious and thoughtful. The taxi is in motion, and the background is a city street where other vehicles and buildings can be seen. The man has a silver stand with two handles on his lap. His hands are on his knees, his fingers lightly tapping them.

**Aerial shot**

Warm tones, extreme full shot, **aerial shot**, clear sky light, hard light, daytime, establishing shot. In a barren desert, a black SUV is speeding down a highway. In a top-down shot, the vehicle is driving on the left side of the road. It has a luggage rack and a red taillight on the roof. The camera slowly pushes forward. In front of the vehicle is a vast expanse of yellow sand dunes, with a few mountain peaks visible in the distance. The sky is pale blue, and sunlight shines through the clouds, bringing a touch of warmth to this desolate land. The sides of the road are dry grassland, dotted with some low shrubs.

#### **Shot type**

**Type**

**Prompt example**

**Video effect**

**Clean single shot**

Close shot, top-down angle shot, top light, soft light, dawn, low contrast, high-angle shot, low saturation, daylight, **clean single shot**, long-focus, fluorescent light, cool tones, center composition. In a dim environment, a Caucasian woman floats on her back in the water. In a top-down close-up shot, she has short brown hair and a few freckles on her face. As the camera pans down, she turns her head to the right, and ripples appear on the water's surface. The blurred background is pitch black, with only faint light illuminating the woman's face and a part of the water's surface, which appears blue. The woman is wearing a blue slip, her shoulders bare.

**Two-shot**

**Two-shot**, daylight, soft light, side light, medium shot, over-the-shoulder shot, right-heavy composition, medium-focus, warm tones. A close-up of a man wearing a well-tailored dark suit with a light blue shirt and a dark tie. He faces the camera, his head slightly turned, talking to a person on the left of the camera, his expression natural and calm. On the left of the camera is the blurred side profile of a woman. She is wearing a gray dress, her yellow hair in a neat low bun, her body slightly leaning forward, as if listening or responding to the man. The background is a white wall with a half-open gray wooden door, all blurred to highlight the subject. The man stands tall, his left hand lightly on his waist, his right hand making a slight gesture, showing natural dynamics in conversation.

**Group shot**

Medium-focus, soft light, warm tones, firelight, **group shot**. In a dimly lit church, a woman in a black robe and veil holds a lit white candle. In a close-up, eye-level shot, her expression is serious as she walks slowly forward. The camera moves back with her, and in the blurred background, other parishioners can be seen holding candles and sitting on chairs. They are wearing formal clothes, their expressions solemn and respectful. On the distant wall is an arched window, through which a faint light shines.

**Establishing shot**

High contrast, **establishing shot**, hard light. In a black and white alley, rain glistens on the pavement under a streetlamp. A figure in a trench coat walks into the center of the frame, holding a cigarette, with wisps of smoke slowly drifting out. A neon sign flickers silently above a dripping fire escape. The camera slowly moves to the right, capturing the detail of raindrops dripping from the fire escape. The walls and ground in the background reflect the faint light.

### **Tone**

**Type**

**Prompt example**

**Video effect**

**Warm tones**

Left-heavy composition, sunset, soft light, **warm tones**, medium close-up. A woman wears a well-tailored dark brown wool coat with a fur collar that frames her face. Her long golden hair is styled in a retro updo. She sits on a wooden bench, leaning slightly toward another blurred female character. They are holding hot drinks and talking softly. As the conversation unfolds, her smile gradually widens, her eyes crinkle, and her expression fills with genuine joy. The blurred crowd in the background moves slowly, creating a warm and intimate atmosphere. The setting sun's glow on her profile and the soft light enhance the changes in her expression and the flow of emotion.

**Low saturation**

Rim light, close shot, soft light, **low saturation**, cool tones, center composition. In an eye-level shot, the facial contours of an elderly man are clear. He is wearing a wide-brimmed black hat, with long white hair peeking out from under the brim and falling over the collar of his gray wool coat. His eyes are slightly closed, his lips slightly parted, as if he is whispering something. The background is blurred, showing a cool-toned city streetscape. A hand extends from the right side of the frame, holding a black pistol, the muzzle gently pressed against the old man's temple, creating a tense and quiet atmosphere.

## **Dynamic control**

> The following video effects were all generated using Wan 2.2.

### **Motion**

**Type**

**Example prompt**

**Video effect**

**Street dance**

A group of energetic and diverse hip-hop dancers perform a **street dance** on a wide stage lit by bright neon lights. Side lighting surrounds their figures, creating a halo effect. A wide cinematic shot captures their synchronized moves, vibrant energy, and youthful expressions. Fast-paced camera work matches the beat of the music, showing complex footwork, explosive power, and team chemistry.

**Running**

A **running** scenario. A sprinter's face is contorted with extreme effort, muscles tense and teeth clenched. He wears a lightweight track vest, shorts, and professional spikes. He sprints at full speed toward the finish line of a 100-meter track. His body leans forward. His head juts out. His arms swing with maximum range and frequency. One leg pushes off explosively as the other strides far forward. His chest breaks the finish line tape. The background is a blurred track with viewers. A timer shows the crucial time. The finishing tape is clearly visible.

**Table tennis**

An eye-level, close-up shot of an indoor **table tennis match**. Two men are playing a heated game. One man in an orange shirt swings his paddle to hit the ball. The other man, in a gray shirt, focuses on receiving the shot. Nearby, a spectator in a blue shirt watches intently with his arms crossed. The scene is filmed from a fixed angle with no camera movement. The indoor lighting is soft. In the background, spectator seats and sports equipment are faintly visible. Documentary photography style. Close-up.

**Skiing**

A **snowboarder** completes a difficult aerial rotation in a half-pipe. The video is shot from a follow-cam perspective with a wide-angle lens, creating an immersive and visually striking experience. The snowboarder launches from the snow ramp, performs a graceful flip-and-grab against the blue sky, and lands steadily in one smooth motion. The bright sun, a background of majestic snowy mountains, and the snowboarder's colorful gear and board create a magnificent picture of power and beauty. It perfectly showcases the speed, skill, and free spirit of snowboarding.

### **Character emotion**

**Type**

**Prompt example**

**Video effect**

**Happiness**

An old man with a kind face, wearing a straw hat and overalls, stands in a sunny vegetable garden. He holds a ripe tomato in his hand, very **happy**, his eyes sparkling with pure joy.

**Surprise**

A young girl pushes open a door with a **surprised** expression on her face, seeing a completely unexpected scene.

### **Basic camera movement**

**Type**

**Prompt example**

**Video effect**

**Camera pulls out**

A soft, round animated character with a curious expression wakes up to find their bed is a giant golden corn kernel. The **camera pulls out** to reveal that the room is a huge, echoing corn silo, with corn kernels piled up in towering walls. A warm sunbeam shines in from a high window, casting long shadows on the floor.

**Camera moves left**

A shop window on a bustling city commercial street.

The **camera moves left**, slowly panning across the window of a luxury store, which displays glamorous models and expensive goods. The camera continues to move left, away from the window, to reveal a ragged homeless person shivering in a corner of a nearby alley.

### **Advanced camera movement**

**Type**

**Prompt example**

**Video effect**

**Compound camera movement**

**Drone shot, fast fly-through,** looking up from inside a circular pipe covered with frost and cracks. Then, the camera quickly flies up and out of the pipe, revealing a vast polar snowfield. It is sunrise or sunset, and golden sunlight bathes the land. In the snow, next to a building, several workers in orange cold-proof suits seem to be operating equipment that is emitting white steam. The **camera tilts up**. This perspective is from a hot air balloon that is ascending. The hot air balloon trails a long steam tail as it flies toward the sky colored by the morning or evening glow. Finally, the video shows the full view of the hot air balloon-a blue hot air balloon with the white letters "CNG" printed on it, flying higher and higher in the magnificent polar landscape.

**Orbiting camera movement**

Backlight, medium shot, sunset, soft light, silhouette, center composition, **orbiting camera movement**. The camera follows the character from behind to the front, revealing a rugged cowboy tightly gripping his holster, his gaze alert as he patrols a desolate western ghost town. The cowboy wears a worn brown leather jacket, a bullet belt around his waist, and his hat is pulled down low. His silhouette is softly outlined by the setting sun. Behind him are dilapidated wooden buildings with broken windows, glass shards scattered on the ground, and dust swirling in the wind. The camera slowly circles from behind him to the front. The light comes from behind, creating a strong dramatic contrast. The image has warm tones, enhancing the desolate atmosphere.

## **Stylization**

> The following video effects were all generated using Wan 2.2.

### **Visual style**

**Type**

**Prompt example**

**Video effect**

**Felt style**

Golden hour sunlight, soft lighting, medium wide-angle, low-angle perspective, warm tones. A whimsical village is nestled at the bottom of a giant hollow tree trunk, surrounded by lush greenery and mushrooms. **Small felt gnomes** wearing wool hats drive a miniature wooden train on moss-covered tracks. The train is pulled by a small engine and carries acorns and berries in small carts. Sunlight filters through the leaves above, casting soft shadows that highlight the rich textures of the bark and leaves.

**3D cartoon**

**3D cartoon style**. This is a surreal dream where everything is made of corn. The main characters ride a corn train through giant corn cobs and kernels. The scene is bathed in warm golden light, enhancing the dreamlike quality. The characters wear rustic clothing and show expressions of wonder and curiosity as they navigate this peculiar world. The corn train runs smoothly, its wheels made of perfectly shaped corn kernels, creating a whimsical and charming atmosphere.

**Pixel style**

In a colorful universe, a player-controlled **pixel character** travels between planets of various shapes and unique color tones. Each planet has strange terrain and alien creatures. In a close-up shot, the player character stands in the center of the frame, talking to a friendly alien creature. This alien has a round body and large eyes, appearing very cute. Above the frame, pixelated interstellar storms and energy vortex effects slowly rotate, bringing a sense of dynamism. The overall style is retro yet futuristic, with bright and vibrant colors.

**Puppet animation**

In a dimly lit Victorian-style living room, lace curtains flutter gently. Felt and wooden puppets sit around a round table, their figures illuminated by flickering candlelight. A whisper trembles a porcelain teacup, and the eyes in a painting shift uneasily. Each slow and deliberate frame of **puppet animation** heightens the tension. The camera slowly pans to the right, showing every subtle movement of the puppets, enhancing the eerie atmosphere. The furniture and decorations in the background are clearly detailed.

**Claymation style**

**Claymation style**. In a crevice of an ancient tree root, a miniature elf village is hidden, built from acorns, bark, dried flowers, and moss. Several elf residents made of small stones and tender shoots are busy. A ray of sunlight shines through a gap in the leaves, illuminating the village's central square like a stage spotlight.

\=

**Black and white animation**

This is a retro-style **black and white animation** clip. The scene is set in a moving train car where a wedding is taking place. In the center of the car, a newlywed couple happily cuddles together. On the table in front of them is a beautiful three-tiered wedding cake. The guests on both sides are smiling, and the atmosphere is warm and joyful. Suddenly, the train seems to shake violently. The tablecloth is instantly pulled away, and the cake and bouquets fall. This sudden change shatters the tranquility. Everyone's expression instantly changes from joy to exaggerated shock, and their bodies sway due to inertia, creating a chaotic scene full of drama and comedy.

### **Special effect shots**

**Type**

**Prompt example**

**Video effect**

**Tilt-shift photography**

**Tilt-shift photography**. A high-angle view overlooks a corner of the city, focusing on a bustling intersection where vehicles and pedestrians intertwine like a dynamic urban tapestry. Traffic lights flash alternately, guiding the rhythm of the traffic. The edges of the buildings are sharp, and the colors are vibrant, like an exquisite model. On both sides of the street, shop signs are numerous, and neon lights flicker in the night, adding a magical sense of a miniature world. The entire scene is carefully rendered to highlight the unique visual impact of the tilt-shift effect, as if observing a busy and orderly mini urban ecosystem.

**Time-lapse photography**

**Time-lapse photography**, dusk, sunset, rim light, medium full shot, side light, warm tones, soft light, moderate contrast, center composition. In the shot, an anthropomorphic metal robot walks on a busy city street. Its shell has a silver-gray luster, its body structure is precise, and there are fine mechanical textures at the joints. The robot is about two meters tall, with an oval head and two faintly glowing blue sensors as eyes. It swings its arms naturally, its steps are steady, and its leg joints make a slight hydraulic sound as it walks. On both sides of the street are tall glass curtain wall buildings. The setting sun's glow falls on the buildings and the robot, creating a soft contour light. Pedestrians shuttle in the background, and the blurred crowd adds to the urban rhythm. The ground is covered with dark gray asphalt, with some areas reflecting the sky and buildings.
