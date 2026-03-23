```
  <!doctype html>
  <html
    lang="en-US"
    data-theme="light dark"
    data-renderer="Doc"
    
    
  >
    
      
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      Cross-Origin Resource Sharing (CORS) - HTTP | MDN
      
      try {
```

document.documentElement.dataset.theme =
localStorage.getItem("theme") || "light dark";
} catch (error) {
console.warn("Unable to set theme", error);
}

try {
if (localStorage.getItem("nop") === "yes") {
document.documentElement.dataset\["nop"] = "yes";
}
} catch (error) {
console.warn("Unable to set nop", error);
}

```
      <link
            rel="preload"
            href="/static/client/jetbrains-mono-latin.119994ed445212c7.woff2"
            as="font"
            type="font/woff2"
            crossorigin="anonymous"
            fetchpriority="low"
          /><link
            rel="preload"
            href="/static/client/inter-latin.9a3b1bc220d426ef.woff2"
            as="font"
            type="font/woff2"
            crossorigin="anonymous"
            fetchpriority="low"
          />
      
      
<link
  rel="icon"
  sizes="32x32"
  href="https://developer.mozilla.org/favicon.ico"
/>
<link
  rel="icon"
  type="image/svg+xml"
  href="https://developer.mozilla.org/favicon.svg"
/>

      <link
        rel="canonical"
        href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS"
      />
      
      
      <link
        rel="search"
        type="application/opensearchdescription+xml"
        href="/opensearch.xml"
        title="MDN Web Docs"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="MDN Blog RSS Feed"
        href="https://developer.mozilla.org/en-US/blog/rss.xml"
      />
    
    
  
    
  
    <a href="#content"
      >Skip to main content</a
    >
  
  
    <a href="#search"
      >Skip to search</a
    >
  

    
      <mdn-placement-top></mdn-placement-top>
    
    
      
  
    
  
    <svg
      class="logo__image"
      width="83"
      height="24"
      viewBox="0 0 83 24"
      role="img"
    >
      MDN
      <path
        class="logo__letter"
        d="M9.4 0 2.81 21.17H.12L6.69 0H9.4Zm2.38 0v21.17H9.4V0h2.4Zm9.27 0-6.56 21.17H11.8L18.36 0h2.69Zm2.39 0v21.17h-2.4V0h2.4Z"
      />
      <path
        class="logo__text"
        d="M45.55 16.83h-3.93v-1.27h.87v-3.63c0-.85-.16-1.45-.48-1.82a1.65 1.65 0 0 0-1.3-.52c-.74 0-1.3.25-1.66.78a2.98 2.98 0 0 0-.58 1.58v3.59h1.38v1.26h-3.93v-1.26h.87v-3.6c0-.88-.16-1.48-.48-1.83a1.7 1.7 0 0 0-1.29-.52 1.93 1.93 0 0 0-1.65.75 2.85 2.85 0 0 0-.58 1.6v3.62h1.59v1.27h-4.64v-1.27h1.37V9.75h-1.4V8.46h3.08v1.47c.28-.48.62-.87 1.08-1.2a3 3 0 0 1 1.68-.45c.67 0 1.22.16 1.73.48.5.32.85.8 1.03 1.47.25-.57.62-1.03 1.13-1.4.5-.37 1.1-.55 1.81-.55.8 0 1.5.25 2.05.75.55.51.85 1.3.85 2.35v4.18h1.4v1.27Zm9.77 0H52.3v-1.66c-.27.51-.66.95-1.13 1.29-.56.4-1.23.59-1.9.55-1.11 0-2-.37-2.67-1.12a4.41 4.41 0 0 1-1-3.06c0-1.15.3-2.2.93-3.15.6-.94 1.58-1.43 2.94-1.43 1.36 0 2.25.5 2.83 1.5V5.22h-2V3.93h3.63v11.63h1.38v1.27Zm-3.06-3.86v-1.02a2.28 2.28 0 0 0-.73-1.67 2.4 2.4 0 0 0-1.66-.65 2.18 2.18 0 0 0-1.88.9 3.63 3.63 0 0 0-.65 2.2c0 .95.23 1.68.7 2.19.45.5 1.03.76 1.7.76.73 0 1.33-.3 1.79-.88.48-.6.71-1.21.73-1.83Zm14.14 3.86h-4.43v-1.27h1.37v-3.63c0-.85-.16-1.45-.5-1.82a1.68 1.68 0 0 0-1.31-.52c-.71 0-1.29.23-1.7.69a2.52 2.52 0 0 0-.67 1.6v3.66h1.38v1.26H56.1v-1.26h1.38v-5.8h-1.42V8.47h3.12V9.9c.6-1.06 1.57-1.6 2.92-1.6.83 0 1.54.26 2.12.77.57.5.85 1.28.85 2.34v4.19h1.38v1.24h-.05Z"
      />
      
    
  

    
      <mdn-search-button>.mdn-search-button{align-items:center;background-color:var(--color-background-page);border:1px solid var(--color-border-primary);border-radius:var(--radius-full);color:var(--color-text-primary);cursor:pointer;display:flex;justify-content:space-between;margin:0;padding:.25rem .25rem .25rem .75rem;width:5rem}.mdn-search-button:hover{background-color:var(--color-background-secondary)}.mdn-search-button:before{content:"";height:18px;width:15px;--csstools-light-dark-toggle-95231fd5-0:var(--csstools-color-scheme--light) var(--color-blue-80);border-bottom:2px solid var(--csstools-light-dark-toggle-95231fd5-0,var(--color-blue-50))}@supports (color:light-dark(red,red)){.mdn-search-button:before{border-bottom:2px solid light-dark(var(--color-blue-50),var(--color-blue-80))}}<button
  class="mdn-search-button"
  title="Search the site"
  
  data-glean-id="quick-search-open: menu"
>
  
</mdn-search-button>
    
    <button
      class="navigation__button"
      type="button"
      aria-expanded="false"
      aria-controls="navigation__popup"
      aria-label="Toggle navigation"
    >
    
      
  
    
        <mdn-dropdown>:host{display:contents}:host(:not([loaded],:focus-within)) slot[name=dropdown]{display:none}
  
  

              
                <span class="menu__tab-label"
                      >HTML</span
                    >
              
              
                
                  <a
    
    href="/en-US/docs/Web/HTML"
    
    
    data-glean-id="menu_click_menu: html -&gt; /en-US/docs/Web/HTML"
    >HTML: Markup language</a
  >
                
                
                  
                          HTML reference
                          
                      
                            <a
    
    href="/en-US/docs/Web/HTML/Reference/Elements"
    
    
    data-glean-id="menu_click_submenu: html -&gt; /en-US/docs/Web/HTML/Reference/Elements"
    >Elements</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/HTML/Reference/Global_attributes"
    
    
    data-glean-id="menu_click_submenu: html -&gt; /en-US/docs/Web/HTML/Reference/Global_attributes"
    >Global attributes</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/HTML/Reference/Attributes"
    
    
    data-glean-id="menu_click_submenu: html -&gt; /en-US/docs/Web/HTML/Reference/Attributes"
    >Attributes</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/HTML/Reference"
    aria-label="See all HTML references"
    title="See all HTML references"
    data-glean-id="menu_click_submenu: html -&gt; /en-US/docs/Web/HTML/Reference"
    >See all…</a
  >
                          
                    
                        
                          HTML guides
                          
                      
                            <a
    
    href="/en-US/docs/Web/HTML/Guides/Responsive_images"
    
    
    data-glean-id="menu_click_submenu: html -&gt; /en-US/docs/Web/HTML/Guides/Responsive_images"
    >Responsive images</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/HTML/Guides/Cheatsheet"
    
    
    data-glean-id="menu_click_submenu: html -&gt; /en-US/docs/Web/HTML/Guides/Cheatsheet"
    >HTML cheatsheet</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/HTML/Guides/Date_and_time_formats"
    
    
    data-glean-id="menu_click_submenu: html -&gt; /en-US/docs/Web/HTML/Guides/Date_and_time_formats"
    >Date &amp; time formats</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/HTML/Guides"
    aria-label="See all HTML guides"
    title="See all HTML guides"
    data-glean-id="menu_click_submenu: html -&gt; /en-US/docs/Web/HTML/Guides"
    >See all…</a
  >
                          
                    
                        
                          Markup languages
                          
                      
                            <a
    
    href="/en-US/docs/Web/SVG"
    
    
    data-glean-id="menu_click_submenu: html -&gt; /en-US/docs/Web/SVG"
    >SVG</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/MathML"
    
    
    data-glean-id="menu_click_submenu: html -&gt; /en-US/docs/Web/MathML"
    >MathML</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/XML"
    
    
    data-glean-id="menu_click_submenu: html -&gt; /en-US/docs/Web/XML"
    >XML</a
  >
                          
                    
                        
                
              
            </mdn-dropdown>
      
        <mdn-dropdown>:host{display:contents}:host(:not([loaded],:focus-within)) slot[name=dropdown]{display:none}
  
  

              
                <span class="menu__tab-label"
                      >CSS</span
                    >
              
              
                
                  <a
    
    href="/en-US/docs/Web/CSS"
    
    
    data-glean-id="menu_click_menu: css -&gt; /en-US/docs/Web/CSS"
    >CSS: Styling language</a
  >
                
                
                  
                          CSS reference
                          
                      
                            <a
    
    href="/en-US/docs/Web/CSS/Reference/Properties"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/Reference/Properties"
    >Properties</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Reference/Selectors"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/Reference/Selectors"
    >Selectors</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Reference/At-rules"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/Reference/At-rules"
    >At-rules</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Reference/Values"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/Reference/Values"
    >Values</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Reference"
    aria-label="See all CSS references"
    title="See all CSS references"
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/Reference"
    >See all…</a
  >
                          
                    
                        
                          CSS guides
                          
                      
                            <a
    
    href="/en-US/docs/Web/CSS/Guides/Box_model/Introduction"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/Guides/Box_model/Introduction"
    >Box model</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Guides/Animations/Using"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/Guides/Animations/Using"
    >Animations</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts"
    >Flexbox</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Guides/Colors/Applying_color"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/Guides/Colors/Applying_color"
    >Colors</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Guides"
    aria-label="See all CSS guides"
    title="See all CSS guides"
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/Guides"
    >See all…</a
  >
                          
                    
                        
                          Layout cookbook
                          
                      
                            <a
    
    href="/en-US/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/How_to/Layout_cookbook/Column_layouts"
    >Column layouts</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element"
    >Centering an element</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/How_to/Layout_cookbook/Card"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/How_to/Layout_cookbook/Card"
    >Card component</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/How_to/Layout_cookbook"
    
    
    data-glean-id="menu_click_submenu: css -&gt; /en-US/docs/Web/CSS/How_to/Layout_cookbook"
    >See all…</a
  >
                          
                    
                        
                
              
            </mdn-dropdown>
      
        <mdn-dropdown>:host{display:contents}:host(:not([loaded],:focus-within)) slot[name=dropdown]{display:none}
  
  

              
                <span class="menu__tab-label" data-type="long"
                        >JavaScript</span
                      ><span class="menu__tab-label" data-type="short"
                        >JS</span
                      >
              
              
                
                  <a
    
    href="/en-US/docs/Web/JavaScript"
    
    
    data-glean-id="menu_click_menu: javascript -&gt; /en-US/docs/Web/JavaScript"
    >JavaScript: Scripting language</a
  >
                
                
                  
                          JS reference
                          
                      
                            <a
    
    href="/en-US/docs/Web/JavaScript/Reference/Global_Objects"
    
    
    data-glean-id="menu_click_submenu: javascript -&gt; /en-US/docs/Web/JavaScript/Reference/Global_Objects"
    >Standard built-in objects</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/JavaScript/Reference/Operators"
    
    
    data-glean-id="menu_click_submenu: javascript -&gt; /en-US/docs/Web/JavaScript/Reference/Operators"
    >Expressions &amp; operators</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/JavaScript/Reference/Statements"
    
    
    data-glean-id="menu_click_submenu: javascript -&gt; /en-US/docs/Web/JavaScript/Reference/Statements"
    >Statements &amp; declarations</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/JavaScript/Reference/Functions"
    
    
    data-glean-id="menu_click_submenu: javascript -&gt; /en-US/docs/Web/JavaScript/Reference/Functions"
    >Functions</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/JavaScript/Reference"
    aria-label="See all JavaScript references"
    title="See all JavaScript references"
    data-glean-id="menu_click_submenu: javascript -&gt; /en-US/docs/Web/JavaScript/Reference"
    >See all…</a
  >
                          
                    
                        
                          JS guides
                          
                      
                            <a
    
    href="/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"
    
    
    data-glean-id="menu_click_submenu: javascript -&gt; /en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"
    >Control flow &amp; error handing</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
    
    
    data-glean-id="menu_click_submenu: javascript -&gt; /en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
    >Loops and iteration</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/JavaScript/Guide/Working_with_objects"
    
    
    data-glean-id="menu_click_submenu: javascript -&gt; /en-US/docs/Web/JavaScript/Guide/Working_with_objects"
    >Working with objects</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/JavaScript/Guide/Using_classes"
    
    
    data-glean-id="menu_click_submenu: javascript -&gt; /en-US/docs/Web/JavaScript/Guide/Using_classes"
    >Using classes</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/JavaScript/Guide"
    aria-label="See all JavaScript guides"
    title="See all JavaScript guides"
    data-glean-id="menu_click_submenu: javascript -&gt; /en-US/docs/Web/JavaScript/Guide"
    >See all…</a
  >
                          
                    
                        
                
              
            </mdn-dropdown>
      
        <mdn-dropdown>:host{display:contents}:host(:not([loaded],:focus-within)) slot[name=dropdown]{display:none}
  
  

              
                <span class="menu__tab-label"
                      >Web APIs</span
                    >
              
              
                
                  <a
    
    href="/en-US/docs/Web/API"
    
    
    data-glean-id="menu_click_menu: webapis -&gt; /en-US/docs/Web/API"
    >Web APIs: Programming interfaces</a
  >
                
                
                  
                          Web API reference
                          
                      
                            <a
    
    href="/en-US/docs/Web/API/File_System_API"
    
    
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API/File_System_API"
    >File system API</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/API/Fetch_API"
    
    
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API/Fetch_API"
    >Fetch API</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/API/Geolocation_API"
    
    
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API/Geolocation_API"
    >Geolocation API</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/API/HTML_DOM_API"
    
    
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API/HTML_DOM_API"
    >HTML DOM API</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/API/Push_API"
    
    
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API/Push_API"
    >Push API</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/API/Service_Worker_API"
    
    
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API/Service_Worker_API"
    >Service worker API</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/API"
    aria-label="See all Web API guides"
    title="See all Web API guides"
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API"
    >See all…</a
  >
                          
                    
                        
                          Web API guides
                          
                      
                            <a
    
    href="/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API"
    
    
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API"
    >Using the Web animation API</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/API/Fetch_API/Using_Fetch"
    
    
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API/Fetch_API/Using_Fetch"
    >Using the Fetch API</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/API/History_API/Working_with_the_History_API"
    
    
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API/History_API/Working_with_the_History_API"
    >Working with the History API</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API"
    
    
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API"
    >Using the Web speech API</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
    
    
    data-glean-id="menu_click_submenu: webapis -&gt; /en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
    >Using web workers</a
  >
                          
                    
                        
                
              
            </mdn-dropdown>
      
        <mdn-dropdown>:host{display:contents}:host(:not([loaded],:focus-within)) slot[name=dropdown]{display:none}
  
  

              
                <span class="menu__tab-label"
                      >All</span
                    >
              
              
                
                  <a
    
    href="/en-US/docs/Web"
    
    
    data-glean-id="menu_click_menu: all -&gt; /en-US/docs/Web"
    >All web technology</a
  >
                
                
                  
                          Technologies
                          
                      
                            <a
    
    href="/en-US/docs/Web/Accessibility"
    
    
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/Web/Accessibility"
    >Accessibility</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/HTTP"
    
    
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/Web/HTTP"
    >HTTP</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/URI"
    
    
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/Web/URI"
    >URI</a
  >
                          
                            <a
    
    href="/en-US/docs/Mozilla/Add-ons/WebExtensions"
    
    
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/Mozilla/Add-ons/WebExtensions"
    >Web extensions</a
  >
                          
                            <a
    
    href="/en-US/docs/WebAssembly"
    
    
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/WebAssembly"
    >WebAssembly</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/WebDriver"
    
    
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/Web/WebDriver"
    >WebDriver</a
  >
                          
                            <a
    
    href="/en-US/docs/Web"
    aria-label="See all web technology references"
    title="See all web technology references"
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/Web"
    >See all…</a
  >
                          
                    
                        
                          Topics
                          
                      
                            <a
    
    href="/en-US/docs/Web/Media"
    
    
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/Web/Media"
    >Media</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/Performance"
    
    
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/Web/Performance"
    >Performance</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/Privacy"
    
    
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/Web/Privacy"
    >Privacy</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/Security"
    
    
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/Web/Security"
    >Security</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/Progressive_web_apps"
    
    
    data-glean-id="menu_click_submenu: all -&gt; /en-US/docs/Web/Progressive_web_apps"
    >Progressive web apps</a
  >
                          
                    
                        
                
              
            </mdn-dropdown>
      
        <mdn-dropdown>:host{display:contents}:host(:not([loaded],:focus-within)) slot[name=dropdown]{display:none}
  
  

              
                <span class="menu__tab-label"
                      >Learn</span
                    >
              
              
                
                  <a
    
    href="/en-US/docs/Learn_web_development"
    
    
    data-glean-id="menu_click_menu: learn -&gt; /en-US/docs/Learn_web_development"
    >Learn web development</a
  >
                
                
                  
                          Frontend developer course
                          
                      
                            <a
    
    href="/en-US/docs/Learn_web_development/Getting_started"
    
    
    data-glean-id="menu_click_submenu: learn -&gt; /en-US/docs/Learn_web_development/Getting_started"
    >Getting started modules</a
  >
                          
                            <a
    
    href="/en-US/docs/Learn_web_development/Core"
    
    
    data-glean-id="menu_click_submenu: learn -&gt; /en-US/docs/Learn_web_development/Core"
    >Core modules</a
  >
                          
                            <a
                                    class=""
                                    
                                    href="/en-US/curriculum/"
                                    
                                    
                                    data-glean-id="menu_click_submenu: learn -&gt; /en-US/curriculum/"
                                    >MDN Curriculum</a
                                  >
                          
                            <a
                                    class="external"
                                    
                                    href="https://scrimba.com/frontend-path-c0j?via=mdn-learn-navbar"
                                    
                                    
                                    data-glean-id="menu_click_submenu: learn -&gt; https://scrimba.com/frontend-path-c0j?via=mdn-learn-navbar"
                                    >Check out the video course from Scrimba, our partner</a
                                  >
                          
                    
                        
                          Learn HTML
                          
                      
                            <a
    
    href="/en-US/docs/Learn_web_development/Core/Structuring_content"
    
    
    data-glean-id="menu_click_submenu: learn -&gt; /en-US/docs/Learn_web_development/Core/Structuring_content"
    >Structuring content with HTML module</a
  >
                          
                    
                        
                          Learn CSS
                          
                      
                            <a
    
    href="/en-US/docs/Learn_web_development/Core/Styling_basics"
    
    
    data-glean-id="menu_click_submenu: learn -&gt; /en-US/docs/Learn_web_development/Core/Styling_basics"
    >CSS styling basics module</a
  >
                          
                            <a
    
    href="/en-US/docs/Learn_web_development/Core/CSS_layout"
    
    
    data-glean-id="menu_click_submenu: learn -&gt; /en-US/docs/Learn_web_development/Core/CSS_layout"
    >CSS layout module</a
  >
                          
                    
                        
                          Learn JavaScript
                          
                      
                            <a
    
    href="/en-US/docs/Learn_web_development/Core/Scripting"
    
    
    data-glean-id="menu_click_submenu: learn -&gt; /en-US/docs/Learn_web_development/Core/Scripting"
    >Dynamic scripting with JavaScript module</a
  >
                          
                    
                        
                
              
            </mdn-dropdown>
      
        <mdn-dropdown>:host{display:contents}:host(:not([loaded],:focus-within)) slot[name=dropdown]{display:none}
  
  

              
                <span class="menu__tab-label"
                      >Tools</span
                    >
              
              
                
                  Discover our tools
                
                
                  
                      
                            <a
                                    class="menu__panel-icon"
                                    data-icon="circle-play"
                                    href="/en-US/play"
                                    
                                    
                                    data-glean-id="menu_click_submenu: tools -&gt; /en-US/play"
                                    >Playground</a
                                  >
                          
                            <a
                                    class="menu__panel-icon"
                                    data-icon="shield-check"
                                    href="/en-US/observatory"
                                    
                                    
                                    data-glean-id="menu_click_submenu: tools -&gt; /en-US/observatory"
                                    >HTTP Observatory</a
                                  >
                          
                    
                      
                            <a
    
    href="/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator"
    
    
    data-glean-id="menu_click_submenu: tools -&gt; /en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator"
    >Border-image generator</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator"
    
    
    data-glean-id="menu_click_submenu: tools -&gt; /en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator"
    >Border-radius generator</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator"
    
    
    data-glean-id="menu_click_submenu: tools -&gt; /en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator"
    >Box-shadow generator</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Guides/Colors/Color_format_converter"
    
    
    data-glean-id="menu_click_submenu: tools -&gt; /en-US/docs/Web/CSS/Guides/Colors/Color_format_converter"
    >Color format converter</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Guides/Colors/Color_mixer"
    
    
    data-glean-id="menu_click_submenu: tools -&gt; /en-US/docs/Web/CSS/Guides/Colors/Color_mixer"
    >Color mixer</a
  >
                          
                            <a
    
    href="/en-US/docs/Web/CSS/Guides/Shapes/Shape_generator"
    
    
    data-glean-id="menu_click_submenu: tools -&gt; /en-US/docs/Web/CSS/Guides/Shapes/Shape_generator"
    >Shape generator</a
  >
                          
                    
                
              
            </mdn-dropdown>
      
        <mdn-dropdown>:host{display:contents}:host(:not([loaded],:focus-within)) slot[name=dropdown]{display:none}
  
  

              
                <span class="menu__tab-label"
                      >About</span
                    >
              
              
                
                  Get to know MDN better
                
                
                  
                      
                            <a
                                    class="menu__panel-icon"
                                    data-icon="mdn-m"
                                    href="/en-US/about"
                                    
                                    
                                    data-glean-id="menu_click_submenu: about -&gt; /en-US/about"
                                    >About MDN</a
                                  >
                          
                            <a
                                    class="menu__panel-icon"
                                    data-icon="chart-no-axes-combined"
                                    href="/en-US/advertising"
                                    
                                    
                                    data-glean-id="menu_click_submenu: about -&gt; /en-US/advertising"
                                    >Advertise with us</a
                                  >
                          
                    
                      
                            <a
                                    class="menu__panel-icon"
                                    data-icon="users"
                                    href="/en-US/community"
                                    
                                    
                                    data-glean-id="menu_click_submenu: about -&gt; /en-US/community"
                                    >Community</a
                                  >
                          
                            <a
                                    class="menu__panel-icon external"
                                    data-icon="github"
                                    href="https://github.com/mdn"
                                    
                                    
                                    data-glean-id="menu_click_submenu: about -&gt; https://github.com/mdn"
                                    >MDN on GitHub</a
                                  >
                          
                    
                
              
            </mdn-dropdown>
      
        <a
              class="menu__tab-link"
              href="/en-US/blog/"
              data-glean-id="menu_click_link: top-level -&gt; /en-US/blog/"
              >Blog</a
            >
      
  

      
        <mdn-search-button>.mdn-search-button{align-items:center;background-color:var(--color-background-page);border:1px solid var(--color-border-primary);border-radius:var(--radius-full);color:var(--color-text-primary);cursor:pointer;display:flex;justify-content:space-between;margin:0;padding:.25rem .25rem .25rem .75rem;width:5rem}.mdn-search-button:hover{background-color:var(--color-background-secondary)}.mdn-search-button:before{content:"";height:18px;width:15px;--csstools-light-dark-toggle-95231fd5-0:var(--csstools-color-scheme--light) var(--color-blue-80);border-bottom:2px solid var(--csstools-light-dark-toggle-95231fd5-0,var(--color-blue-50))}@supports (color:light-dark(red,red)){.mdn-search-button:before{border-bottom:2px solid light-dark(var(--color-blue-50),var(--color-blue-80))}}<button
  class="mdn-search-button"
  title="Search the site"
  
  data-glean-id="quick-search-open: menu"
>
  
</mdn-search-button>
      
      <mdn-user-menu></mdn-user-menu>
    
  
  <mdn-search-modal id="search"></mdn-search-modal>
 
  
    <mdn-toggle-sidebar>:host{border-right:1px solid var(--color-border-primary);display:block;height:100%}mdn-button{height:100%}<mdn-button
  
  
  
  
  
 icon-only variant="plain" aria-controls="main-sidebar" defer-hydration>.button{align-items:center;background-color:initial;border:1px solid #0000;border-radius:.25rem;color:var(--color-text-primary);column-gap:.3125em;cursor:pointer;display:inline-flex;font-family:var(--font-family-text);font-size:.875em;font-weight:450;justify-content:center;line-height:var(--font-line-ui);margin:0;padding:.5em;-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.button[data-variant=primary]{--csstools-light-dark-toggle-33eaa513-0:var(--csstools-color-scheme--light) var(--color-black);color:var(--csstools-light-dark-toggle-33eaa513-0,var(--color-white));--csstools-light-dark-toggle-33eaa513-1:var(--csstools-color-scheme--light) var(--color-white);background-color:var(--csstools-light-dark-toggle-33eaa513-1,var(--color-black))}@supports (color:light-dark(red,red)){.button[data-variant=primary]{background-color:light-dark(var(--color-black),var(--color-white));color:light-dark(var(--color-white),var(--color-black))}}.button[data-variant=primary]:hover{--csstools-light-dark-toggle-33eaa513-2:var(--csstools-color-scheme--light) var(--color-gray-80);background-color:var(--csstools-light-dark-toggle-33eaa513-2,var(--color-gray-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary]:hover{background-color:light-dark(var(--color-gray-20),var(--color-gray-80))}}.button[data-variant=primary][data-action=positive]{color:var(--color-white);--csstools-light-dark-toggle-33eaa513-3:var(--csstools-color-scheme--light) var(--color-green-20);background-color:var(--csstools-light-dark-toggle-33eaa513-3,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=positive]{background-color:light-dark(var(--color-green-50),var(--color-green-20))}}.button[data-variant=primary][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-4:var(--csstools-color-scheme--light) var(--color-green-50);background-color:var(--csstools-light-dark-toggle-33eaa513-4,var(--color-green-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=positive]:hover{background-color:light-dark(var(--color-green-20),var(--color-green-50))}}.button[data-variant=primary][data-action=negative]{color:var(--color-white);--csstools-light-dark-toggle-33eaa513-5:var(--csstools-color-scheme--light) var(--color-red-20);background-color:var(--csstools-light-dark-toggle-33eaa513-5,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=negative]{background-color:light-dark(var(--color-red-50),var(--color-red-20))}}.button[data-variant=primary][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-6:var(--csstools-color-scheme--light) var(--color-red-50);background-color:var(--csstools-light-dark-toggle-33eaa513-6,var(--color-red-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=negative]:hover{background-color:light-dark(var(--color-red-20),var(--color-red-50))}}.button[data-variant=secondary]{border-color:currentcolor}.button[data-variant=secondary]:hover{--csstools-light-dark-toggle-33eaa513-7:var(--csstools-color-scheme--light) var(--color-gray-20);background-color:var(--csstools-light-dark-toggle-33eaa513-7,var(--color-gray-80))}@supports (color:light-dark(red,red)){.button[data-variant=secondary]:hover{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))}}.button[data-variant=secondary][data-action=positive]{--csstools-light-dark-toggle-33eaa513-8:var(--csstools-color-scheme--light) var(--color-green-80);color:var(--csstools-light-dark-toggle-33eaa513-8,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=positive]{color:light-dark(var(--color-green-50),var(--color-green-80))}}.button[data-variant=secondary][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-9:var(--csstools-color-scheme--light) var(--color-green-10);background-color:var(--csstools-light-dark-toggle-33eaa513-9,var(--color-green-90))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=positive]:hover{background-color:light-dark(var(--color-green-90),var(--color-green-10))}}.button[data-variant=secondary][data-action=negative]{--csstools-light-dark-toggle-33eaa513-10:var(--csstools-color-scheme--light) var(--color-red-80);color:var(--csstools-light-dark-toggle-33eaa513-10,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=negative]{color:light-dark(var(--color-red-50),var(--color-red-80))}}.button[data-variant=secondary][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-11:var(--csstools-color-scheme--light) var(--color-red-10);background-color:var(--csstools-light-dark-toggle-33eaa513-11,var(--color-red-90))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=negative]:hover{background-color:light-dark(var(--color-red-90),var(--color-red-10))}}.button[data-variant=plain]:hover{--csstools-light-dark-toggle-33eaa513-12:var(--csstools-color-scheme--light) var(--color-gray-20);background-color:var(--csstools-light-dark-toggle-33eaa513-12,var(--color-gray-80))}@supports (color:light-dark(red,red)){.button[data-variant=plain]:hover{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))}}.button[data-variant=plain][data-action=positive]{--csstools-light-dark-toggle-33eaa513-13:var(--csstools-color-scheme--light) var(--color-green-80);color:var(--csstools-light-dark-toggle-33eaa513-13,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=positive]{color:light-dark(var(--color-green-50),var(--color-green-80))}}.button[data-variant=plain][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-14:var(--csstools-color-scheme--light) var(--color-green-10);background-color:var(--csstools-light-dark-toggle-33eaa513-14,var(--color-green-90))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=positive]:hover{background-color:light-dark(var(--color-green-90),var(--color-green-10))}}.button[data-variant=plain][data-action=negative]{--csstools-light-dark-toggle-33eaa513-15:var(--csstools-color-scheme--light) var(--color-red-80);color:var(--csstools-light-dark-toggle-33eaa513-15,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=negative]{color:light-dark(var(--color-red-50),var(--color-red-80))}}.button[data-variant=plain][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-16:var(--csstools-color-scheme--light) var(--color-red-10);background-color:var(--csstools-light-dark-toggle-33eaa513-16,var(--color-red-90))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=negative]:hover{background-color:light-dark(var(--color-red-90),var(--color-red-10))}}.button[disabled]{--csstools-light-dark-toggle-33eaa513-17:var(--csstools-color-scheme--light) var(--color-gray-60)!important;color:var(--csstools-light-dark-toggle-33eaa513-17,var(--color-gray-40))!important;cursor:default;--csstools-light-dark-toggle-33eaa513-18:var(--csstools-color-scheme--light) var(--color-gray-20)!important;background-color:var(--csstools-light-dark-toggle-33eaa513-18,var(--color-gray-80))!important;border-color:#0000}@supports (color:light-dark(red,red)){.button[disabled]{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))!important;color:light-dark(var(--color-gray-40),var(--color-gray-60))!important}}.button .icon{display:flex}.button svg{height:1.25em;width:1.25em}.button .label{padding-block:.125em;padding-inline:.0625em}:host{display:inline-flex;vertical-align:middle}.button{box-sizing:border-box;height:100%;width:100%}
    <button
      class="button"
      aria-labelledby="label-ozv20dkfpp8"
      
      data-variant="plain"
      
      part="button"
    >
      
<span id="label-ozv20dkfpp8" class="label" hidden part="label"
  ></span
>

    
  
  Toggle sidebar
</mdn-button></mdn-toggle-sidebar> 
  <ol
    class="breadcrumbs"
    vocab="https://schema.org/"
    typeof="BreadcrumbList"
  >
    
        
          <a href="/en-US/docs/Web" property="item" typeof="WebPage"
            >Web</a
          >
          
        
      
        
          <a href="/en-US/docs/Web/HTTP" property="item" typeof="WebPage"
            >HTTP</a
          >
          
        
      
        
          <a href="/en-US/docs/Web/HTTP/Guides" property="item" typeof="WebPage"
            >Guides</a
          >
          
        
      
        
          <a href="/en-US/docs/Web/HTTP/Guides/CORS" property="item" typeof="WebPage"
            >Cross-Origin Resource Sharing (CORS)</a
          >
          
        
      
  

    <mdn-collection-save-button
          doc-url="/en-US/docs/Web/HTTP/Guides/CORS"
          doc-title="Cross-Origin Resource Sharing (CORS)"
        ></mdn-collection-save-button>
    <mdn-color-theme>.color-theme{--color-theme-light-dark:url(/static/ssr/contrast.d86e85c43de8dee8.svg);--color-theme-light:url(/static/ssr/sun.1d7c3ad7bf6fc390.svg);--color-theme-dark:url(/static/ssr/moon.74026b9da82b0694.svg);position:relative}.color-theme__button{align-items:center;background-color:initial;border:none;color:inherit;column-gap:.25rem;cursor:pointer;display:flex;font:inherit;margin:0;padding:0 .5rem}.color-theme__button:is(:hover,:focus,[aria-expanded=true]){background-color:var(--color-background-secondary)}@media (width <= 769px){.color-theme__button>span{display:none}}.color-theme__button:before{background-color:currentcolor;content:"";height:1.25rem;-webkit-mask-size:cover;mask-size:cover;width:1.25rem}.color-theme__button[data-mode="light dark"]:before{-webkit-mask-image:var(--color-theme-light-dark);mask-image:var(--color-theme-light-dark)}.color-theme__button[data-mode=light]:before{-webkit-mask-image:var(--color-theme-light);mask-image:var(--color-theme-light)}.color-theme__button[data-mode=dark]:before{-webkit-mask-image:var(--color-theme-dark);mask-image:var(--color-theme-dark)}.color-theme__dropdown{border:1px solid var(--color-border-primary);padding:.75rem;position:absolute;right:0;z-index:1}.color-theme__dropdown,.color-theme__list{background-color:var(--color-background-primary);margin:0;width:max-content}.color-theme__list{list-style:none;padding:0}.color-theme__option{align-items:center;background-color:initial;border:none;color:var(--color-text-primary);column-gap:.25rem;cursor:pointer;display:flex;font:inherit;margin:0;padding:.25rem;width:100%}.color-theme__option:hover{background-color:var(--color-background-secondary)}.color-theme__option:before{background-color:currentcolor;content:"";height:1.25rem;-webkit-mask-size:cover;mask-size:cover;width:1.25rem}.color-theme__option[data-mode="light dark"]:before{-webkit-mask-image:var(--color-theme-light-dark);mask-image:var(--color-theme-light-dark)}.color-theme__option[data-mode=light]:before{-webkit-mask-image:var(--color-theme-light);mask-image:var(--color-theme-light)}.color-theme__option[data-mode=dark]:before{-webkit-mask-image:var(--color-theme-dark);mask-image:var(--color-theme-dark)}.color-theme__option[data-current]{background:var(--color-background-secondary)}
  <mdn-dropdown defer-hydration>:host{display:contents}:host(:not([loaded],:focus-within)) slot[name=dropdown]{display:none}
  
  

    <button
      part="button"
      slot="button"
      class="color-theme__button"
      data-mode="light dark"
      type="button"
      aria-label="Switch color theme"
    >
      Theme
    
    <div
      slot="dropdown"
      class="color-theme__dropdown"
      id="color-theme__dropdown"
    >
      
        
              <button
                class="color-theme__option"
                data-mode="light dark"
                data-current
                type="button"
                
              >
                OS default
              
            
              <button
                class="color-theme__option"
                data-mode="light"
                
                type="button"
                
              >
                Light
              
            
              <button
                class="color-theme__option"
                data-mode="dark"
                
                type="button"
                
              >
                Dark
              
            
      
    
  </mdn-dropdown>
</mdn-color-theme>
    <mdn-language-switcher
  
  
  
  
  
 locale="en-US" native="English (US)" translations="[{&quot;locale&quot;:&quot;en-US&quot;,&quot;title&quot;:&quot;Cross-Origin Resource Sharing (CORS)&quot;,&quot;native&quot;:&quot;English (US)&quot;},{&quot;locale&quot;:&quot;de&quot;,&quot;title&quot;:&quot;Cross-Origin Resource Sharing (CORS)&quot;,&quot;native&quot;:&quot;Deutsch&quot;},{&quot;locale&quot;:&quot;es&quot;,&quot;title&quot;:&quot;Intercambio de recursos de origen cruzado (CORS)&quot;,&quot;native&quot;:&quot;Español&quot;},{&quot;locale&quot;:&quot;fr&quot;,&quot;title&quot;:&quot;Cross-origin resource sharing (CORS)&quot;,&quot;native&quot;:&quot;Français&quot;},{&quot;locale&quot;:&quot;ja&quot;,&quot;title&quot;:&quot;オリジン間リソース共有 (CORS)&quot;,&quot;native&quot;:&quot;日本語&quot;},{&quot;locale&quot;:&quot;ko&quot;,&quot;title&quot;:&quot;교차 출처 리소스 공유 (CORS)&quot;,&quot;native&quot;:&quot;한국어&quot;},{&quot;locale&quot;:&quot;pt-BR&quot;,&quot;title&quot;:&quot;Cross-Origin Resource Sharing (CORS)&quot;,&quot;native&quot;:&quot;Português (do Brasil)&quot;},{&quot;locale&quot;:&quot;ru&quot;,&quot;title&quot;:&quot;Cross-Origin Resource Sharing (CORS)&quot;,&quot;native&quot;:&quot;Русский&quot;},{&quot;locale&quot;:&quot;zh-CN&quot;,&quot;title&quot;:&quot;跨源资源共享（CORS）&quot;,&quot;native&quot;:&quot;中文 (简体)&quot;},{&quot;locale&quot;:&quot;zh-TW&quot;,&quot;title&quot;:&quot;跨來源資源共享（CORS）&quot;,&quot;native&quot;:&quot;正體中文 (繁體)&quot;}]" url="/en-US/docs/Web/HTTP/Guides/CORS">*,:after,:before{box-sizing:border-box}button,input,select,textarea{font:inherit}button{color:inherit;cursor:pointer}img{height:auto;max-width:100%}a{color:var(--color-link-normal)}[hidden]{display:none!important}.language-switcher{position:relative}.language-switcher__button{align-items:center;background-color:initial;border:none;color:inherit;column-gap:.25rem;cursor:pointer;display:flex;font:inherit;margin:0;padding:0 .5rem}.language-switcher__button:is(:hover,:focus,[aria-expanded=true]){background-color:var(--color-background-secondary)}@media screen and (width <= 480px){.language-switcher__button>span{display:none}}.language-switcher__button:before{background-color:currentcolor;content:"";height:1.25rem;-webkit-mask-image:url(/static/ssr/languages.dcba936080e5be86.svg);mask-image:url(/static/ssr/languages.dcba936080e5be86.svg);-webkit-mask-size:cover;mask-size:cover;width:1.25rem}.language-switcher__dropdown{background-color:var(--color-background-primary);border:1px solid var(--color-border-primary);margin:0;padding:.75rem;position:absolute;right:0;width:max-content;z-index:1}.language_switcher__remember{border-bottom:1px solid var(--color-border-primary);display:flex;font-size:var(--font-size-small);place-items:center;width:100%}.language_switcher__remember mdn-switch{padding:.25rem}:is(.language_switcher__remember mdn-switch):hover{background-color:var(--color-background-secondary)}.language-switcher__list{background-color:var(--color-background-primary);list-style:none;margin:0;padding:0;width:100%}.language-switcher__option{align-items:center;background-color:initial;border:none;color:var(--color-text-primary);column-gap:.25rem;display:flex;font:inherit;margin:0;padding:.25rem;-webkit-text-decoration:none;text-decoration:none;width:100%}.language-switcher__option:hover,.language-switcher__option[data-current]{background-color:var(--color-background-secondary)}
  <mdn-dropdown defer-hydration>:host{display:contents}:host(:not([loaded],:focus-within)) slot[name=dropdown]{display:none}
  
  

    <button
      part="button"
      slot="button"
      class="language-switcher__button"
      type="button"
      aria-labelledby="current-locale"
    >
      English (US)
    
    <div
      slot="dropdown"
      class="language-switcher__dropdown"
      id="language-switcher__dropdown"
    >
      
        <mdn-switch
          
          
           defer-hydration>@property --switch-position{syntax:"";inherits:false;initial-value:0}.switch{cursor:pointer;display:flex;gap:.5em;place-items:center}.switch__input{--switch-size:1.25em;appearance:none;background-color:var(--color-text-secondary);background-image:radial-gradient(circle at calc(var(--switch-size)/2),var(--color-background-primary) calc((var(--switch-size)/2)*.8),#0000 calc((var(--switch-size)/2)*.8 + 1px));background-position:var(--switch-position) 0;background-repeat:no-repeat;background-size:var(--switch-size);border-radius:var(--radius-full);display:inline-block;height:var(--switch-size);margin:0;transition:--switch-position .2s;width:calc(var(--switch-size)*1.6)}.switch__input:checked{--switch-position:100%;background-color:var(--color-link-normal)}.switch__input:focus-visible{outline:2px solid var(--color-link-normal);outline-offset:2px}.switch__input:active:not(:disabled){filter:brightness(1.2)}.switch__input:disabled{opacity:.7} 
  <input
    class="switch__input"
    type="checkbox"
    
    
    
  />
  
Remember language</mdn-switch
        >
        <mdn-button
          
          
          
          
          
          
           variant="plain" icon-only href="https://github.com/orgs/mdn/discussions/739" target="_blank" title="Enable this setting to always switch to the current language when available. (Click to learn more.)" defer-hydration>.button{align-items:center;background-color:initial;border:1px solid #0000;border-radius:.25rem;color:var(--color-text-primary);column-gap:.3125em;cursor:pointer;display:inline-flex;font-family:var(--font-family-text);font-size:.875em;font-weight:450;justify-content:center;line-height:var(--font-line-ui);margin:0;padding:.5em;-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.button[data-variant=primary]{--csstools-light-dark-toggle-33eaa513-0:var(--csstools-color-scheme--light) var(--color-black);color:var(--csstools-light-dark-toggle-33eaa513-0,var(--color-white));--csstools-light-dark-toggle-33eaa513-1:var(--csstools-color-scheme--light) var(--color-white);background-color:var(--csstools-light-dark-toggle-33eaa513-1,var(--color-black))}@supports (color:light-dark(red,red)){.button[data-variant=primary]{background-color:light-dark(var(--color-black),var(--color-white));color:light-dark(var(--color-white),var(--color-black))}}.button[data-variant=primary]:hover{--csstools-light-dark-toggle-33eaa513-2:var(--csstools-color-scheme--light) var(--color-gray-80);background-color:var(--csstools-light-dark-toggle-33eaa513-2,var(--color-gray-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary]:hover{background-color:light-dark(var(--color-gray-20),var(--color-gray-80))}}.button[data-variant=primary][data-action=positive]{color:var(--color-white);--csstools-light-dark-toggle-33eaa513-3:var(--csstools-color-scheme--light) var(--color-green-20);background-color:var(--csstools-light-dark-toggle-33eaa513-3,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=positive]{background-color:light-dark(var(--color-green-50),var(--color-green-20))}}.button[data-variant=primary][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-4:var(--csstools-color-scheme--light) var(--color-green-50);background-color:var(--csstools-light-dark-toggle-33eaa513-4,var(--color-green-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=positive]:hover{background-color:light-dark(var(--color-green-20),var(--color-green-50))}}.button[data-variant=primary][data-action=negative]{color:var(--color-white);--csstools-light-dark-toggle-33eaa513-5:var(--csstools-color-scheme--light) var(--color-red-20);background-color:var(--csstools-light-dark-toggle-33eaa513-5,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=negative]{background-color:light-dark(var(--color-red-50),var(--color-red-20))}}.button[data-variant=primary][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-6:var(--csstools-color-scheme--light) var(--color-red-50);background-color:var(--csstools-light-dark-toggle-33eaa513-6,var(--color-red-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=negative]:hover{background-color:light-dark(var(--color-red-20),var(--color-red-50))}}.button[data-variant=secondary]{border-color:currentcolor}.button[data-variant=secondary]:hover{--csstools-light-dark-toggle-33eaa513-7:var(--csstools-color-scheme--light) var(--color-gray-20);background-color:var(--csstools-light-dark-toggle-33eaa513-7,var(--color-gray-80))}@supports (color:light-dark(red,red)){.button[data-variant=secondary]:hover{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))}}.button[data-variant=secondary][data-action=positive]{--csstools-light-dark-toggle-33eaa513-8:var(--csstools-color-scheme--light) var(--color-green-80);color:var(--csstools-light-dark-toggle-33eaa513-8,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=positive]{color:light-dark(var(--color-green-50),var(--color-green-80))}}.button[data-variant=secondary][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-9:var(--csstools-color-scheme--light) var(--color-green-10);background-color:var(--csstools-light-dark-toggle-33eaa513-9,var(--color-green-90))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=positive]:hover{background-color:light-dark(var(--color-green-90),var(--color-green-10))}}.button[data-variant=secondary][data-action=negative]{--csstools-light-dark-toggle-33eaa513-10:var(--csstools-color-scheme--light) var(--color-red-80);color:var(--csstools-light-dark-toggle-33eaa513-10,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=negative]{color:light-dark(var(--color-red-50),var(--color-red-80))}}.button[data-variant=secondary][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-11:var(--csstools-color-scheme--light) var(--color-red-10);background-color:var(--csstools-light-dark-toggle-33eaa513-11,var(--color-red-90))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=negative]:hover{background-color:light-dark(var(--color-red-90),var(--color-red-10))}}.button[data-variant=plain]:hover{--csstools-light-dark-toggle-33eaa513-12:var(--csstools-color-scheme--light) var(--color-gray-20);background-color:var(--csstools-light-dark-toggle-33eaa513-12,var(--color-gray-80))}@supports (color:light-dark(red,red)){.button[data-variant=plain]:hover{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))}}.button[data-variant=plain][data-action=positive]{--csstools-light-dark-toggle-33eaa513-13:var(--csstools-color-scheme--light) var(--color-green-80);color:var(--csstools-light-dark-toggle-33eaa513-13,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=positive]{color:light-dark(var(--color-green-50),var(--color-green-80))}}.button[data-variant=plain][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-14:var(--csstools-color-scheme--light) var(--color-green-10);background-color:var(--csstools-light-dark-toggle-33eaa513-14,var(--color-green-90))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=positive]:hover{background-color:light-dark(var(--color-green-90),var(--color-green-10))}}.button[data-variant=plain][data-action=negative]{--csstools-light-dark-toggle-33eaa513-15:var(--csstools-color-scheme--light) var(--color-red-80);color:var(--csstools-light-dark-toggle-33eaa513-15,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=negative]{color:light-dark(var(--color-red-50),var(--color-red-80))}}.button[data-variant=plain][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-16:var(--csstools-color-scheme--light) var(--color-red-10);background-color:var(--csstools-light-dark-toggle-33eaa513-16,var(--color-red-90))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=negative]:hover{background-color:light-dark(var(--color-red-90),var(--color-red-10))}}.button[disabled]{--csstools-light-dark-toggle-33eaa513-17:var(--csstools-color-scheme--light) var(--color-gray-60)!important;color:var(--csstools-light-dark-toggle-33eaa513-17,var(--color-gray-40))!important;cursor:default;--csstools-light-dark-toggle-33eaa513-18:var(--csstools-color-scheme--light) var(--color-gray-20)!important;background-color:var(--csstools-light-dark-toggle-33eaa513-18,var(--color-gray-80))!important;border-color:#0000}@supports (color:light-dark(red,red)){.button[disabled]{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))!important;color:light-dark(var(--color-gray-40),var(--color-gray-60))!important}}.button .icon{display:flex}.button svg{height:1.25em;width:1.25em}.button .label{padding-block:.125em;padding-inline:.0625em}:host{display:inline-flex;vertical-align:middle}.button{box-sizing:border-box;height:100%;width:100%}
    <a
      class="button"
      href="https://github.com/orgs/mdn/discussions/739"
      target="_blank"
      
      aria-labelledby="label-lh7qlv19z4i"
      data-variant="plain"
      
      part="button"
    >
      
<span id="label-lh7qlv19z4i" class="label" hidden part="label"
  ></span
>

    
  Learn more</mdn-button
        >
      
      
        
      
        <a
          class="language-switcher__option"
          
          
          href="/de/docs/Web/HTTP/Guides/CORS"
          >Deutsch</a
        >
      
    
      
        <a
          class="language-switcher__option"
          data-current
          
          href="/en-US/docs/Web/HTTP/Guides/CORS"
          >English (US)</a
        >
      
    
      
        <a
          class="language-switcher__option"
          
          
          href="/es/docs/Web/HTTP/Guides/CORS"
          >Español</a
        >
      
    
      
        <a
          class="language-switcher__option"
          
          
          href="/fr/docs/Web/HTTP/Guides/CORS"
          >Français</a
        >
      
    
      
        <a
          class="language-switcher__option"
          
          
          href="/ja/docs/Web/HTTP/Guides/CORS"
          >日本語</a
        >
      
    
      
        <a
          class="language-switcher__option"
          
          
          href="/ko/docs/Web/HTTP/Guides/CORS"
          >한국어</a
        >
      
    
      
        <a
          class="language-switcher__option"
          
          
          href="/pt-BR/docs/Web/HTTP/Guides/CORS"
          >Português (do Brasil)</a
        >
      
    
      
        <a
          class="language-switcher__option"
          
          
          href="/ru/docs/Web/HTTP/Guides/CORS"
          >Русский</a
        >
      
    
      
        <a
          class="language-switcher__option"
          
          
          href="/zh-CN/docs/Web/HTTP/Guides/CORS"
          >中文 (简体)</a
        >
      
    
      
        <a
          class="language-switcher__option"
          
          
          href="/zh-TW/docs/Web/HTTP/Guides/CORS"
          >正體中文 (繁體)</a
        >
      
    
      
    
  </mdn-dropdown>
</mdn-language-switcher>
  

    
    
  
    
      
        
        
        <mdn-survey></mdn-survey>
        Cross-Origin Resource Sharing (CORS)
        <details
  class="baseline-indicator high"
  data-glean-toggle-open="baseline_toggle_open"
>
  
    <span
      class="indicator"
      role="img"
      aria-label="Baseline Check"
    >
    
      
            Baseline
            
              Widely available
            
            
          
    
    
    
      <span
            key="Blink"
            class="engine"
            title="Supported in Chrome and Edge"
          >
            <span
                  key="chrome"
                  class="browser chrome supported"
                  role="img"
                  aria-label="Chrome check"
                ><span
                  key="edge"
                  class="browser edge supported"
                  role="img"
                  aria-label="Edge check"
                >
          <span
            key="Gecko"
            class="engine"
            title="Supported in Firefox"
          >
            <span
                  key="firefox"
                  class="browser firefox supported"
                  role="img"
                  aria-label="Firefox check"
                >
          <span
            key="WebKit"
            class="engine"
            title="Supported in Safari"
          >
            <span
                  key="safari"
                  class="browser safari supported"
                  role="img"
                  aria-label="Safari check"
                >
          
    
    
  
  
    
          This feature is well established and works across many devices and browser versions. It’s been available across browsers since July 2015.
        
    
    
      
        <a
          href="/en-US/docs/Glossary/Baseline/Compatibility"
          data-glean-id="baseline_link_learn_more"
          target="_blank"
          class="learn-more"
        >
          Learn more
        
      
      
        
          See full compatibility
        
      
      
        <a
          href="https://survey.alchemer.com/s3/7634825/MDN-baseline-feedback?page=%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FGuides%2FCORS&amp;level=high"
          data-glean-id="baseline_link_feedback"
          class="feedback-link"
          target="_blank"
          rel="noreferrer"
        >
          Report feedback
        
      
    
  
if (localStorage.getItem("baseline-indicator") === "open") {
```

const indicator = document.querySelector(".baseline-indicator");
if (indicator instanceof HTMLDetailsElement) {
indicator.open = true;
}
}

<?> <section

```
class="content-section"
```

>

```
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
```

An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses fetch() to make a request for https://domain-b.com/data.json.
For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, fetch() and XMLHttpRequest follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.

The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Browsers use CORS in APIs such as fetch() or XMLHttpRequest to mitigate the risks of cross-origin HTTP requests.

```
  In this article
  
    What requests use CORS?Functional overviewExamples of access control scenariosThe HTTP response headersThe HTTP request headersSpecificationsBrowser compatibilitySee also
  

        <mdn-placement-sidebar></mdn-placement-sidebar>
      
      
        <section
class="content-section"
aria-labelledby="what_requests_use_cors"
```

>

```
What requests use CORS?
```

```
This cross-origin sharing standard can enable cross-origin HTTP requests for:
```

Invocations of fetch() or XMLHttpRequest, as discussed above.
Web Fonts (for cross-domain font usage in @font-face within CSS), as described in the font fetching requirements, so that servers can deploy TrueType fonts that can only be loaded cross-origin and used by websites that are permitted to do so.
WebGL textures.
Images/video frames drawn to a canvas using drawImage().
CSS Shapes from images.

This is a general article about Cross-Origin Resource Sharing and includes a discussion of the necessary HTTP headers.

  <section
    class="content-section"
    aria-labelledby="functional_overview"
  >
    Functional overview
    The Cross-Origin Resource Sharing standard works by adding new HTTP headers that let servers describe which origins are permitted to read that information from a web browser. Additionally, for HTTP request methods that can cause side-effects on server data (in particular, HTTP methods other than GET, or POST with certain MIME types), the specification mandates that browsers "preflight" the request, soliciting supported methods from the server with the HTTP OPTIONS request method, and then, upon "approval" from the server, sending the actual request. Servers can also inform clients whether "credentials" (such as Cookies and HTTP Authentication) should be sent with requests.
CORS failures result in errors but for security reasons, specifics about the error are not available to JavaScript. All the code knows is that an error occurred. The only way to determine what specifically went wrong is to look at the browser's console for details.
Subsequent sections discuss scenarios, as well as provide a breakdown of the HTTP headers used.
  <section
    class="content-section"
    aria-labelledby="examples_of_access_control_scenarios"
  >
    Examples of access control scenarios
    We present three scenarios that demonstrate how Cross-Origin Resource Sharing works. All these examples use fetch(), which can make cross-origin requests in any supporting browser.
  <section
    class="content-section"
    aria-labelledby="simple_requests"
  >
    Simple requests
    Some requests don't trigger a CORS preflight. Those are called simple requests from the obsolete CORS spec, though the Fetch spec (which now defines CORS) doesn't use that term.
The motivation is that the &lt;form&gt; element from HTML 4.0 (which predates cross-site fetch() and XMLHttpRequest) can submit simple requests to any origin, so anyone writing a server must already be protecting against cross-site request forgery (CSRF). Under this assumption, the server doesn't have to opt-in (by responding to a preflight request) to receive any request that looks like a form submission, since the threat of CSRF is no worse than that of form submission. However, the server still must opt-in using Access-Control-Allow-Origin to share the response with the script.
A simple request is one that meets all the following conditions:

One of the allowed methods:

GET
HEAD
POST

Apart from the headers automatically set by the user agent (for example, Connection, User-Agent, or the forbidden request headers), the only headers which are allowed to be manually set are the CORS-safelisted request-headers, which are:

Accept
Accept-Language
Content-Language
Content-Type (please note the additional requirements below)
Range (only with a single range header value; e.g., bytes=256- or bytes=127-255)

The only type/subtype combinations allowed for the media type specified in the Content-Type header are:

application/x-www-form-urlencoded
multipart/form-data
text/plain

If the request is made using an XMLHttpRequest object, no event listeners are registered on the object returned by the XMLHttpRequest.upload property used in the request; that is, given an XMLHttpRequest instance xhr, no code has called xhr.upload.addEventListener() to add an event listener to monitor the upload.

No ReadableStream object is used in the request.

Note:
WebKit Nightly and Safari Technology Preview place additional restrictions on the values allowed in the Accept, Accept-Language, and Content-Language headers. If any of those headers have "nonstandard" values, WebKit/Safari does not consider the request to be a "simple request". What values WebKit/Safari consider "nonstandard" is not documented, except in the following WebKit bugs:

Require preflight for non-standard CORS-safelisted request headers Accept, Accept-Language, and Content-Language
Allow commas in Accept, Accept-Language, and Content-Language request headers for simple CORS
Switch to a blacklist model for restricted Accept headers in simple CORS requests

No other browsers implement these extra restrictions because they're not part of the spec.

For example, suppose web content at https://foo.example wishes to fetch JSON content from domain https://bar.other. Code of this sort might be used in JavaScript deployed on foo.example:
jsconst fetchPromise = fetch("https://bar.other");

fetchPromise
.then((response) => response.json())
.then((data) => {
console.log(data);
});

This operation performs a simple exchange between the client and the server, using CORS headers to handle the privileges:

Let's look at what the browser will send to the server in this case:
httpGET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example

The request header of note is Origin, which shows that the invocation is coming from https://foo.example.
Now let's see how the server responds:
httpHTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2
Access-Control-Allow-Origin: \*
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

\[…XML Data…]

In response, the server returns an Access-Control-Allow-Origin header with Access-Control-Allow-Origin: \*, which means that the resource can be accessed by any origin.
httpAccess-Control-Allow-Origin: \*

This pattern of the Origin and Access-Control-Allow-Origin headers is the simplest use of the access control protocol. If the resource owners at https://bar.other wished to restrict access to the resource to requests only from https://foo.example (i.e., no domain other than https://foo.example can access the resource in a cross-origin manner), they would send:
httpAccess-Control-Allow-Origin: https://foo.example

Note:
When responding to a credentialed requests request, the server must specify an origin in the value of the Access-Control-Allow-Origin header, instead of specifying the \* wildcard.

  <section
    class="content-section"
    aria-labelledby="preflighted_requests"
  >
    Preflighted requests
    Unlike simple requests, for "preflighted" requests the browser first sends an HTTP request using the OPTIONS method to the resource on the other origin, in order to determine if the actual request is safe to send. Such cross-origin requests are preflighted since they may have implications for user data.
The following is an example of a request that will be preflighted:
jsconst fetchPromise = fetch("https://bar.other/doc", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "text/xml",
    "X-PINGOTHER": "pingpong",
  },
  body: "&lt;person&gt;&lt;name&gt;Arun&lt;/name&gt;&lt;/person&gt;",
});

fetchPromise.then((response) => {
console.log(response.status);
});

The example above creates an XML body to send with the POST request. Also, a non-standard HTTP X-PINGOTHER request header is set. Such headers are not part of HTTP/1.1, but are generally useful to web applications. Since the request uses a Content-Type of text/xml, and since a custom header is set, this request is preflighted.

Note:
As described below, the actual POST request does not include the Access-Control-Request-\* headers; they are needed only for the OPTIONS request.

Let's look at the full exchange between client and server. The first exchange is the preflight request/response:
httpOPTIONS /doc HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother

HTTP/1.1 204 No Content
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive

The first block above represents the preflight request with the OPTIONS method. The browser determines that it needs to send this based on the request parameters that the JavaScript code snippet above was using, so that the server can respond whether it is acceptable to send the request with the actual request parameters. OPTIONS is an HTTP/1.1 method that is used to determine further information from servers, and is a safe method, meaning that it can't be used to change the resource. Note that along with the OPTIONS request, two other request headers are sent:
httpAccess-Control-Request-Method: POST
Access-Control-Request-Headers: content-type,x-pingother

The Access-Control-Request-Method header notifies the server as part of a preflight request that when the actual request is sent, it will do so with a POST request method. The Access-Control-Request-Headers header notifies the server that when the actual request is sent, it will do so with X-PINGOTHER and Content-Type custom headers. Now the server has an opportunity to determine whether it can accept a request under these conditions.
The second block above is the response that the server returns, which indicate that the request method (POST) and request headers (X-PINGOTHER) are acceptable. Let's have a closer look at the following lines:
httpAccess-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400

The server responds with Access-Control-Allow-Origin: https://foo.example, restricting access to the requesting origin domain only. It also responds with Access-Control-Allow-Methods, which says that POST and GET are valid methods to query the resource in question (this header is similar to the Allow response header, but used strictly within the context of access control).
The server also sends Access-Control-Allow-Headers with a value of X-PINGOTHER, Content-Type, confirming that these are permitted headers to be used with the actual request. Like Access-Control-Allow-Methods, Access-Control-Allow-Headers is a comma-separated list of acceptable headers.
Finally, Access-Control-Max-Age gives the value in seconds for how long the response to the preflight request can be cached without sending another preflight request. The default value is 5 seconds. In the present case, the max age is 86400 seconds (= 24 hours). Note that each browser has a maximum internal value that takes precedence when the Access-Control-Max-Age exceeds it.
Once the preflight request is complete, the real request is sent:
httpPOST /doc HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
X-PINGOTHER: pingpong
Content-Type: text/xml; charset=UTF-8
Referer: https://foo.example/examples/preflightInvocation.html
Content-Length: 55
Origin: https://foo.example
Pragma: no-cache
Cache-Control: no-cache

\<person>\<name>Arun\</name>\</person>

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:40 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 235
Keep-Alive: timeout=2, max=99
Connection: Keep-Alive
Content-Type: text/plain

\[Some XML content]

Preflighted requests and redirects
Not all browsers currently support following redirects after a preflighted request. If a redirect occurs after such a request, some browsers currently will report an error message such as the following:

The request was redirected to https://example.com/foo, which is disallowed for cross-origin requests that require preflight.
Request requires preflight, which is disallowed to follow cross-origin redirects.

The CORS protocol originally required that behavior but was subsequently changed to no longer require it. However, not all browsers have implemented the change, and thus still exhibit the originally required behavior.
Until browsers catch up with the spec, you may be able to work around this limitation by doing one or both of the following:

Change the server-side behavior to avoid the preflight and/or to avoid the redirect
Change the request such that it is a simple request that doesn't cause a preflight

If that's not possible, then another way is to:

Make a simple request (using Response.url for the Fetch API, or XMLHttpRequest.responseURL) to determine what URL the real preflighted request would end up at.
Make another request (the real request) using the URL you obtained from Response.url or XMLHttpRequest.responseURL in the first step.

However, if the request is one that triggers a preflight due to the presence of the Authorization header in the request, you won't be able to work around the limitation using the steps above. And you won't be able to work around it at all unless you have control over the server the request is being made to.

  <section
    class="content-section"
    aria-labelledby="requests_with_credentials"
  >
    Requests with credentials

Note:
When making credentialed requests to a different domain, third-party cookie policies will still apply. The policy is always enforced regardless of any setup on the server and the client as described in this chapter.

The most interesting capability exposed by both fetch() or XMLHttpRequest and CORS is the ability to make "credentialed" requests that are aware of HTTP cookies and HTTP Authentication information. By default, in cross-origin fetch() or XMLHttpRequest calls, browsers will not send credentials.
To ask for a fetch() request to include credentials, set the credentials option to "include".
To ask for an XMLHttpRequest request to include credentials, set the XMLHttpRequest.withCredentials property to true.
In this example, content originally loaded from https://foo.example makes a GET request to a resource on https://bar.other which sets Cookies. Content on foo.example might contain JavaScript like this:
jsconst url = "https://bar.other/resources/credentialed-content/";

const request = new Request(url, { credentials: "include" });

const fetchPromise = fetch(request);
fetchPromise.then((response) => console.log(response));

This code creates a Request object, setting the credentials option to "include" in the constructor, then passes this request into fetch(). Since this is a simple GET request, it is not preflighted but the browser will reject any response that does not have the Access-Control-Allow-Credentials header set to true, and not make the response available to the invoking web content.

Here is a sample exchange between client and server:
httpGET /resources/credentialed-content/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:71.0) Gecko/20100101 Firefox/71.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Referer: https://foo.example/examples/credential.html
Origin: https://foo.example
Cookie: pageAccess=2

HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:34:52 GMT
Server: Apache/2
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Credentials: true
Cache-Control: no-cache
Pragma: no-cache
Set-Cookie: pageAccess=3; expires=Wed, 31-Dec-2008 01:34:53 GMT
Vary: Accept-Encoding, Origin
Content-Encoding: gzip
Content-Length: 106
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain

\[text/plain content]

Although the request's Cookie header contains the cookie destined for the content on https://bar.other, if bar.other did not respond with an Access-Control-Allow-Credentials with value true, as demonstrated in this example, the response would be ignored and not made available to the web content.
Preflight requests and credentials
CORS-preflight requests must never include credentials. The response to a preflight request must specify Access-Control-Allow-Credentials: true to indicate that the actual request can be made with credentials.

Note:
Some enterprise authentication services require that TLS client certificates be sent in preflight requests, in contravention of the Fetch specification.
Firefox 87 allows this non-compliant behavior to be enabled by setting the preference: network.cors\_preflight.allow\_client\_cert to true (Firefox bug 1511151). Chromium-based browsers currently always send TLS client certificates in CORS preflight requests (Chrome bug 775438).

Credentialed requests and wildcards
When responding to a credentialed request:

The server must not specify the \* wildcard for the Access-Control-Allow-Origin response-header value, but must instead specify an explicit origin; for example: Access-Control-Allow-Origin: https://example.com
The server must not specify the \* wildcard for the Access-Control-Allow-Headers response-header value, but must instead specify an explicit list of header names; for example, Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
The server must not specify the \* wildcard for the Access-Control-Allow-Methods response-header value, but must instead specify an explicit list of method names; for example, Access-Control-Allow-Methods: POST, GET
The server must not specify the \* wildcard for the Access-Control-Expose-Headers response-header value, but must instead specify an explicit list of header names; for example, Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision

If a request includes a credential (most commonly a Cookie header) and the response includes an Access-Control-Allow-Origin: \* header (that is, with the wildcard), the browser will block access to the response, and report a CORS error in the devtools console.
But if a request does include a credential (like the Cookie header) and the response includes an actual origin rather than the wildcard (like, for example, Access-Control-Allow-Origin: https://example.com), then the browser will allow access to the response from the specified origin.
Also note that any Set-Cookie response header in a response would not set a cookie if the Access-Control-Allow-Origin value in that response is the \* wildcard rather an actual origin.
Third-party cookies
Note that cookies set in CORS responses are subject to normal third-party cookie policies. In the example above, the page is loaded from foo.example but the Set-Cookie header in the response is sent by bar.other, and would thus not be saved if the user's browser is configured to reject all third-party cookies.
Cookies set in CORS requests and responses are subject to normal third-party cookie policies.
Third-party cookie policies may prevent third party cookies being sent in requests, effectively stopping a site from making credentialed requests even if permitted by the third party server (using Access-Control-Allow-Credentials).
The default policy differs between browsers, but may be set using the SameSite attribute.
Even if credentialed requests are allowed, a browser may be configured to reject all third-party cookies in responses.

  <section
    class="content-section"
    aria-labelledby="the_http_response_headers"
  >
    The HTTP response headers
    This section lists the HTTP response headers that servers return for access control requests as defined by the Cross-Origin Resource Sharing specification. The previous section gives an overview of these in action.
  <section
    class="content-section"
    aria-labelledby="access-control-allow-origin"
  >
    Access-Control-Allow-Origin
    A returned resource may have one Access-Control-Allow-Origin header with the following syntax:
httpAccess-Control-Allow-Origin: &lt;origin&gt; | *

Access-Control-Allow-Origin specifies either a single origin which tells browsers to allow that origin to access the resource; or else — for requests without credentials — the \* wildcard tells browsers to allow any origin to access the resource.
For example, to allow code from the origin https://mozilla.org to access the resource, you can specify:
httpAccess-Control-Allow-Origin: https://mozilla.org
Vary: Origin

If the server specifies a single origin (that may dynamically change based on the requesting origin as part of an allowlist) rather than the \* wildcard, then the server should also include Origin in the Vary response header to indicate to clients that server responses will differ based on the value of the Origin request header.

  <section
    class="content-section"
    aria-labelledby="access-control-expose-headers"
  >
    Access-Control-Expose-Headers
    The Access-Control-Expose-Headers header adds the specified headers to the allowlist that JavaScript (such as Response.headers) in browsers is allowed to access.
httpAccess-Control-Expose-Headers: &lt;header-name&gt;[, &lt;header-name&gt;]*

For example, the following would allow the X-My-Custom-Header and X-Another-Custom-Header headers to be exposed to the browser:
httpAccess-Control-Expose-Headers: X-My-Custom-Header, X-Another-Custom-Header

  <section
    class="content-section"
    aria-labelledby="access-control-max-age"
  >
    Access-Control-Max-Age
    The Access-Control-Max-Age header indicates how long the results of a preflight request can be cached. For an example of a preflight request, see the above examples.
httpAccess-Control-Max-Age: &lt;delta-seconds&gt;

The delta-seconds parameter indicates the number of seconds the results can be cached.

  <section
    class="content-section"
    aria-labelledby="access-control-allow-credentials"
  >
    Access-Control-Allow-Credentials
    The Access-Control-Allow-Credentials header indicates whether or not the response to the request can be exposed when the credentials flag is true. When used as part of a response to a preflight request, this indicates whether or not the actual request can be made using credentials. Note that simple GET requests are not preflighted, and so if a request is made for a resource with credentials, if this header is not returned with the resource, the response is ignored by the browser and not returned to web content.
httpAccess-Control-Allow-Credentials: true

Credentialed requests are discussed above.

  <section
    class="content-section"
    aria-labelledby="access-control-allow-methods"
  >
    Access-Control-Allow-Methods
    The Access-Control-Allow-Methods header specifies the method or methods allowed when accessing the resource. This is used in response to a preflight request. The conditions under which a request is preflighted are discussed above.
httpAccess-Control-Allow-Methods: &lt;method&gt;[, &lt;method&gt;]*

An example of a preflight request is given above, including an example which sends this header to the browser.

  <section
    class="content-section"
    aria-labelledby="access-control-allow-headers"
  >
    Access-Control-Allow-Headers
    The Access-Control-Allow-Headers header is used in response to a preflight request to indicate which HTTP headers can be used when making the actual request. This header is the server side response to the browser's Access-Control-Request-Headers header.
httpAccess-Control-Allow-Headers: &lt;header-name&gt;[, &lt;header-name&gt;]*

  <section
    class="content-section"
    aria-labelledby="the_http_request_headers"
  >
    The HTTP request headers
    This section lists headers that clients may use when issuing HTTP requests in order to make use of the cross-origin sharing feature. Note that these headers are set for you when making invocations to servers. Developers making cross-origin requests do not have to set any cross-origin sharing request headers programmatically.
  <section
    class="content-section"
    aria-labelledby="origin"
  >
    Origin
    The Origin header indicates the origin of the cross-origin access request or preflight request.
httpOrigin: &lt;origin&gt;

The origin is a URL indicating the server from which the request is initiated. It does not include any path information, only the server name.

Note:
The origin value can be null.

Note that in any access control request, the Origin header is always sent.

  <section
    class="content-section"
    aria-labelledby="access-control-request-method"
  >
    Access-Control-Request-Method
    The Access-Control-Request-Method is used when issuing a preflight request to let the server know what HTTP method will be used when the actual request is made.
httpAccess-Control-Request-Method: &lt;method&gt;

Examples of this usage can be found above.

  <section
    class="content-section"
    aria-labelledby="access-control-request-headers"
  >
    Access-Control-Request-Headers
    The Access-Control-Request-Headers header is used when issuing a preflight request to let the server know what HTTP headers will be used when the actual request is made (for example, by passing them as the headers option). This browser-side header will be answered by the complementary server-side header of Access-Control-Allow-Headers.
httpAccess-Control-Request-Headers: &lt;field-name&gt;[,&lt;field-name&gt;]*

Examples of this usage can be found above.

  <section
    class="content-section"
    aria-labelledby="specifications"
  >
    Specifications

```
      Specification
    
  


  
          <a class="external" href="https://fetch.spec.whatwg.org/#http-access-control-allow-origin" rel="noopener" target="_blank"
>Fetch<?># http-access-control-allow-origin<?></a
```

>

  <section
    class="content-section"
    aria-labelledby="browser_compatibility"
  >
    Browser compatibility
    <mdn-compat-table-lazy

```
 locale="en-US" query="http.headers.Access-Control-Allow-Origin">*,:after,:before{box-sizing:border-box}button,input,select,textarea{font:inherit}button{color:inherit;cursor:pointer}img{height:auto;max-width:100%}a{color:var(--color-link-normal)}[hidden]{display:none!important}Enable JavaScript to view this browser compatibility table.</mdn-compat-table-lazy>
```

  <section
    class="content-section"
    aria-labelledby="see_also"
  >
    See also

CORS errors
Enable CORS: I want to add CORS support to my server
Fetch API
XMLHttpRequest
Will it CORS? - an interactive CORS explainer & generator
How to run Chrome browser without CORS
Using CORS with All (Modern) Browsers
Stack Overflow answer with "how to" info for dealing with common problems:

How to avoid the CORS preflight
How to use a CORS proxy to get around "No Access-Control-Allow-Origin header"
How to fix "Access-Control-Allow-Origin header must not be the wildcard"

```
  <section
    class="content-section article-footer"
    aria-labelledby="feedback"
  >
    
      
      
        Help improve MDN
      
      <mdn-content-feedback  locale="en-US">.content-feedback{border:none;margin:0 0 .25rem;padding:0}.content-feedback>label{display:block;margin-bottom:.25rem}.content-feedback .thank-you{display:block;margin-bottom:calc(2.75rem + 2px)}.content-feedback mdn-button{flex:1;min-width:0}.content-feedback--buttons{display:inline-flex;gap:.75rem;margin:.25rem 0}.content-feedback--radios{align-items:center;display:flex;gap:.25rem;margin:.25rem 0}
  <label
    >Was this page helpful to you?
  
  
    <mdn-button
      
      
      
      
      
     data-vote="yes" variant="secondary" action="positive" defer-hydration>.button{align-items:center;background-color:initial;border:1px solid #0000;border-radius:.25rem;color:var(--color-text-primary);column-gap:.3125em;cursor:pointer;display:inline-flex;font-family:var(--font-family-text);font-size:.875em;font-weight:450;justify-content:center;line-height:var(--font-line-ui);margin:0;padding:.5em;-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.button[data-variant=primary]{--csstools-light-dark-toggle-33eaa513-0:var(--csstools-color-scheme--light) var(--color-black);color:var(--csstools-light-dark-toggle-33eaa513-0,var(--color-white));--csstools-light-dark-toggle-33eaa513-1:var(--csstools-color-scheme--light) var(--color-white);background-color:var(--csstools-light-dark-toggle-33eaa513-1,var(--color-black))}@supports (color:light-dark(red,red)){.button[data-variant=primary]{background-color:light-dark(var(--color-black),var(--color-white));color:light-dark(var(--color-white),var(--color-black))}}.button[data-variant=primary]:hover{--csstools-light-dark-toggle-33eaa513-2:var(--csstools-color-scheme--light) var(--color-gray-80);background-color:var(--csstools-light-dark-toggle-33eaa513-2,var(--color-gray-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary]:hover{background-color:light-dark(var(--color-gray-20),var(--color-gray-80))}}.button[data-variant=primary][data-action=positive]{color:var(--color-white);--csstools-light-dark-toggle-33eaa513-3:var(--csstools-color-scheme--light) var(--color-green-20);background-color:var(--csstools-light-dark-toggle-33eaa513-3,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=positive]{background-color:light-dark(var(--color-green-50),var(--color-green-20))}}.button[data-variant=primary][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-4:var(--csstools-color-scheme--light) var(--color-green-50);background-color:var(--csstools-light-dark-toggle-33eaa513-4,var(--color-green-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=positive]:hover{background-color:light-dark(var(--color-green-20),var(--color-green-50))}}.button[data-variant=primary][data-action=negative]{color:var(--color-white);--csstools-light-dark-toggle-33eaa513-5:var(--csstools-color-scheme--light) var(--color-red-20);background-color:var(--csstools-light-dark-toggle-33eaa513-5,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=negative]{background-color:light-dark(var(--color-red-50),var(--color-red-20))}}.button[data-variant=primary][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-6:var(--csstools-color-scheme--light) var(--color-red-50);background-color:var(--csstools-light-dark-toggle-33eaa513-6,var(--color-red-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=negative]:hover{background-color:light-dark(var(--color-red-20),var(--color-red-50))}}.button[data-variant=secondary]{border-color:currentcolor}.button[data-variant=secondary]:hover{--csstools-light-dark-toggle-33eaa513-7:var(--csstools-color-scheme--light) var(--color-gray-20);background-color:var(--csstools-light-dark-toggle-33eaa513-7,var(--color-gray-80))}@supports (color:light-dark(red,red)){.button[data-variant=secondary]:hover{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))}}.button[data-variant=secondary][data-action=positive]{--csstools-light-dark-toggle-33eaa513-8:var(--csstools-color-scheme--light) var(--color-green-80);color:var(--csstools-light-dark-toggle-33eaa513-8,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=positive]{color:light-dark(var(--color-green-50),var(--color-green-80))}}.button[data-variant=secondary][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-9:var(--csstools-color-scheme--light) var(--color-green-10);background-color:var(--csstools-light-dark-toggle-33eaa513-9,var(--color-green-90))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=positive]:hover{background-color:light-dark(var(--color-green-90),var(--color-green-10))}}.button[data-variant=secondary][data-action=negative]{--csstools-light-dark-toggle-33eaa513-10:var(--csstools-color-scheme--light) var(--color-red-80);color:var(--csstools-light-dark-toggle-33eaa513-10,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=negative]{color:light-dark(var(--color-red-50),var(--color-red-80))}}.button[data-variant=secondary][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-11:var(--csstools-color-scheme--light) var(--color-red-10);background-color:var(--csstools-light-dark-toggle-33eaa513-11,var(--color-red-90))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=negative]:hover{background-color:light-dark(var(--color-red-90),var(--color-red-10))}}.button[data-variant=plain]:hover{--csstools-light-dark-toggle-33eaa513-12:var(--csstools-color-scheme--light) var(--color-gray-20);background-color:var(--csstools-light-dark-toggle-33eaa513-12,var(--color-gray-80))}@supports (color:light-dark(red,red)){.button[data-variant=plain]:hover{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))}}.button[data-variant=plain][data-action=positive]{--csstools-light-dark-toggle-33eaa513-13:var(--csstools-color-scheme--light) var(--color-green-80);color:var(--csstools-light-dark-toggle-33eaa513-13,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=positive]{color:light-dark(var(--color-green-50),var(--color-green-80))}}.button[data-variant=plain][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-14:var(--csstools-color-scheme--light) var(--color-green-10);background-color:var(--csstools-light-dark-toggle-33eaa513-14,var(--color-green-90))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=positive]:hover{background-color:light-dark(var(--color-green-90),var(--color-green-10))}}.button[data-variant=plain][data-action=negative]{--csstools-light-dark-toggle-33eaa513-15:var(--csstools-color-scheme--light) var(--color-red-80);color:var(--csstools-light-dark-toggle-33eaa513-15,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=negative]{color:light-dark(var(--color-red-50),var(--color-red-80))}}.button[data-variant=plain][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-16:var(--csstools-color-scheme--light) var(--color-red-10);background-color:var(--csstools-light-dark-toggle-33eaa513-16,var(--color-red-90))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=negative]:hover{background-color:light-dark(var(--color-red-90),var(--color-red-10))}}.button[disabled]{--csstools-light-dark-toggle-33eaa513-17:var(--csstools-color-scheme--light) var(--color-gray-60)!important;color:var(--csstools-light-dark-toggle-33eaa513-17,var(--color-gray-40))!important;cursor:default;--csstools-light-dark-toggle-33eaa513-18:var(--csstools-color-scheme--light) var(--color-gray-20)!important;background-color:var(--csstools-light-dark-toggle-33eaa513-18,var(--color-gray-80))!important;border-color:#0000}@supports (color:light-dark(red,red)){.button[disabled]{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))!important;color:light-dark(var(--color-gray-40),var(--color-gray-60))!important}}.button .icon{display:flex}.button svg{height:1.25em;width:1.25em}.button .label{padding-block:.125em;padding-inline:.0625em}:host{display:inline-flex;vertical-align:middle}.button{box-sizing:border-box;height:100%;width:100%}
    <button
      class="button"
      aria-labelledby="label-otvo4nzznvd"
      
      data-variant="secondary"
      data-action="positive"
      part="button"
    >
      
<span id="label-otvo4nzznvd" class="label"  part="label"
  ></span
>

    
  
      Yes
    </mdn-button>
    <mdn-button
      
      
      
      
      
     data-vote="no" variant="secondary" action="negative" defer-hydration>.button{align-items:center;background-color:initial;border:1px solid #0000;border-radius:.25rem;color:var(--color-text-primary);column-gap:.3125em;cursor:pointer;display:inline-flex;font-family:var(--font-family-text);font-size:.875em;font-weight:450;justify-content:center;line-height:var(--font-line-ui);margin:0;padding:.5em;-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.button[data-variant=primary]{--csstools-light-dark-toggle-33eaa513-0:var(--csstools-color-scheme--light) var(--color-black);color:var(--csstools-light-dark-toggle-33eaa513-0,var(--color-white));--csstools-light-dark-toggle-33eaa513-1:var(--csstools-color-scheme--light) var(--color-white);background-color:var(--csstools-light-dark-toggle-33eaa513-1,var(--color-black))}@supports (color:light-dark(red,red)){.button[data-variant=primary]{background-color:light-dark(var(--color-black),var(--color-white));color:light-dark(var(--color-white),var(--color-black))}}.button[data-variant=primary]:hover{--csstools-light-dark-toggle-33eaa513-2:var(--csstools-color-scheme--light) var(--color-gray-80);background-color:var(--csstools-light-dark-toggle-33eaa513-2,var(--color-gray-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary]:hover{background-color:light-dark(var(--color-gray-20),var(--color-gray-80))}}.button[data-variant=primary][data-action=positive]{color:var(--color-white);--csstools-light-dark-toggle-33eaa513-3:var(--csstools-color-scheme--light) var(--color-green-20);background-color:var(--csstools-light-dark-toggle-33eaa513-3,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=positive]{background-color:light-dark(var(--color-green-50),var(--color-green-20))}}.button[data-variant=primary][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-4:var(--csstools-color-scheme--light) var(--color-green-50);background-color:var(--csstools-light-dark-toggle-33eaa513-4,var(--color-green-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=positive]:hover{background-color:light-dark(var(--color-green-20),var(--color-green-50))}}.button[data-variant=primary][data-action=negative]{color:var(--color-white);--csstools-light-dark-toggle-33eaa513-5:var(--csstools-color-scheme--light) var(--color-red-20);background-color:var(--csstools-light-dark-toggle-33eaa513-5,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=negative]{background-color:light-dark(var(--color-red-50),var(--color-red-20))}}.button[data-variant=primary][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-6:var(--csstools-color-scheme--light) var(--color-red-50);background-color:var(--csstools-light-dark-toggle-33eaa513-6,var(--color-red-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=negative]:hover{background-color:light-dark(var(--color-red-20),var(--color-red-50))}}.button[data-variant=secondary]{border-color:currentcolor}.button[data-variant=secondary]:hover{--csstools-light-dark-toggle-33eaa513-7:var(--csstools-color-scheme--light) var(--color-gray-20);background-color:var(--csstools-light-dark-toggle-33eaa513-7,var(--color-gray-80))}@supports (color:light-dark(red,red)){.button[data-variant=secondary]:hover{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))}}.button[data-variant=secondary][data-action=positive]{--csstools-light-dark-toggle-33eaa513-8:var(--csstools-color-scheme--light) var(--color-green-80);color:var(--csstools-light-dark-toggle-33eaa513-8,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=positive]{color:light-dark(var(--color-green-50),var(--color-green-80))}}.button[data-variant=secondary][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-9:var(--csstools-color-scheme--light) var(--color-green-10);background-color:var(--csstools-light-dark-toggle-33eaa513-9,var(--color-green-90))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=positive]:hover{background-color:light-dark(var(--color-green-90),var(--color-green-10))}}.button[data-variant=secondary][data-action=negative]{--csstools-light-dark-toggle-33eaa513-10:var(--csstools-color-scheme--light) var(--color-red-80);color:var(--csstools-light-dark-toggle-33eaa513-10,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=negative]{color:light-dark(var(--color-red-50),var(--color-red-80))}}.button[data-variant=secondary][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-11:var(--csstools-color-scheme--light) var(--color-red-10);background-color:var(--csstools-light-dark-toggle-33eaa513-11,var(--color-red-90))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=negative]:hover{background-color:light-dark(var(--color-red-90),var(--color-red-10))}}.button[data-variant=plain]:hover{--csstools-light-dark-toggle-33eaa513-12:var(--csstools-color-scheme--light) var(--color-gray-20);background-color:var(--csstools-light-dark-toggle-33eaa513-12,var(--color-gray-80))}@supports (color:light-dark(red,red)){.button[data-variant=plain]:hover{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))}}.button[data-variant=plain][data-action=positive]{--csstools-light-dark-toggle-33eaa513-13:var(--csstools-color-scheme--light) var(--color-green-80);color:var(--csstools-light-dark-toggle-33eaa513-13,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=positive]{color:light-dark(var(--color-green-50),var(--color-green-80))}}.button[data-variant=plain][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-14:var(--csstools-color-scheme--light) var(--color-green-10);background-color:var(--csstools-light-dark-toggle-33eaa513-14,var(--color-green-90))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=positive]:hover{background-color:light-dark(var(--color-green-90),var(--color-green-10))}}.button[data-variant=plain][data-action=negative]{--csstools-light-dark-toggle-33eaa513-15:var(--csstools-color-scheme--light) var(--color-red-80);color:var(--csstools-light-dark-toggle-33eaa513-15,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=negative]{color:light-dark(var(--color-red-50),var(--color-red-80))}}.button[data-variant=plain][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-16:var(--csstools-color-scheme--light) var(--color-red-10);background-color:var(--csstools-light-dark-toggle-33eaa513-16,var(--color-red-90))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=negative]:hover{background-color:light-dark(var(--color-red-90),var(--color-red-10))}}.button[disabled]{--csstools-light-dark-toggle-33eaa513-17:var(--csstools-color-scheme--light) var(--color-gray-60)!important;color:var(--csstools-light-dark-toggle-33eaa513-17,var(--color-gray-40))!important;cursor:default;--csstools-light-dark-toggle-33eaa513-18:var(--csstools-color-scheme--light) var(--color-gray-20)!important;background-color:var(--csstools-light-dark-toggle-33eaa513-18,var(--color-gray-80))!important;border-color:#0000}@supports (color:light-dark(red,red)){.button[disabled]{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))!important;color:light-dark(var(--color-gray-40),var(--color-gray-60))!important}}.button .icon{display:flex}.button svg{height:1.25em;width:1.25em}.button .label{padding-block:.125em;padding-inline:.0625em}:host{display:inline-flex;vertical-align:middle}.button{box-sizing:border-box;height:100%;width:100%}
    <button
      class="button"
      aria-labelledby="label-8vvkzpa7o0c"
      
      data-variant="secondary"
      data-action="negative"
      part="button"
    >
      
<span id="label-8vvkzpa7o0c" class="label"  part="label"
  ></span
>

    
  
      No
    </mdn-button>
  
</mdn-content-feedback>
      <a
class="article-footer__contribute"
href="/en-US/docs/MDN/Community/Getting_started"
>Learn how to contribute</a
```

>

```
This page was last modified on Nov 30, 2025 by MDN contributors.
```

```
<a
class="external"
href="https://github.com/mdn/content/blob/main/files/en-us/web/http/guides/cors/index.md?plain=1"
title="Folder: en-us/web/http/guides/cors (Opens in a new tab)"
target="_blank"
rel="noopener"
>View this page on GitHub</a
```

> • <a
>  class="external"
>  href="https://github.com/mdn/content/issues/new?template=page-report.yml&amp;mdn-url=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FGuides%2FCORS&amp;metadata=%3C%21--+Do+not+make+changes+below+this+line+--%3E%0A%3Cdetails%3E%0A%3Csummary%3EPage+report+details%3C%2Fsummary%3E%0A%0A*+Folder%3A+%60en-us%2Fweb%2Fhttp%2Fguides%2Fcors%60%0A*+MDN+URL%3A+https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FHTTP%2FGuides%2FCORS%0A*+GitHub+URL%3A+https%3A%2F%2Fgithub.com%2Fmdn%2Fcontent%2Fblob%2Fmain%2Ffiles%2Fen-us%2Fweb%2Fhttp%2Fguides%2Fcors%2Findex.md%0A*+Last+commit%3A+https%3A%2F%2Fgithub.com%2Fmdn%2Fcontent%2Fcommit%2Fca26363fcc6fc861103d40ac0205e5c5b79eb2fa%0A*+Document+last+modified%3A+2025-11-30T02%3A30%3A55.000Z%0A%0A%3C%2Fdetails%3E"
>  title="This will take you to GitHub to file a new issue."
>  target="_blank"
>  rel="noopener"
>  >Report a problem with this content\</a

```
    <mdn-sidebar-filter>.visually-hidden{border:0!important;clip-path:inset(50%)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:1px!important}*,:after,:before{box-sizing:border-box}button,input,select,textarea{font:inherit}button{color:inherit;cursor:pointer}img{height:auto;max-width:100%}a{color:var(--color-link-normal)}[hidden]{display:none!important}:host{align-items:center;display:grid;grid-template-areas:"icon input button";grid-template-columns:2.2rem 1fr min-content}.icon{background-color:var(--color-text-secondary);content:"";grid-area:icon;height:1.25rem;justify-self:center;margin-left:.4rem;-webkit-mask-image:url(/static/ssr/filter.b77a4ccbfb57e2ef.svg);mask-image:url(/static/ssr/filter.b77a4ccbfb57e2ef.svg);-webkit-mask-size:cover;mask-size:cover;width:1.25rem}.input{background-color:initial;border:1px solid var(--color-border-primary);border-radius:var(--radius-full);grid-area:1/1/-1/-1;margin:0;padding:.3rem 4.2rem .3rem 2.2rem;width:100%}.input::placeholder{color:var(--color-text-secondary)}.input:focus{border-color:#0000}.counter{background-color:var(--color-background-yellow);border-radius:var(--radius-normal);font-size:var(--font-size-small);grid-area:input;justify-self:end;line-height:var(--font-line-ui);padding:.25rem;white-space:nowrap}.button{grid-area:button}.button::part(button){border-radius:50%}.button::part(button):hover{background-color:initial}:placeholder-shown~.button{visibility:hidden}
  
    <span class="visually-hidden"
      >Filter sidebar</span
    >
  
  <input
    id="input"
    autocomplete="off"
    class="input"
    type="text"
    placeholder="Filter"
    value=""
    
  />
  
  <mdn-button
    
    
    
    
    
    
   class="button" variant="plain" icon-only label="Clear filter input" defer-hydration>.button{align-items:center;background-color:initial;border:1px solid #0000;border-radius:.25rem;color:var(--color-text-primary);column-gap:.3125em;cursor:pointer;display:inline-flex;font-family:var(--font-family-text);font-size:.875em;font-weight:450;justify-content:center;line-height:var(--font-line-ui);margin:0;padding:.5em;-webkit-text-decoration:none;text-decoration:none;vertical-align:middle}.button[data-variant=primary]{--csstools-light-dark-toggle-33eaa513-0:var(--csstools-color-scheme--light) var(--color-black);color:var(--csstools-light-dark-toggle-33eaa513-0,var(--color-white));--csstools-light-dark-toggle-33eaa513-1:var(--csstools-color-scheme--light) var(--color-white);background-color:var(--csstools-light-dark-toggle-33eaa513-1,var(--color-black))}@supports (color:light-dark(red,red)){.button[data-variant=primary]{background-color:light-dark(var(--color-black),var(--color-white));color:light-dark(var(--color-white),var(--color-black))}}.button[data-variant=primary]:hover{--csstools-light-dark-toggle-33eaa513-2:var(--csstools-color-scheme--light) var(--color-gray-80);background-color:var(--csstools-light-dark-toggle-33eaa513-2,var(--color-gray-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary]:hover{background-color:light-dark(var(--color-gray-20),var(--color-gray-80))}}.button[data-variant=primary][data-action=positive]{color:var(--color-white);--csstools-light-dark-toggle-33eaa513-3:var(--csstools-color-scheme--light) var(--color-green-20);background-color:var(--csstools-light-dark-toggle-33eaa513-3,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=positive]{background-color:light-dark(var(--color-green-50),var(--color-green-20))}}.button[data-variant=primary][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-4:var(--csstools-color-scheme--light) var(--color-green-50);background-color:var(--csstools-light-dark-toggle-33eaa513-4,var(--color-green-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=positive]:hover{background-color:light-dark(var(--color-green-20),var(--color-green-50))}}.button[data-variant=primary][data-action=negative]{color:var(--color-white);--csstools-light-dark-toggle-33eaa513-5:var(--csstools-color-scheme--light) var(--color-red-20);background-color:var(--csstools-light-dark-toggle-33eaa513-5,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=negative]{background-color:light-dark(var(--color-red-50),var(--color-red-20))}}.button[data-variant=primary][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-6:var(--csstools-color-scheme--light) var(--color-red-50);background-color:var(--csstools-light-dark-toggle-33eaa513-6,var(--color-red-20))}@supports (color:light-dark(red,red)){.button[data-variant=primary][data-action=negative]:hover{background-color:light-dark(var(--color-red-20),var(--color-red-50))}}.button[data-variant=secondary]{border-color:currentcolor}.button[data-variant=secondary]:hover{--csstools-light-dark-toggle-33eaa513-7:var(--csstools-color-scheme--light) var(--color-gray-20);background-color:var(--csstools-light-dark-toggle-33eaa513-7,var(--color-gray-80))}@supports (color:light-dark(red,red)){.button[data-variant=secondary]:hover{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))}}.button[data-variant=secondary][data-action=positive]{--csstools-light-dark-toggle-33eaa513-8:var(--csstools-color-scheme--light) var(--color-green-80);color:var(--csstools-light-dark-toggle-33eaa513-8,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=positive]{color:light-dark(var(--color-green-50),var(--color-green-80))}}.button[data-variant=secondary][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-9:var(--csstools-color-scheme--light) var(--color-green-10);background-color:var(--csstools-light-dark-toggle-33eaa513-9,var(--color-green-90))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=positive]:hover{background-color:light-dark(var(--color-green-90),var(--color-green-10))}}.button[data-variant=secondary][data-action=negative]{--csstools-light-dark-toggle-33eaa513-10:var(--csstools-color-scheme--light) var(--color-red-80);color:var(--csstools-light-dark-toggle-33eaa513-10,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=negative]{color:light-dark(var(--color-red-50),var(--color-red-80))}}.button[data-variant=secondary][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-11:var(--csstools-color-scheme--light) var(--color-red-10);background-color:var(--csstools-light-dark-toggle-33eaa513-11,var(--color-red-90))}@supports (color:light-dark(red,red)){.button[data-variant=secondary][data-action=negative]:hover{background-color:light-dark(var(--color-red-90),var(--color-red-10))}}.button[data-variant=plain]:hover{--csstools-light-dark-toggle-33eaa513-12:var(--csstools-color-scheme--light) var(--color-gray-20);background-color:var(--csstools-light-dark-toggle-33eaa513-12,var(--color-gray-80))}@supports (color:light-dark(red,red)){.button[data-variant=plain]:hover{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))}}.button[data-variant=plain][data-action=positive]{--csstools-light-dark-toggle-33eaa513-13:var(--csstools-color-scheme--light) var(--color-green-80);color:var(--csstools-light-dark-toggle-33eaa513-13,var(--color-green-50))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=positive]{color:light-dark(var(--color-green-50),var(--color-green-80))}}.button[data-variant=plain][data-action=positive]:hover{--csstools-light-dark-toggle-33eaa513-14:var(--csstools-color-scheme--light) var(--color-green-10);background-color:var(--csstools-light-dark-toggle-33eaa513-14,var(--color-green-90))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=positive]:hover{background-color:light-dark(var(--color-green-90),var(--color-green-10))}}.button[data-variant=plain][data-action=negative]{--csstools-light-dark-toggle-33eaa513-15:var(--csstools-color-scheme--light) var(--color-red-80);color:var(--csstools-light-dark-toggle-33eaa513-15,var(--color-red-50))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=negative]{color:light-dark(var(--color-red-50),var(--color-red-80))}}.button[data-variant=plain][data-action=negative]:hover{--csstools-light-dark-toggle-33eaa513-16:var(--csstools-color-scheme--light) var(--color-red-10);background-color:var(--csstools-light-dark-toggle-33eaa513-16,var(--color-red-90))}@supports (color:light-dark(red,red)){.button[data-variant=plain][data-action=negative]:hover{background-color:light-dark(var(--color-red-90),var(--color-red-10))}}.button[disabled]{--csstools-light-dark-toggle-33eaa513-17:var(--csstools-color-scheme--light) var(--color-gray-60)!important;color:var(--csstools-light-dark-toggle-33eaa513-17,var(--color-gray-40))!important;cursor:default;--csstools-light-dark-toggle-33eaa513-18:var(--csstools-color-scheme--light) var(--color-gray-20)!important;background-color:var(--csstools-light-dark-toggle-33eaa513-18,var(--color-gray-80))!important;border-color:#0000}@supports (color:light-dark(red,red)){.button[disabled]{background-color:light-dark(var(--color-gray-80),var(--color-gray-20))!important;color:light-dark(var(--color-gray-40),var(--color-gray-60))!important}}.button .icon{display:flex}.button svg{height:1.25em;width:1.25em}.button .label{padding-block:.125em;padding-inline:.0625em}:host{display:inline-flex;vertical-align:middle}.button{box-sizing:border-box;height:100%;width:100%}
    <button
      class="button"
      aria-labelledby="label-6ggibgahxse"
      
      data-variant="plain"
      
      part="button"
    >
      
<span id="label-6ggibgahxse" class="label" hidden part="label"
  ></span
>

    
  </mdn-button>
</mdn-sidebar-filter>
  
  HTTPGuidesOverview of HTTPEvolution of HTTPA typical HTTP sessionHTTP messagesMedia typesCommon typesCompression in HTTPHTTP cachingHTTP authenticationUsing HTTP cookiesRedirections in HTTPConditional requestsRange requestsClient hintsUser-Agent reductionCompression Dictionary Transport
```

Experimental
Network Error Logging
Experimental
Content negotiationDefault Accept valuesBrowser detection using the UA stringConnection management in HTTP/1.xProtocol upgrade mechanismProxy servers and tunnelingProxy Auto-Configuration (PAC) fileSecurity and privacyHTTP ObservatoryPractical implementation guidesPermissions Policy
Experimental
Cross-Origin Resource Policy (CORP)IFrame credentialless
Experimental
Cross-Origin Resource Sharing (CORS)CORS errorsReason: CORS disabledReason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'Reason: CORS header 'Access-Control-Allow-Origin' missingReason: CORS header 'Origin' cannot be addedReason: CORS preflight channel did not succeedReason: CORS request did not succeedReason: CORS request external redirect not allowedReason: CORS request not HTTPReason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '\*'Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channelReason: Multiple CORS header 'Access-Control-Allow-Origin' not allowedContent Security Policy (CSP)Errors and warningsReferenceHTTP headersAcceptAccept-CHAccept-EncodingAccept-LanguageAccept-PatchAccept-PostAccept-RangesAccess-Control-Allow-CredentialsAccess-Control-Allow-HeadersAccess-Control-Allow-MethodsAccess-Control-Allow-OriginAccess-Control-Expose-HeadersAccess-Control-Max-AgeAccess-Control-Request-HeadersAccess-Control-Request-MethodActivate-Storage-AccessAgeAllowAlt-SvcAlt-UsedAttribution-Reporting-Eligible
Deprecated
Attribution-Reporting-Register-Source
Deprecated
Attribution-Reporting-Register-Trigger
Deprecated
AuthorizationAvailable-Dictionary
Experimental
Cache-ControlClear-Site-DataConnectionContent-DigestContent-DispositionContent-DPR
Non-standard

Deprecated
Content-EncodingContent-LanguageContent-LengthContent-LocationContent-RangeContent-Security-PolicyContent-Security-Policy-Report-OnlyContent-TypeCookieCritical-CH
Experimental
Cross-Origin-Embedder-PolicyCross-Origin-Embedder-Policy-Report-OnlyCross-Origin-Opener-PolicyCross-Origin-Resource-PolicyDateDevice-Memory
Non-standard

Deprecated
Dictionary-ID
Experimental
DNT
Non-standard

Deprecated
Downlink
Experimental
DPR
Non-standard

Deprecated
Early-Data
Experimental
ECT
Experimental
ETagExpectExpect-CT
Deprecated
ExpiresForwardedFromHostIdempotency-Key
Experimental
If-MatchIf-Modified-SinceIf-None-MatchIf-RangeIf-Unmodified-SinceIntegrity-PolicyIntegrity-Policy-Report-OnlyKeep-AliveLast-ModifiedLinkLocationMax-ForwardsNEL
Experimental
No-Vary-Search
Experimental
Observe-Browsing-Topics
Non-standard

Deprecated
OriginOrigin-Agent-ClusterPermissions-Policy
Experimental
Pragma
Deprecated
PreferPreference-AppliedPriorityProxy-AuthenticateProxy-AuthorizationRangeRefererReferrer-PolicyRefreshReport-To
Non-standard

Deprecated
Reporting-EndpointsRepr-DigestRetry-AfterRTT
Experimental
Save-Data
Experimental
Sec-Browsing-Topics
Non-standard

Deprecated
Sec-CH-Device-Memory
Experimental
Sec-CH-DPR
Experimental
Sec-CH-Prefers-Color-Scheme
Experimental
Sec-CH-Prefers-Reduced-Motion
Experimental
Sec-CH-Prefers-Reduced-Transparency
Experimental
Sec-CH-UA
Experimental
Sec-CH-UA-Arch
Experimental
Sec-CH-UA-Bitness
Experimental
Sec-CH-UA-Form-Factors
Experimental
Sec-CH-UA-Full-Version
Deprecated
Sec-CH-UA-Full-Version-List
Experimental
Sec-CH-UA-Mobile
Experimental
Sec-CH-UA-Model
Experimental
Sec-CH-UA-Platform
Experimental
Sec-CH-UA-Platform-Version
Experimental
Sec-CH-UA-WoW64
Experimental
Sec-CH-Viewport-Height
Experimental
Sec-CH-Viewport-Width
Experimental
Sec-CH-Width
Experimental
Sec-Fetch-DestSec-Fetch-ModeSec-Fetch-SiteSec-Fetch-Storage-AccessSec-Fetch-UserSec-GPC
Experimental
Sec-Private-State-Token
Experimental
Sec-Private-State-Token-Crypto-Version
Experimental
Sec-Private-State-Token-Lifetime
Experimental
Sec-PurposeSec-Redemption-Record
Experimental
Sec-Speculation-Tags
Experimental
Sec-WebSocket-AcceptSec-WebSocket-ExtensionsSec-WebSocket-KeySec-WebSocket-ProtocolSec-WebSocket-VersionServerServer-TimingService-WorkerService-Worker-AllowedService-Worker-Navigation-PreloadSet-CookieSet-LoginSourceMapSpeculation-Rules
Experimental
Strict-Transport-SecuritySupports-Loading-Mode
Experimental
TETiming-Allow-OriginTk
Non-standard

Deprecated
TrailerTransfer-EncodingUpgradeUpgrade-Insecure-RequestsUse-As-Dictionary
Experimental
User-AgentVaryViaViewport-Width
Non-standard

Deprecated
Want-Content-DigestWant-Repr-DigestWarning
Deprecated
Width
Non-standard

Deprecated
WWW-AuthenticateX-Content-Type-OptionsX-DNS-Prefetch-Control
Non-standard
X-Forwarded-For
Non-standard
X-Forwarded-Host
Non-standard
X-Forwarded-Proto
Non-standard
X-Frame-OptionsX-Permitted-Cross-Domain-Policies
Non-standard
X-Powered-By
Non-standard
X-Robots-Tag
Non-standard
X-XSS-Protection
Non-standard

Deprecated
HTTP request methodsCONNECTDELETEGETHEADOPTIONSPATCHPOSTPUTTRACEHTTP response status codes100 Continue101 Switching Protocols102 Processing103 Early Hints200 OK201 Created202 Accepted203 Non-Authoritative Information204 No Content205 Reset Content206 Partial Content207 Multi-Status208 Already Reported226 IM Used300 Multiple Choices301 Moved Permanently302 Found303 See Other304 Not Modified307 Temporary Redirect308 Permanent Redirect400 Bad Request401 Unauthorized402 Payment Required403 Forbidden404 Not Found405 Method Not Allowed406 Not Acceptable407 Proxy Authentication Required408 Request Timeout409 Conflict410 Gone411 Length Required412 Precondition Failed413 Content Too Large414 URI Too Long415 Unsupported Media Type416 Range Not Satisfiable417 Expectation Failed418 I'm a teapot421 Misdirected Request422 Unprocessable Content423 Locked424 Failed Dependency425 Too Early426 Upgrade Required428 Precondition Required429 Too Many Requests431 Request Header Fields Too Large451 Unavailable For Legal Reasons500 Internal Server Error501 Not Implemented502 Bad Gateway503 Service Unavailable504 Gateway Timeout505 HTTP Version Not Supported506 Variant Also Negotiates507 Insufficient Storage508 Loop Detected510 Not Extended511 Network Authentication RequiredCSP directivesbase-uriblock-all-mixed-content
Deprecated
child-srcconnect-srcdefault-srcfenced-frame-src
Experimental
font-srcform-actionframe-ancestorsframe-srcimg-srcmanifest-srcmedia-srcobject-srcprefetch-src
Non-standard

Deprecated
report-toreport-uri
Deprecated
require-trusted-types-forsandboxscript-srcscript-src-attrscript-src-elemstyle-srcstyle-src-attrstyle-src-elemtrusted-typesupgrade-insecure-requestsworker-srcPermissions-Policy directives
Experimental
accelerometer
Experimental
ambient-light-sensor
Experimental
aria-notify
Experimental
attribution-reporting
Deprecated
autoplay
Experimental
bluetooth
Experimental
browsing-topics
Non-standard

Deprecated
camera
Experimental
captured-surface-control
Experimental
ch-ua-high-entropy-values
Experimental
compute-pressure
Experimental
cross-origin-isolated
Experimental
deferred-fetch
Experimental
deferred-fetch-minimal
Experimental
display-capture
Experimental
encrypted-media
Experimental
fullscreen
Experimental
gamepad
Experimental
geolocation
Experimental
gyroscope
Experimental
hid
Experimental
identity-credentials-get
Experimental
idle-detection
Experimental
language-detector
Experimental
local-fonts
Experimental
magnetometer
Experimental
microphone
Experimental
midi
Experimental
on-device-speech-recognition
Experimental
otp-credentials
Experimental
payment
Experimental
picture-in-picture
Experimental
private-state-token-issuance
Experimental
private-state-token-redemption
Experimental
publickey-credentials-create
Experimental
publickey-credentials-get
Experimental
screen-wake-lock
Experimental
serial
Experimental
speaker-selection
Experimental
storage-access
Experimental
summarizer
Experimental
translator
Experimental
usb
Experimental
web-share
Experimental
window-management
Experimental
xr-spatial-tracking
Experimental
HTTP resources and specifications

```
  <mdn-placement-bottom></mdn-placement-bottom>
  
    
      
        <a
          class="footer__logo"
          href="/"
          aria-label="MDN logo"
          ></a
        >
        
          Your blueprint for a better internet.
        
      

      
        
            
              <a
                href="https://github.com/mdn/"
                target="_blank"
                rel="noopener"
                aria-label="MDN on GitHub"
                data-icon="github"
              >
            
          
            
              <a
                href="https://bsky.app/profile/developer.mozilla.org"
                target="_blank"
                rel="noopener"
                aria-label="MDN on Bluesky"
                data-icon="bluesky"
              >
            
          
            
              <a
                href="https://x.com/mozdevnet"
                target="_blank"
                rel="noopener"
                aria-label="MDN on X"
                data-icon="x"
              >
            
          
            
              <a
                href="https://mastodon.social/@mdn"
                target="_blank"
                rel="noopener"
                aria-label="MDN on Mastodon"
                data-icon="mastodon"
              >
            
          
            
              <a
                href="/en-US/blog/rss.xml"
                target="_blank"
                rel="noopener"
                aria-label="MDN blog RSS feed"
                data-icon="rss"
              >
            
          
      

      
          
            MDN
            
              
                
                    
                      <a
                        href="/en-US/about"
                        class=""
                        target=""
                        rel=""
                      >
                        About
                      
                    
                  
                    
                      <a
                        href="/en-US/blog/"
                        class=""
                        target=""
                        rel=""
                      >
                        Blog
                      
                    
                  
                    
                      <a
                        href="https://www.mozilla.org/en-US/careers/listings/"
                        class="external"
                        target="_blank"
                        rel="noopener"
                      >
                        Mozilla careers
                      
                    
                  
                    
                      <a
                        href="/en-US/advertising"
                        class=""
                        target=""
                        rel=""
                      >
                        Advertise with us
                      
                    
                  
                    
                      <a
                        href="/en-US/plus"
                        class=""
                        target=""
                        rel=""
                      >
                        MDN Plus
                      
                    
                  
                    
                      <a
                        href="https://support.mozilla.org/products/mdn-plus"
                        class="external"
                        target="_blank"
                        rel="noopener"
                      >
                        Product help
                      
                    
                  
              
            
          
        
          
            Contribute
            
              
                
                    
                      <a
                        href="/en-US/community"
                        class=""
                        target=""
                        rel=""
                      >
                        MDN Community
                      
                    
                  
                    
                      <a
                        href="/en-US/docs/MDN/Community"
                        class=""
                        target=""
                        rel=""
                      >
                        Community resources
                      
                    
                  
                    
                      <a
                        href="/en-US/docs/MDN/Writing_guidelines"
                        class=""
                        target=""
                        rel=""
                      >
                        Writing guidelines
                      
                    
                  
                    
                      <a
                        href="/discord"
                        class="external"
                        target="_blank"
                        rel="noopener"
                      >
                        MDN Discord
                      
                    
                  
                    
                      <a
                        href="https://github.com/mdn"
                        class="external"
                        target="_blank"
                        rel="noopener"
                      >
                        MDN on GitHub
                      
                    
                  
              
            
          
        
          
            Developers
            
              
                
                    
                      <a
                        href="/en-US/docs/Web"
                        class=""
                        target=""
                        rel=""
                      >
                        Web technologies
                      
                    
                  
                    
                      <a
                        href="/en-US/docs/Learn_web_development"
                        class=""
                        target=""
                        rel=""
                      >
                        Learn web development
                      
                    
                  
                    
                      <a
                        href="/en-US/docs/MDN/Guides"
                        class=""
                        target=""
                        rel=""
                      >
                        Guides
                      
                    
                  
                    
                      <a
                        href="/en-US/docs/MDN/Tutorials"
                        class=""
                        target=""
                        rel=""
                      >
                        Tutorials
                      
                    
                  
                    
                      <a
                        href="/en-US/docs/Glossary"
                        class=""
                        target=""
                        rel=""
                      >
                        Glossary
                      
                    
                  
                    
                      <a
                        href="https://hacks.mozilla.org/"
                        class="external"
                        target="_blank"
                        rel="noopener"
                      >
                        Hacks blog
                      
                    
                  
              
            
          
        
    

    
      <a
        class="footer__logo"
        href="https://www.mozilla.org/"
        aria-label="Mozilla logo"
        ></a
      >
      
        
            
              <a href="https://www.mozilla.org/privacy/websites/" class="external"
                >Website Privacy Notice</a
              >
            
          
            
              <a href="https://www.mozilla.org/en-US/privacy/websites/data-preferences/" class="external"
                >Telemetry Settings</a
              >
            
          
            
              <a href="https://www.mozilla.org/about/legal/terms/mozilla" class="external"
                >Legal</a
              >
            
          
            
              <a href="https://www.mozilla.org/about/governance/policies/participation/" class="external"
                >Community Participation Guidelines</a
              >
            
          
      
      
        Visit Mozilla Corporation’s not-for-profit parent, the Mozilla Foundation.
        Portions of this content are ©1998–2026 by individual mozilla.org contributors. Content available under a Creative Commons license.
      
    
  

  

  
```
